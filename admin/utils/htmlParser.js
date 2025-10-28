const fs = require('fs').promises;
const path = require('path');

/**
 * Extract Next.js data from HTML file
 * @param {string} filePath - Path to HTML file
 * @returns {Object} - Parsed pageProps data
 */
async function extractJsonFromHtml(filePath) {
  try {
    const html = await fs.readFile(filePath, 'utf8');

    // Find the __NEXT_DATA__ script tag
    const scriptRegex = /<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/s;
    const match = html.match(scriptRegex);

    if (!match || !match[1]) {
      throw new Error('Could not find __NEXT_DATA__ in HTML file');
    }

    // Parse the JSON
    const nextData = JSON.parse(match[1]);

    // Return the full structure so we can modify and reconstruct it
    return {
      fullData: nextData,
      pageProps: nextData.props.pageProps,
      html: html,
      scriptMatch: match[0]
    };
  } catch (error) {
    throw new Error(`Failed to extract JSON from HTML: ${error.message}`);
  }
}

/**
 * Inject updated JSON back into HTML file
 * @param {string} filePath - Path to HTML file
 * @param {Object} originalData - Original extracted data
 * @param {Object} updatedPageProps - Updated pageProps object
 */
async function injectJsonIntoHtml(filePath, originalData, updatedPageProps) {
  try {
    // Update the pageProps in the full data structure
    const updatedFullData = {
      ...originalData.fullData,
      props: {
        ...originalData.fullData.props,
        pageProps: updatedPageProps
      }
    };

    // Convert back to JSON string
    const updatedJson = JSON.stringify(updatedFullData);

    // Create the new script tag
    const newScript = `<script id="__NEXT_DATA__" type="application/json">${updatedJson}</script>`;

    // Replace the old script tag with the new one
    const updatedHtml = originalData.html.replace(originalData.scriptMatch, newScript);

    // Write back to file
    await fs.writeFile(filePath, updatedHtml, 'utf8');

    return true;
  } catch (error) {
    throw new Error(`Failed to inject JSON into HTML: ${error.message}`);
  }
}

/**
 * Validate JSON structure before injecting
 * @param {Object} pageProps - PageProps to validate
 * @returns {boolean} - True if valid
 */
function validatePageProps(pageProps) {
  if (!pageProps || typeof pageProps !== 'object') {
    throw new Error('Invalid pageProps: must be an object');
  }

  if (!pageProps.page || !pageProps.page.content) {
    throw new Error('Invalid pageProps: missing page or page.content');
  }

  if (!Array.isArray(pageProps.page.content)) {
    throw new Error('Invalid pageProps: page.content must be an array');
  }

  // Validate each content block has required fields
  pageProps.page.content.forEach((block, index) => {
    if (!block.__component) {
      throw new Error(`Content block ${index} missing __component field`);
    }
    if (typeof block.id === 'undefined') {
      throw new Error(`Content block ${index} missing id field`);
    }
  });

  return true;
}

module.exports = {
  extractJsonFromHtml,
  injectJsonIntoHtml,
  validatePageProps
};

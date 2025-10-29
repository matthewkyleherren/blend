#!/usr/bin/env python3

import os
import re
import shutil
from pathlib import Path

def fix_image_references():
    """Fix all image references in the project"""
    
    print("Starting comprehensive image reference fix...")
    
    # First, copy images from _next/image to public/imgs
    print("Step 1: Copying images to public/imgs...")
    copy_images_to_public()
    
    # Define file patterns to search
    file_patterns = [
        "*.html",
        "*.js", 
        "*.css",
        "*.ts",
        "*.tsx",
        "*.jsx"
    ]
    
    # Get all files to process
    files_to_process = []
    for pattern in file_patterns:
        files_to_process.extend(Path('.').rglob(pattern))
    
    print(f"Found {len(files_to_process)} files to process")
    
    # Define replacement patterns
    replacement_patterns = [
        # Pattern 1: Direct assets.pebblelife.com URLs
        {
            'pattern': r'https://assets\.pebblelife\.com/([^"\s]+)',
            'replacement': r'/public/imgs/\1',
            'description': 'Direct assets.pebblelife.com URLs'
        },
        # Pattern 2: HTTP assets.pebblelife.com URLs  
        {
            'pattern': r'http://assets\.pebblelife\.com/([^"\s]+)',
            'replacement': r'/public/imgs/\1',
            'description': 'HTTP assets.pebblelife.com URLs'
        },
        # Pattern 3: Next.js image optimization URLs (URL encoded)
        {
            'pattern': r'/_next/image\?url=https%3A%2F%2Fassets\.pebblelife\.com%2F([^&]+)&[^"]*',
            'replacement': r'/public/imgs/\1',
            'description': 'Next.js image optimization URLs (URL encoded)'
        },
        # Pattern 4: Complex encoded URLs in srcSet
        {
            'pattern': r'_next/image/index%EF%B9%96url=https%EF%B9%95%EA%A4%B7%EA%A4%B7assets\.pebblelife\.com%EA%A4%B7([^&]+)&[^"]*',
            'replacement': r'/public/imgs/\1',
            'description': 'Complex encoded URLs in srcSet'
        },
        # Pattern 5: Another pattern for encoded URLs
        {
            'pattern': r'_next/image/index%EF%B9%96url=https%EF%B9%95%EA%A4%B7%EA%A4%B7assets\.pebblelife\.com%EA%A4%B7([^&]+)&[^"]*',
            'replacement': r'/public/imgs/\1',
            'description': 'Another encoded URL pattern'
        }
    ]
    
    # Process each file
    total_replacements = 0
    files_modified = 0
    
    for file_path in files_to_process:
        if process_file(file_path, replacement_patterns):
            files_modified += 1
            print(f"Modified: {file_path}")
    
    print(f"\nProcessing complete!")
    print(f"Files modified: {files_modified}")
    print(f"Total replacements made: {total_replacements}")

def copy_images_to_public():
    """Copy images from _next/image to public/imgs"""
    
    source_dir = Path("_next/image")
    target_dir = Path("public/imgs")
    
    if not source_dir.exists():
        print(f"Source directory {source_dir} not found!")
        return
    
    # Create target directory if it doesn't exist
    target_dir.mkdir(parents=True, exist_ok=True)
    
    # Copy all image files
    image_extensions = {'.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'}
    copied_count = 0
    
    for file_path in source_dir.iterdir():
        if file_path.is_file() and file_path.suffix.lower() in image_extensions:
            target_path = target_dir / file_path.name
            shutil.copy2(file_path, target_path)
            copied_count += 1
    
    print(f"Copied {copied_count} images to public/imgs/")

def process_file(file_path, replacement_patterns):
    """Process a single file and apply all replacement patterns"""
    
    try:
        # Read file content
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        original_content = content
        replacements_made = 0
        
        # Apply each replacement pattern
        for pattern_info in replacement_patterns:
            pattern = pattern_info['pattern']
            replacement = pattern_info['replacement']
            
            # Count matches before replacement
            matches = re.findall(pattern, content)
            if matches:
                print(f"  Found {len(matches)} matches for {pattern_info['description']}")
                content = re.sub(pattern, replacement, content)
                replacements_made += len(matches)
        
        # Write back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

if __name__ == "__main__":
    fix_image_references()

#!/usr/bin/env python3

import os
import re
from urllib.parse import unquote

def create_image_mapping():
    """Create a mapping from old references to new /public/imgs/ paths"""
    
    # Get all image files from _next/image directory
    next_image_dir = "/Users/m/Sites/peb3/pebblelife.com/_next/image"
    public_imgs_dir = "/Users/m/Sites/peb3/pebblelife.com/public/imgs"
    
    if not os.path.exists(next_image_dir):
        print(f"Directory {next_image_dir} not found!")
        return {}
    
    # Get all image files
    image_files = [f for f in os.listdir(next_image_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp', '.gif'))]
    
    mapping = {}
    
    for filename in image_files:
        # Create the new path
        new_path = f"/public/imgs/{filename}"
        
        # Create various old reference patterns that might exist
        base_name = filename
        
        # Pattern 1: Direct assets.pebblelife.com URLs
        mapping[f"https://assets.pebblelife.com/{base_name}"] = new_path
        mapping[f"http://assets.pebblelife.com/{base_name}"] = new_path
        
        # Pattern 2: URL encoded versions
        encoded_name = base_name.replace('_', '%5F').replace('.', '%2E')
        mapping[f"https://assets.pebblelife.com/{encoded_name}"] = new_path
        
        # Pattern 3: Next.js image optimization patterns
        # These are more complex and will be handled by regex replacement
        
        print(f"Mapped: {base_name} -> {new_path}")
    
    return mapping

def get_replacement_patterns():
    """Get regex patterns for complex URL replacements"""
    
    patterns = [
        # Pattern for Next.js image optimization URLs
        {
            'pattern': r'/_next/image\?url=https%3A%2F%2Fassets\.pebblelife\.com%2F([^&]+)&[^"]*',
            'replacement': r'/public/imgs/\1',
            'description': 'Next.js image optimization URLs'
        },
        # Pattern for encoded URLs in srcSet
        {
            'pattern': r'_next/image/index%EF%B9%96url=https%EF%B9%95%EA%A4%B7%EA%A4%B7assets\.pebblelife\.com%EA%A4%B7([^&]+)&[^"]*',
            'replacement': r'/public/imgs/\1',
            'description': 'Encoded URLs in srcSet'
        },
        # Pattern for direct assets.pebblelife.com references
        {
            'pattern': r'https://assets\.pebblelife\.com/([^"]+)',
            'replacement': r'/public/imgs/\1',
            'description': 'Direct assets.pebblelife.com URLs'
        }
    ]
    
    return patterns

if __name__ == "__main__":
    print("Creating image mapping...")
    mapping = create_image_mapping()
    patterns = get_replacement_patterns()
    
    print(f"\nCreated mapping for {len(mapping)} image references")
    print(f"Created {len(patterns)} regex patterns for complex replacements")
    
    # Save mapping to file for reference
    with open('image_mapping.txt', 'w') as f:
        f.write("IMAGE MAPPING\n")
        f.write("=" * 50 + "\n")
        for old, new in mapping.items():
            f.write(f"{old} -> {new}\n")
        
        f.write("\n\nREGEX PATTERNS\n")
        f.write("=" * 50 + "\n")
        for i, pattern in enumerate(patterns, 1):
            f.write(f"{i}. {pattern['description']}\n")
            f.write(f"   Pattern: {pattern['pattern']}\n")
            f.write(f"   Replacement: {pattern['replacement']}\n\n")
    
    print("Mapping saved to image_mapping.txt")

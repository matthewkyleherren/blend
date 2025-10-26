#!/usr/bin/env python3

import os
import re
from collections import defaultdict

def cleanup_duplicates():
    print("Starting cleanup of duplicate images...")
    
    # Dictionary to store files by base name
    files_by_base = defaultdict(list)
    
    # Get all files in current directory
    all_files = [f for f in os.listdir('.') if os.path.isfile(f) and '&w=' in f]
    
    if not all_files:
        print("No files with &w= pattern found.")
        return
    
    print(f"Found {len(all_files)} files with resolution variants")
    
    # Group files by base name
    for filename in all_files:
        # Extract base name (everything before &w=)
        base_name = filename.split('&w=')[0]
        
        # Extract width value
        match = re.search(r'&w=(\d+)&', filename)
        if match:
            width = int(match.group(1))
            files_by_base[base_name].append((width, filename))
    
    print(f"Found {len(files_by_base)} unique base images")
    
    deleted_count = 0
    kept_count = 0
    
    # Process each base name
    for base_name, file_list in files_by_base.items():
        print(f"Processing base: {base_name}")
        
        # Sort by width (resolution) descending
        file_list.sort(key=lambda x: x[0], reverse=True)
        
        # Keep the highest resolution file
        highest_res_file = file_list[0][1]
        print(f"  Keeping (highest res): {highest_res_file}")
        kept_count += 1
        
        # Delete all other files for this base
        for width, filename in file_list[1:]:
            print(f"  Deleting: {filename}")
            try:
                os.remove(filename)
                deleted_count += 1
            except OSError as e:
                print(f"  Error deleting {filename}: {e}")
    
    print(f"\nCleanup complete!")
    print(f"Deleted {deleted_count} duplicate files")
    print(f"Kept {kept_count} highest resolution files")

if __name__ == "__main__":
    cleanup_duplicates()

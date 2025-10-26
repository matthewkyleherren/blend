#!/usr/bin/env python3

import os
import re

def cleanup_filenames():
    print("Starting filename cleanup...")
    
    # Get all files in current directory
    all_files = [f for f in os.listdir('.') if os.path.isfile(f) and '&w=' in f]
    
    if not all_files:
        print("No files with &w= pattern found.")
        return
    
    print(f"Found {len(all_files)} files to rename")
    
    renamed_count = 0
    
    # Process each file
    for filename in all_files:
        # Remove everything from &w onwards
        new_filename = filename.split('&w=')[0]
        
        # If the filename changed, rename it
        if new_filename != filename:
            try:
                os.rename(filename, new_filename)
                print(f"Renamed: {filename} -> {new_filename}")
                renamed_count += 1
            except OSError as e:
                print(f"Error renaming {filename}: {e}")
        else:
            print(f"No change needed: {filename}")
    
    print(f"\nCleanup complete!")
    print(f"Renamed {renamed_count} files")

if __name__ == "__main__":
    cleanup_filenames()

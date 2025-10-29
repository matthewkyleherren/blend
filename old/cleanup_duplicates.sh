#!/bin/bash

echo "Starting cleanup of duplicate images..."

# Get all files with &w= pattern
files_with_w=$(ls *&w=* 2>/dev/null)

if [ -z "$files_with_w" ]; then
    echo "No files with &w= pattern found."
    exit 0
fi

echo "Found files with resolution variants..."

# Create temporary files to track our work
temp_dir="/tmp/image_cleanup_$$"
mkdir -p "$temp_dir"

# Group files by base name and find highest resolution
echo "$files_with_w" | while read file; do
    if [ -f "$file" ]; then
        # Extract base name (everything before &w=)
        base_name=$(echo "$file" | sed 's/&w=.*//')
        
        # Extract width value
        width=$(echo "$file" | sed 's/.*&w=\([0-9]*\)&.*/\1/')
        
        # Store in temp file: base_name:width:filename
        echo "$base_name:$width:$file" >> "$temp_dir/all_files.txt"
    fi
done

# Process each unique base name
cut -d: -f1 "$temp_dir/all_files.txt" | sort -u | while read base_name; do
    echo "Processing base: $base_name"
    
    # Find highest resolution for this base
    highest_width=0
    highest_file=""
    
    grep "^$base_name:" "$temp_dir/all_files.txt" | while IFS=: read -r base width filename; do
        if [ "$width" -gt "$highest_width" ]; then
            highest_width=$width
            highest_file=$filename
        fi
    done
    
    # Get the actual highest file (the while loop creates a subshell, so we need to re-find it)
    highest_width=0
    highest_file=""
    while IFS=: read -r base width filename; do
        if [ "$width" -gt "$highest_width" ]; then
            highest_width=$width
            highest_file=$filename
        fi
    done < <(grep "^$base_name:" "$temp_dir/all_files.txt")
    
    echo "  Highest resolution: $highest_file (width: $highest_width)"
    
    # Delete all other files for this base
    grep "^$base_name:" "$temp_dir/all_files.txt" | while IFS=: read -r base width filename; do
        if [ "$filename" != "$highest_file" ]; then
            echo "  Deleting: $filename"
            rm -f "$filename"
        fi
    done
done

# Cleanup
rm -rf "$temp_dir"

echo "Cleanup complete!"

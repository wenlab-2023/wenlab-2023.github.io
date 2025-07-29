#!/usr/bin/env python3
"""
Generate file listings for dynamic content loading
This script scans the content directories and creates JSON files that list all markdown files
"""

import os
import json
import glob
from pathlib import Path

def generate_file_listing():
    """Generate JSON files listing all markdown files in content directories"""
    
    # Define the content directories to scan
    content_dirs = {
        'news': 'content/news',
        'events': 'content/events', 
        'projects': 'content/projects',
        'people': 'content/people'
    }
    
    # Create the file listings
    file_listings = {}
    
    for content_type, dir_path in content_dirs.items():
        if os.path.exists(dir_path):
            # Get all .md files in the directory
            md_files = glob.glob(os.path.join(dir_path, '*.md'))
            
            # Convert to relative paths and sort
            file_list = [os.path.relpath(f, '.') for f in md_files]
            file_list.sort()
            
            file_listings[content_type] = file_list
        else:
            file_listings[content_type] = []
    
    # Write the JSON file
    with open('content/file_listings.json', 'w') as f:
        json.dump(file_listings, f, indent=2)
    
    print("Generated file listings:")
    for content_type, files in file_listings.items():
        print(f"  {content_type}: {len(files)} files")
        for file in files:
            print(f"    - {file}")

if __name__ == "__main__":
    generate_file_listing() 
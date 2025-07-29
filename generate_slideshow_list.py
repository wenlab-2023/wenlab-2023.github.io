#!/usr/bin/env python3
"""
Generate slideshow image listings for dynamic homepage slideshow
This script scans the slideshow_home directory and creates a JSON file that lists all images
"""

import os
import json
import glob
from pathlib import Path

def generate_slideshow_listing():
    """Generate JSON file listing all images in slideshow_home directory"""
    
    slideshow_dir = 'assets/media/slideshow_home'
    
    if os.path.exists(slideshow_dir):
        # Get all image files in the directory
        image_extensions = ['*.jpg', '*.jpeg', '*.png', '*.gif', '*.webp']
        image_files = []
        
        for ext in image_extensions:
            image_files.extend(glob.glob(os.path.join(slideshow_dir, ext)))
            image_files.extend(glob.glob(os.path.join(slideshow_dir, ext.upper())))
        
        # Convert to relative paths and sort
        image_list = [os.path.relpath(f, '.') for f in image_files]
        image_list.sort()
        
        # Create slideshow data with default titles and descriptions
        slideshow_data = []
        for i, image_path in enumerate(image_list):
            slideshow_data.append({
                "image": image_path,
                "alt": f"WEN Lab Research Image {i+1}",
                "title": f"WEN Lab Research",
                "description": f"Research and innovation in wearable engineering and neural interfaces"
            })
        
        # Write the JSON file
        with open('content/slideshow_images.json', 'w') as f:
            json.dump(slideshow_data, f, indent=2)
        
        print("Generated slideshow listing:")
        print(f"  Found {len(image_list)} images in {slideshow_dir}")
        for i, image in enumerate(image_list):
            print(f"    {i+1}. {image}")
        
        return slideshow_data
    else:
        print(f"Directory {slideshow_dir} not found!")
        return []

if __name__ == "__main__":
    generate_slideshow_listing() 
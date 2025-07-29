@echo off
REM Update content file listings and slideshow for Windows
REM Run this script whenever you add, remove, or rename markdown files or slideshow images

echo 🔄 Updating content file listings...
python generate_file_list.py

echo 🔄 Updating slideshow images...
python generate_slideshow_list.py

echo ✅ File listings and slideshow updated!
echo 📁 Check content/file_listings.json for the current file list
echo 📁 Check content/slideshow_images.json for the current slideshow images
echo 🌐 Refresh your browser to see the changes

pause 
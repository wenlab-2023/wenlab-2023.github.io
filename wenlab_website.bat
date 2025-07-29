@echo off
title WEN Lab Website Manager
color 0A

:menu
cls
echo ========================================
echo    WEN Lab Website Management Tool
echo ========================================
echo.
echo 1. Update content file listings
echo 2. Start local development server
echo 3. View current file listings
echo 4. Check if Python is installed
echo 5. Open website in browser
echo 6. Exit
echo.
set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" goto update_content
if "%choice%"=="2" goto start_server
if "%choice%"=="3" goto view_listings
if "%choice%"=="4" goto check_python
if "%choice%"=="5" goto open_browser
if "%choice%"=="6" goto exit
goto menu

:update_content
cls
echo 🔄 Updating content file listings...
python generate_file_list.py
echo.
echo 🔄 Updating slideshow images...
python generate_slideshow_list.py
echo.
echo ✅ File listings and slideshow updated!
echo 📁 Check content/file_listings.json for the current file list
echo 📁 Check content/slideshow_images.json for the current slideshow images
echo 🌐 Refresh your browser to see the changes
echo.
pause
goto menu

:start_server
cls
echo 🌐 Starting local development server...
echo 📍 Server will be available at: http://localhost:8000
echo ⚠️  Press Ctrl+C to stop the server
echo.
python -m http.server 8000
goto menu

:view_listings
cls
echo 📁 Current file listings:
echo.
if exist content\file_listings.json (
    type content\file_listings.json
) else (
    echo ❌ No file listings found. Run option 1 first.
)
echo.
pause
goto menu

:check_python
cls
echo 🔍 Checking Python installation...
python --version
if %errorlevel% equ 0 (
    echo ✅ Python is installed and working!
) else (
    echo ❌ Python is not installed or not in PATH
    echo 📥 Download Python from: https://python.org
)
echo.
pause
goto menu

:open_browser
cls
echo 🌐 Opening website in default browser...
start http://localhost:8000
echo ✅ Browser opened!
echo.
pause
goto menu

:exit
cls
echo 👋 Thanks for using WEN Lab Website Manager!
echo.
exit 
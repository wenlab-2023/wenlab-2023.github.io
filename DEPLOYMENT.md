# Deployment Guide

This guide will help you deploy the WEN Lab website to GitHub Pages after pushing the cleaned repository.

## 🚀 GitHub Pages Setup

### Step 1: Push to GitHub Repository

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Static HTML website"
   ```

2. **Add remote repository**:
   ```bash
   git remote add origin https://github.com/wenlab-2023/wenlab-2023.github.io.git
   ```

3. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. **Go to your repository** on GitHub: `https://github.com/wenlab-2023/wenlab-2023.github.io`

2. **Navigate to Settings**:
   - Click on the "Settings" tab in your repository

3. **Find Pages section**:
   - Scroll down to "Pages" in the left sidebar
   - Or go directly to: `https://github.com/wenlab-2023/wenlab-2023.github.io/settings/pages`

4. **Configure GitHub Pages**:
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "main" (or "master" if that's your default branch)
   - **Folder**: Select "/ (root)"
   - Click "Save"

### Step 3: Wait for Deployment

- GitHub Pages will automatically build and deploy your site
- This usually takes 2-5 minutes
- You'll see a green checkmark when deployment is complete

### Step 4: Access Your Website

- Your website will be available at: `https://wenlab-2023.github.io`
- The URL format is: `https://[username].github.io/[repository-name]`

## 🔧 Custom Domain Setup (Optional)

If you want to use a custom domain (e.g., `wenlab.ucf.edu`):

### Step 1: Configure Custom Domain

1. **In GitHub Pages settings**:
   - Enter your custom domain in the "Custom domain" field
   - Click "Save"

2. **Add CNAME file**:
   - Create a file named `CNAME` in the root directory
   - Add your domain name to the file (e.g., `wenlab.ucf.edu`)

### Step 2: DNS Configuration

Configure your domain's DNS settings:

```
Type: CNAME
Name: @ (or your subdomain)
Value: wenlab-2023.github.io
```

### Step 3: SSL Certificate

- GitHub Pages automatically provides SSL certificates
- Wait 24-48 hours for SSL to activate
- Your site will be available at `https://yourdomain.com`

## 📊 Monitoring Deployment

### Check Deployment Status

1. **GitHub Actions** (if enabled):
   - Go to "Actions" tab in your repository
   - Monitor deployment progress

2. **Pages Settings**:
   - Check "Pages" section for deployment status
   - Green checkmark = successful deployment

### Common Issues

#### Issue: "Page not found" (404)
**Solutions**:
1. **Check file structure**: Ensure `index.html` is in the root directory
2. **Wait longer**: Deployment can take up to 10 minutes
3. **Check branch**: Ensure you're deploying from the correct branch
4. **Clear cache**: Hard refresh browser (Ctrl+F5)

#### Issue: "Build failed"
**Solutions**:
1. **Check file names**: Ensure no special characters in filenames
2. **File size**: Large files may cause build failures
3. **Syntax errors**: Check for JavaScript or CSS errors
4. **Repository size**: Keep repository under GitHub's limits

## 🔄 Continuous Deployment

### Automatic Updates

Once set up, your website will automatically update when you:

1. **Push changes** to the main branch
2. **Wait 2-5 minutes** for deployment
3. **Refresh** your website to see changes

### Deployment Workflow

```bash
# Make changes to your files
# Test locally first
python -m http.server 8000

# Commit and push changes
git add .
git commit -m "Update website content"
git push origin main

# Wait for automatic deployment
# Check your website in 2-5 minutes
```

## 📱 Testing After Deployment

### Essential Tests

1. **Homepage**: Check if homepage loads correctly
2. **Navigation**: Test all navigation links
3. **Content**: Verify all content displays properly
4. **Images**: Check if images load correctly
5. **Mobile**: Test on mobile devices
6. **Performance**: Check loading speed

### Browser Testing

Test your website in:
- **Chrome**: Latest version
- **Firefox**: Latest version
- **Safari**: Latest version
- **Edge**: Latest version

### Mobile Testing

- **Responsive design**: Test on different screen sizes
- **Touch interactions**: Test on actual mobile devices
- **Loading speed**: Check performance on mobile networks

## 🛠️ Advanced Configuration

### Custom 404 Page

Create a `404.html` file in the root directory:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found - WEN Lab</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="index.html">Return to Homepage</a>
    </div>
</body>
</html>
```

### SEO Optimization

1. **Meta tags**: Ensure all pages have proper meta tags
2. **Sitemap**: Create a `sitemap.xml` file
3. **Robots.txt**: Create a `robots.txt` file
4. **Google Analytics**: Add tracking code if needed

### Performance Optimization

1. **Image compression**: Optimize all images
2. **Minification**: Minify CSS and JavaScript files
3. **Caching**: Set appropriate cache headers
4. **CDN**: Consider using a CDN for faster loading

## 📊 Analytics and Monitoring

### Google Analytics

1. **Create Google Analytics account**
2. **Get tracking code**
3. **Add to your HTML files**:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### GitHub Insights

Monitor your repository:
- **Traffic**: Page views and unique visitors
- **Popular content**: Most viewed pages
- **Referrers**: Where traffic comes from

## 🔒 Security Considerations

### HTTPS

- GitHub Pages automatically provides HTTPS
- Ensure all links use HTTPS
- Check for mixed content warnings

### Content Security

- Don't include sensitive information in your repository
- Use environment variables for any API keys
- Regularly update dependencies

## 📞 Troubleshooting

### Common Deployment Issues

1. **Check GitHub Pages settings**
2. **Verify file structure**
3. **Check for build errors**
4. **Clear browser cache**
5. **Test in incognito mode**

### Getting Help

- **GitHub Pages documentation**: [pages.github.com](https://pages.github.com)
- **GitHub Support**: [support.github.com](https://support.github.com)
- **Community**: GitHub Community forums

## ✅ Deployment Checklist

Before going live:

- [ ] All files pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Custom domain configured (if applicable)
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Images display correctly
- [ ] Mobile responsive design
- [ ] Performance optimized
- [ ] SEO meta tags added
- [ ] Analytics configured (if needed)

---

*This deployment guide covers the essential steps to get your WEN Lab website live on GitHub Pages. For specific issues, refer to the [Troubleshooting Guide](tutorials/troubleshooting.md).* 
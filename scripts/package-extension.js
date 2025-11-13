// Script to package the extension for distribution
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const extensionDir = path.join(__dirname, '../extension');
const distDir = path.join(__dirname, '../extension/dist');
const zipFile = path.join(__dirname, '../extension/rtrvr-extension.zip');

// Files to include
const filesToInclude = [
  'manifest.json',
  'background.js',
  'content.js',
  'popup.html',
  'popup.css',
  'popup.js',
  'README.md',
  'icons'
];

console.log('Packaging extension...');

// Create dist directory
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy files
filesToInclude.forEach(file => {
  const src = path.join(extensionDir, file);
  const dest = path.join(distDir, file);
  
  if (fs.existsSync(src)) {
    if (fs.statSync(src).isDirectory()) {
      // Copy directory recursively
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      copyRecursiveSync(src, dest);
    } else {
      fs.copyFileSync(src, dest);
    }
    console.log(`✓ Copied ${file}`);
  } else {
    console.warn(`⚠ File not found: ${file}`);
  }
});

// Create ZIP file (requires zip command or use a library)
try {
  // Try using zip command if available
  process.chdir(distDir);
  execSync(`zip -r "${zipFile}" .`, { stdio: 'inherit' });
  console.log(`\n✓ Extension packaged: ${zipFile}`);
  console.log(`\nSize: ${(fs.statSync(zipFile).size / 1024).toFixed(2)} KB`);
} catch (error) {
  console.log('\n⚠ ZIP command not available. Please manually zip the dist folder.');
  console.log(`   Folder location: ${distDir}`);
  console.log(`   Or install zip utility and run: cd ${distDir} && zip -r ../rtrvr-extension.zip .`);
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}


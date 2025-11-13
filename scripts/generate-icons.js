// Simple script to generate placeholder icons
// Note: In production, you should use proper icon files
// This is just a placeholder generator

const fs = require('fs');
const path = require('path');

// Create a simple SVG icon
const svgIcon = `<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#9333ea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6366f1;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="20" fill="url(#grad)"/>
  <text x="64" y="80" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="white" text-anchor="middle">R</text>
</svg>`;

const iconDir = path.join(__dirname, '../extension/icons');
if (!fs.existsSync(iconDir)) {
  fs.mkdirSync(iconDir, { recursive: true });
}

// Note: This creates SVG files. For PNG, you'd need a library like sharp or canvas
// For now, users should replace these with actual PNG icons
fs.writeFileSync(path.join(iconDir, 'icon.svg'), svgIcon);

console.log('Icon SVG created. Please convert to PNG format (16x16, 48x48, 128x128)');
console.log('You can use online tools like https://convertio.co/svg-png/');


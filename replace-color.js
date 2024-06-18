const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src');
const searchColor = '#012B7A';
const replaceColor = 'currentColor';

function replaceColorInFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const updatedContent = fileContent.replace(new RegExp(searchColor, 'g'), replaceColor);
  fs.writeFileSync(filePath, updatedContent, 'utf8');
}

function processDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.svg') || fullPath.endsWith('.tsx')) {
      replaceColorInFile(fullPath);
    }
  });
}

processDirectory(directory);
console.log('Color replacement completed.');

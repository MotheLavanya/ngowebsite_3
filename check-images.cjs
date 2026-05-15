const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = './src';
const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?[a-zA-Z0-9=&]+/g;
let urls = new Set();

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.js')) {
      const content = fs.readFileSync(file, 'utf8');
      const matches = content.match(regex);
      if (matches) {
        matches.forEach(m => urls.add(m));
      }
    }
  });
  return results;
}

walk(dir);

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode >= 400 && res.statusCode !== 403) {
        resolve({url, status: res.statusCode, ok: false});
      } else {
        resolve({url, status: res.statusCode, ok: true});
      }
    }).on('error', (e) => {
      resolve({url, error: e.message, ok: false});
    });
  });
}

async function checkAll() {
  console.log(`Found ${urls.size} unique Unsplash URLs. Checking...`);
  const promises = Array.from(urls).map(checkUrl);
  const results = await Promise.all(promises);
  
  const broken = results.filter(r => !r.ok);
  if (broken.length > 0) {
    console.log('BROKEN URLS FOUND:');
    broken.forEach(b => console.log(`${b.status || b.error} -> ${b.url}`));
  } else {
    console.log('All URLs returned 200/302 OK!');
  }
}

checkAll();

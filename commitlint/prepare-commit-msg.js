#!/usr/bin/env node

const fs = require('fs');

const message = fs.readFileSync(process.argv[2], 'utf8').trim();
console.log(message);

process.exit(1)
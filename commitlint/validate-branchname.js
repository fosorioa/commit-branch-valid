#!/usr/bin/env node
const childProcessExec = require('child_process').exec;
const util = require('util');
const exec = util.promisify(childProcessExec);
const Message = require('./Message')

console.log('parameters' + process.argv[2]);

validateBranchName();

async function validateBranchName() {
    const regex = new RegExp('^#[a-z0-9._-]+$')
    const currentBranchname = await exec('git rev-parse --abbrev-ref HEAD');
    if (regex.test(currentBranchname)) {
        process.exit(0);
    }
    console.error("Invalid branch name. Use format: '#<no. ticket>-<description>'")
    process.exit(1);
}


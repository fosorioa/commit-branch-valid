#!/usr/bin/env node
const childProcessExec = require('child_process').exec;
const util = require('util');
const fs = require('fs');

const exec = util.promisify(childProcessExec);

addUsernameToCommitMessage();

async function addUsernameToCommitMessage() {
    const message = fs.readFileSync(process.argv[2], 'utf8').trim();
    const user = getCurrentUser();
    console.log(`#${message}`)
    process.exit(1)
}

async function getCurrentUser() {

    const usernamOutput = await exec('git var GIT_COMMITTER_IDENT');
    if (usernamOutput.stderr) {
        throw new Error(stderr);
    }
    const username = usernamOutput.stdout;
    return username;;
}
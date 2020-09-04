#!/usr/bin/env node
const childProcessExec = require('child_process').exec;
const util = require('util');
const fs = require('fs');

const exec = util.promisify(childProcessExec);

addUsernameToCommitMessage();

async function addUsernameToCommitMessage() {
    const messageFile = process.argv[2];
    const message = fs.readFileSync(messageFile, 'utf8').trim();
    const username = await getCurrentUser();
    console.log()
    fs.writeFileSync(messageFile, `#${message} - ${username}`, { encoding: 'utf-8' });
    process.exit(0)
}

async function getCurrentUser() {

    const usernamOutput = await exec('git var GIT_COMMITTER_IDENT');
    if (usernamOutput.stderr) {
        throw new Error(stderr);
    }
    const username = usernamOutput.stdout;
    return username;;
}
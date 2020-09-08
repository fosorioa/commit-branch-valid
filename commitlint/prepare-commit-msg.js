#!/usr/bin/env node
const childProcessExec = require('child_process').exec;
const util = require('util');
const exec = util.promisify(childProcessExec);
const Message = require('./Message')

addUserToCommitMessage();

async function addUserToCommitMessage() {
    const message = new Message(messageFilename());
    const user = await getUser();
    message.update(`#${message.read()} - ${user.username} <${user.email}>`)
    process.exit(0)
}

function messageFilename() { return process.argv[2]; };

async function getUser() {
    const commiter = await getCommitter();
    const username = commiter.match(/^.*?(?=<)/g);
    const email = commiter.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    return { username: username[0].trim(), email: email[0] };
}

async function getCommitter() {
    const commiter = await exec('git var GIT_COMMITTER_IDENT');
    if (commiter.stderr) {
        throw new Error(stderr);
    }
    return commiter.stdout;
}
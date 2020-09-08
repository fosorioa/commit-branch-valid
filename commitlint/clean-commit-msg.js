#!/usr/bin/env node
const childProcessExec = require('child_process').exec;
const util = require('util');
const exec = util.promisify(childProcessExec);
const Message = require('./Message')

cleanUpCommitMsg();

async function cleanUpCommitMsg() {
    const message = new Message(messageFilename());
    cleanUpMessage(message);
    process.exit(0)
}

function messageFilename() { return process.argv[2]; };

function cleanUpMessage(message) {
    const currentMsgContent = message.read();
    if (currentMsgContent.startsWith('#')) {
        message(currentMsgContent.slice(1));
    }
}
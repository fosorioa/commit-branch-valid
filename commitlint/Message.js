const fs = require('fs');

module.exports = function (filename) {
    this.filename = filename;
    return {
        read: () => fs.readFileSync(this.filename, 'utf8').trim(),
        update: (msg) => fs.writeFileSync(this.filename, msg, { encoding: 'utf-8' })
    }
}

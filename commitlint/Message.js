const fs = require('fs');

export default function Message(filename) {
    this.filename = filename;
    return {
        read: () => fs.readFileSync(this.filename, 'utf8').trim(),
        update: (msg) => fs.writeFileSync(this.filename, msg, { encoding: 'utf-8' })
    }
}

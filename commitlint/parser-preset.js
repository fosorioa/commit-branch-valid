module.exports = {
  parserOpts: {
    headerPattern: /^(\w*)\s(\w*):\s(.*)$/,
    headerCorrespondence: ['ticket', 'type', 'subject']
  }
};
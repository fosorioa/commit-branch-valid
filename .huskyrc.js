const tasks = arr => arr.join(' && ')
 
module.exports = {
  'hooks': {
    'pre-commit': 'echo "hola"',
    'commit-msg': tasks([
        'commitlint -E HUSKY_GIT_PARAMS',
        './commitlint/prepare-commit-msg.js $HUSKY_GIT_PARAMS'
    ])
  }
}
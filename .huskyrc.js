const tasks = arr => arr.join(' && ')
 
module.exports = {
  'hooks': {
    'commit-msg': tasks([
        './commitlint/clean-commit-msg $HUSKY_GIT_PARAMS',
        'commitlint -E HUSKY_GIT_PARAMS',
        './commitlint/prepare-commit-msg.js $HUSKY_GIT_PARAMS'
    ])
  }
}
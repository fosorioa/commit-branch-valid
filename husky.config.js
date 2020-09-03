const tasks = arr => arr.join(' && ')
 
module.exports = {
  'hooks': {
    'commit-msg': tasks([
        //'commitlint -E HUSKY_GIT_PARAMS',
        './commitlint/prepare-commit-msg $HUSKY_GIT_PARAMS',
    ])
  }
}
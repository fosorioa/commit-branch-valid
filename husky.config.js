const tasks = arr => arr.join(' && ')
 
module.exports = {
  'hooks': {
    'commit-msg': tasks([
        //'commitlint -E HUSKY_GIT_PARAMS',
        'echo $HUSKY_GIT_PARAMS',
    ])
  }
}
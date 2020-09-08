# Instalation of commit message and branch name validation with commit-branch-valid

To install in your project:
1. Run: <pre>npm install husky @commitlint/cli --save-dev</pre>
1. Copy folder <b>commitlint</b> to your root folder.
2. Copy files <b>.commitlintrc.js</b> and <b>.huskyrc.js</b> to your root folder.

## How to use it

### To do commits, follow the following format: 
```
#[no. ticket] [type of work] [description]
```

The available types of work are: 
- build
- feat
- fix
- revert
- test

### To push branches, follow the following format: 
```
#[no. ticket]-[description]
```

## To use with no validation add <b>--no-verify</b> parameter to commit and push commands.

```
git commit ... --no-verify

git push ... --no-verify
```

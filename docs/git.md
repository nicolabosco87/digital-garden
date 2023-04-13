# GIT

## useful command list
https://dev.to/g_abud/advanced-git-reference-1o9j


### Undo last commit (from HEAD)

Change the number for resetting more commits
```
git reset --soft HEAD~1
```


### Delete branch
```
git branch -D [BRANCH_NAME]
```

### Check if Pull Rebase
Check for a possible pull --rebase for keeping the git history clean. 
```
git pull --rebase
```

### Reset local branch to origin

Discard local branch position and align it to origin.

```
# On master
git fetch origin
git reset --hard origin/master

# On feature branch
git fetch origin
git reset --hard origin/feature/#01
```

### Rebase onto

`Start point` should be the commit hash of the range start of commits to move/rebase.

```
git rebase --onto [TARGET] [START_POINT]
```


### Tags

Push tags 
```
git push origin --tags
```


## Tips


If # char is on front of commit messages those can be interpreted as comments blocking the rebase process:

Change temporaney `commentChar` with 
```
git -c core.commentChar=@ rebase --continue
```
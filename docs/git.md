# GIT

## Commit Icons

Inspired by: https://gist.github.com/parmentf/035de27d6ed1dce0b36a

| Commit type                | Emoji                                                     |
| :------------------------- | :-------------------------------------------------------- |
| Initial commit             | :tada: `:tada:`                                           |
| Version tag                | :bookmark: `:bookmark:`                                   |
| New feature                | :sparkles: `:sparkles:`                                   |
| Bugfix                     | :bug: `:bug:`                                             |
| Metadata                   | :card_index: `:card_index:`                               |
| Documentation              | :books: `:books:`                                         |
| Documenting source code    | :bulb: `:bulb:`                                           |
| Performance                | :racehorse: `:racehorse:`                                 |
| Cosmetic                   | :lipstick: `:lipstick:`                                   |
| Tests                      | :rotating_light: `:rotating_light:`                       |
| Adding a test              | :white_check_mark: `:white_check_mark:`                   |
| Make a test pass           | :heavy_check_mark: `:heavy_check_mark:`                   |
| General update             | :zap: `:zap:`                                             |
| Improve format/structure   | :art: `:art:`                                             |
| Refactor code              | :hammer: `:hammer:`                                       |
| Removing code/files        | :fire: `:fire:`                                           |
| Continuous Integration     | :green_heart: `:green_heart:`                             |
| Security                   | :lock: `:lock:`                                           |
| Upgrading dependencies     | :arrow_up: `:arrow_up:`                                   |
| Downgrading dependencies   | :arrow_down: `:arrow_down:`                               |
| Lint                       | :shirt: `:shirt:`                                         |
| Translation                | :alien: `:alien:`                                         |
| Text                       | :pencil: `:pencil:`                                       |
| Critical hotfix            | :ambulance: `:ambulance:`                                 |
| Deploying stuff            | :rocket: `:rocket:`                                       |
| Fixing on MacOS            | :apple: `:apple:`                                         |
| Fixing on Linux            | :penguin: `:penguin:`                                     |
| Fixing on Windows          | :checkered_flag: `:checkered_flag:`                       |
| Work in progress           | :construction:  `:construction:`                          |
| Adding CI build system     | :construction_worker: `:construction_worker:`             |
| Analytics or tracking code | :chart_with_upwards_trend: `:chart_with_upwards_trend:`   |
| Removing a dependency      | :heavy_minus_sign: `:heavy_minus_sign:`                   |
| Adding a dependency        | :heavy_plus_sign: `:heavy_plus_sign:`                     |
| Docker                     | :whale: `:whale:`                                         |
| Configuration files        | :wrench: `:wrench:`                                       |
| Package.json in JS         | :package: `:package:`                                     |
| Merging branches           | :twisted_rightwards_arrows: `:twisted_rightwards_arrows:` |
| Bad code / need improv.    | :hankey: `:hankey:`                                       |
| Reverting changes          | :rewind: `:rewind:`                                       |
| Breaking changes           | :boom: `:boom:`                                           |
| Code review changes        | :ok_hand: `:ok_hand:`                                     |
| Accessibility              | :wheelchair: `:wheelchair:`                               |
| Move/rename repository     | :truck: `:truck:`                                         |
| Other                      | [Be creative](http://www.emoji-cheat-sheet.com/)          |

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
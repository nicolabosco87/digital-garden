# GIT

## Commit Icons

Inspired by: https://gist.github.com/parmentf/035de27d6ed1dce0b36a

| Commit type                | Emoji                                            |
| :------------------------- | :----------------------------------------------- |
| Initial commit             | 🎉 `:tada:`                                      |
| Version tag                | 🔖 `:bookmark:`                                  |
| New feature                | ✨ `:sparkles:`                                  |
| Bugfix                     | 🐛 `:bug:`                                       |
| Metadata                   | 📇 `:card_index:`                                |
| Documentation              | 📚 `:books:`                                     |
| Documenting source code    | 💡 `:bulb:`                                      |
| Performance                | 🐎 `:racehorse:`                                 |
| Cosmetic                   | 💄 `:lipstick:`                                  |
| Tests                      | 🚨 `:rotating_light:`                            |
| Adding a test              | ✅ `:white_check_mark:`                          |
| Make a test pass           | ✔️ `:heavy_check_mark:`                          |
| General update             | ⚡ `:zap:`                                       |
| Improve format/structure   | 🎨 `:art:`                                       |
| Refactor code              | 🔨 `:hammer:`                                    |
| Removing code/files        | 🔥 `:fire:`                                      |
| Continuous Integration     | 💚 `:green_heart:`                               |
| Security                   | 🔒 `:lock:`                                      |
| Upgrading dependencies     | ⬆️ `:arrow_up:`                                  |
| Downgrading dependencies   | ⬇️ `:arrow_down:`                                |
| Lint                       | 👕 `:shirt:`                                     |
| Translation                | 👽 `:alien:`                                     |
| Text                       | 📝 `:pencil:`                                    |
| Critical hotfix            | 🚑 `:ambulance:`                                 |
| Deploying stuff            | 🚀 `:rocket:`                                    |
| Fixing on MacOS            | 🍎 `:apple:`                                     |
| Fixing on Linux            | 🐧 `:penguin:`                                   |
| Fixing on Windows          | 🏁 `:checkered_flag:`                            |
| Work in progress           | 🚧 `:construction:`                              |
| Adding CI build system     | 👷 `:construction_worker:`                       |
| Analytics or tracking code | 📈 `:chart_with_upwards_trend:`                  |
| Removing a dependency      | ➖ `:heavy_minus_sign:`                          |
| Adding a dependency        | ➕ `:heavy_plus_sign:`                           |
| Docker                     | 🐳 `:whale:`                                     |
| Configuration files        | 🔧 `:wrench:`                                    |
| Package.json in JS         | 📦 `:package:`                                   |
| Merging branches           | 🔀 `:twisted_rightwards_arrows:`                 |
| Bad code / need improv.    | 💩 `:hankey:`                                    |
| Reverting changes          | ⏪ `:rewind:`                                    |
| Breaking changes           | 💥 `:boom:`                                      |
| Code review changes        | 👌 `:ok_hand:`                                   |
| Accessibility              | ♿ `:wheelchair:`                                |
| Move/rename repository     | 🚚 `:truck:`                                     |
| Other                      | [Be creative](http://www.emoji-cheat-sheet.com/) |

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

#### Delete merged branches

```sh
# List them
git branch --merged develop | grep "feature/"

# Delete them
git branch --merged develop | grep "feature/" | xargs -n 1 -r git branch -d
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

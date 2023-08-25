# Powershell

## Pimp my powershell with Oh My Posh

Inspired from (devaslife)[https://www.youtube.com/watch?v=5-aK2_WwrmM]

### Install tools

- install (Nerd Fonts)[https://github.com/ryanoasis/nerd-fonts]
- setup Windows Terminal to use acrylic and Powershell as default
- install (Scoop)[https://scoop.sh/]

### Prepare Powershell config

- add powershell config in `C:\Users\CURRENT_USER\.config\powershell\user_profile.ps1`
- import powershell config
  - `nvim $PROFILE.CurrentUserCurrentHost`
  - Add to file `. $env:USERPROFILE\.config\powershell\user_profile.ps1`

### Install Oh My Posh

- `Install-Module posh-git

### Install Zoxide

Tool for folder fast jumping
<https://github.com/ajeetdsouza/zoxide>

## Get app infos (like path)

get-command notepad.exe

## Diagnosting

### Check and fix file system

`sfc /scannow`

### Check images

`DISM.exe /Online /Cleanup-Image /RestoreHealth /Source:C:\RepairSource\Windows /LimitAccess`

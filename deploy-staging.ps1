$errorActionPreference='Stop'
$Location = Get-Location

yarn generate -q

Set-Location -Path .\\build

git add .
git commit -m "Update"
git push -f

Set-Location $Location
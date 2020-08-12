# Deploy to staging repo
# (netlify)

# Quit on error code
$errorActionPreference='Stop'

# Remember current location
$Location = Get-Location

"Generating website"
yarn --silent generate -q

# Navigating to build folder
Set-Location -Path .\\build

"Uploading"
git add .
git commit -m "Update" --quiet
git push -f --quiet

# Restoring location
Set-Location $Location

"Done"
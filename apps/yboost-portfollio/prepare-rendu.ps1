$src = Resolve-Path $PSScriptRoot
$projectName = Split-Path $src -Leaf
$parent = Split-Path $src -Parent

$destBase = Join-Path $parent "_rendu"
New-Item -ItemType Directory -Force -Path $destBase | Out-Null

$dest = Join-Path $destBase ("{0}_{1}" -f $projectName, (Get-Date -Format "yyyyMMdd_HHmmss"))
New-Item -ItemType Directory -Force -Path $dest | Out-Null

$excludeDirs = @(
  "node_modules",
  "dist",
  ".git",
  ".idea",
  ".vscode"
)

$excludeFiles = @(
  "Thumbs.db",
  ".DS_Store"
)

$xdArgs = @()
foreach ($d in $excludeDirs) { $xdArgs += @("/XD", (Join-Path $src $d)) }

$xfArgs = @()
foreach ($f in $excludeFiles) { $xfArgs += @("/XF", $f) }

& robocopy $src $dest /E /COPY:DAT /DCOPY:DAT /R:1 /W:1 /NFL /NDL /NJH /NJS /NC /NS $xdArgs $xfArgs | Out-Null

$zipPath = "$dest.zip"
if (Test-Path $zipPath) { Remove-Item -Force $zipPath }
Compress-Archive -Path (Join-Path $dest "*") -DestinationPath $zipPath -Force

Write-Host ""
Write-Host "Rendu prêt : $dest"
Write-Host "ZIP prêt   : $zipPath"
Write-Host ""

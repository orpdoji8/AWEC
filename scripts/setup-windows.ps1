# Run from PowerShell: powershell -ExecutionPolicy Bypass -File .\scripts\setup-windows.ps1
$ErrorActionPreference = 'Stop'

Push-Location (Split-Path -Parent $PSScriptRoot)
try {
    if (-not (Get-Command node.exe -ErrorAction SilentlyContinue)) {
        throw 'Install Node.js 24 for Windows, reopen PowerShell, and run this script again.'
    }
    $nodeVersion = & node.exe --version
    if ($LASTEXITCODE -ne 0 -or $nodeVersion -notmatch '^v24\.') {
        throw "Node.js 24 is required; found $nodeVersion."
    }
    if (-not (Get-Command corepack.cmd -ErrorAction SilentlyContinue)) {
        throw 'Corepack is missing. Install it with npm.cmd install --global corepack, reopen PowerShell, and retry.'
    }
    $projectPackage = Get-Content -LiteralPath package.json -Raw | ConvertFrom-Json
    $expectedPnpm = $projectPackage.packageManager -replace '^pnpm@', ''
    $actualPnpm = & corepack.cmd pnpm --version
    if ($LASTEXITCODE -ne 0 -or $actualPnpm.Trim() -ne $expectedPnpm) {
        throw "Corepack could not activate the project package manager ($expectedPnpm)."
    }
    Write-Host "Using Node $nodeVersion and pnpm $actualPnpm"
    & corepack.cmd pnpm install --frozen-lockfile
    if ($LASTEXITCODE -ne 0) {
        throw 'Dependency installation failed. See the output above.'
    }
    Write-Host 'Setup complete. Start the website with: corepack pnpm dev'
}
finally {
    Pop-Location
}

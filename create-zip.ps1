Add-Type -AssemblyName System.IO.Compression.FileSystem

$source = "e:\websites\sakib-portfolio-react"
$dest   = "e:\websites\sakib-portfolio-react-download.zip"

if (Test-Path $dest) { Remove-Item $dest -Force }

$excludePatterns = @('node_modules', '.git', 'dist')

$zip = [System.IO.Compression.ZipFile]::Open($dest, [System.IO.Compression.ZipArchiveMode]::Create)

$files = Get-ChildItem -Path $source -Recurse -File | Where-Object {
    $skip = $false
    foreach ($pattern in $excludePatterns) {
        if ($_.FullName -like "*\$pattern\*") { $skip = $true; break }
    }
    -not $skip
}

foreach ($file in $files) {
    $relPath = $file.FullName.Substring($source.Length).TrimStart('\')
    Write-Host "Adding: $relPath"
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $file.FullName, $relPath) | Out-Null
}

$zip.Dispose()

$sizeMB = [math]::Round((Get-Item $dest).Length / 1MB, 2)
Write-Host "ZIP created: $dest"
Write-Host "Size: $sizeMB MB"

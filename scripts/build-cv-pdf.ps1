$ErrorActionPreference = "Stop"

$Root = Resolve-Path (Join-Path $PSScriptRoot "..")
$TexFile = Join-Path $Root "public\cv_erika_lira.tex"
$PublicDir = Join-Path $Root "public"
$PdfFile = Join-Path $Root "public\cv_erika_lira.pdf"
$OutDir = Join-Path $Root ".cv-build"

if (-not (Test-Path $TexFile)) {
  throw "LaTeX source not found: $TexFile"
}

if (-not (Test-Path $OutDir)) {
  New-Item -ItemType Directory -Path $OutDir | Out-Null
}

function Clear-AuxFiles {
  Get-ChildItem -Path $OutDir, $PublicDir -File -ErrorAction SilentlyContinue |
    Where-Object { $_.Extension -in ".aux", ".log", ".out", ".toc" } |
    Remove-Item -Force
}

function Copy-Pdf {
  $BuiltPdf = Join-Path $OutDir "cv_erika_lira.pdf"

  if (-not (Test-Path $BuiltPdf)) {
    throw "PDF was not generated."
  }

  Copy-Item -Path $BuiltPdf -Destination $PdfFile -Force
  Clear-AuxFiles
  Write-Host "Generated $PdfFile"
}

$PdfLatex = Get-Command pdflatex -ErrorAction SilentlyContinue

if ($PdfLatex) {
  & $PdfLatex.Source -interaction=nonstopmode -halt-on-error -output-directory="$OutDir" "$TexFile"
  Copy-Pdf
  exit 0
}

$Docker = Get-Command docker -ErrorAction SilentlyContinue

if ($Docker) {
  $PreviousErrorActionPreference = $ErrorActionPreference
  $ErrorActionPreference = "SilentlyContinue"
  docker info *> $null
  $DockerInfoExitCode = $LASTEXITCODE
  $ErrorActionPreference = $PreviousErrorActionPreference

  if ($DockerInfoExitCode -ne 0) {
    throw "No local LaTeX compiler found, and Docker is installed but not running. Start Docker Desktop or install MiKTeX/TeX Live, then run npm run cv:pdf again."
  }

  $RootForDocker = $Root.Path -replace "\\", "/"

  docker run --rm `
    -v "${RootForDocker}:/work" `
    -w /work/public `
    texlive/texlive:latest `
    pdflatex -interaction=nonstopmode -halt-on-error cv_erika_lira.tex

  if ($LASTEXITCODE -ne 0) {
    throw "Docker LaTeX build failed."
  }

  if (-not (Test-Path $PdfFile)) {
    throw "PDF was not generated."
  }

  Clear-AuxFiles
  Write-Host "Generated $PdfFile"
  exit 0
}

throw "No LaTeX compiler found. Install MiKTeX/TeX Live, or start Docker Desktop and run npm run cv:pdf."

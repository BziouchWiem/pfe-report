#!/usr/bin/env node
const { spawnSync } = require("node:child_process");

function isCommandAvailable(command) {
  const result = spawnSync(command, ["--version"], { stdio: "ignore" });
  if (result.error) {
    return false;
  }
  return true;
}

const pdflatexOk = isCommandAvailable("pdflatex");
const bibtexOk = isCommandAvailable("bibtex");

if (pdflatexOk && bibtexOk) {
  console.log("LaTeX is installed: pdflatex and bibtex are available.");
  process.exit(0);
}

console.log("LaTeX is not fully installed.");
if (!pdflatexOk) {
  console.log("- Missing: pdflatex");
}
if (!bibtexOk) {
  console.log("- Missing: bibtex");
}
console.log("");
console.log("Install instructions:");
console.log("Linux (Debian/Ubuntu): sudo apt-get install texlive texlive-latex-extra");
console.log("Linux (Fedora): sudo dnf install texlive-scheme-basic texlive-collection-latex");
console.log("macOS (Homebrew): brew install --cask mactex");
console.log("Windows: Install MiKTeX (https://miktex.org) or TeX Live (https://tug.org/texlive).");
console.log("");
console.log("After installation, reopen your terminal and re-run this check.");
process.exit(1);

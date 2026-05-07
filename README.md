# PFE Report (LaTeX)

This repository provides a clean LaTeX structure for a PFE report, with one file per chapter.

## Structure
- chapters/        Chapter .tex files
- images/          Figures and diagrams
- tables/          Reusable table files
- bibliography/    BibTeX database
- appendices/      Optional appendices
- styles/          Custom .sty files

## Quick start
1. Check LaTeX tools:
   `node check-latex.js`
2. Build the PDF:
   `make`

The output file is main.pdf.

## Manual build (no make)
Run the following commands from the repository root:
```
pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex
```

## Notes
- The entry point is main.tex.
- The document uses enetcom-pfe-report.cls; keep it alongside main.tex.
- Add new chapters under chapters/ and include them in main.tex.
- Add references in bibliography/references.bib and cite them with \cite{key}.
- The title page expects images/logo_isims.png and images/logo_mobelite.png.
- On Windows without make, use the manual build or install make via MSYS2.

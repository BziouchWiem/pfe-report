TEX=main

all: pdf

pdf: $(TEX).tex
	pdflatex -interaction=nonstopmode -halt-on-error $(TEX).tex
	bibtex $(TEX)
	pdflatex -interaction=nonstopmode -halt-on-error $(TEX).tex
	pdflatex -interaction=nonstopmode -halt-on-error $(TEX).tex

clean:
	rm -f *.aux *.log *.toc *.out *.bbl *.blg *.lof *.lot *.fls *.fdb_latexmk *.synctex.gz
	rm -f chapters/*.aux appendices/*.aux

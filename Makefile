default: compile

copy_files:
	mkdir -p _tmp
	mkdir -p _tmp/source
	mkdir -p _tmp/source/font
	mkdir -p _tmp/source/css
	mkdir -p _tmp/source/js
	mkdir -p _tmp/source/images
	mkdir -p _tmp/build
	mkdir -p ./_tmp/styles
	cp *.html ./_tmp/source
	cp -a font/. ./_tmp/source/font/
	cp -a css/. ./_tmp/source/css/
	cp -a js/. ./_tmp/source/js/
	cp -a images/. ./_tmp/source/images/
	cp docs.css ./_tmp/source
	cp README.md ./_tmp/
	cp ./build/book.json ./_tmp
	cp ./build/website.css ./_tmp/styles/
	cp ./build/*.py ./_tmp/build
	cd ./_tmp; \
	cd build && python build.py && cd ../;\
	gitbook install

gitbook_build:
	cd ./_tmp && gitbook build

gitbook_serve:
	cd ./_tmp && gitbook serve

compile: copy_files gitbook_build

serve: copy_files gitbook_serve

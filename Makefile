default:
	echo 'nada'

move_files:
	mkdir _tmp
	mkdir _tmp/source
	mkdir _tmp/source/font
	mkdir _tmp/source/css
	mkdir _tmp/source/js
	mkdir _tmp/source/images
	mkdir _tmp/build
	cp *.html ./_tmp/source
	cp font/* ./_tmp/source/font
	cp css/* ./_tmp/source/css
	cp js/* ./_tmp/source/js
	cp images/* ./_tmp/source/images
	cp docs.css ./_tmp/source
	cp ./build/book.json ./_tmp
	mkdir ./_tmp/styles
	cp ./build/website.css ./_tmp/styles/
	cp ./build/*.py ./_tmp/build

generate_gitbook_from_html:
	cd ./_tmp
	cd build && python build.py && cd ../
	cd ../

serve:
	gitbook serve

install_gitbook:
	cd ./_tmp
	gitbook install
	cd ../

generate_gitbook_files:
	cd ./_tmp
	rm -rf _book && gitbook build
	cd ../

compile:
	move_files
	generate_gitbook_from_html
	install_gitbook
	generate_gitbook_files
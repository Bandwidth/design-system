default:
	echo 'nada'

copy_book:
	cp ./build/book.json .
	mkdir styles
	cp ./build/website.css ./styles/

generate_gitbook_from_html:
	cd build && python build.py && cd ../

serve:
	gitbook serve

install_gitbook:
	gitbook install

generate_gitbook_files:
	rm -rf _book && gitbook build

compile: generate_gitbook_from_html copy_book install_gitbook generate_gitbook_files
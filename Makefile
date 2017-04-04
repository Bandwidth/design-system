default:
	echo 'nada'

copy_book:
	cp ./build/book.json .

generate_gitbook_from_html:
	cd build && python build.py && cd ../

serve:
	gitbook serve

install_gitbook:
	gitbook install

generate_gitbook_files:
	rm -rf _book && gitbook build

move_files:
	cp -fR _book/ out/

compile: generate_gitbook_from_html copy_book install_gitbook generate_gitbook_files move_files
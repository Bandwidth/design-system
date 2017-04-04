default:
	echo 'nada'

gitbook:
	cd build && python build.py && cd ../

serve:
	gitbook serve

preview: gitbook serve
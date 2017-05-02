#!/usr/bin/python

# import modules
import sys
import glob
import pprint
import os
import os.path
import strings
import shutil

abs_script_location = os.path.dirname(os.path.abspath(__file__))

# relative_source_file_path = os.path.join(abs_script_location, '../source/')
relative_source_file_path = '../source/'
relative_source_js_file_path = relative_source_file_path + 'js/'
relative_source_css_file_path = relative_source_file_path + 'css/'
relative_source_font_file_path = relative_source_file_path + 'font/'
relative_source_images_file_path = relative_source_file_path + 'images/'
# relative_md_file_path = os.path.join(abs_script_location, '../elements/')
relative_md_file_path = '../elements/'
relative_md_js_file_path = relative_md_file_path + 'js/'
relative_md_css_file_path = relative_md_file_path + 'css/'
relative_md_font_file_path = relative_md_file_path + 'font/'
relative_md_images_file_path = relative_md_file_path + 'images/'
html_file_ending = '.html'
css_file_ending = '.css'
js_file_ending = '.js'
md_file_ending = '.md'
summary_elements_path = 'elements/'
summary_file_name = 'SUMMARY.md'
relative_summary_file_path = '../' + summary_file_name


pp = pprint.PrettyPrinter(indent=2)


def po(o):
    pp.pprint(o)


# Gather our code in a main() function
def main():
    setup_elements_folder(relative_md_file_path)
    elements = build_index()
    summary = build_summary_md(elements)
    save_summary(summary)
    # shutil.copytree(relative_source_js_file_path, relative_md_js_file_path)
    # shutil.copytree(relative_source_css_file_path, relative_md_css_file_path)
    # shutil.copytree(relative_source_font_file_path,
    #                 relative_md_font_file_path)
    # shutil.copytree(relative_source_images_file_path,
    #                 relative_md_images_file_path)


def add_element(summary, element):
    return summary + '\n' + element


def build_summary_md(elements):
    summary = strings.md_summary_contents
    for element in elements:
        summary = add_element(summary, element.get_summary_link())
    return summary


def save_summary(summary_contents):
        # print(summary_contents)
    with open(relative_summary_file_path, 'w') as summary:
        summary.write(summary_contents)


def xstr(s):
    if s is None:
        return ''
    else:
        return str(s)


def create_elements_folder(directory):
    if not os.path.exists(os.path.dirname(directory)):
        try:
            os.makedirs(os.path.dirname(directory))
        except OSError as exc:
            if exc.errno != errno.EEXIST:
                raise


def delete_elements_folder(directory):
    if not os.path.exists(os.path.dirname(directory)):
        return
    else:
        shutil.rmtree(directory)


def setup_elements_folder(directory):
    delete_elements_folder(directory)
    create_elements_folder(directory)


def build_index():
    elements = []
    html_elements = sorted(glob.glob(relative_source_file_path + '*.html'))
    for html_element in html_elements:
        element = Element(html_element)
        element.save_md_file()
        elements.append(element)
    return elements


class Element:
    """
    each element for the style guide
    """

    def __init__(self, file_location):
        self.file_name = self._get_file_name(file_location)
        self.html_file_path = file_location
        self.css_file_path = self._find_css()
        self.js_file_path = self._find_js()
        self.md_file_path = self._md_file_location()

    # def __repr__(self):
    #   print('Element Name: {}', xstr(self.file_name))
    #   print('HTML File Location: {}', xstr(self.html_file_path))
    #   print('CSS File Location: {}', xstr(self.css_file_path))
    #   print('JS File Location: {}', xstr(self.js_file_path))

    def _get_file_name(self, file_location):
        file = str.replace(file_location, relative_source_file_path, '')
        file = str.replace(file, html_file_ending, '')
        return file

    def _find_css(self):
        css_file_name = self.file_name + css_file_ending
        css_file_path = relative_source_css_file_path + css_file_name
        css_file = glob.glob(css_file_path)
        # po(css_file)
        if not css_file:
            return None
        else:
            return css_file[0]

    def _find_js(self):
        js_file_name = self.file_name + js_file_ending
        js_file_path = relative_source_js_file_path + js_file_name
        js_file = glob.glob(js_file_path)
        # po(js_file)
        if not js_file:
            return None
        else:
            return js_file[0]

    def _md_file_location(self):
        return relative_md_file_path + self.file_name + md_file_ending

    def get_header(self):
        return '# ' + self.file_name.title()

    def get_iframe_body(self):
        return strings.md_body_iframe % self.html_file_path

    def get_md_body(self):
        return strings.md_body_contents % self.html_file_path

    def get_html_code(self):
        return strings.md_html_import % self.html_file_path

    def get_css_code(self):
        if self.css_file_path:
            return strings.md_css_import % self.css_file_path
        else:
            return ''

    def get_js_code(self):
        if self.js_file_path:
            return strings.md_js_import % self.js_file_path
        else:
            return ''

    def get_code_blocks(self):
        return strings.md_code_contents % (self.get_html_code(),
                                           self.get_css_code(),
                                           self.get_js_code())

    def get_md_page(self):
        return strings.md_file_contents % (self.get_header(),
                                           self.get_iframe_body(),
                                           self.get_code_blocks())

    def get_summary_link(self):
        md_file_path = summary_elements_path + self.file_name + md_file_ending
        return strings.md_summary_link % (self.file_name, md_file_path)

    def save_md_file(self):
        md_file_contents = self.get_md_page()
        # print(md_file_contents)
        with open(self.md_file_path, 'w') as md_file:
            md_file.write(md_file_contents)


# Call the main() function to begin the program.
if __name__ == '__main__':
    main()

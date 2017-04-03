md_body_contents = """
{%% raw %%}
<div class='styleguidebody'>
<style>
@import url('https://fonts.googleapis.com/css?family=Overpass:100,100i,200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&subset=latin-ext');
.styleguidebody {
  font-family: "Overpass", sans-serif;
}
</style>
!INCLUDE "%s"

</div>
{%% endraw %%}
"""

md_start_method = """
{%% method %%}
"""

md_end_method = """
{%% endmethod %%}
"""

md_html_import = """
{%% sample lang="html" %%}
[import](%s)
"""

md_css_import = """
{%% sample lang="css" %%}
[import](%s)
"""

md_js_import = """
{%% sample lang="js" %%}
[import](%s)
"""

md_code_contents = """
{%% common %%}
HTML, CSS, & JS
%s
%s
%s
"""

md_summary_contents = """
# Summary

* [Introduction](README.md)
"""

md_summary_link = '* [%s](%s)'

md_file_contents = md_start_method + '%s' + '%s' + '%s' + md_end_method
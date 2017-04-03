
{% method %}
# File-Loader
{% raw %}

<script>
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
</script>

<iframe src="../source/file-loader.html" frameborder="0" scrolling="no" onload="resizeIframe(this)" width="100%"></iframe>
{% endraw %}

{% common %}
HTML, CSS, & JS

{% sample lang="html" %}
[import](../source/file-loader.html)


{% sample lang="css" %}
[import](../source/css/file-loader.css)


{% sample lang="js" %}
[import](../source/js/file-loader.js)


{% endmethod %}

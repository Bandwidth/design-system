
{% method %}
# Tabs
{% raw %}

<script>
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
</script>

<iframe src="../source/tabs.html" frameborder="0" scrolling="no" onload="resizeIframe(this)" width="100%"></iframe>
{% endraw %}

{% common %}
HTML, CSS, & JS

{% sample lang="html" %}
[import](../source/tabs.html)


{% sample lang="css" %}
[import](../source/css/tabs.css)


{% sample lang="js" %}
[import](../source/js/tabs.js)


{% endmethod %}

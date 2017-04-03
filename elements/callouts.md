
{% method %}
# Callouts
{% raw %}

<script>
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
</script>

<iframe src="../source/callouts.html" frameborder="0" scrolling="no" onload="resizeIframe(this)" width="100%"></iframe>
{% endraw %}

{% common %}
HTML, CSS, & JS

{% sample lang="html" %}
[import](../source/callouts.html)


{% sample lang="css" %}
[import](../source/css/callouts.css)


{% sample lang="js" %}
[import](../source/js/callouts.js)


{% endmethod %}

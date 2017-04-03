
{% method %}
# Steps
{% raw %}

<script>
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
</script>

<iframe src="../source/steps.html" frameborder="0" scrolling="no" onload="resizeIframe(this)" width="100%"></iframe>
{% endraw %}

{% common %}
HTML, CSS, & JS

{% sample lang="html" %}
[import](../source/steps.html)


{% sample lang="css" %}
[import](../source/css/steps.css)


{% sample lang="js" %}
[import](../source/js/steps.js)


{% endmethod %}

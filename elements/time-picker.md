
{% method %}
# Time-Picker
{% raw %}

<script>
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
</script>

<iframe src="../source/time-picker.html" frameborder="0" scrolling="no" onload="resizeIframe(this)" width="100%"></iframe>
{% endraw %}

{% common %}
HTML, CSS, & JS

{% sample lang="html" %}
[import](../source/time-picker.html)


{% sample lang="css" %}
[import](../source/css/time-picker.css)


{% sample lang="js" %}
[import](../source/js/time-picker.js)


{% endmethod %}


{% method %}
# Comments
{% raw %}

<script>
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
</script>

<iframe src="../source/comments.html" frameborder="0" scrolling="no" onload="resizeIframe(this)" width="100%"></iframe>
{% endraw %}

{% common %}
HTML, CSS, & JS

{% sample lang="html" %}
[import](../source/comments.html)


{% sample lang="css" %}
[import](../source/css/comments.css)


{% sample lang="js" %}
[import](../source/js/comments.js)


{% endmethod %}

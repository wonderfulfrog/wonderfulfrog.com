---
permalink: /posts/index.html
layout: "base"
---

{% for post in collections.posts %}
{{ post.fileSlug }}
{% endfor %}

Here are all my posts!
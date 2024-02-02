---
permalink: /books/index.html
layout: "base"
---

# Books page

{% for book in collections.books %}
{{ book.data.title }}
{% endfor %}

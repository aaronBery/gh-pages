---
layout: widepage
title: Backbone.js
permalink: /backbonejs/
palette: brightblueyellow
---
{% for category in site.categories %}
  {% if category.first == 'Backbone' %}
  <li>
    <h3><a name="{{ category | first }}">{{ category | first }}</a></h3>
    <ul>
    {% for posts in category %}
      {% for post in posts %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    {% endfor %}
    </ul>
  </li>
  {% endif %}
{% endfor %}

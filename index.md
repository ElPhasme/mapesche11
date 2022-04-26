---
layout: layout.html
title: Mapesche
---

# Mapesche

{% assign tagList = "" %}
{%- for short in audioshorts -%}
  {%- for taggy in short.tags -%}
   {% assign tagList = tagList  | concat: taggy | concat: "," %} 
  {%- endfor -%}
{%- endfor -%}

{% assign tagArray = tagList | split: "," | uniq  %}

{%- for tag in tagArray -%}
  <input type="checkbox" class="tagFilter" id={{ tag | slugify  }} checked> {{ tag }} &nbsp;
{%- endfor -%}

<table style="width: 70%; margin: auto;">
<thead>
    <tr>
      <th>Titre</th>
      <th>Demo</th>
      <th>tags</th>
    </tr>
</thead>
<tbody>
{% for short in audioshorts %}
  {% musicPlayer short.title short.location short.tags %}
{% endfor %}
</tbody>
</table>


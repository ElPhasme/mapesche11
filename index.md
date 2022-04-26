---
layout: layout.html
title: Mapesche
---

# Mapesche

{% ListOfUniqTags audioshorts %}

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


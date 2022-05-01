---
layout: layout.html
title: mapesche
---

# {{ title }}
<div class="tagFilters">
Filter demos: {% tagFilters audioshorts %}
</div>
<div class="tableWrap">
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
</div>

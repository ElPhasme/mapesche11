---
layout: layout.html
title: Mapesche
---

# Mapesche
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


<div class="container">
  <div class="four columns">
    <img src="forest.webp" width="200px">
  </div>
  <div class="four columns">
     &nbsp;
  </div>
  <div class="four columns">
    <img src="mountain.jpg" widht="200px">
  </div>

</div>

---
layout: default
title: Ommadawn - Discografía
---

<div class="post">
    <h1 class="pageTitle">Discografía</h1>
    <div class="album-gallery">
        {% assign albums = site.data.albums %}
        {% for album in albums %}
        <div class="album">
            <img src="{{ album.cover | relative_url }}" alt="{{ album.title }}" />
            <p>{{ album.title }}</p>
        </div>
        {% endfor %}
    </div>
</div>

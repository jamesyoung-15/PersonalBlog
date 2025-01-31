---
title: "Template Blog Post"
slug: "test-post"
description: "This is a template blog post for my own reference on how to add and configure blog posts for my setup."
publishDate: "Dec 10, 2024"
updatedDate: "Jan 31, 2025"
image: { src: "./soyjak-meme-2.png", alt: "Post Thumbnail" }
tags: ["template", "testing"]
---

## About

Blog posts are written in markdown and rendered by Astro. Programmed in Typescript, styled with plain CSS. For now hosted on a S3 bucket and hosted on home server as backup.

## Features

- Responsive design w/ nice blog cards
- Automatically sorted posts by date (latest show up first)
- Filter posts by tags
- Search posts by title
- Pagination

## Own Notes

### Template

Below shows the frontmatter (ie. information about blog at top of file):

```bash
---
title: 'Template Blog Post'
slug: 'test-post'
description: 'This is an example template blog post.'
publishDate: 'Dec 7, 2024'
updatedDate: 'Dec 8, 2024'
image: {
  src: './soyjak-meme-2.png',
  alt: 'Post Thumbnail'
}
tags: ["others", "test"]
draft: false
---
```

Each blog post is in their own directory, and images used in the blog post can be placed in that directory or provide an image URL instead in `src` of `image object`. However for better performance assets should ideally be placed in `public`.

Note that `draft` and `updatedDate` are optional information. See repo `src/component/config.ts` for collection information details.

### Embedding online videos

Embedding online videos can be done with adding `iframe` or `embed` directly to markdown page, eg:

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/EVgt3dMdpxM"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>
```

or

```html
<object
  style="width: 100%; height: 300px"
  data="https://www.youtube.com/embed/EVgt3dMdpxM"
></object>
```

See result below.

<object
  style="width: 100%; height: 300px"
  data="https://www.youtube.com/embed/EVgt3dMdpxM">
</object>

## Possible Todos

- Allow manual sort by date (ie. oldest first, newest first buttons)
- Rewrite CSS to Tailwind (easier usage)

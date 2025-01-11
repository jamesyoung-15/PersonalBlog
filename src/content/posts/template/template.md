---
title: 'Template Blog Post'
slug: 'test-post'
description: 'This is an example template blog post.'
publishDate: 'Dec 10, 2024'
updatedDate: 'Dec 8, 2024'
image: {
  src: './soyjak-meme-2.png',
  alt: 'Post Thumbnail'
}
tags: ["others", "test"]
---

Blog posts are written in markdown and rendered by Astro. Below shows the frontmatter (ie. information about blog at top of file):

``` conf
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

Each blog post is in their own directory, and images used in the blog post can be placed in that directory or provide an image URL instead in `src` of `image object`.

Note that `draft` and `updatedDate` are optional information. See repo `src/component/config.ts` for collection information details.

Blog Todos:
- Post filtering
  - Add tag filtering
  - Sort by date
- Allow search by title
- Define set amount of tags (probably <8 tags)

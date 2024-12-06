import type { CollectionEntry } from "astro:content";

const postFilter = ({ data }: CollectionEntry<"posts">) => {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime();
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
};

export default postFilter;
import {getCollection} from 'astro:content';
/** All public discovery and routes consume the same draft policy. */
export async function getPublicArticles() {
  return (await getCollection('articles', ({data}) => !data.draft)).sort((a,b) => a.data.order-b.data.order);
}

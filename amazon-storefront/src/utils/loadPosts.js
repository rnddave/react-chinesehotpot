import { Buffer } from 'buffer';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getSortedPostsData() {
  const files = import.meta.glob('../posts/*.md', { as: 'raw', eager: true });
  const posts = Object.entries(files).map(([path, content]) => {
    const matterResult = matter(Buffer.from(content));
    const id = path.split('/').pop().replace(/\.md$/, '');
    const processedContent = remark().use(html).processSync(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
      id,
      content: contentHtml,
      ...matterResult.data,
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostData(id) {
  const files = import.meta.glob('../posts/*.md', { as: 'raw', eager: true });
  for (const [path, content] of Object.entries(files)) {
    if (path.includes(id)) {
      const matterResult = matter(Buffer.from(content));
      const processedContent = await remark().use(html).process(matterResult.content);
      const contentHtml = processedContent.toString();
      return {
        id,
        content: contentHtml,
        ...matterResult.data,
      };
    }
  }
}

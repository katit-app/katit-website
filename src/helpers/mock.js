import productJson from './product.json';
import blogJson from './blog.json';
/**

*/
function generateMockProductData(count, tag) {
  const products = productJson;
  const filtered = tag ? products.filter((item) => item.tags.includes(tag)) : products;
  return filtered.slice(0, count);
}

function generateMockBlogData(count) {
  return blogJson.slice(0, count);
}

export { generateMockProductData, generateMockBlogData };

export const buildCategoryPrompt = (name, description) => {
  return `
You are an AI assistant for a sustainable ecommerce platform.

Your job is to analyze a product and generate structured metadata.

Product Name:
${name}

Product Description:
${description}

Choose the primary category from this list:
["Personal Care","Home & Kitchen","Fashion","Office Supplies","Food & Beverages","Lifestyle"]

Return ONLY valid JSON in this format:

{
  "primary_category": "",
  "sub_category": "",
  "seo_tags": [],
  "sustainability_filters": []
}

Rules:
- SEO tags must contain 5 to 10 items
- Sustainability filters can include: plastic-free, compostable, vegan, recycled, biodegradable
- Do not include any explanation text
`;
};
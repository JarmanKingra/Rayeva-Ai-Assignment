// export const buildProposalPrompt = (budget, industry) => {
//   return `
// You are an AI assistant that creates sustainable product proposals for B2B clients.

// Client Industry:
// ${industry}

// Budget:
// ${budget}

// Generate a sustainable product proposal within the provided budget.

// Return ONLY valid JSON in this format:

// {
//   "product_mix": [],
//   "budget_allocation": [],
//   "cost_breakdown": [],
//   "impact_summary": ""
// }

// Rules:
// - Suggest 3 to 5 sustainable products
// - Allocate the budget realistically
// - Impact summary should explain environmental benefit
// - Do not include explanations outside JSON
// `;
// };


export const buildProposalPrompt = (budget, industry) => {
  return `
You are an AI that generates sustainable B2B product proposals.

Industry: ${industry}
Budget: ${budget}

Return ONLY valid JSON in this structure:
Do not include markdown, code blocks, or explanations.

{
  "product_mix": [
    {
      "product_name": "",
      "quantity": 0,
      "unit_price": 0
    }
  ],
  "budget_allocation": [
    {
      "product": "",
      "budget": 0
    }
  ],
  "cost_breakdown": [
    {
      "item": "",
      "cost": 0
    }
  ],
  "impact_summary": ""
}

Rules:
- Product mix must contain 3–5 items
- quantity * unit_price should fit within total budget
- budget_allocation must include product name and allocated budget
- cost_breakdown must list cost categories
- Return ONLY JSON
`;
};
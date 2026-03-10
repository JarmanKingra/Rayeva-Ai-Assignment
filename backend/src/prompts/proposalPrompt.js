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

IMPORTANT RULES:

Budget: ${budget}

0. You MUST ensure that the total of all allocated budgets does NOT exceed ${budget}.

1. The total allocated budget MUST NOT exceed the provided budget.
2. The sum of all budget_allocation values must be <= budget.
3. Ensure quantity * unit_price aligns with allocated budget.
4. If necessary, reduce quantities to stay within the budget.
5. Return ONLY JSON.
`;
};
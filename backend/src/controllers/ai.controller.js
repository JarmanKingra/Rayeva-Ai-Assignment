import { generateCategoryTags } from "../services/ai.service.js";
import { buildCategoryPrompt } from "../prompts/categoryPrompt.js";
import { buildProposalPrompt } from "../prompts/proposalPrompt.js";
import { generateProposal } from "../services/ai.service.js";
import Proposal from "../models/proposal.model.js";
import ProductMeta from "../models/productMeta.model.js";
import AiLog from "../models/aiLog.model.js";

export const generateCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const prompt = buildCategoryPrompt(name, description);

    const aiResponse = await generateCategoryTags(prompt);

    let parsed;

    try {
      parsed = JSON.parse(aiResponse);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "AI returned invalid JSON",
        raw: aiResponse,
      });
    }

    await AiLog.create({
      module: "category-generator",
      prompt,
      response: aiResponse,
    });

    const savedMeta = await ProductMeta.create({
      name,
      description,
      ...parsed,
    });

    res.json({
      success: true,
      data: savedMeta,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "AI generation failed",
    });
  }
};

export const generateB2BProposal = async (req, res) => {
  try {
    const { budget, industry } = req.body;

    if (!budget || !industry) {
      return res.status(400).json({
        success: false,
        message: "Budget and industry are required",
      });
    }

    const prompt = buildProposalPrompt(budget, industry);

    const aiResponse = await generateProposal(prompt);

    let parsed;

    try {
      parsed = JSON.parse(aiResponse);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "AI returned invalid JSON",
        raw: aiResponse,
      });
    }

    const totalAllocated = parsed.budget_allocation?.reduce(
      (sum, item) => sum + (item.budget || 0),
      0,
    );

    if (totalAllocated > budget) {
      parsed.impact_summary +=
        " (Note: Budget allocation exceeded initial estimate. Adjustments may be required.)";
    }

    // Save AI log
    await AiLog.create({
      module: "proposal-generator",
      prompt,
      response: aiResponse,
    });

    // Save proposal
    const savedProposal = await Proposal.create({
      industry,
      budget,
      ...parsed,
    });

    res.json({
      success: true,
      data: savedProposal,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Proposal generation failed",
    });
  }
};

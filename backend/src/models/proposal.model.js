import mongoose from "mongoose";

const proposalSchema = new mongoose.Schema(
  {
    industry: {
      type: String,
      required: true
    },
    budget: {
      type: Number,
      required: true
    },
    product_mix: [
         {
        product_name: String,
        quantity: Number,
        unit_price: Number
      }
    ],
    budget_allocation: [
      {
        product: String,
        budget: Number
      }
    ],
    cost_breakdown: [
      {
        item: String,
        cost: Number
      }
    ],
    impact_summary: {
      type: String
    }
  },
  { timestamps: true }
);


const Proposal = mongoose.model("Proposal", proposalSchema);
export default Proposal;
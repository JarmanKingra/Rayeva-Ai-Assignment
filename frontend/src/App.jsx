import { useState } from "react";
import axios from "axios";

export default function App() {
  const [activeTab, setActiveTab] = useState("product");

  // product states
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [productResult, setProductResult] = useState(null);

  // proposal states
  const [budget, setBudget] = useState("");
  const [industry, setIndustry] = useState("");
  const [proposalResult, setProposalResult] = useState(null);

  const BACKEND = "https://rayeva-ai-assignment-3884.onrender.com";

  const handleProduct = async () => {
    try {
      const res = await axios.post(`${BACKEND}/ai/generate-category`, {
        name,
        description,
      });

      setProductResult(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleProposal = async () => {
    try {
      const res = await axios.post(`${BACKEND}/ai/generate-proposal`, {
        budget: Number(budget),
        industry,
      });

      setProposalResult(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AI Sustainable Commerce Dashboard</h1>

      {/* Toggle Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("product")}>
          Product Generator
        </button>

        <button
          onClick={() => setActiveTab("proposal")}
          style={{ marginLeft: "10px" }}
        >
          B2B Proposal
        </button>
      </div>

      {/* PRODUCT MODULE */}
      {activeTab === "product" && (
        <div>
          <h2>AI Category & Tag Generator</h2>

          <input
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <br />
          <br />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <br />
          <br />

          <button onClick={handleProduct}>Generate</button>

          {productResult && (
            <div style={{ marginTop: "20px" }}>
              <h3>Product Metadata</h3>

              <p>
                <strong>Name:</strong> {productResult.name}
              </p>

              <p>
                <strong>Description:</strong> {productResult.description}
              </p>

              <p>
                <strong>Primary Category:</strong>{" "}
                {productResult.primary_category}
              </p>

              <p>
                <strong>Sub Category:</strong> {productResult.sub_category}
              </p>

              <h4>SEO Tags</h4>
              <ul>
                {productResult.seo_tags?.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>

              <h4>Sustainability Filters</h4>
              <ul>
                {productResult.sustainability_filters?.map((filter, index) => (
                  <li key={index}>{filter}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* PROPOSAL MODULE */}
      {activeTab === "proposal" && (
        <div>
          <h2>AI B2B Proposal Generator</h2>

          <input
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <br />
          <br />

          <input
            placeholder="Industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />

          <br />
          <br />

          <button onClick={handleProposal}>Generate Proposal</button>

          {proposalResult && (
            // <pre>{JSON.stringify(proposalResult, null, 2)}</pre>
            <div style={{ marginTop: "20px" }}>
              <h3>Proposal Summary</h3>

              <p>
                <strong>Industry:</strong> {proposalResult.data.industry}{" "}
                {console.log(proposalResult.data.industry)}
              </p>
              <p>
                <strong>Budget:</strong> ₹{proposalResult.data.budget}
              </p>

              <h4>Product Mix</h4>
              <ul>
                {proposalResult.data.product_mix?.map((item) => (
                  <li key={item._id}>
                    <strong>{item.product_name}</strong> — Qty: {item.quantity},
                    Unit Price: ₹{item.unit_price}
                  </li>
                ))}
              </ul>

              <h4>Budget Allocation</h4>
              <ul>
                {proposalResult.data.budget_allocation?.map((item) => (
                  <li key={item._id}>
                    Product: {item.product} <br />
                    Unit Price: ₹{item.budget}
                  </li>
                ))}
              </ul>

              <h4>Impact Summary</h4>
              <p>{proposalResult.data.impact_summary}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

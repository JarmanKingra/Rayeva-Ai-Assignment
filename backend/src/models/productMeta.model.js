import mongoose from "mongoose";

const productMetaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    primary_category: {
      type: String
    },
    sub_category: {
      type: String
    },
    seo_tags: [
      {
        type: String
      }
    ],
    sustainability_filters: [
      {
        type: String
      }
    ]
  },
  { timestamps: true }
);

const ProductMeta = mongoose.model("ProductMeta", productMetaSchema);
export default ProductMeta;
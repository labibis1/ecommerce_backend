const { default: mongoose, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },

    sellingprice:{
        type: Number,
        require: true,
    },
    discountprice:{
        type: Number,
        // require: false,
    },

    stock: {
        type: Number,
        require: true,
    },

    color: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("category", productSchema);

const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production", // Use 'development' for readable output
  entry: "./src/index.js", // Your main JS file
  output: {
    filename: "content.js", // The bundled output file
    path: path.resolve(__dirname, "dist"), // Output folder
  },
  resolve: {
    extensions: [".js"], // File types to bundle together
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  performance: {
    hints: false, // Turns off size warnings for entry points
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Use babel-loader for JS files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // Use babel preset to ensure modern JS works
          },
        },
      },
      {
        test: /\.css$/i, // Add this to handle CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

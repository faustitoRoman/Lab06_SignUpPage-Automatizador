const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  // The entry point file described above
  entry: "./src/index.js",
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [new Dotenv()],
};

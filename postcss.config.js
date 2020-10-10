const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.js"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.js"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};

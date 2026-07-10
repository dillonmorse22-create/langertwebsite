module.exports = function (eleventyConfig) {
  ["404.html", "privacy.html", "robots.txt", "sitemap.xml", "og-image.png", "welcome.mp4", "admin", "uploads"]
    .forEach(p => eleventyConfig.addPassthroughCopy("src/" + p));
  return {
    dir: { input: "src", output: "_site" },
    templateFormats: ["njk"]
  };
};

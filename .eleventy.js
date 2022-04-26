const yaml = require("js-yaml");
const slugify = require("slugify");

module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("scripts");

  eleventyConfig.addShortcode("musicPlayer", function(name, path, tags) {
    return `<tr id='tr-${slugify(name)}' data-tags='${slugify(tags.join("-"))}'>
              <td>${name}</td>
              <td><audio controls><source src="${path}" type="audio/mpeg"></audio></td>
              <td>${tags}</td>
            </tr>`;
  });

  eleventyConfig.addShortcode("ListOfUniqTags", function(YAMLfile) {
    return ``;
  };

};

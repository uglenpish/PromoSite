import fs from "node:fs";
import autoprefixer from "autoprefixer";
import postcssAdvancedVariables from "postcss-advanced-variables";
import postcssEasyImport from "postcss-easy-import";
import postcssInlineSvg from "postcss-inline-svg";
import postcssNested from "postcss-nested";
import postcssPxtorem from "postcss-pxtorem";
import postcssRgb from "postcss-rgb";

export default {
  syntax: "postcss-scss",
  parser: "postcss-scss",
  plugins: [
    postcssEasyImport({
      extensions: ".pcss"
    }),
    autoprefixer({
      cascade: false
    }),
    postcssAdvancedVariables({
      variables: JSON.parse(fs.readFileSync("./src/styles/variables.json", "utf-8"))
    }),
    postcssNested(),
    postcssRgb(),
    postcssInlineSvg({
      removeFill: true,
      path: "./src/images/icons"
    }),
    postcssPxtorem({
      rootValue: 16,
      propList: ["*", "!*border*"],
      selectorBlackList: [/^html$/]
    })
  ]
};

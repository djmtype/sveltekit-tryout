// const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');
const postcssPresetEnv = require("postcss-preset-env");
const postcssGlobalData = require('@csstools/postcss-global-data');
// const postcssDesignTokens = require('@csstools/postcss-design-tokens');
const tokencss = require('@tokencss/postcss');

// const mode = process.env.NODE_ENV;
// const dev = mode === 'development';

const config = {
	plugins: [
		postcssGlobalData({
      files: ["./src/lib/styles/common/queries.css"]
    }),
    
    // postcssDesignTokens({ valueFunctionName: 'token' }),
		postcssPresetEnv({
      stage: 0,
      features: {
        "logical-properties-and-values": false,
        "prefers-color-scheme-query": false,
        "gap-properties": false,
        "custom-properties": false,
        "dir-pseudo-class": false,
        "focus-within-pseudo-class": false,
        "focus-visible-pseudo-class": false,
        "color-functional-notation": false,
        // 'lab-function': {preserve: true},
        // "custom-media-queries": {
        //   importFrom: ["./src/styles/common/queries.css"],
        // },
      },
     
      // autoprefixer: true,
    }),
    tokencss()
		
		// autoprefixer({
		// 	cascade: true,
		// }),
		// !dev &&
		// 	cssnano({
		// 		preset: 'advanced',
		// 	}),
	],
};

module.exports = config;
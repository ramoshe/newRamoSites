// const postcss = require('postcss');
import postcssCustomMedia from 'postcss-custom-media';

// postcss([
//    postcssCustomMedia(/* pluginOptions */)
// ]).process(YOUR_CSS /*, processOptions */);

export default {
	plugins: [postcssCustomMedia()],
};
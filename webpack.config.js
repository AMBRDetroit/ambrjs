var webpack = require('webpack');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  devtool : "eval-source-map", // development sourcemap
  entry: {
    app: './ambrjs.js',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: 'ambrjs.js',
  },
  module : {
	  rules : [
		 {
			 test : "/\.js$/", // all js files
			 exclude : /node_modules/,
			 use : [{
				 loader : "babel-loader",
				 options : {
					 presets : [
						[
							"env", {
								"targets": {
									"browsers": [ "last 2 versions" ]
								},
								"useBuiltIns" : true,
								"modules" : false
							}
						]
					] 
				 }
			 }]
		 } 
	  ]
  }
};

if(process.env.NODE_ENV === "production") {
	// update the filename for production build
	config.output.filename = "ambrjs.min.js";
	// No sourcemap for production
	config.devtool = ""; 
}

module.exports = config;
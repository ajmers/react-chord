// 'production' build is the build deployed to github pages
const NODE_ENV = process.env.NODE_ENV;
const isDebugBuild = NODE_ENV != 'production';

export default {
    entry: './example/index.jsx',
	output: {
		path: './example',
		filename: 'build.js'
	},
	node: {
		__dirname: true,
		__filename: true
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: isDebugBuild ? {
				presets: ['react-hmre']
			} : undefined
		}, {
			test: /\.json$/,
			loader: 'json'
		},
        {
            test: /\.(jpe?g|png|gif|svg|ico|cur)$/i,
            loader: 'file-loader?name=images/[name].[ext]',
        },
         {
            test    : /(\.scss|\.css)$/,
            include : /(node_modules)\/react-toolbox/,
            loaders : [
                require.resolve('style-loader'),
                require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                require.resolve('sass-loader') + '?sourceMap']
         },
         {
            test    : /(\.scss|\.css)$/,
            exclude: /(node_modules)\/react-toolbox/,
            loaders : [ 'style-loader', 'css-loader', 'sass-loader' ]
         }
        ]
	}
};

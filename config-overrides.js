module.exports = function override(config, env) {
	const sassLoader = {
		test: /\.s[ac]ss$/i,
		use: [{
			loader: "sass-loader",
			options: {
				sassOptions: {
				includePaths: [
					"./src/styles/"
				],
				},
			},
		}]
	}

	config.module.rules.push(sassLoader);
    return config
}
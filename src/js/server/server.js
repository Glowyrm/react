const express = require( 'express');
const webpack = require( 'webpack' );
const webpackDevMiddleware = require( 'webpack-dev-middleware' );

const app = express();
const config = require( '../../../webpack.config' );
const compiler = webpack( config );

/*
	Tell express to use the webpack-dev-middleware with the 
	properties from the webpack.config.js file.
*/
app.use(
	webpackDevMiddleware( compiler, {
		publicPath: config.output.publicPath,
	} )
);

/*
	The folder location that Express will serve static resources from 
	set to "./dist" in webpack config.output.path
*/
app.use(
	express.static( config.output.path )
);

// Serve the files on port 3000.
app.listen( 3000, function () {
	console.log( 'Dev-server listening on port 3000!\n' );
} );
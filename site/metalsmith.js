var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var branch = require('metalsmith-branch');
var htmlToSlides = require('./htmlToSlides.js');
var changed = require('metalsmith-changed');

console.log("Starting..."); // eslint-disable-line no-console
Metalsmith(__dirname)
	.clean(false) // don't destroy `build` dir every time
	.use(changed()) // only write changed files
	.source(__dirname + "/src")
	.destination(__dirname + "/build")
	.use(markdown())
	// class slides
	.use(branch()
		.pattern("slides/**")
		.use(htmlToSlides())
		.use(layouts({
			engine: "jade",
			default: "slides.jade",
			directory: "layouts"
		}))
	)
	.build(function(err) {
		if (err) throw err;
		console.log("Finished!"); // eslint-disable-line no-console
	});
module.exports = {
	options: {
		atBegin: true,
		interrupt: true
	},
	all: {
		files: ['+(src|test|grunt|umd)/**/*.js', '*.js'],
		tasks: ['build:browser', 'karma:watch:run']
	}
};

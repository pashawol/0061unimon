'use strict';

global.$ = {
	postcss: require('gulp-postcss'),
	//sass: require('gulp-sass')(require('sass')),
	cssnano: require('cssnano'),
	nested: require('postcss-nested'),
	autoprefixer: require('autoprefixer'),
	gcmq: require('gulp-group-css-media-queries'),
	rename: require('gulp-rename'),
	//sassGlob: require('gulp-sass-glob'),
	public: 'public',
	sourse: 'sourse',

	gulp: require('gulp'), 

	bourbon: require('node-bourbon'),
	cleanCSS: require('gulp-clean-css'),
	gulpif: require('gulp-if'), 
	envDev: false,
	gp: require('gulp-load-plugins' )(),
	browserSync: require('browser-sync').create(),

	path: {
		tasks: require('./gulp/config/tasks.js'),
	}
}
$.path.tasks.forEach(function (taskPath){
		require(taskPath)();
	});
		
		 
$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('svg','pug',
		//'scripts:lib',
		'scripts','sass'),
	$.gulp.parallel('watch','serv')
	));

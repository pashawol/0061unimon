module.exports = function (){
	 // Your "watch" task
$.gulp.task('watch', function ()  { 
	$.gulp.watch('sourse/pug/**/*.pug',$.gulp.series('pug')); 
	$.gulp.watch(['sourse/**/*.css', 'sourse/**/*.scss', 'sourse/**/*.sass'],$.gulp.series('sass')); 
	$.gulp.watch('sourse/svg/*.svg', $.gulp.series('svg'));
	$.gulp.watch('sourse/js/common.js', $.gulp.series( 'scripts')); 
	$.gulp.watch('sourse/js/scripts.min.js', $.gulp.series('scripts:lib')); 
});
  
}
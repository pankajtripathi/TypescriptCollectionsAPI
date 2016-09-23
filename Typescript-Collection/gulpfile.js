var gulp = require("gulp");
var istanbul = require("gulp-istanbul");
var mocha = require("gulp-mocha");
var tsc = require("typescript");
var typescript = require("gulp-typescript");
var uglify = require("gulp-uglify");

var tsconfig = () => typescript.createProject("tsconfig.json", { typescript: tsc });

gulp.task("compile", () => {
	return gulp.src(["./src/**/*.ts", "!./src/**/*.d.ts"], { base: "./" })
		.pipe(typescript(tsconfig()))
		.pipe(gulp.dest("./build"));
});

gulp.task("compile-test", () => {
	return gulp.src(["./test/**/*.ts", "!./test/**/*.d.ts"], { base: "./" })
		.pipe(typescript(tsconfig()))
		.pipe(uglify())
		.pipe(gulp.dest("./build"));
});

gulp.task("test", ["compile", "compile-test"], () => {
	return gulp.src(["./build/test/**/*.js"])
		.pipe(mocha());
});

gulp.task("test-coverage", ["compile", "compile-test"], () => {
	return gulp.src(["./build/src/**/*.js"])
		.pipe(istanbul())
		.pipe(istanbul.hookRequire())
		.on("end", () => {
			return gulp.src(["./build/test/**/*.js"])
				.pipe(mocha())
				.pipe(istanbul.writeReports());
		});
});

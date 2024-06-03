const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const del = require('del');

const paths = {
    styles: {
        src: 'src/assets/sass/**/*.scss',
        dest: 'public/css'
    },
    scripts: {
        src: 'src/assets/js/**/*.js',
        dest: 'public/js'
    },
    images: {
        src: 'src/assets/img/**/*.{jpg,jpeg,png,svg,gif}',
        dest: 'public/img'
    },
    html: {
        src: 'src/**/*.html'
    }
};

// Limpar a pasta de destino
function clean() {
    return del(['public']);
}

// Compilar SCSS para CSS
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// Minificar e renomear JavaScript
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

// Otimizar imagens
function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

// Iniciar um servidor de desenvolvimento e assistir a mudanças
function serve() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.html.src).on('change', browserSync.reload);
}

// Tarefas
const build = gulp.series(clean, gulp.parallel(styles, scripts, images));
const watch = gulp.series(build, serve);

// Exportar tarefas
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.default = watch;

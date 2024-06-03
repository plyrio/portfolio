import gulp from 'gulp';
import sass from 'gulp-sass';
import nodeSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import browserSync from 'browser-sync';
import del from 'del';

const sassCompiler = sass(nodeSass);
const server = browserSync.create();

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
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(server.stream());
}

// Minificar e renomear JavaScript
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(server.stream());
}

// Otimizar imagens
function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

// Iniciar um servidor de desenvolvimento e assistir a mudanças
function serve() {
    server.init({
        server: {
            baseDir: 'src'
        }
    });

    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.html.src).on('change', server.reload);
}

// Tarefas
const build = gulp.series(clean, gulp.parallel(styles, scripts, images));
const watch = gulp.series(build, serve);

// Exportar tarefas
export { clean, styles, scripts, images, build, watch as default };

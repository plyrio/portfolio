import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import browserSync from 'browser-sync';
import { deleteAsync } from 'del';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import ghPages from 'gh-pages';

const sass = gulpSass(dartSass);
const bs = browserSync.create();

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
                                                                                    src: 'src/**/*.html',
                                                                                            dest: 'public'
                                                                                                }
                                                                                                };

                                                                                                // Limpar a pasta de destino
                                                                                                export function clean() {
                                                                                                    return deleteAsync(['public']);
                                                                                                    }

                                                                                                    // Compilar SCSS para CSS
                                                                                                    export function styles() {
                                                                                                        return gulp.src(paths.styles.src)
                                                                                                                .pipe(sass().on('error', sass.logError))
                                                                                                                        .pipe(autoprefixer())
                                                                                                                                .pipe(cleanCSS())
                                                                                                                                        .pipe(rename('style.min.css'))
                                                                                                                                                .pipe(gulp.dest(paths.styles.dest))
                                                                                                                                                        .pipe(bs.stream());
                                                                                                                                                        }

                                                                                                                                                        // Minificar e renomear JavaScript
                                                                                                                                                        export function scripts() {
                                                                                                                                                            return gulp.src(paths.scripts.src)
                                                                                                                                                                    .pipe(uglify())
                                                                                                                                                                            .pipe(rename({ suffix: '.min' }))
                                                                                                                                                                                    .pipe(gulp.dest(paths.scripts.dest))
                                                                                                                                                                                            .pipe(bs.stream());
                                                                                                                                                                                            }

                                                                                                                                                                                            // Otimizar imagens
                                                                                                                                                                                            export function images() {
                                                                                                                                                                                                return gulp.src(paths.images.src)
                                                                                                                                                                                                        .pipe(imagemin())
                                                                                                                                                                                                                .pipe(gulp.dest(paths.images.dest));
                                                                                                                                                                                                                }

                                                                                                                                                                                                                // Copiar HTML para a pasta de destino
                                                                                                                                                                                                                export function html() {
                                                                                                                                                                                                                    return gulp.src(paths.html.src)
                                                                                                                                                                                                                            .pipe(gulp.dest(paths.html.dest))
                                                                                                                                                                                                                                    .pipe(bs.stream());
                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                    // Iniciar um servidor de desenvolvimento e assistir a mudanças
                                                                                                                                                                                                                                    export function serve() {
                                                                                                                                                                                                                                        bs.init({
                                                                                                                                                                                                                                                server: {
                                                                                                                                                                                                                                                            baseDir: 'public'
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                            gulp.watch(paths.styles.src, styles);
                                                                                                                                                                                                                                                                                gulp.watch(paths.scripts.src, scripts);
                                                                                                                                                                                                                                                                                    gulp.watch(paths.images.src, images);
                                                                                                                                                                                                                                                                                        gulp.watch(paths.html.src, html).on('change', bs.reload);
                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                        // Tarefa para construir o projeto
                                                                                                                                                                                                                                                                                        export const build = gulp.series(clean, gulp.parallel(styles, scripts, images, html));

                                                                                                                                                                                                                                                                                        // Tarefa padrão para iniciar o servidor e assistir a mudanças
                                                                                                                                                                                                                                                                                        export const watch = gulp.series(build, serve);

                                                                                                                                                                                                                                                                                        // Tarefa para deploy no GitHub Pages
                                                                                                                                                                                                                                                                                        export function deploy(done) {
                                                                                                                                                                                                                                                                                            ghPages.publish('public', function(err) {
                                                                                                                                                                                                                                                                                                    if (err) {
                                                                                                                                                                                                                                                                                                                console.error('Deploy failed', err);
                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                    console.log('Deploy successful');
                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                    done();
                                                                                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                        // Exportar tarefas padrão
                                                                                                                                                                                                                                                                                                                                                        export default watch;

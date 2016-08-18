module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            all: ["public/static/js/*", "public/static/css/*", "target/css/*"],
            cssonly: ["public/static/css/*", "target/css/*"],
            jsonly: ["public/static/js/*"]
        },
        jshint: {
            options: {
                reporter: require("jshint-stylish")
            },
            build: ["Gruntfile.js", "static/**/*.js"]
        },
        uglify: {
            build: {
                files: {
                    "public/static/js/phototree.min.js": ["static/js/phototree.js"]
                }
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: "static/scss",
                    cssDir: "target/css"
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    "public/static/css/common.min.css": "target/css/common.css",
                    "public/static/css/phototree.min.css": "target/css/phototree.css"
                }
            }
        },
        watch: {
            scripts: {
                files: ["static/**/*.js"],
                tasks: ['clean:jsonly', 'jshint', 'uglify']
            },
            css: {
                files: ["static/**/*.scss"],
                tasks: ["clean:cssonly", "compass", "cssmin"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-cssmin");

    grunt.registerTask("default", ["clean:all", "jshint", "uglify", "compass", "cssmin", "watch"]);
};
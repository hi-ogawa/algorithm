module.exports = function(grunt) {

    require('jit-grunt')(grunt);

    grunt.initConfig({

        watch: {

            jasmine: {
                files: ["test/*.js"],
                tasks: ["jasmine:default"]
            },

            ts: {
                files: ["src/*.ts"],
                tasks: ["ts:default", "jasmine:default"]
            }
        },


        ts: {
            default: {
                src: ["src/*.ts"],
                out: "out.js",
                options: {
                    noImplicitAny: true,
                    sourceMap: false
                }
            }
        },

        jasmine: {
            default: {
                src: "out.js",
                options: {
                    specs: "test/*.js"
                }
            }
        }

    });
    grunt.registerTask("default", ["typescript:default"])
}

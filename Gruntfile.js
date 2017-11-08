/**
 * 1、
 * Grunt 0.4.x 必须配合Node.js >= 0.8.0版本使用。
 * 在安装 Grunt 前，请确保当前环境中所安装的 npm 已经是最新版本，执行 npm update -g npm 指令进行
 * 2、
 * 一般需要在你的项目中添加两份文件：package.json 和 Gruntfile。
 * package.json: 此文件被npm用于存储项目的元数据，以便将此项目发布为npm模块。你可以在此文件中列出项目依赖的grunt和Grunt插件，放置于devDependencies配置段内。
 * Gruntfile: 此文件被命名为 Gruntfile.js 或 Gruntfile.coffee，用来配置或定义任务（task）并加载Grunt插件的。 此文档中提到的 Gruntfile 其实说的是一个文件，文件名是 Gruntfile.js 或 Gruntfile.coffee
 * 3、
 * package.json应当放置于项目的根目录中，与Gruntfile在同一目录中，并且应该与项目的源代码一起被提交。
 * 
 * 
 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/**/*.js',
                dest: 'build/lib.min.js'
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。本身会把js文件压缩合并成一个文件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 加载包含"concat" 任务。会把相关的js文件合并成一个文件。
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask("test", ['uglify']); // 直接执行 grunt test
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify']);

};
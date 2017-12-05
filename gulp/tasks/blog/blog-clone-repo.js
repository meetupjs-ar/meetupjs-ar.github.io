const git = require('gulp-git')

module.exports = function(config) {
    return function() {
        git.clone(config.blog.srcRepo, { args: config.blog.tempDir }, function(error) {
            if (error) throw error
        })
    }
}

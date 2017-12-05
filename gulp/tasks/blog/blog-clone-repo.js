const git = require('gulp-git')

module.exports = function(config) {
    const options = { args: config.blog.tempDir }

    return function(done) {
        return git.clone(config.blog.srcRepo, options, function(error) {
            if (error) throw error
            done()
        })
    }
}

const { getPostsForUser, getUserById } = require('./api')

const showPostsForCurrentUser = (userId, cb) => {
  getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
        ${post.title}
        ${post.body}
        ${post.createdBy}
        `
    })
    cb(postTemplates)
  })
}

const showUserProfile = (userId, cb) => {
  const getUserById(userId, user => {
    const profile = `
        ${user.name}
    `
    cb(user)
  })
}

modules.exports = {
  showPostsForCurrentUser,
  showUserProfile
}

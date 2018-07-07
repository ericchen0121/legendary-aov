import Tweet from './data/models/social/Tweet'
import sequelize from 'sequelize'

let twitHandleStream = (data) => {
  // Tweet.findOne({twid: data['id']})
  // Construct a new tweet object
  var tweet = {
    twid: data['id'],
    active: false,
    author: data['user']['name'],
    avatar: data['user']['profile_image_url'],
    body: data['text'],
    date: data['created_at'],
    screenname: data['user']['screen_name']
  }

  // Save to the database! Ayo!
  Tweet.create(tweet)
  .catch(sequelize.UniqueConstraintError,  err =>  {
      return false
    })
}

export default twitHandleStream

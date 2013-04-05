module.exports = {
    name : 'sina'
  , authorizationURL : 'https://api.weibo.com/oauth2/authorize'
  , tokenURL : 'https://api.weibo.com/oauth2/access_token'
  , getuidAPI : 'https://api.weibo.com/2/account/get_uid.json'
  , getProfileAPI : 'https://api.weibo.com/2/users/show.json'
  , scopeSeparator : ','
  , requireState : true
}

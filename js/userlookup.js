var apiKey = require('./../.env').apiKey;

Repositories = function(){
};

Repositories.prototype.getRepos = function(UserName, displayUser){
  $.get('https://api.github.com/users/' + UserName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    displayUser(UserName, response.avatar_url);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};



exports.reposModule = Repositories;

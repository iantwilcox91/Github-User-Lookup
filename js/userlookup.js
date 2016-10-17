var apiKey = require('./../.env').apiKey;

Repositories = function(){
};

Repositories.prototype.getRepos = function(UserName, displayRepos){
  $.get('https://api.github.com/users/' + UserName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    displayRepos(UserName, response.login, response.html_url, response.repo_url);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};



exports.reposModule = Repositories;

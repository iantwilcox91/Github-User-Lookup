var Repositories = require('./../js/userlookup.js').reposModule;

var displayUser = function(name, avatar_url) {

  $('.name').append("<h2> The username was " + name + "</h2>");

  $('#allProjectsList').append("<h2><a href=https://github.com/"+name+"?tab=repositories"+ ">Click to see " + name + "'s repositories.</a>" + "</h2>");

  $(".picture").append("<img src=" + avatar_url + "/>");
};


$(document).ready(function() {
  var usersRepos = new Repositories();
  usersRepos.getRepos();

  $("#UserNameButton").click(function(){
    var name = $('#userName').val();
    $('#userName').val("");
    console.log(name);
    usersRepos.getRepos(name, displayUser);

  });
});

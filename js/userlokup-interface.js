var Repositories = require('./../js/userlookup.js').reposModule;



var displayUser = function(name, userData, reposData) {

  $('.name').append("<h2> The username was " + name + "</h2>");

  $('#allProjectsList').append("<h2><a href=" + reposData + ">Click to see " + name + " repositories.</a>" + "</h2>");
};





$(document).ready(function() {
  var usersRepos = new Repositories();
  usersRepos.getRepos();

  $("#UserNameButton").click(function(){

    var name = $('#userName').val();
    $('#userName').val("");
    console.log(name);
    searchRepos.getRepos(name, displayUser);

  });
});

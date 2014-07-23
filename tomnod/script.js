$(document).ready(function(){
  console.log('Initiated!');
  OpenBadges.issue(['http://afternoon-bayou-5556.herokuapp.com/tomnod/1.json'], function(errors, successes) { 
  	console.log(errors);
  	console.log(successes);
  });
});
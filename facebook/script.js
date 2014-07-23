$(document).ready(function(){
  console.log('Initiated!');
});

// Facebook API SDK Code
window.fbAsyncInit = function() {
FB.init({
  appId      : '{192963877556574}',
  xfbml      : true,
  version    : 'v2.0'
});
};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
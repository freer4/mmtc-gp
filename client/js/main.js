Meteor.Router.add({
  '/': 'home',
  '/snowboards/': 'snowboards',
  '/snowboards/:id': 'snowboard'
});

Template.home.greeting = function () {
  return "Welcome to gearprotector.";
};

Template.home.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});








$(function(){
  var $body = $("body");
  var $window = $(window);

  $window.bind('scroll', function (e) {
    if($window.scrollTop() > 100){
      $("#header").addClass("floating");
    } else {
      $("#header").removeClass("floating");
    }
  });
});
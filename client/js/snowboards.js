var snowboards = new Meteor.Collection("snowboards");
 
Template.snowboards.snowboardsArr = function(){
    return snowboards.find({}, {sort:{Name: 1}})
};
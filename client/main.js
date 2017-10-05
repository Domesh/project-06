import { Template } from 'meteor/templating';
import { Notes1 } from  '../lib/collections.js';
import { Notes} from  '../lib/colls.js';
import './layouts/product.html';
import './layouts/city.html';

import { Mongo } from 'meteor/mongo';

//export const Users = new Mongo.Collection('users');
import './layouts/login.html';





//-------User Registration-------


Template.userReg.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        }
});

Meteor.users.insert({
    email: email,
    password: password
});


Template.userReg.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password

          });

    }
});



//-------------User Login


Template.login1.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

    }
});



Template.login1.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password);
    }
});

/*
//-----------------Logout----------

Template.dashboard.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
  }
});
*/

//---------------------Add  City----------------------







Template.body.helpers({
/*  notes:[
    {items: 'my city 1'},
    {items: 'my city 2'},
    {items: 'my city 3'}
  ]*/

notes1(){
  return Notes1.find({});
}

});

Template.add.events({
  'submit .add-form': function(){
    event.preventDefault();

  // get input value

  const target = event.target;
  const items = target.items.value;

  //insert note into collections
  Notes1.insert({
    items,
    createdAt: new Date()
  });

  // clear form

  target.items.value = "";


  //close modal

  $('#addModal1').modal('close');
    return false;
  }
});


Template.note1.events({
  'click .delete-note':function(){
    Notes1.remove(this._id);
    return false;
  }
});

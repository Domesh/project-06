

FlowRouter.route('/',{
  name: 'home',
  action(){
      BlazeLayout.render('HomeLayout');
  }
});


FlowRouter.route('/test',{
  name: 'test',
  action(){
      BlazeLayout.render('MainLayout', {main: 'Test'});
  }
});


FlowRouter.route('/add1',{
  name: 'add1',
  action(){
      BlazeLayout.render('product', {main1: 'add1'});
  }
});

FlowRouter.route('/userlogin',{
  name: 'userlogin',
  action(){
      BlazeLayout.render('login', {main2: 'userlogin'});
  }
});


FlowRouter.route('/add',{
  name: 'add',
  action(){
    BlazeLayout.render('product', {main3: 'add'});
  }
});



FlowRouter.route('/add-city',{
  name: 'add-city',
  action(){
      BlazeLayout.render('city', {main3: 'add-city'});
  }
});

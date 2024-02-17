function initMap() {
  var latitude = (Math.random() * 21) + 30;
  var longitude = ((Math.random() * 51) + 70) * -1
  var myLatLng = { lat: latitude, lng: longitude };


  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var icons = {
    gwc: {
      icon: 'https://cdn-images-1.medium.com/max/1200/1*ODKEeMqZZKUaQpbAgpmJUw.png'
    },
    khanAcd: {
      icon: 'https://user-images.githubusercontent.com/41707197/56105496-bc44bd80-5ef9-11e9-8f65-859cda5d8941.png'
    },
    kwk: {
      icon: 'https://i.pinimg.com/originals/ba/34/98/ba34985bded39fefdff8e9b797e50811.png'
    },
    sci: {
      icon: 'http://www.scientistafoundation.com/uploads/3/6/0/9/3609607/54435535-2372841766080555-6133569256987557888-n_1_orig.png'
    },
    bgc: {
      icon: 'https://cdn.rightgift.com/organizations/logos/4c91d23a-43bd-482a-8dba-29628be30351/b98a26ec-e247-4864-b309-ab3d03b6e2a4/mobile.png'
    },
    bbg: {
      icon: 'https://static1.squarespace.com/static/5ab430aeb40b9d5b1e973073/t/5deed5b9ac43c868ac647c63/1610488443530/'
    },
    ai4all: {
      icon: 'https://ai4all.spcs.stanford.edu/sites/default/files/styles/247x253/public/2019-08/image001.png?itok=c7rdI_TR'
    },
    wtp: {
      icon: 'https://www.eecs.mit.edu/sites/default/files/WTP%20logo-3-07.jpg'
    },
    pars: {
      icon: 'https://irm.med.upenn.edu/wp-content/uploads/sites/33/2020/04/PARS-Logo_reduced.png'
    },
    digiGlz: {
      icon: 'https://www.techielass.com/wp-content/uploads/2018/11/digigirlz.jpg'
    }
  };

  var features = [{
    position: new google.maps.LatLng(40.6971494, -74.2598649),
    type: 'gwc'
  }, {
    position: new google.maps.LatLng(37.7576793, -122.50764),
    type: 'khanAcd'
  }, {
    position: new google.maps.LatLng(38.6530169, -90.3835461),
    type: 'kwk'
  }, {
    position: new google.maps.LatLng(33.7676338, -84.5606887),
    type: 'sci'
  }, {
    position: new google.maps.LatLng(29.8168824, -99.6814807),
    type: 'bgc'
  }, {
    position: new google.maps.LatLng(45.6129432, -120.4821474),
    type: 'bbg'
  }, {
    position: new google.maps.LatLng(40.6129432, -100.4821474),
    type: 'ai4all'
  },
  {
    position: new google.maps.LatLng(30.6129432, -90.4821474),
    type: 'wtp'
  },
  {
    position: new google.maps.LatLng(40.6129432, -110.4821474),
    type: 'pars'
  },
  {
    position: new google.maps.LatLng(33.6129432, -110.4821474),
    type: 'digiGlz'
  }
  
  ];


// added button is for the heart icon
  var descriptions = [
    { content: '<p style="color:purple;">Girls Who Code<br></p>'+'<p>Cost: Free, Ages: 13 to 17 years olds</p>'+'<a href="https://girlswhocode.com/" target="_blank"> Apply</a>'+'<center><button id="myBtn"></button></center>'},
    { content: '<p style="color:purple;">Khan Academy<br></p>'+'<p>Cost: Free, Ages: 13 and over</p>'+'<a href="https://www.khanacademy.org/" target="_blank"> Apply</a>'+'<center><button id="myBtn"></button></center>' },
    { content: '<p style="color:purple;">Kode With Klossy<br></p>' +'<p>Cost: Free, Ages: 13 to 18 years olds</p>'+'<a href="https://www.kodewithklossy.com/" target="_blank"> Apply</a>'+'<center><button id="myBtn"></button></center>'},
    { content: '<p style="color:purple;">Scientista<br></p>'+'<p>Cost: Free, Ages: 13 to 18 years olds</p>'+'<a href="http://www.scientistafoundation.com/"target="_blank"> Apply</a>'+'<center><button id="myBtn"></button></center>'},
    { content: '<p style="color:purple;">Black Girls Code<br></p>'+'<p>Cost: Free, Ages: 7 to 17</p>'+'<a href=" https://www.blackgirlscode.com/"target="_blank"> Apply</a>'+'<center><button id="myBtn"></button></center>' },
    { content: '<p style="color:purple;">Built By Girls<br></p>'+'<p>Cost: Free, Ages:15–22</p>'+'<a href="https://www.builtbygirls.com/"target="_blank"> Apply</a>'+'<center><button id="myBtn"></button></center>' },
    { content: '<p style="color:purple;">AI4ALL<br></p>'+'<p>Cost: Free, Ages: Rising Juniors and Seniors</p>'+'<a href=" https://ai-4-all.org/"target="_blank"> Apply</a>'+'<center><button id="myBtn"></button></center>' },
    { content: '<p style="color:purple;">MIT Womens Technology Program<br></p>'+'<p>Cost: Free, Age: Rising Seniors</p>'+'<a href="http://wtp.mit.edu/?wm=3049_b111"target="_blank"> Apply</a>'+'<center><button id="myBtn"></button></center>' },
    { content: '<p style="color:purple;">Penn Academy for Reproductive Sciences<br></p>'+'<p>Cost:Free, Age: 10-12th grade</p>'+'<a href=" https://irm.med.upenn.edu/outreach/outreach-programs/penn-academy-for-reproductive-sciences-pars/"target="_blank"> Apply</a>'+'<center><button id="myBtn"></button></center>' },
    { content: '<p style="color:purple;">DigiGirlz<br></p>'+'<p>Cost: Free, Age: 11-18</p>'+'<a href="https://www.microsoft.com/en-us/diversity/programs/digigirlz/default.aspx"target="_blank"> Apply</a>'+'<center><button id="myBtn"></button></center>' }
  ];


  var infowindow0 = new google.maps.InfoWindow({
    content: descriptions[0].content
  });
  var pic = {
    url: icons[features[0].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker0 = new google.maps.Marker({
    position: features[0].position,
    icon: pic,
    map: map
  });
  marker0.addListener('click', function () {
    infowindow0.open(map, marker0);
  });

  var infowindow1 = new google.maps.InfoWindow({
    content: descriptions[1].content
  });
  var pic = {
    url: icons[features[1].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker1 = new google.maps.Marker({
    position: features[1].position,
    icon: pic,
    map: map
  });
  marker1.addListener('click', function () {
    infowindow1.open(map, marker1);
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: descriptions[2].content
  });
  var pic = {
    url: icons[features[2].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker2 = new google.maps.Marker({
    position: features[2].position,
    icon: pic,
    map: map
  });
  marker2.addListener('click', function () {
    infowindow2.open(map, marker2);
  });

  var infowindow3 = new google.maps.InfoWindow({
    content: descriptions[3].content
  });
  var pic = {
    url: icons[features[3].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker3 = new google.maps.Marker({
    position: features[3].position,
    icon: pic,
    map: map
  });
  marker3.addListener('click', function () {
    infowindow3.open(map, marker3);
  });

  var infowindow4 = new google.maps.InfoWindow({
    content: descriptions[4].content
  });
  var pic = {
    url: icons[features[4].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker4 = new google.maps.Marker({
    position: features[4].position,
    icon: pic,
    map: map
  });
  marker4.addListener('click', function () {
    infowindow4.open(map, marker4);
  });

  var infowindow5 = new google.maps.InfoWindow({
    content: descriptions[5].content
  });
  var pic = {
    url: icons[features[5].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker5 = new google.maps.Marker({
    position: features[5].position,
    icon: pic,
    map: map
  });
  marker5.addListener('click', function () {
    infowindow5.open(map, marker5);
  });




var infowindow6 = new google.maps.InfoWindow({
    content: descriptions[6].content
  });
  var pic = {
    url: icons[features[6].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker6 = new google.maps.Marker({
    position: features[6].position,
    icon: pic,
    map: map
  });
  marker6.addListener('click', function () {
    infowindow6.open(map, marker6);
  });


  var infowindow7 = new google.maps.InfoWindow({
    content: descriptions[7].content
  });
  var pic = {
    url: icons[features[7].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker7 = new google.maps.Marker({
    position: features[7].position,
    icon: pic,
    map: map
  });
  marker7.addListener('click', function () {
    infowindow7.open(map, marker7);
  });


var infowindow8 = new google.maps.InfoWindow({
    content: descriptions[8].content
  });
  var pic = {
    url: icons[features[8].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker8 = new google.maps.Marker({
    position: features[8].position,
    icon: pic,
    map: map
  });
  marker8.addListener('click', function () {
    infowindow8.open(map, marker8);
  });

var infowindow9 = new google.maps.InfoWindow({
    content: descriptions[9].content
  });
  var pic = {
    url: icons[features[9].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker9 = new google.maps.Marker({
    position: features[9].position,
    icon: pic,
    map: map
  });
  marker9.addListener('click', function () {
    infowindow9.open(map, marker9);
  });



}


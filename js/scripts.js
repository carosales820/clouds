$('#sky').jQlouds({
  minClouds: 5, // minimum amount of clouds
  maxClouds: 10, // maximum amount of clouds
});

$('#sky').jQlouds({
  maxWidth: 300, // max image's width
  maxHeight: 200, // amx image's height
});

$('#sky').jQlouds({
  wind: true
});

options = { 
   src: 'img/new-cloud.png', // path to image, the default is a base64 (you can see the actual string in sources) 
   maxWidth: 300, // max image's width 
   minWidth: 200, // amx image's height 
   minClouds: 10, // minimum amount of clouds 
   maxClouds: 20, // maximum amount of clouds 
   skyHeight: null, // height of the container element 
   wind: true // animate clouds, default is false 
 }; 

 
$('#sky').jQlouds(options); 

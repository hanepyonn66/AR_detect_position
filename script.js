var add = function(){
  var title = document.getElementById("title").value;
  var label = document.querySelector('.instructions');

  if( navigator.geolocation )
  {
      navigator.geolocation.getCurrentPosition(

          function( position )
          {
              var location = position.coords ;
              lat = location.latitude ;
              lng = location.longitude ;

              saveData(title,lat,lng);
              addData(title,lat,lng);
          },
          function( error )
          {
              var errorInfo = [
                  "unexpected error" ,
                  "prihibited" ,
                  "signal blocked" ,
                  "timeout"
              ] ;
              var errorNo = error.code ;
              var errorMessage = "[error : " + errorNo + "]\n" + errorInfo[ errorNo ];

              label.innerText = errorMessage;
          } ,
          {
              // ここtrueにすると精度が上がる
              "enableHighAccuracy": false,
              "timeout": 8000,
              "maximumAge": 30000,
          }
      ) ;
  }
  else
  {
      var errorMessage = "Don't Compatible with GeoLocation API" ;
      label.innerText = errorMessage;
  }
}; 

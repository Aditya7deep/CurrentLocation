
function fun() {
    var watchID = navigator.geolocation.getCurrentPosition(onsuccess,onerror );

    function onsuccess(position) {
        
        document.getElementById("print1").value='Latitude : ' + position.coords.latitude;
        document.getElementById("print2").value='Longitude : ' + position.coords.longitude;
        
        var temp="https://www.google.com/maps/embed/v1/view?key=AIzaSyBd3waF_3sAnBaWnAoH4Njk-gH7uL4gfQY&center=13.067153,77.504082&zoom=16&maptype=satellite";
        
        document.getElementById("map").setAttribute
        ("src",temp);
        
        }

        function onerror(error) {
            alert('code : ' + error.code + '\n' + 'message : ' + error.message + '\n');

        }
    }
 
"https://www.google.com/maps/embed/v1/view?key=AIzaSyBd3waF_3sAnBaWnAoH4Njk-gH7uL4gfQY&center=13.067153,77.504082&zoom=16&maptype=satellite"
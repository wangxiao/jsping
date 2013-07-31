function ping(ip) {
    var img = new Image();
    var start = new Date().getTime();
    var flag = false;
    var isCloseWifi = true;
    img.onload = function() {
        flag = true;
        console.log('ok');
    };
    img.onerror = function() {
        if ( !isCloseWifi ) {
          flag = true;
          console.log('ok');
        }
    };
    setTimeout(function(){
        isCloseWifi = false;
    },2);
    img.src = "http://" + ip + "/" + start;
    var timer = setTimeout(function() {
        if ( !flag ) {
            flag = false ;
            console.log('failed');
        }
    }, 1500);
}

ping('192.168.100.24');

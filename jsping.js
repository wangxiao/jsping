function ping(ip) {
    var img = new Image();
    var start = new Date().getTime();
    var flag = false;
    var isCloseWifi = true;
    img.onload = function() {
        flag = true;
        img.src = "X:\\";
        console.log('Ping ' + ip + 'is ok. ');
    };
    img.onerror = function() {
        if ( !isCloseWifi ) {
            flag = true;
            img.src = "X:\\";
            console.log('Ping ' + ip + 'success. ');
        } else {
            console.log('network is not working!');
        }
    };
    setTimeout(function(){
        isCloseWifi = false;
        console.log('network is working, start ping...');
    },2);
    img.src = "http://" + ip + "/" + start;
    var timer = setTimeout(function() {
        if ( !flag ) {
            flag = false ;
            console.log('Ping ' + ip + ' fail. ');
        }
    }, 1500);
}

ping('www.baidu.com:80');

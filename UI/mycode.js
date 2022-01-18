function  somecode() {
    for (var i = 0; i <=4000; i++) {
        var j=i;

    } 
    postMessage(i);
    setTimeout("somecode()",500);
}
somecode();
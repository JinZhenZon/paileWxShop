(function() {
    var newRem = function() {
       
        var html = document.documentElement;
        let size = html.getBoundingClientRect().width;
        if(html.getBoundingClientRect().width>750){
            size = 750
        }
        html.style.fontSize =  size/ 16 + 'px';
    };
    window.addEventListener('resize', newRem, false);
    newRem();
})();
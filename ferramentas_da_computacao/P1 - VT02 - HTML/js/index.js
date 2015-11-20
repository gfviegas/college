(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementsByClassName('menu'),
        links    = document.getElementsByClassName('menu-link');
        
    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
        length = classes.length,
        needAdd = element.className.search("active");
        
        // Remove qualquer classe active..
        var actives = document.getElementsByClassName("active");
        
        for(var i = 0; i < actives.length; i++) {
            actives[i].className = actives[i].className.replace(/\bactive\b/,'');
        }
        
        // Se nao tiver, adiciona!
        if (needAdd < 0 && length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }
    
    for(var i=0; i<links.length; i++){
        links[i].addEventListener("click", function(){
            toggleClass(this, 'active');
        });
    }
    
    $(document).ready(function(){
        var links = $(".menu-link");
        links[0].click();
        
        /*$("#content").load($(".active").data("href"));

        $(".menu-link").on("click", function(){
            var destino = $(this).data("href");
            $("#content .view").fadeOut("slow", function(){
                $("#content").load(destino);
            });
        });*/
    });
}(this, this.document));

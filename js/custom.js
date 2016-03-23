jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#nav-sidebar', offset: 400});
        

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        e.preventDefault();

        //store hash
        var target = this.hash;

        // console.log(window.location.href);

        if($(target).length>0)
        {
            $('body').scrollTo(target, {         
                'axis':'y', 
                duration: 700, 
                easing:'easeOutQuad'
            });
        }
        else
        {
            window.location.href = "https://in.pycon.org/2016/"+target;
          
        }
        
    });

});

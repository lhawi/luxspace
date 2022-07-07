const smootScrollAnchor = document.querySelectorAll("a[href^='#']");

    for (let index = 0; index < smootScrollAnchor.length; index++) {
        const el = smootScrollAnchor[index];

        el.addEventListener("click", function(ev){
            ev.preventDefault();
            if(document.getElementById(this.getAttribute("href").replace("#", "")))
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior:"smooth",
            });
        });
        
    }

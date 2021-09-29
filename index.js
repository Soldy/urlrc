const D_F_urlBase = function(){
    this.G = function(){
        return _G();
    };
    this.S=function(u){
        if (document.title !== u)
            document.title = u;
        if (u === _G())
            return false;// nem cserelunk ketszer ugyan arra z url re... 
        if (window.history.pushState) {
            let r = {
                html: 'KFFDKF',
                pageTitle: window.document.title.T()
            };
            document.getElementById('urlChanger').innerHTML = r.html;
            document.title = r.pageTitle;
            window.history.pushState(r, '', u);
        } else {
            location.hash = u;
        }
    };
    const _G = ()=>{
        let o;
        if (window.history.pushState) {
             window.location.pathname;
        } else {
            o = location.hash;
        }
        return o.substring(1);
    };
};

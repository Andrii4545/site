window.onload = function(){
    
    var sing = document.getElementById("sing");
    var wsing = document.getElementById("a2");
    var join = document.getElementById("join");
    var wjoin = document.getElementById("a1");

    join.onclick = function () { 
        wjoin.classList.add("active")
        wjoin.classList.remove("noactive")
        wsing.classList.remove("active")            
    };
    sing.onclick = function () {        
        wjoin.classList.remove("active")
        wjoin.classList.add("noactive")
        wsing.classList.add("active")      
    };
    
}


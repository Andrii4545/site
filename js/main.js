window.onload = function(){
    console.log(124214)

    
    var sing = document.getElementById("sing");
    var wsing = document.getElementById("a2");
    var join = document.getElementById("join");
    var wjoin = document.getElementById("a1");
        console.log(wsing)


    join.onclick = function () {
        
        console.log(2+2)
        wjoin.classList.add("active")
        wjoin.classList.remove("noactive")
        wsing.classList.remove("active")
        
        
        
      
    };
    sing.onclick = function () {
        
        console.log(1+2)
        wjoin.classList.remove("active")
        wjoin.classList.add("noactive")
        wsing.classList.add("active")
        
       
    };
    
}


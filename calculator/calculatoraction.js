function dis(val){
    document.getElementById("res").value+=val;
    }
    function solve(){
    let x=document.getElementById("res").value;
    let y=eval(x);
    document.getElementById("res").value=y;
    }
    function clr(){
    document.getElementById("res").value="";
    }
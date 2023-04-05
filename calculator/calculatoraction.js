function dis(val){
    document.getElementById("res").value+=val;
    }
    function solve(){ 
    try{ 
    let x=document.getElementById("res").value;
    let y=eval(x);
    document.getElementById("res").value=y;
    }
    catch{
        //alert("invalid");
        document.getElementById("res").value='invalid';
    }     
    }
    function clr(){
    document.getElementById("res").value="";
    }

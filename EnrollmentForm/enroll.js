var n = 1;
function AddData(){ 
    var Arow= document.getElementById('get');
    var NRow = Arow.insertRow(n);
    Arow.style.visibility="visible";

    list1 = document.getElementById("n").value;
    list2 = document.getElementById("E").value;
    list3 = document.getElementById("web").value;
    proflink = document.getElementById("prof-link").value;
    var cel1 = NRow.insertCell(0);
    var cel2 = NRow.insertCell(1);   
    const rad = document.getElementsByName('gender');
    for (let i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            var selectedValue = rad[i].value;
        }
    }  
    const ch = document.getElementsByName('skills');
    var selValue='';
    for (let i = 0; i < ch.length; i++) {
      if (ch[i].checked) {
         selValue += ch[i].value + ',';
      }
    }  
    
    
    cel1.innerHTML = "<label>Name:</label>" +list1 + '<br>' +"<label>Email:</label>" + list2 + '<br>' +"<label>LinkedIn:</label>" +list3 +'<br>' +"<label>Gender:</label>" + selectedValue +'<br>' +"<label>skills:</label>" + selValue.slice(0,-1); 
    cel1.style.width="300px";
    cel1.style.height="40px";
    cel1.style.padding="10px";
    
    
  
    cel2.innerHTML =  "<img src=' " + proflink +"  '  width='130px' height='130px' style='align:right' alt='Profile Picture'>";
    cel2.style.width="130px";
    n++;
    
}
function rem(){
     document.getElementById("n").value=" "; 
     document.getElementById("E").value="";
     document.getElementById("web").value="";
     document.getElementById('prof-link').value="";
     const rd = document.getElementsByName('gender');
    for (let i = 0; i < rd.length; i++) {
        rd[i].checked= false;
     }
 
    const ch1 = document.getElementsByName('skills');

    for (let i = 0; i < ch1.length; i++) {
        ch1[i].checked= false;
    }
 
}   

   

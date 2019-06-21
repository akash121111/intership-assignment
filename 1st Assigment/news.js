    function bigImg() {
    
   
       document.getElementById("image1").style.visibility="hidden";
        document.getElementById("image2").style.visibility="visible";

    }
      
      
      function normalImg() {
        document.getElementById("image1").style.visibility="visible";
        document.getElementById("image2").style.visibility="hidden";
      }
     
     function si(){

      
        document.getElementById("ro").innerHTML  = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, </br>";
        
    
  }
  function m(){
  var i;
  
  for(i=0;i<3;i++){
 document.getElementById("ro").innerHTML  += "India beat Afganistan by 124 Runs</br>";
}
         }

setInterval(m, 3000);




function aboutjs(){
   document.getElementById("img2").style.display="none";
    document.getElementById("about").style.display="block";

}
      
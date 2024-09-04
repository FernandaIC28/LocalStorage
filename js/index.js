document.getElementById ("buttonText").addEventListener("click",function(){
var inputText = document.getElementById("inputText").value;
localStorage.setItem("datoGuardado",inputText);
  alert("Dato guardado en LocalStorage);
        });
        

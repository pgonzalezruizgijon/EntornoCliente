////////////////////////////////////////////////////////////////////////////////

function enviarUsandoGET() {
  let xhr=new XMLHttpRequest();
  let query="nombre=Ana&apellidos=Romero";
  xhr.open('GET',`pagina1_get.php?${query}`, true); // Se indica método GET y los parámetros van en la url
  xhr.onload = ()=>{
    // ...
  };
  xhr.send();  
}

////////////////////////////////////////////////////////////////////////////////

function enviarUsandoPOST(){
  let xhr=new XMLHttpRequest();
  xhr.open('POST','pagina1_post.php', true); // Se indica método POST
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); // Se añade cabecera para indicar tipo de codificación POST
  xhr.onload = ()=>{
    // ...
  };
  let query="nombre=Ana&apellidos=Romero";
  xhr.send(query); // Los parámetros se envían como argumento
}

////////////////////////////////////////////////////////////////////////////////
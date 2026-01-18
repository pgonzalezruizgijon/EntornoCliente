addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  document.forms[0].addEventListener('submit',enviarDatos,false);
}

function enviarDatos(e)
{
  e.preventDefault(); // Cancela el envío del formulario al servidor (submit)
  let tipoEnvio=document.querySelector("#select-tipo-envio").value;
  if(tipoEnvio=="POST") enviarUsandoPOST();
  else if (tipoEnvio=="GET") enviarUsandoGET();
}


function retornarDatos()
{
  let nom=document.querySelector('#nombre').value;
  let com=document.querySelector('#comentarios').value;
  let cad=`nombre=${encodeURIComponent(nom)}&comentarios=${encodeURIComponent(com)}`;
  return cad;
}

function enviarUsandoPOST() 
{
  let xhr=new XMLHttpRequest();
  xhr.open('POST','pagina1_post.php', true);
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xhr.onload = ()=>{
    if(xhr.status>=200 && xhr.status<300){
        document.querySelector("#resultados").textContent=xhr.responseText;
    }else{
      document.querySelector("#resultados").textContent=`Error al cargar los datos (HTTP ${xhr.status})`;
    }
  };
  xhr.onloadstart=()=>{
    document.querySelector("#resultados").textContent='Procesando...';
  }
  let query=retornarDatos();
  xhr.send(query);  
}

function enviarUsandoGET() 
{
  let xhr=new XMLHttpRequest();
  let query=retornarDatos();
  xhr.open('GET',`pagina1_get.php?${query}`, true);
  xhr.onload = ()=>{
    if(xhr.status>=200 && xhr.status<300){
        document.querySelector("#resultados").textContent=xhr.responseText;
    }else{
      document.querySelector("#resultados").textContent=`Error al cargar los datos (HTTP ${xhr.status})`;
    }
  };
  xhr.onloadstart=()=>{
    document.querySelector("#resultados").textContent='Procesando...';
  }
  xhr.send();  
}



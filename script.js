var speed = 160;
var prefijo = "% ";
var i = 0;
var comando = ""
var usando_blink = false;

function blink_text() {
  $('.blink').fadeOut(500);
  $('.blink').fadeIn(500);
}

function generar(){
  var texto = "cat /home/allikn0w.github.io/info";
  return texto;
}

function AgregarBlink(){
  return '<span class="blink">_</span>'
}

function MensajeAyuda(){
  var texto = "help() -> <br>";
  texto += "&nbsp; ls <br>";
  texto += "&nbsp; pwd <br> ";
  texto += "&nbsp; cat [args] <br> ";
  texto += "&nbsp; man this <br> ";
  texto += "&nbsp; cd [args] <br> ";
  texto += "&nbsp; echo [args] <br> ";
  texto += "&nbsp; music <br> ";
  texto += "&nbsp; whoami <br> ";
  texto += "&nbsp; lenguajes <br> ";
  texto += "&nbsp; erl <br> ";
  texto += "&nbsp; escript [args] <br> ";
  texto += "&nbsp; python <br> ";
  texto += "&nbsp; clear <br> ";
  texto += "&nbsp; exit <br>";
  return texto;
}

function EscribirAyuda(){
  $('.help').html(MensajeAyuda());
}

function EscribirBienvenida(){
  var texto = generar();

  if (i < texto.length){
      $('.welcome').append(texto.charAt(i));
  }
    i++;
    setTimeout(EscribirBienvenida,speed);
}

function SaltoLinea(){
  return "<br />";
}

/* Comandos */
function ListarArchivos(){
  var Archivos = [ "mail", "hack_me.txt", "info"];
  output = ""
  for (z=0; z<Archivos.length; z++){
    output += Archivos[z]+"<br>";
  }
  return output;
}

function MostrarDirectorio(){
  return "/home/allikn0w.github.io"
}

function Informacion(arg){
  info = ""
  if (arg[1] == "this"){
    info +="Creado en el 2018  <br>"
    info +="weWEBweBWeB <br>"
    info +="WdBWEbWeEBB  <br>"
    info +="End of This"
  }
  else if (arg[1] == undefined){
    info +="¿Qué página de manual quiere?"
  }
  else{
    for (var x = 1; x<arg.length; x++){
      info += "No existe entrada de manual para "+arg[x] + "<br>";
    }
  }
  return info
}

function Music(){
  return "LILILL pEEp"
}

function MostrarContenido(comando){
  switch(comando[1]){
    case "mail":
      response = ""
      response += "#!/usr/bin/env escript <br> <br>"
      response += "-record(person,{name,email}). <br> <br>"
      response += "main(_) -> <br>"
      response +=  '&nbsp; build("g m4i_l"). <br> <br>'
      response +=  'build(Dominio) -> <br>'
      response += '&nbsp; P = #person{name="Andrés Imlauer", email="{dresuer,chelesout}."++Dominio++"[dot] com" }, <br>'
      response += '&nbsp; io:format("~p ~p ~n",[P#person.name,P#person.email]).'
      return response;
			break;
    case "info":
      location.reload(true);
			break;
    case "hack_me.txt":
      return "bWkgcGFzc3dvcmQgZXMgMTIzNA==";
			break;
    default:
      return "cat: No existe el archivo o el directorio";
  }
}

function Exit(){
  return "exit(): ERROR"
}

function Python(){
  response = ""
  response += "Mis proyectos de Python: <br>"
  for (var z = 0; z < 4; z++){
    response += "Mostrar proyectos de Python<br>"
  }
  return response
}

function Whoami(){
  response = ""
  response += "Andrés Imlauer"
  return response;
}


function Escript(args){
  response = ""
  switch(args[1]){
    case "mail":
      response += 'Andrés Imlauer" "{dresuer,chelesout}.g m4i_l[dot] com'
      break;
  }
  return response
}


function Lenguajes(){
  response = ""
  response += "Python, Erlang, C++, Bash"
  return response
}

function Erl(){
  response = ""
  response += "Erlang/OTP 18 [erts-7.3] [source] [64-bit] [smp:6:6] [async-threads:10] [kernel-poll:false] <br>"
  response += "<br> Eshell V7.3 <br>"
  for (var z = 0; z < 6; z++){
    response += z+'> io:fwrite("Mostrar cosas hechas en Erlang").<br>'
  }
  response += "<br>User switch command<br>"
  response += "--> q "

  return response
}

function EjecutarComando(comando){
  comando = comando.split(" ");
  nameclass = ".text"
  switch(comando[0]){
    case "echo":
      for (var j = 1; j < comando.length; j++){
        $(nameclass).append(comando[j]+" ");
      }
      break;
    case "ls":
        $(nameclass).append(ListarArchivos());
      break;
    case "cat":
        $(nameclass).append(MostrarContenido(comando));
      break;
    case "clear":
        $(nameclass).empty();
      break;
    case "":
      break;
    case "pwd":
        $(nameclass).append(MostrarDirectorio());
      break;
    case "man":
        $(nameclass).append(Informacion(comando));
      break;
    case "python":
        $(nameclass).append(Python());
      break;
    case "escript":
        $(nameclass).append(Escript(comando));
      break;
    case "erl":
        $(nameclass).append(Erl());
      break;
    case "whoami":
        $(nameclass).append(Whoami());
      break;
    case "lenguajes":
        $(nameclass).append(Lenguajes());
      break;
    case "music":
        $(nameclass).append(Music());
      break;
    case "exit":
        $(nameclass).append(Exit());
      break;
    default:
      $(nameclass).append("El programa no está instalado.");
      break;
  }
}

$(document).keypress("l",function(e) {
  par = ".text"
  if(e.ctrlKey){
    EjecutarComando("clear");
  }
});


document.addEventListener("keydown",function(event){
  if(event.keyCode == 8){
    event.preventDefault();
    if (comando != ""){
      $(par).html(function(i,v){
        return v.slice(0,-1);
      });
    }
    comando = comando.slice(0, -1);
  }
  else if (event.ctrlKey == true && keyCode == 108){
    alert("ctrl")
    EjecutarComando("clear")
  }
});
$(document).keypress(function(event){
    par = ".text"
    if(event.keyCode == 13){
        $(par).append(SaltoLinea());
        EjecutarComando(comando)
        $(par).append(SaltoLinea());
        $(par).append(prefijo);
        comando = ""
    }
    else {
      capture = String.fromCharCode(event.which).toLowerCase();
      $(par).append(capture);
      comando += capture;
    }
});

function GenerarInfo(){
  var info = ["WOKE UP SURPRISED, AM I REALLY ALIVE?" ]
  var output = ""
  for (var r=0; r<info.length; r++){
    output += info[r]+" "
  }
  return output
}

j=0
function EscribirInfo(){
  var texto = GenerarInfo();
  if (j < texto.length){
    $('.aboutme').append(texto.charAt(j));
    j++
  }
  setTimeout(EscribirInfo,150);
}


setInterval(blink_text, 1000);

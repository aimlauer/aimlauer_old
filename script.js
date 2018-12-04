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
  var texto = "cat /home/allikn0w.github.io/Info";
  return texto;
}

function AgregarBlink(){
  return '<span class="blink">_</span>'
}

function MensajeAyuda(){
  var texto = "help() -> <br>";
  texto += "&nbsp; ls <br>";
  texto += "&nbsp; pwd <br> ";
  texto += "&nbsp; cat [arg] <br> ";
  texto += "&nbsp; man this <br> ";
  texto += "&nbsp; cd [arg] <br> ";
  texto += "&nbsp; echo [arg] <br> ";
  texto += "&nbsp; music <br> ";
  texto += "&nbsp; whoami <br> ";
  texto += "&nbsp; lenguajes <br> ";
  texto += "&nbsp; erl <br> ";
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
  var Archivos = ["linux.txt", "mail.erl", "hack_me.txt"];
  output = ""
  for (z=0; z<Archivos.length; z++){
    output += Archivos[z]+"<br>";
  }
  return output;
}

function MostrarDirectorio(){
  return "/home/allikn0w.github.io/Info"
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
    case "mail.erl":
      response = ""
      response += "-module(mail). <br>"
      response += "-compile(export_all). <br>"
      response += "start() -> <br>"
      response +=  '&nbsp; build("g_ma_i_l"). <br>'
      response +=  'build(Dominio) -> <br>'
      response +=  '&nbsp; Email = "{dresuer,chelesout}"++Dominio++"[dot] com", <br>'
      response +=  "&nbsp; io:format(Email)."
      return response;
			break;
    case "hack_me.txt":
      return "bWkgcGFzc3dvcmQgZXMgMTIzNA==";
			break;
    case "linux.txt":
 			ascii = ""
			ascii +=" [ 1561.519963] call trace: <br>"
			ascii +="[ 1561.519964]  <#MC>  [<ffffffff81644340>] panic+0x91/0x1a4 <br>"
			ascii +="[ 1561.519971]  [<ffffffff8102abeb>] mce_panic.part.14+0x18b/0x1c0 <br>"
			ascii +="[ 1561.519973]  [<ffffffff8102ac80>] mce_panic+0x60/0xb0 <br>"
			ascii +="[ 1561.519975]  [<ffffffff8102aec4>] mce_reign+0x1f4/0x200 <br>"
			ascii +="[ 1561.519977]  [<ffffffff8102b175>] mce_end+0xf5/0x100 <br>"
			ascii +="[ 1561.519979]  [<ffffffff8102b92c>] do_machine_check+0x3fc/0x600 <br>"
			ascii +="[ 1561.519982]  [<ffffffff8136d48f>] ? intel_idle+0xbf/0x150 <br>"
			ascii +="[ 1561.519984]  [<ffffffff8165d78c>] machine_check+0x1c/0x30 <br>"
			ascii +="[ 1561.519986]  [<ffffffff8136d48f>] ? intel_idle+0xbf/0x150 <br>"
			ascii +="[ 1561.519987]  <<EOE>>  [<ffffffff81509697>] ? menu_select+0xe7/0x2c0 <br>"
			ascii +="[ 1561.519991]  [<ffffffff815082d1>] cpuidle_idle_call+0xc1/0x280 <br> "
			ascii +="[ 1561.519994]  [<ffffffff8101322a>] cpu_idle+0xca/0x120 <br>"
			ascii +="[ 1561.519996]  [<ffffffff8163aa9a>] start_secondary+0xd9/0xdb <br>"
      return ascii
			break;
    default:
      return "cat: "+ comando[1] +": No existe el archivo o el directorio";
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
  response += "Andrés Imlauer <br>"
  response += "Intento de programador, "
  response += "estudiante del 2do año de la carrera ciencias de la computación."
  return response;
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
  var info = ["WOKE UP SURPRISE, AM I REALLY ALIVE?" ]
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

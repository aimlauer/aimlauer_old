var speed = 60;
var prefijo = "% ";
var i = 0;
var comando = ""
var usando_blink = false;

function blink_text() {
  $('.blink').fadeOut(500);
  $('.blink').fadeIn(500);
}

function generar(){
  var texto = "Esta es mi super página web, en desarrollo.";
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
  texto += "&nbsp; clear <br> ";
  texto += "&nbsp; exit ";
  return texto;
}

function EscribirAyuda(){
  $('.help').html(MensajeAyuda());
}

function EscribirBienvenida(){
  var texto = generar();
  var saltar = texto.indexOf("\n");
  texto = texto.split('\n').join('');
 
  // Dejar el blink al final.
  if(i != texto.length){
    $('.welcome').text(function (_,txt) {
      return txt.slice(0, -1);
    });
  }

  if (i < texto.length){
    if(i == saltar){
      $('.welcome').append("");
    }else{
      $('.welcome').append(texto.charAt(i));
      $('.welcome').append(AgregarBlink());
    }
    i++;
    setTimeout(EscribirBienvenida,speed);
  }
}

function SaltoLinea(){
  return "<br />";
}

/* Comandos */
function ListarArchivos(){
  var Archivos = ["linux.txt", "asdf.txt", "hack_me.txt"];
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
    case "asdf.txt":
      return "I miss 2015";
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
    case "music":
        $(nameclass).append(Music());
      break;
    case "exit":
        $(nameclass).append(Exit());
      break;
    default:
      $(nameclass).append("Comando no implementado");
      break;
  }
}


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



setInterval(blink_text, 1000);
setTimeout(EscribirBienvenida,50);

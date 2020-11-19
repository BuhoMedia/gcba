function disfrute(){
  $( "#page2" ).load( "disfrute.html" );
  $("#ejetitle").text("Disfrute");
  document.getElementById('page1').classList.add("slidetotop");
  document.getElementById('page2').classList.add("slidetotop");
  document.getElementById('home').classList.add("backdisfrute");
    setTimeout(function () {
        document.getElementById('homemeader').classList.add("showheader");
    }, 600);

}
function quickdisfrute(){
  $( "#page2" ).load( "disfrute.html" );
  $("#ejetitle").text("Disfrute");
  document.getElementById('home').classList.remove("backsocial");
  document.getElementById('home').classList.remove("backseguridad");
  document.getElementById('home').classList.remove("backtransformacion");
  document.getElementById('home').classList.add("backdisfrute");
}


function social(){
  $( "#page2" ).load( "social.html" );
  $("#ejetitle").text("Social");
  document.getElementById('page1').classList.add("slidetotop");
  document.getElementById('page2').classList.add("slidetotop");
  document.getElementById('home').classList.add("backsocial");
    setTimeout(function () {
        document.getElementById('homemeader').classList.add("showheader");
    }, 600);

}
function quicksocial(){
  $( "#page2" ).load( "social.html" );
  $("#ejetitle").text("Social");
  document.getElementById('home').classList.remove("backdisfrute");
  document.getElementById('home').classList.remove("backseguridad");
  document.getElementById('home').classList.remove("backtransformacion");
  document.getElementById('home').classList.add("backsocial");
}

function seguridad(){
  $( "#page2" ).load( "seguridad.html" );
  $("#ejetitle").text("Seguridad");
  document.getElementById('page1').classList.add("slidetotop");
  document.getElementById('page2').classList.add("slidetotop");
  document.getElementById('home').classList.add("backseguridad");
    setTimeout(function () {
        document.getElementById('homemeader').classList.add("showheader");
    }, 600);

}
function quickseguridad(){
  $( "#page2" ).load( "seguridad.html" );
  $("#ejetitle").text("Seguridad");
  document.getElementById('home').classList.remove("backdisfrute");
  document.getElementById('home').classList.remove("backsocial");
  document.getElementById('home').classList.remove("backtransformacion");
  document.getElementById('home').classList.add("backseguridad");
}

function transformacion(){
  $( "#page2" ).load( "transformacion.html" );
  $("#ejetitle").text("Transformación");
  document.getElementById('page1').classList.add("slidetotop");
  document.getElementById('page2').classList.add("slidetotop");
  document.getElementById('home').classList.add("backtransformacion");
    setTimeout(function () {
        document.getElementById('homemeader').classList.add("showheader");
    }, 600);

}
function quicktransformacion(){
  $( "#page2" ).load( "transformacion.html" );
  $("#ejetitle").text("Transformación");
  document.getElementById('home').classList.remove("backdisfrute");
  document.getElementById('home').classList.remove("backsocial");
  document.getElementById('home').classList.remove("backseguridad");
  document.getElementById('home').classList.add("backtransformacion");
}





// function volver(){
//
//   document.getElementById('page1').classList.remove("slidetotop");
//   document.getElementById('page2').classList.remove("slidetotop");
//   document.getElementById('homemeader').classList.remove("showheader");
//   document.getElementById('home').classList.remove("changeback");
//   document.getElementById('home').classList.remove("backdisfrute");
//   document.getElementById('home').classList.remove("backsocial");
//   document.getElementById('home').classList.remove("backseguridad");
//   document.getElementById('home').classList.remove("backtransformacion");
// }

/*cambio desde la apgina 2 a la 3*/
function pageload(id,camp){
  $( "#page3" ).load(id);

  document.getElementById('page2').classList.add("scale");
  document.getElementById('homemeader').classList.remove("showheader");
  document.getElementById('home').classList.remove("changeback");

    /*valido si contiene la palabra para ponerle otra clase para cambiar el fondo*/
    if( camp == "disfrute" ){ document.getElementById('home').classList.add("backdisfrute");}
    if( camp == "social" ){ document.getElementById('home').classList.add("backsocial");}
    if( camp == "seguridad" ){ document.getElementById('home').classList.add("backseguridad");}
    if( camp == "transformacion1" ){ document.getElementById('home').classList.add("backtransformacion");}

  setTimeout(function () {
        document.getElementById('page3').classList.remove("hidden");
  }, 700);
  setTimeout(function () {
        document.getElementById('page2').classList.add("displaynone");
        document.getElementById('page1').classList.add("displaynone");
  }, 800);
}


function volver2(){

  document.getElementById('page3').classList.add("hidden");
  document.getElementById('page2').classList.remove("scale");
  document.getElementById('home').classList.add("changeback");
  document.getElementById('home').classList.remove("changeback2");

  setTimeout(function () {
    document.getElementById('homemeader').classList.add("showheader");
    document.getElementById('page2').classList.remove("displaynone");
    document.getElementById('page1').classList.remove("displaynone");
  }, 800);

}


/*scale transition*/
function scale(){
  document.getElementById('home').classList.add("scale");
}

/*tolge pieces sections*/
function view(){
  var selected = document.querySelector('input[name="pieceoption"]:checked').value;
    if( selected == "radiovp" ){
      $(".pieces").addClass("displaynone");
      $(".pieces").removeClass("hidden");
      $(".vp").removeClass("displaynone");
    }

    if( selected == "radiografica" ){
      $(".pieces").addClass("displaynone");
      $(".pieces").removeClass("hidden");
      $(".grafica").removeClass("displaynone");
    }

    if( selected == "radioradio" ){
      $(".pieces").addClass("displaynone");
      $(".pieces").removeClass("hidden");
      $(".radio").removeClass("displaynone");
    }

    if( selected == "radiosubtv" ){
      $(".pieces").addClass("displaynone");
      $(".pieces").removeClass("hidden");
      $(".subtv").removeClass("displaynone");
    }

    if( selected == "radiotv" ){
      $(".pieces").addClass("displaynone");
      $(".pieces").removeClass("hidden");
      $(".tv").removeClass("displaynone");
    }

    if( selected == "radiobyz" ){
      $(".pieces").addClass("displaynone");
      $(".pieces").removeClass("hidden");
      $(".byz").removeClass("displaynone");
    }

    if( selected == "radioredes" ){
      $(".pieces").addClass("displaynone");
      $(".pieces").removeClass("hidden");
      $(".redes").removeClass("displaynone");
    }
    if( selected == "radiobanners" ){
      $(".pieces").addClass("displaynone");
      $(".pieces").removeClass("hidden");
      $(".banner").removeClass("displaynone");
    }
    if( selected == "radiomailing" ){
      $(".pieces").addClass("displaynone");
      $(".pieces").removeClass("hidden");
      $(".mailing").removeClass("displaynone");
    }

}







// NUEVO

function gotoenero(mes){
  document.getElementById('page3').style.background = "url(img/" + mes + " )";
  document.getElementById('page1').classList.add("pt-page-moveToLeft");
  document.getElementById('enero').classList.add("pt-page-current");
  document.getElementById('enero').classList.add("pt-page-moveFromRight");

  setTimeout(function () {
    document.getElementById('page1').classList.remove("pt-page-current");
    document.getElementById('page1').classList.remove("pt-page-moveToLeft");
    document.getElementById('enero').classList.remove("pt-page-moveFromRight");
  }, 700);
}

function gotofebrero(mes){
  document.getElementById('page3').style.background = "url(img/" + mes + " )";
  document.getElementById('page1').classList.add("pt-page-moveToLeft");
  document.getElementById('febrero').classList.add("pt-page-current");
  document.getElementById('febrero').classList.add("pt-page-moveFromRight");

  setTimeout(function () {
    document.getElementById('page1').classList.remove("pt-page-current");
    document.getElementById('page1').classList.remove("pt-page-moveToLeft");
    document.getElementById('febrero').classList.remove("pt-page-moveFromRight");
  }, 700);
}

function gotomarzo(mes){
  document.getElementById('page3').style.background = "url(img/" + mes + " )";
  document.getElementById('page1').classList.add("pt-page-moveToLeft");
  document.getElementById('marzo').classList.add("pt-page-current");
  document.getElementById('marzo').classList.add("pt-page-moveFromRight");

  setTimeout(function () {
    document.getElementById('page1').classList.remove("pt-page-current");
    document.getElementById('page1').classList.remove("pt-page-moveToLeft");
    document.getElementById('marzo').classList.remove("pt-page-moveFromRight");
  }, 700);
}

function gotoabril(mes){
  document.getElementById('page3').style.background = "url(img/" + mes + " )";
  document.getElementById('page1').classList.add("pt-page-moveToLeft");
  document.getElementById('abril').classList.add("pt-page-current");
  document.getElementById('abril').classList.add("pt-page-moveFromRight");

  setTimeout(function () {
    document.getElementById('page1').classList.remove("pt-page-current");
    document.getElementById('page1').classList.remove("pt-page-moveToLeft");
    document.getElementById('abril').classList.remove("pt-page-moveFromRight");
  }, 700);
}

function gotomayo(mes){
  document.getElementById('page3').style.background = "url(img/" + mes + " )";
  document.getElementById('page1').classList.add("pt-page-moveToLeft");
  document.getElementById('mayo').classList.add("pt-page-current");
  document.getElementById('mayo').classList.add("pt-page-moveFromRight");

  setTimeout(function () {
    document.getElementById('page1').classList.remove("pt-page-current");
    document.getElementById('page1').classList.remove("pt-page-moveToLeft");
    document.getElementById('mayo').classList.remove("pt-page-moveFromRight");
  }, 700);
}

function gotojunio(mes){
  document.getElementById('page3').style.background = "url(img/" + mes + " )";
  document.getElementById('page1').classList.add("pt-page-moveToLeft");
  document.getElementById('junio').classList.add("pt-page-current");
  document.getElementById('junio').classList.add("pt-page-moveFromRight");

  setTimeout(function () {
    document.getElementById('page1').classList.remove("pt-page-current");
    document.getElementById('page1').classList.remove("pt-page-moveToLeft");
    document.getElementById('junio').classList.remove("pt-page-moveFromRight");
  }, 700);
}

function volverenero(){
  document.getElementById('page1').classList.add("pt-page-current");
  document.getElementById('page1').classList.add("pt-page-moveFromLeft");
  document.getElementById('enero').classList.add("pt-page-moveToRight");

  setTimeout(function () {
    document.getElementById('page1').classList.add("pt-page-current");
    document.getElementById('enero').classList.remove("pt-page-current");
    document.getElementById('page1').classList.remove("pt-page-moveFromLeft");
    document.getElementById('enero').classList.remove("pt-page-moveToRight");
  }, 700);
}

function volverfebrero(){
  document.getElementById('page1').classList.add("pt-page-current");
  document.getElementById('page1').classList.add("pt-page-moveFromLeft");
  document.getElementById('febrero').classList.add("pt-page-moveToRight");

  setTimeout(function () {
    document.getElementById('page1').classList.add("pt-page-current");
    document.getElementById('febrero').classList.remove("pt-page-current");
    document.getElementById('page1').classList.remove("pt-page-moveFromLeft");
    document.getElementById('febrero').classList.remove("pt-page-moveToRight");
  }, 700);
}

function volvermarzo(){
  document.getElementById('page1').classList.add("pt-page-current");
  document.getElementById('page1').classList.add("pt-page-moveFromLeft");
  document.getElementById('marzo').classList.add("pt-page-moveToRight");

  setTimeout(function () {
    document.getElementById('page1').classList.add("pt-page-current");
    document.getElementById('marzo').classList.remove("pt-page-current");
    document.getElementById('page1').classList.remove("pt-page-moveFromLeft");
    document.getElementById('marzo').classList.remove("pt-page-moveToRight");
  }, 700);
}

function volverabril(){
  document.getElementById('page1').classList.add("pt-page-current");
  document.getElementById('page1').classList.add("pt-page-moveFromLeft");
  document.getElementById('abril').classList.add("pt-page-moveToRight");

  setTimeout(function () {
    document.getElementById('page1').classList.add("pt-page-current");
    document.getElementById('abril').classList.remove("pt-page-current");
    document.getElementById('page1').classList.remove("pt-page-moveFromLeft");
    document.getElementById('abril').classList.remove("pt-page-moveToRight");
  }, 700);
}

function volvermayo(){
  document.getElementById('page1').classList.add("pt-page-current");
  document.getElementById('page1').classList.add("pt-page-moveFromLeft");
  document.getElementById('mayo').classList.add("pt-page-moveToRight");

  setTimeout(function () {
    document.getElementById('page1').classList.add("pt-page-current");
    document.getElementById('mayo').classList.remove("pt-page-current");
    document.getElementById('page1').classList.remove("pt-page-moveFromLeft");
    document.getElementById('mayo').classList.remove("pt-page-moveToRight");
  }, 700);
}

function volverjunio(){
  document.getElementById('page1').classList.add("pt-page-current");
  document.getElementById('page1').classList.add("pt-page-moveFromLeft");
  document.getElementById('junio').classList.add("pt-page-moveToRight");

  setTimeout(function () {
    document.getElementById('page1').classList.add("pt-page-current");
    document.getElementById('junio').classList.remove("pt-page-current");
    document.getElementById('page1').classList.remove("pt-page-moveFromLeft");
    document.getElementById('junio').classList.remove("pt-page-moveToRight");
  }, 700);
}

function volver2(mysample){

  if(mysample == "enero"){
    document.getElementById('enero').classList.add("pt-page-current");
    document.getElementById('enero').classList.add("pt-page-moveFromLeft");
    document.getElementById('page3').classList.add("pt-page-moveToRight");

    setTimeout(function () {
      document.getElementById('enero').classList.add("pt-page-current");
      document.getElementById('page3').classList.remove("pt-page-current");
      document.getElementById('enero').classList.remove("pt-page-moveFromLeft");
      document.getElementById('page3').classList.remove("pt-page-moveToRight");
    }, 700);
  }

  if(mysample == "febrero"){
    document.getElementById('febrero').classList.add("pt-page-current");
    document.getElementById('febrero').classList.add("pt-page-moveFromLeft");
    document.getElementById('page3').classList.add("pt-page-moveToRight");

    setTimeout(function () {
      document.getElementById('febrero').classList.add("pt-page-current");
      document.getElementById('page3').classList.remove("pt-page-current");
      document.getElementById('febrero').classList.remove("pt-page-moveFromLeft");
      document.getElementById('page3').classList.remove("pt-page-moveToRight");
    }, 700);
  }

  if(mysample == "marzo"){
    document.getElementById('marzo').classList.add("pt-page-current");
    document.getElementById('marzo').classList.add("pt-page-moveFromLeft");
    document.getElementById('page3').classList.add("pt-page-moveToRight");

    setTimeout(function () {
      document.getElementById('marzo').classList.add("pt-page-current");
      document.getElementById('page3').classList.remove("pt-page-current");
      document.getElementById('marzo').classList.remove("pt-page-moveFromLeft");
      document.getElementById('page3').classList.remove("pt-page-moveToRight");
    }, 700);
  }

  if(mysample == "abril"){
    document.getElementById('abril').classList.add("pt-page-current");
    document.getElementById('abril').classList.add("pt-page-moveFromLeft");
    document.getElementById('page3').classList.add("pt-page-moveToRight");

    setTimeout(function () {
      document.getElementById('abril').classList.add("pt-page-current");
      document.getElementById('page3').classList.remove("pt-page-current");
      document.getElementById('abril').classList.remove("pt-page-moveFromLeft");
      document.getElementById('page3').classList.remove("pt-page-moveToRight");
    }, 700);
  }

  if(mysample == "mayo"){
    document.getElementById('mayo').classList.add("pt-page-current");
    document.getElementById('mayo').classList.add("pt-page-moveFromLeft");
    document.getElementById('page3').classList.add("pt-page-moveToRight");

    setTimeout(function () {
      document.getElementById('mayo').classList.add("pt-page-current");
      document.getElementById('page3').classList.remove("pt-page-current");
      document.getElementById('mayo').classList.remove("pt-page-moveFromLeft");
      document.getElementById('page3').classList.remove("pt-page-moveToRight");
    }, 700);
  }

  if(mysample == "junio"){
    document.getElementById('junio').classList.add("pt-page-current");
    document.getElementById('junio').classList.add("pt-page-moveFromLeft");
    document.getElementById('page3').classList.add("pt-page-moveToRight");

    setTimeout(function () {
      document.getElementById('junio').classList.add("pt-page-current");
      document.getElementById('page3').classList.remove("pt-page-current");
      document.getElementById('junio').classList.remove("pt-page-moveFromLeft");
      document.getElementById('page3').classList.remove("pt-page-moveToRight");
    }, 700);
  }
}


// step 3
function step3(url,title){
  $("#titlecamp").text(title);
  document.getElementById('iframepage2').src = url;
  document.getElementById('enero').classList.add("pt-page-moveToLeft");
  document.getElementById('febrero').classList.add("pt-page-moveToLeft");
  document.getElementById('marzo').classList.add("pt-page-moveToLeft");
  document.getElementById('abril').classList.add("pt-page-moveToLeft");
  document.getElementById('mayo').classList.add("pt-page-moveToLeft");
  document.getElementById('junio').classList.add("pt-page-moveToLeft");
  document.getElementById('page3').classList.add("pt-page-current");
  document.getElementById('page3').classList.add("pt-page-moveFromRight");

  setTimeout(function () {
    document.getElementById('enero').classList.remove("pt-page-current");
    document.getElementById('enero').classList.remove("pt-page-moveToLeft");
    document.getElementById('febrero').classList.remove("pt-page-current");
    document.getElementById('febrero').classList.remove("pt-page-moveToLeft");
    document.getElementById('marzo').classList.remove("pt-page-current");
    document.getElementById('marzo').classList.remove("pt-page-moveToLeft");
    document.getElementById('abril').classList.remove("pt-page-current");
    document.getElementById('abril').classList.remove("pt-page-moveToLeft");
    document.getElementById('mayo').classList.remove("pt-page-current");
    document.getElementById('mayo').classList.remove("pt-page-moveToLeft");
    document.getElementById('junio').classList.remove("pt-page-current");
    document.getElementById('junio').classList.remove("pt-page-moveToLeft");
    document.getElementById('page3').classList.remove("pt-page-moveFromRight");
  }, 700);
}

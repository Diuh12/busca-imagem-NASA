$( "#buscar" ).click(function() {
    let data = $("#data").val()
    console.log("https://api.nasa.gov/planetary/apod?api_key=gmPOeD1W6tCJN08nyOuiXiBuAYbZPPrceILY3uJT&date="+ data);
    let jqxhr = $.get( "https://api.nasa.gov/planetary/apod?api_key=gmPOeD1W6tCJN08nyOuiXiBuAYbZPPrceILY3uJT&date="+ data, function() {
        console.log( "success" );
      })
        .done(function(resposta) {
          console.log( "second success" );
         
            if (resposta.media_type == "image") {
                console.log(data);
                $("#imagem").css("display", "block")
                $('#imagem').attr('src', resposta.url);
            }else{
                console.log(data);
                $("#video").css("display", "block")
                $('#video').attr('src', resposta.url);
            }

         
        })
        .fail(function() {
          console.log( "error" );
        })
        .load(function() {
          console.log( "finished" );
          //$("#imagem").css("visibility", "hidden")
          $("#carregando").css("display", "block")
        });
  });
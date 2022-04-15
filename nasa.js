$("#buscar").click(function () {
  let data = $("#data").val();

  let dataHoje = new Date().toISOString().split("T")[0];
  if (data < "1995-06-16" || data > dataHoje) {
    alert("Data invalida");
  } else {
    $.get(
      "https://api.nasa.gov/planetary/apod?api_key=gmPOeD1W6tCJN08nyOuiXiBuAYbZPPrceILY3uJT&date=" +
        data,
      function () {
        console.log("success");
      }
    )
      .done(function (resposta) {
        console.log("second success");

        if (resposta.media_type == "image") {
          console.log(data);

          $("#video").css("display", "none");
          $(".exibe-imagem").css("display", "flex");

          $("#imagem").attr("src", resposta.url);
        } else {
          $(".exibe-imagem").css("display", "none");
          $("#video").css("display", "block");

          $("#video").attr("src", resposta.url);
        }
      })
      .fail(function () {
        console.log("error");
      });
  }
});
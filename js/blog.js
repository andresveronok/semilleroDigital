export default function articulo(color, titulo, sutitulo, parrafo, linkArticulo, boton){

    if (color == 0){
      var articulo = $('<article></article>').addClass('blog-article blue');
    } else if (color == 1){
      var articulo = $('<article></article>').addClass('blog-article orange');
    } else {
      var articulo = $('<article></article>').addClass('blog-article green');
    }
    var h3 = $('<h3></h3>').addClass('blog-article-title').append(titulo);
    var h4 = $('<h4></h4>').addClass("blog-article-subtitle").append(sutitulo);
    var p = $('<p></p>').addClass('blog-article-text').append(parrafo)
    var a = $('<a></a>').addClass('blog-article-btn').attr('href', linkArticulo).append(boton)
    articulo.append(h3, h4, p, a)
    $('#blog').append(articulo)
}
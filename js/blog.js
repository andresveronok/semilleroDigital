export default function articulo(titulo, sutitulo, parrafo, imagen, descImagen, linkArticulo, boton){
    var articulo = $('<article></article>').addClass('blog-article');
    var divContenedor = $('<div></div>').addClass('blog-article-container row');
    var img = $('<img></img>').attr('src',imagen).attr('alt', descImagen).addClass('col-12 col-lg-5 img-fluid');
    var divHijo = $('<div></div>').addClass('blog-article-text col-12 col-lg-5');
    var h3 = $('<h3></h3>').append(titulo).addClass('blog-article-title');
    var h4 = $('<h4></h4>').append(sutitulo);
    var p = $('<p></p>').append(parrafo);
    var a = $('<a></a>').attr('href', linkArticulo).addClass('blog-article-btn').append(boton);
    articulo.append(h3, divContenedor);
    divContenedor.append(img, divHijo);
    divHijo.append(h4, p, a)
    $('#blog').append(articulo);

}

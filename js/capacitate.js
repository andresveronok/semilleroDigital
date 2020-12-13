let id = 0
let colores = ['#27AEFD', '#FFB300', '#a5df2a']
// 0 = azul 1 = amarillo 2 = verde


export default function tarjetaCursos (tipo, color, nombre, descPlataforma, descDemanda, descEmpleabilidad, imagen, descImagen, linkPrograma){
    // tipo = 0 Empresa, 1 Persona 
    id = id + 1
    let borde = colores[color]
    var crearDivHijo1 = $('<div></div>').addClass('col-lg-8 col-sm-12');
    var crearDivHijo2 = $('<div></div>').addClass('col-lg-4 col-sm-12 cursos__columna');
    var crearH2 = $('<h2></h2>').addClass('col-12 text-center p-3').append(document.createTextNode(nombre));
    var descPlataforma = descPlataforma
    var descDemanda = descDemanda
    var descEmpleabilidad = descEmpleabilidad
    var strong1 = $('<strong>1- Plataforma cercana</strong><br>')
    var strong2 = $('<br><strong>2- Demanda laboral</strong><br>')
    var strong3 = $('<br><strong>3 - Empleabilidad PYME</strong><br>')
    var p = $('<p></p>').append(strong1, descPlataforma,strong2, descDemanda, strong3, descEmpleabilidad)
    var img = $('<img></img>').attr('src',imagen).attr('alt', descImagen).addClass('curso_imagen');
    var button = $('<button>Ver Programa</button>').addClass('col-2 m-auto cursos__boton').attr('id', 'link' + id).attr('onclick', 'location.href="'+ linkPrograma +'" ' );
    if (id % 2 == 0){
        var crearDivPadre = $('<div></div>').addClass('row cursos__fondo m-3').css('border', '5px solid' + borde);
        crearDivPadre.append(crearH2, crearDivHijo1, crearDivHijo2, button);
    }else{
        var crearDivPadre = $('<div></div>').addClass('row cursos__fondo m-3').css('border', '5px solid' + borde);; 
        crearDivPadre.append(crearH2, crearDivHijo2, crearDivHijo1, button);
    }
    crearDivHijo1.append(p);
    crearDivHijo2.append(img);
    if (tipo == 0){
        $('#capacitateEmpresa').after(crearDivPadre)
    }else{
        $('#capacitatePersona').after(crearDivPadre) 
    }
    
}
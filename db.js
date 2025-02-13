
//BASE DE DATOS 
let cervezas = [
    {   "codigo": 1,
        "nombre": "pilsen", 
        "amargor": "Bajo", 
        "graduacion": 3.9, 
        "image":  '/assets/pilsen.jpeg', 
        "detalle": "Una cerveza rubia, suave y muy liviana. Es un sabor ideal para dejar a todes felices en una cena familiar porque es muy rica y muy facil de llevar"
    },
    {   "codigo": 2, 
        "nombre": "coco scotish", 
        "amargor": "Bajo", 
        "graduacion": 4.0, 
        "image": '/assets/cocoscottish.jpeg', 
        "detalle": "Es una cerveza de un rojo intenso, cuerpo, con aromas dulces de las malta y un sutil y agradable aroma a coco. \n\n Sí, leíste bien, tostamos coco y lo usamos en la cerveza que le dejó un sabor tan pero tan agradable que esperamos que sea tu cerveza favorita, te va a encantar!"
    },
    {   "codigo": 3,
        "nombre": "hoppy pilsen", 
        "amargor": "Bajo", 
        "graduacion": 4.8, 
        "image":  '/assets/hoppypilsen.jpeg', 
        "detalle": "Porque a veces la tradicional PILSEN no es suficiente, elaboramos una cerveza similar pero con más lupulo, para que cada trago sientas un rico aroma a frutas tropicales. \n\n  Nuestra HOPPY PILSEN es una cerveza rubia y muy suave. Ideal para quienes buscan una opción refrescante con poco amargor y muy aromática." 
    },
    {   "codigo": 4, 
        "nombre": "ipa argenta", 
        "amargor": "Medio", 
        "graduacion": 5.6, 
        "image": '/assets/ipaargenta.jpeg', 
        "detalle": "Es un estilo que nació en nuestro pais, allá por el 2013, buscando recrear el estilo inglés de la IPA pero utilizando las materias primas que se tenian al alcance (mi país, mi país). \n\n Es para vos si estas buscando una cerveza rubia, amarga, lupulada y por sobre todo, BIEN ARGENTA"
    },
    {   "codigo": 5, 
        "nombre": "ipa session", 
        "amargor": "Bajo", 
        "graduacion": 4.3,
        "image": '/assets/ipasession.jpeg',  
        "detalle": "IPA SESSION es una cerveza simple, sin mucho que decir en apariencia, pero dificil de lograr que sea tan apetitosa. \n\n Se deja tomar con facilidad y te invita a preguntar: me das otra?" 
    },
    {   "codigo": 6, 
        "nombre": "old ale", 
        "amargor": "Alto", 
        "graduacion": 9.0, 
        "image": '/assets/oldale.jpeg', 
        "detalle": "Despues de casi 3 años en una barrica de roble americano, nuestra Old Ale ya esta lista para ser compartida. \n\n Estuvo viajando y compitiendo en algunas copas, y le fue muy bien! \n\n Ganadora de Medalla de Oro en Copa Aluminé 2022 \n\n Ganadora de Medalla de Plata en Copa Patagónica 2022"
    },

    //ACA EMPIEZAN LAS CERVEZAS INVENTADAS POR CHATGPT 
    
     {  
        "codigo": 7, 
        "nombre": "Imperial Stout", 
        "amargor": "Muy Alto", 
        "graduacion": 12.0, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Una cerveza oscura y robusta con un sabor a café tostado y un toque de chocolate. Su alta graduación alcohólica le da un cuerpo potente que se equilibra perfectamente con su amargor."
    },
    {  
        "codigo": 8, 
        "nombre": "IPA Citra", 
        "amargor": "Alto", 
        "graduacion": 6.5, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Una India Pale Ale refrescante y aromática, llena de notas frutales gracias a los lúpulos Citra. Perfecta para aquellos que buscan una cerveza amarga pero con mucha personalidad."
    },
    {  
        "codigo": 9, 
        "nombre": "Witbier", 
        "amargor": "Bajo", 
        "graduacion": 5.2, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Una cerveza de trigo belga con un toque cítrico y especiado. Ligera y refrescante, ideal para los días calurosos de verano. La adición de cáscara de naranja le da un toque único."
    },
    {  
        "codigo": 10, 
        "nombre": "Pilsner", 
        "amargor": "Medio", 
        "graduacion": 4.8, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Una pilsner clásica de sabor limpio y refrescante, con un toque de amargor equilibrado. Es una cerveza de fácil beber que destaca por su claridad y sabor refrescante."
    },
    {  
        "codigo": 11, 
        "nombre": "Saison", 
        "amargor": "Medio", 
        "graduacion": 7.0, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Una cerveza de temporada belga con notas afrutadas y especiadas. Su levadura única le da un sabor ligeramente ácido y muy refrescante, ideal para maridar con platos complejos."
    },
    {  
        "codigo": 12, 
        "nombre": "Porter", 
        "amargor": "Alto", 
        "graduacion": 6.0, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Cerveza oscura con sabores a café, chocolate y malta tostada. El amargor es fuerte, pero equilibrado por su cuerpo denso y su dulzura subyacente. Ideal para disfrutar por la noche."
    },
    {  
        "codigo": 13, 
        "nombre": "Amber Ale", 
        "amargor": "Medio", 
        "graduacion": 5.8, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Una cerveza de color ámbar con un sabor equilibrado entre malta y lúpulo. Sus notas de caramelo y frutos secos le dan un toque distintivo, ideal para acompañar platos a la parrilla."
    },   {  
        "codigo": 14, 
        "nombre": "Saison Dupont", 
        "amargor": "Medio", 
        "graduacion": 6.5, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Una cerveza belga clásica con un perfil afrutado y especiado. Su sabor complejo es perfecto para maridar con quesos curados o platos de carne blanca."
    },
    {  
        "codigo": 15, 
        "nombre": "Pale Ale", 
        "amargor": "Alto", 
        "graduacion": 5.6, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Una cerveza equilibrada con un amargor destacado por el lúpulo. Sus notas de frutas cítricas y flores lo convierten en un clásico entre las cervezas artesanales."
    },
    {  
        "codigo": 16, 
        "nombre": "Red Ale", 
        "amargor": "Medio", 
        "graduacion": 6.0, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Cerveza de color rojo profundo con una mezcla de maltas tostadas y lúpulo suave. Ideal para aquellos que disfrutan de una cerveza con un perfil maltoso pero equilibrado."
    },
    {  
        "codigo": 17, 
        "nombre": "Bock", 
        "amargor": "Bajo", 
        "graduacion": 7.5, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Una cerveza fuerte con un perfil dulce y maltoso. Su graduación alcohólica elevada está equilibrada por sus sabores a malta tostada y un toque de caramelo."
    },
    {  
        "codigo": 18, 
        "nombre": "Blonde Ale", 
        "amargor": "Bajo", 
        "graduacion": 5.0, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Una cerveza suave y ligera, con un perfil ligeramente maltoso. Ideal para aquellos que buscan una opción refrescante y fácil de beber."
    },
    {  
        "codigo": 19, 
        "nombre": "Doppelbock", 
        "amargor": "Bajo", 
        "graduacion": 8.0, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Cerveza oscura y fuerte, con un sabor dulce y maltoso. Sus notas de caramelo y malta tostada le dan una complejidad que la hace perfecta para maridar con platos ricos y especiados."
    },
    {  
        "codigo": 20, 
        "nombre": "Lager", 
        "amargor": "Bajo", 
        "graduacion": 4.5, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Cerveza ligera y refrescante con un amargor bajo. Es la opción ideal para disfrutar en un día caluroso, acompañada de platos ligeros o como aperitivo."
    },
    {  
        "codigo": 21, 
        "nombre": "Hefeweizen", 
        "amargor": "Bajo", 
        "graduacion": 5.4, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Cerveza de trigo alemana con un perfil afrutado y especiado. Su sabor suave y refrescante la hace perfecta para el verano o como acompañante de platos de mariscos."
    },
    {  
        "codigo": 22, 
        "nombre": "Porter Imperial", 
        "amargor": "Alto", 
        "graduacion": 9.5, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Cerveza oscura con sabores intensos a café, chocolate y un toque de licor. Con una alta graduación alcohólica, es perfecta para disfrutar después de una comida pesada."
    },
    {  
        "codigo": 23, 
        "nombre": "Gose", 
        "amargor": "Bajo", 
        "graduacion": 4.8, 
        "image": "/assets/cervezaSinFoto.jpeg", 
        "detalle": "Una cerveza ácida y refrescante, con un toque salino que la hace única. Ideal para quienes buscan una experiencia de sabor diferente y refrescante."
    }
];

module.exports = cervezas;
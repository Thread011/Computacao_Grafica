// @param {float} x ; Valor para translação no eixo do X
// @param {float} y ; Valor para translação no eixo do Y
// @param {float} z ; Valor para translação no eixo do Z
//Devolve um 

function CriarMatrizTranslacao(x, y, z){
    //Matriz de translação final
    return[
        [1, 0, 0, x],
        [0, 1, 0, y],
        [0, 0, 1, z],
        [0, 0, 0, 1]
    ];
}

//@param {float} x
//@param {float} y
//@param {float} z

function CriarMatrizEscala(x, y, z){
    //Matriz de escala final
    return[
        [x, 0, 0, 0],
        [0, y, 0, 0],
        [0, 0, z, 0],
        [0, 0, 0, 1]
    ];
}

//@param {float} angulo

function CriarMatrizRotacaoX(angulo){
    //Seno e cosseno são calculados em radianos, conversão:
    var radianos = angulo * Math.PI/180;
    //Matriz final de rotação no eixo do X
    return[
        [1, 0, 0, 0],
        [0,Math.cos(radianos), -Math.sin(radianos), 0],
        [0, Math.sin(radianos), Math.cos(radianos), 0],
        [0, 0, 0, 1]
    ];
}


//@param {float} angulo

function CriarMatrizRotacaoY(angulo){
    var radianos = angulo * Math.PI/180;
        //Matriz final de rotação no eixo do Y
    return[
        [Math.cos(radianos), 0, Math.sin(radianos), 0],
        [0, 1, 0, 0],
        [-Math.sin(radianos), 0, Math.cos(radianos), 0],
        [0, 0, 0, 1]
    ];
}

//@param {float} angulo

function CriarMatrizRotacaoZ(angulo){
    var radianos = angulo * Math.PI/180;
    //Matriz final de rotação no eixo do Z
    return[
        [Math.cos(radianos), -Math.sin(radianos), 0, 0],
        [Math.sin(radianos), Math.cos(radianos), 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ];
}
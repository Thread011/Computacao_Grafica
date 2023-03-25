function MatrizDeVizualizacao(rightVector, upVector, forwardVector, centerPoint){
    return [
        [rightVector[0],    rightVector[1],     rightVector[2],     -math.multiply(rightVector, centerPoint)],
        [upVector[0],       upVector[1],        upVector[2],        -math.multiply(upVector, centerPoint)],
        [forwardVector[0],  forwardVector[1],   forwardVector[2],   -math.multiply(forwardVector, centerPoint)],
        [0,                 0,                  0,                  1]
    ];
}

function MatrizOrtografica(width, height, nearPlane, farPlane){
    var MatrizOrtografica = [
        [1/width,       0,                0,                                0],
        [0,             1/height,         0,                                0],
        [0,             0,                1/((farPlane/2) - nearPlane),     -nearPlane/((farPlane/2) - nearPlane)],
        [0,             0,                0,                                1]
    ];

    return math.multiply(MatrizOrtografica, CriarMatrizTranslacao(0, 0, -(nearPlane + farPlane / 2)));
}

function MatrizPerspetiva(distance, width, height, nearPlane, farPlane){
    return [
        [distance/width,        0,                  0,                                  0],
        [0,                     distance/height,    0,                                  0],
        [0,                     0,                  farPlane/(farPlane - nearPlane),    -nearPlane*farPlane/(farPlane-nearPlane)],
        [0,                     0,                  1,                                  0]
    ];
}

function MatrizViewPort(minX, maxX, minY, maxY){
    return [
        [(maxX - minX)/2,           0,                  0,          (maxX + minX)/2],
        [0,                         (maxY - minY)/2,    0,          (maxY + minY)/2],
        [0,                         0,                  1,          0],
        [0,                         0,                  0,          1]
    ];
}
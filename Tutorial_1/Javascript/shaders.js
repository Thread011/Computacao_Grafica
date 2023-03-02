//Attributes will receive data from the buffer.
//gl_Position is a special variable a vertex shader
//is responsible for setting.

var codigoVertexShader = [
    'precision mediump float;',
    'attribute vec3 vertexPosition;',
    'attribute vec3 vertexColor;',
    'varying vec3 fragColor;',
    'void main(){',
    '   fragColor= vertexColor;',
    '   gl_Position = vec4(vertexPosition, 1.0);',
    '}'
].join('\n');

// gl_FragColor is a special variable a fragment shader
// is responsible for setting
var codigoFragmentShader = [
    'precision mediump float;',
    'varying vec3 fragColor;',
    'void main(){',
    '   gl_FragColor = vec4(fragColor, 1.0);',
    '}'
].join('\n');


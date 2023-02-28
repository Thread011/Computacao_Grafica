
//Create the canvas element.
//----- ALTERNATIVE ----------
//<canvas id="c"></canvas> (index.html)
//var canvas = document.querySelector("#c"); (app.js)
//----------------------------
var canvas = document.createElement('canvas');

//Dimension of the canvas element.
canvas.height = window.innerHeight - 100;
canvas.width = window.innerWidth - 15;

//Create a WebGLRenderingContext.
var GL = canvas.getContext('webgl');

//Declare vertex & fragment shader types:
var vertexShader = GL.createShader(GL.VERTEX_SHADER);
var fragmentShader = GL.createShader(GL.FRAGMENT_SHADER);

//Declare the program variable:
var program = GL.createProgram();

var gpuArrayBuffer = GL.createBuffer();

//This function prepare & append the canvas to the HTML page.
//First, it colors the background (greyish color), clears buffering variables, and appends.
function PrepareCanvas(){
    GL.clearColor(0.65, 0.65, 0.65, 1.0);

    GL.clear(GL.DEPTH_BUFFER_BIT | GL.COLOR_BUFFER_BIT);

    document.body.appendChild(canvas);

    canvas.insertAdjacentText('afterend', 'O canvas encontra-se acima deste texto!');
}


//Creates shaders, by adding its source, compiling it, and check if compilation is successful
// function createShader(gl, type, source) {
//     var shader = gl.createShader(type);
//     gl.shaderSource(shader, source);
//     gl.compileShader(shader);
//     var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
//     if (success) {
//       return shader;
//     }
   
//     console.log(gl.getShaderInfoLog(shader));
//     gl.deleteShader(shader);
//   }
function PrepareShaders(){
    GL.shaderSource(vertexShader, codigoVertexShader);
    GL.shaderSource(fragmentShader, codigoFragmentShader);


    GL.compileShader(vertexShader);
    GL.compileShader(fragmentShader);

    if(!GL.getShaderParameter(vertexShader, GL.COMPILE_STATUS)){
        console.error("ERRO :: A compilação do vertex shader lançou uma excepção.",
            GL.getShaderInfoLog(vertexShader));
    }


    if(!GL.getShaderParameter(fragmentShader, GL.COMPILE_STATUS)){
        console.error("ERRO :: A compilação do fragment shader lançou uma excepção.",
            GL.getShaderInfoLog(fragmentShader));
    }

}

//Creates the program, composed by vertex & fragment shaders.
// function createProgram(gl, vertexShader, fragmentShader) {
//     var program = gl.createProgram();
//     gl.attachShader(program, vertexShader);
//     gl.attachShader(program, fragmentShader);
//     gl.linkProgram(program);
//     var success = gl.getProgramParameter(program, gl.LINK_STATUS);
//     if (success) {
//       return program;
//     }
   
//     console.log(gl.getProgramInfoLog(program));
//     gl.deleteProgram(program);
//   }

function PrepareProgram(){
    GL.attachShader(program, vertexShader);
    GL.attachShader(program, fragmentShader);

    GL.linkProgram(program);
    if(!GL.getProgramParameter(program, GL.LINK_STATUS)){
        console.error("ERRO :: O linkProgram lançou uma excepção", GL.getProgramInfoLog(program));
    }


    GL.validateProgram(program);
    if(!GL.getProgramParameter(program, GL.VALIDATE_STATUS)){
        console.error("ERRO :: A validação do program lançou uma excepção", GL.getProgramInfoLog(program));
    }

    GL.useProgram(program);
}

//Float array representing 
function PrepareTriangleData(){
    var triangleArray = [
        -0.5,   -0.5,   0.0,    1.0,    0.0,    0.0,
        0.5,    -0.5,   0.0,    0.0,    1.0,    0.0,
        0.0,    0.5,    0.0,    0.0,    0.0,    1.0
    ];

    GL.bindBuffer(GL.ARRAY_BUFFER, gpuArrayBuffer);

    GL.bufferData(
        GL.ARRAY_BUFFER,
        new Float32Array(triangleArray),
        GL.STATIC_DRAW
    );
}

function SendDataToShaders(){
    var vertexPositionAttributeLocation = GL.getAttribLocation(program, "vertexPosition");
    var vertexColorAttributeLocation = GL.getAttribLocation(program, "vertexColor");

    GL.vertexAttribPointer(
        vertexPositionAttributeLocation,
        3,
        GL.FLOAT,
        false,
        0*Float32Array.BYTES_PER_ELEMENT,
        0*Float32Array.BYTES_PER_ELEMENT
    );

    GL.enableVertexAttribArray(vertexPositionAttributeLocation);
    GL.enableVertexAttribArray(vertexColorAttributeLocation);

    GL.useProgram(program);

    GL.drawArrays(
        GL.TRIANGLES,
        0,
        3
    );

}

function Start(){
    PrepareCanvas();
    PrepareShaders();
    PrepareProgram();
    PrepareTriangleData();
    SendDataToShaders();
}
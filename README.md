# Computação Grafica - 2° Semestre

## Tutorial 1 - Grafic application based on WEGL


Shaders are functions that let us control elements drawn. There are two types:

- **vertex shaders** : vertex distances computation, primitive rasterization.
When rasterizing primitives, it calls a second user supplied function:
- **fragment shader** : Responsible of pixels' color computation.

Paired together, they are called *program*. 

Forms to receive data:

- **Buffer & attributes** : data arrays sent to the GPU, w/ infos. about positions, texture coordenates, vertex colors. **Attributes** specify how data from the buffer is used; they specify how to pull data out of the buffer and provide them to the vertex shader.

- **Uniforms** : global variables defined before executing shaders.

- **Textures** : data arrays, based on image data.

- **Varyings** : intermediary variable between *fragment* and *vertex* shader. The values set on a varying by a vertex shader will be interpolated while executing the fragment shader.

---

## Tutorial 1.2 - Grafic application based on ThreeJS




---

### Files:



Source :
    [title](https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html)
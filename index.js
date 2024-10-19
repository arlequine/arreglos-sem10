console.log('hola mundo')

// const arr = [ 1,2,3,4,5,6,7,8,9 ]

// console.log(arr[0])

// const [ x,segundo,tercer,cuarta ] = arr

// console.log(x)
// console.log(segundo)
// console.log(tercer)
// console.log(cuarta)

// const persona = {
//   name: 'Mary',
//   age: 25
// }

// const { name, age } = persona

// console.log(`Hola Soy ${name} y tengo ${age} años`)


// const listaMercado = [ 'limones', 'naranjas', 'sandia', 'leche', 'huevos' ]

// console.log(listaMercado)

// listaMercado.push('aceite')

// console.log(listaMercado)

// const numeros = [ 45,12,89,33,27 ]

// console.log(numeros.sort((a, b) => a - b))


const tareas = []

const agregarTarea = (tarea) => {
  tareas.push({ nombre: tarea, completada: false })
  console.log(`Se agregó la tarea: "${tarea}"`)
}


const eliminarTarea = (indice) => {
  if( indice >= 0 && indice < tareas.length ) {
    console.log(`Se elimino la tarea: ${tareas[indice].nombre}`)
    tareas.splice(indice, 1)
  } else {
    console.log('Indice invalido.')
  }
}

const mostrarTarea = () => {
  console.log('Lista de Tareas.')
  tareas.forEach((tarea, indice) => {
    const estado = tarea.completada ? "✔" : "X"
    console.log(`${indice + 1}: ${tarea.nombre}  [${estado}]`)
  })
}


const marcarTareaCompletada = (indice) => {
  if(indice >= 0 && indice < tareas.length) {
    tareas[indice].completada = true
    console.log(`Tarea completada: "${tareas[indice].nombre}"`)
  } else {
    console.log('Indice invalido')
  }
}

const filtrarTareasCompletadas = () => {
  const tareasCompletadas = tareas.filter( tarea => tarea.completada )
  console.log("Tareas completadas:")
  tareasCompletadas.forEach((tarea, indice) => {
    console.log(`${indice}: ${tarea.nombre} ✔`);
  })
}


agregarTarea("Estudiar JavaScript");
agregarTarea("Practicar algoritmos");
agregarTarea("Leer sobre flexbox y grid");
mostrarTarea()
marcarTareaCompletada(0)
marcarTareaCompletada(1)
mostrarTarea()
eliminarTarea(2)
mostrarTarea()
filtrarTareasCompletadas()
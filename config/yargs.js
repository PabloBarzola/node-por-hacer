const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completada la tarea'
        }
    })
    .command('listar', 'Lista las tareas por hacer')
    .command('borrar', 'Elimina la tarea especificada', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea a eliminar'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
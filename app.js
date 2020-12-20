const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            // console.log(`Proceso Id: ${process.pid} titulo: ${process.title} version: ${process.version} plataforma: ${process.platform}`)
            console.log('=========== Tarea por Hacer ============='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=========================================='.green);
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        if (!actualizado) console.log(`Error no se pudo actualizar la tarea \"${argv.descripcion}\"`.red)
        else console.log(`Se actualizó la tarea \"${argv.descripcion}\" al estado ${argv.completado}`.green);

        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);

        if (!borrado) console.log(`Error no se pudo eliminar la tarea \"${argv.descripcion}\"`.red)
        else console.log(`Se eliminó la tarea \"${argv.descripcion}\"`.green);

        break;
    default:
        console.log('Comando no reconocido');
}
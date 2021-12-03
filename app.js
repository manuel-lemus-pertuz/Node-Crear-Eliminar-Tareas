require('colors');

const { guardarDB, leerDB } = require('./helpers/archivoguardo');
const { 
    inquirerMenu,
    pause,
    leerInput,
    listarTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');
const  Tareas = require('./models/tareas');

console.clear();

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB){ //cargar tareas
        //establecer tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

     do {
         //imprimir el menú
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripción: ')
                tareas.crearTarea( desc );
            break;

            case '2':
                //listar todas las tareas
                tareas.listadoCompleto();
            break;

            case '3':
                //listar tareas completadas
                tareas.listarPendientesCompletadas(true);
            break;

            case '4':
                //listar tareas pendientes
                tareas.listarPendientesCompletadas(false);
            break;

            case '5':
                //asignacion completado
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.cambiarCompletadas(ids);
            break;

            
            case '6':
                //borrar tareas
                const id = await listarTareasBorrar( tareas.listadoArr );

                //pregunta si esta seguro
                
                if ( id !== '0') {
                    const confirm = await confirmar('¿Estas seguro?');
                    if ( confirm ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada correctamente');
                    }

                }
                
            
            break;
        }

        guardarDB( tareas.listadoArr );

        await pause();

     } while ( opt !== '0'); 
    
    //pause();
}

main();
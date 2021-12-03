require('colors');

const mostrarMenu = () => {

    return new Promise( resolve => {
        console.clear();
        console.log('============================='.blue);
        console.log('   Selecciona una opción');
        console.log('============================='.blue);

        console.log(`${'1.'.dim} ${'Crear tarea.'}`);
        console.log(`${'2.'.dim} ${'Listar tareas.'}`);
        console.log(`${'3.'.dim} ${'Listar tareas'} ${'completadas.'.green}`);
        console.log(`${'4.'.dim} ${'Listar tareas'} ${'pendientes.'.yellow}`);
        console.log(`${'5.'.dim} ${'Completar tareas.'}`);
        console.log(`${'6.'.dim} ${'Borrar tarea.'}`);
        console.log(`${'0.'.dim} ${'Salir.'}\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    })
    
}

const pause = () => {

    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        })
    })
    
}

module.exports = {
    mostrarMenu,
    pause
}
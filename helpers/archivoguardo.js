const fs = require('fs');
const archivo = './data/datos.json';

const guardarDB = ( data ) => {
    fs.writeFileSync(archivo, JSON.stringify( data ));
}

const leerDB = () => {

    if( !fs.existsSync( archivo ) ) {   
        return null;
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf8'});
    const data = JSON.parse(info);
    //console.log(data);

    return data; 
}

module.exports = {
    guardarDB,
    leerDB
}
//requireds

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla2 } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla2(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log('Archivo creado:' + ` ${archivo}`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('No funciona');

}


//const fs = require('fs');
// let parametro = argv[2];
// let base = parametro.split('=')[1];
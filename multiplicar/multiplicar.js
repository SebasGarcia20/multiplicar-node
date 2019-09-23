//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla2 = (base, limite = 10) => {

    console.log('================================='.red);
    console.log('======Tabla de multiplcar========'.gray);
    console.log('================================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}




let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        let data = ''

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}`;
        }

        fs.writeFile(`tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla2
}
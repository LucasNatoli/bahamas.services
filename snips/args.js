const cliArgs = process.argv.slice(2);

console.log(cliArgs)

/**
 *    Obtener Cotizaciones segun los parametros recibidos
 */
var list = ""
for (arg in cliArgs) {
    list += cliArgs[arg] + ','
}

console.log(list)
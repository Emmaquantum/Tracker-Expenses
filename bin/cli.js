const { program } = require("command");

//importar los comandos
const addTracker = require("../commands/add");
const deleteTracker = require("../commands/delete");
const ListTracker = require("../commands/delete");
const summaryTracker = require("../commands/summary");

// Versión (opcional, leer desde package.json)
const packageJson = require('../package.json');
program.version(packageJson.version, '-v, --version', 'Mostrar versión');

//comando add
program
    .command("add")
    .description("Agregar un gasto")
    .requiredOption('-d, --description <text>', 'Descripción del gasto')
    .requiredOption('-a, --amount <number>', 'Monto del gasto (número positivo)')
    .action((option) => {
        addTracker(option.description, option.amount);
    });


// Comando delete
program
  .command('delete')
  .description('Elimina un gasto por ID')
  .requiredOption('-i, --id <number>', 'ID del gasto a eliminar')
  .action((options) => {
    deleteTracker(options.id);
  });

// Comando list
program
  .command('list')
  .description('Lista todos los gastos ordenados por fecha (más reciente primero)')
  .action(ListTracker);

// Comando summary
program
  .command('summary')
  .description('Muestra un resumen con total, cantidad y gasto más alto del mes')
  .action(summaryTracker);

// Manejar comandos no reconocidos
program.on('command:*', () => {
  console.error('Comando no reconocido. Usa --help para ver los comandos disponibles.');
  process.exit(1);
});

// Parsear argumentos
program.parse(process.argv);

// Si no hay argumentos, mostrar ayuda
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
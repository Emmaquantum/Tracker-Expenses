// commands/summary.js
const expenseService = require('../services/expense.service');

module.exports = async () => {
  try {
    // Obtener los datos necesarios del servicio
    const summary = await expenseService.getSummary();
    const monthExpenses = await expenseService.getCurrentMonthExpenses();

    console.log('\n RESUMEN DE GASTOS');
    console.log('═'.repeat(40));
    console.log(`   Total gastado:     $${summary.total.toFixed(2)}`);
    console.log(`   Cantidad de gastos: ${summary.count}`);
    console.log(`   Gastos de este mes: ${monthExpenses.length}`);
    
    // Si hay gastos este mes, mostrar el más caro
    if (monthExpenses.length > 0) {
      const max = Math.max(...monthExpenses.map(e => e.amount));
      console.log(`   Mayor gasto del mes: $${max.toFixed(2)}`);
    } else {
      console.log(`   Mayor gasto del mes: --`);
    }

    // Mostrar el promedio de gasto
    if (summary.count > 0) {
      const average = summary.total / summary.count;
      console.log(`   Gasto promedio:      $${average.toFixed(2)}`);
    }

    console.log('═'.repeat(40) + '\n');
  } catch (error) {
    console.error(`\n Error: ${error.message}\n`);
  }
};
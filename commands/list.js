const expenseService = require('../services/expense.service');

module.exports = async () => {
  try {
    const expenses = await expenseService.list();
    
    if (expenses.length === 0) {
      console.log('\n📭 No hay gastos registrados.\n');
      return;
    }

    // Encabezado
    console.log('\n📋 Lista de gastos:');
    console.log('─'.repeat(55));
    console.log(' ID  Descripción           Monto      Fecha');
    console.log('─'.repeat(55));

    // Recorrer cada gasto y mostrarlo
    expenses.forEach((e) => {
      const id = String(e.id).padStart(3);
      const desc = e.description.padEnd(20).slice(0, 20); // Truncar si es muy largo
      const amount = `$${e.amount.toFixed(2)}`.padStart(10);
      const date = new Date(e.createdAt).toLocaleDateString('es-AR');
      console.log(` ${id}  ${desc}  ${amount}  ${date}`);
    });

    console.log('─'.repeat(55));

    // Mostrar el total general
    const total = await expenseService.getTotal();
    console.log(` Total: $${total.toFixed(2)}`);
    console.log(` Total de gastos: ${expenses.length}\n`);
  } catch (error) {
    console.error(`\n Error: ${error.message}\n`);
  }
};
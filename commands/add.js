const expenseService = require('../services/expense_services');

module.exports = async (description, amount) => {
    try{
        const amountNumber = parseFloat(amount);
        const saved = await expenseService.add(description, amount);

        // Mostrar resultado bonito
        console.log('\n Gasto agregado correctamente');
        console.log(`   ID: ${saved.id}`);
        console.log(`   Descripción: ${saved.description}`);
        console.log(`   Monto: $${saved.amount.toFixed(2)}`);
        console.log(`   Fecha: ${new Date(saved.createdAt).toLocaleString('es-AR')}`);
        console.log('');
    } catch(error) {
        console.error(`\n Error: ${error.message}\n`)
    }
}
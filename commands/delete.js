const expenseService = require('../services/expense.service');

module.exports = async (id) => {
  try {
    // Convertir id a número porque viene como string
    const idNumber = parseInt(id, 10);
    
    // Validar que sea un número válido
    if (isNaN(idNumber) || idNumber <= 0) {
      throw new Error('El ID debe ser un número positivo');
    }
    
    // Llamar al servicio que elimina
    const deleted = await expenseService.remove(idNumber);
    
    // Mostrar resultado
    if (deleted) {
      console.log(`\n Gasto con ID ${idNumber} eliminado correctamente.\n`);
    } else {
      console.log(`\n No se encontró ningún gasto con ID ${idNumber}.\n`);
    }
  } catch (error) {
    console.error(`\n Error: ${error.message}\n`);
  }
};
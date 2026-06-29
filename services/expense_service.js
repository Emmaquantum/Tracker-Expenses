const ExpenseModel = require('../models/expense.model');

// Add expenses
const add = async (description, amount) => {
    // Validar que la descripción no esté vacía
    if (!description || description.trim() === "") {
        throw new Error('La descripción no puede estar vacía');
    }

    // Validar que el monto sea un número
    if (typeof amount !== 'number' || isNaN(amount)) {
        throw new Error('El monto debe ser un número válido');
    }

    if (amount <= 0) {
        throw new Error('El monto debe ser mayor a cero');
    }

    // Limpiar la descripción (quitar espacios al inicio/final)
    const cleanDescription = description.trim();

    // Llamar al modelo para guardar en el JSON
    const newExpense = await ExpenseModel.create({
        description: cleanDescription,
        amount: amount
    });

    return newExpense;
};

const list = async () => {
    const expenses = await ExpenseModel.findAll();
    const res = expenses.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
    return res
};

const deleteTracker = async (id) => {
    if(typeof id !== 'number' || isNaN(id) || id <= 0){
        throw new Error("El ID debe ser un número")
    };

    const deleted = await ExpenseModel.deletedById(id);
    return deleted;
};

const summary = async (monthFilter) => {
    const expenses = await ExpenseModel.readDB();
    let expensesToSum = expenses;
    if (monthFilter){
        expensesToSum = expenses.filter(e => {
            const expenseDate = new Date(e.date);
            const expenseMonth = expenseDate.getMonth() + 1;

            return expenseMonth === monthFilter;
        });
    } else {
        const total = expenses.reduce((acum, element) => acum + element.amount, 0);
        return total
    };
};

module.exports = {
    add,
    list,
    deleteTracker,
    summary
}
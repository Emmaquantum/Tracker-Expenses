const fs = require('fs/promises');
const path = require('path');
const config = require('../config/config');

//Aqui se cosntruye la ruta del archivo de gastos
const FULL_PATH = path.join(config.DATA_FOLDER, config.FILE_NAME);

//Modelo
async function readDB(){
    try {
        const data = await fs.readFile(FULL_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") return [];
        throw error;
    }
};

async function writeDB(data) {
    await fs.mkdir(config.DATA_FOLDER, { recursive: true});
    await fs.writeFile(FULL_PATH, JSON.stringify(data, null, 2))
};

async function removeDB(data) {
    try {
        await fs.unlink(FULL_PATH);
        // Esto solo se ejecuta si el borrado fue exitoso
        console.log(`Tarea ${data} eliminada`);
    } catch (error) {
        // Esto captura cualquier error (archivo no encontrado, sin permisos, etc.)
        console.log(`Error al eliminar el archivo: ${error.message}`);
    }
};

const create = async (newExpense) => {

    //Leer el archivo actual (sino existe devuelve [])
    const expenses = await readDB();

    //Generar un nuevo ID y agrega al gasto del array
    const newID = expenses.length > 0 ? Math.max(...expenses.map(e => e.id)) + 1:1;
    expenses.push({ id: newId, ...newExpense });

    //Guardar todo
    await writeDB(expenses)

    return expenses[expenses.length - 1];
};

const findAll = async () => {
    return await readDB();
};

const deletedById = async (id) => {
    const expenses = await readDB();

    //Filtrar la lista
    const updatedExpenses = expenses.filter(expense => expense.id !== id);

    await writeDB(updatedExpenses);

    console.log(`Gasto con ID ${id} eliminado con éxito`);
    return true;
};
# 💰 Expense Tracker CLI

Un rastreador de gastos por línea de comandos (CLI) para gestionar tus finanzas directamente desde tu terminal.

---

## 📖 1. ¿Qué significa cada comando?

Esta herramienta incluye los siguientes comandos principales para administrar tus registros:

* **`add`**: Agrega un nuevo gasto. Te obliga a especificar en qué gastaste (descripción) y cuánto te costó (monto positivo).
* **`delete`**: Elimina un gasto específico de tu registro utilizando su número de ID único.
* **`list`**: Muestra una lista completa de todos los gastos que has registrado, ordenados cronológicamente (el más reciente primero).
* **`summary`**: Muestra un resumen general de tus finanzas del mes. Incluye el dinero total gastado, la cantidad de transacciones hechas y el gasto más caro que tuviste.
* **`-v, --version`**: Muestra la versión actual de la aplicación (tomada del `package.json`).

---

## 🚀 2. Ejemplos de uso

Para estos ejemplos, asumimos que tu archivo principal se llama `index.js`. 

### Agregar un gasto (`add`)
Debes pasar la descripción usando el parámetro `-d` (o `--description`) y el monto con `-a` (o `--amount`).
> `node index.js add -d "Suscripción a Netflix" -a 15.99`

### Eliminar un gasto (`delete`)
Usa el parámetro `-i` (o `--id`) seguido del número de ID del gasto que quieres borrar.
> `node index.js delete -i 3`

### Listar los gastos (`list`)
Simplemente llama al comando sin parámetros adicionales para ver todo el historial.
> `node index.js list`

### Ver el resumen (`summary`)
Llama a este comando para obtener tus estadísticas resumidas.
> `node index.js summary`

> **Nota:** Si en algún momento no recuerdas un comando o quieres ver las opciones disponibles, simplemente ejecuta `node index.js` sin nada más, o usa `node index.js --help`.

---

## ⚙️ 3. Instalación

Sigue estos pasos para instalar y hacer funcionar el proyecto en tu computadora:

1.  **Descarga los archivos** del proyecto o clona este repositorio en tu máquina local.
2.  **Abre tu terminal** y navega hasta la carpeta raíz del proyecto.
3.  **Instala las dependencias** necesarias (como la librería de comandos) ejecutando:
    ```bash
    npm install
    ```
4.  **¡Listo!** Ya puedes empezar a registrar tus gastos utilizando los ejemplos de la sección anterior.


URL consult: https://roadmap.sh/projects/expense-tracker


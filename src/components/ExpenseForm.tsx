import { categories } from "../data/categories";

export default function ExpenseForm() {
    return (
        <form className="space-y-5">
            <legend className="uppercase text-center text-2xl font-black border-b-4 py-2 border-blue-500">
                Nuevo Gasto
            </legend>

            <div className="flex flex-col gap-2">
                <label htmlFor="expenseName" className="text-xl">Nombre Gasto:</label>
                <input
                    type="text"
                    name="expenseName"
                    placeholder="Añade el nombre del gasto"
                    id="expenseName"
                    className="bg-slate-100 p-2"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="text-xl">Cantidad:</label>
                <input
                    type="number"
                    name="amount"
                    placeholder="Añade la cantidad del gasto: ej. 300"
                    id="amount"
                    className="bg-slate-100 p-2"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-xl">Categoría:</label>
                <select
                    name="category"
                    id="category"
                    className="bg-slate-100 p-2"
                >
                    <option value="">-- Seleccione --</option>
                    {categories.map(category => (
                        <option value={category.id} key={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>

            <input
                type="submit"
                value="Registrar Gasto"
                className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
            />
        </form>
    )
}

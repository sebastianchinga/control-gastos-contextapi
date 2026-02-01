import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {

    // Extraemos el state del hook
    const { state } = useBudget();

    const filteredExpenses = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses

    // Validar si expenses es igual a 0 cada vez que state.expenses cambie
    const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses]);

    

    return (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay Gastos</p> : (
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos.</p>
                    {filteredExpenses.map(expense => (
                        <ExpenseDetail key={expense.id} expense={expense}/>
                    ))}
                </>
            )}
        </div>
    )
}

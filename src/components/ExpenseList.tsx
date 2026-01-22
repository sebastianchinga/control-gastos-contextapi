import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {
    // Extraemos el state del hook
    const { state } = useBudget();
    // Validar si expenses es igual a 0 cada vez que state.expenses cambie
    const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);
    return (
        <div className="mt-10">
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay Gastos</p> : (
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos.</p>
                    {state.expenses.map(expense => (
                        <ExpenseDetail key={expense.id} expense={expense}/>
                    ))}
                </>
            )}
        </div>
    )
}

import { useMemo } from "react"
import { formarDate } from "../helpers"
import type { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import { categories } from "../data/categories"

type ExpenseDetailProps = {
    expense: Expense
}

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {
    // Filtramos las categorias que coincidan con expense.categoria y traemos la primera coincidencia del array ([0])
    const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense])
    return (
        <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
            <div>
                {/* Leemos la imagen */}
                <img src={`/icono_${categoryInfo.icon}.svg`} alt="icono gasto" className="w-20" />
            </div>
            <div className="flex-1 space-y-2">
                {/* Mostramos el nombre de la categoria */}
                <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
                <p>{expense.expenseName}</p>
                {/* El ! significa que esta garantizando que el valor existe */}
                <p className="text-slate-600 text-sm">{formarDate(expense.date!.toString())}</p>
            </div>

            <AmountDisplay amount={expense.amount} />
        </div>
    )
}

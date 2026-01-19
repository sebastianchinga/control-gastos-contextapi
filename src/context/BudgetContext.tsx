import { createContext, useReducer, type ReactNode } from "react"
import { budgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budget-reducer"

// Tipado para la creacion del context
type BudgetContextProps = {
    state: BudgetState
    dispatch: React.ActionDispatch<[action: BudgetActions]>
}

// Tipado para el provider
type BudgetProviderProps = {
    children: ReactNode
}

// Creacion del context y su tipado, usamos null! para quitar el error
export const BudgetContext = createContext<BudgetContextProps>(null!);

// Creamos el provider
export const BudgetProvider = ({children}: BudgetProviderProps) => {

    // Instanciamos el state y dispatch del useReducer
    const [state, dispatch] = useReducer(budgetReducer, initialState);

    // Retornamos el context creado y le pasamos sus valores que esperaba en BudgetContextProps: state y dispatch
    return (
        <BudgetContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </BudgetContext.Provider>
    )
}
import type { ReactNode } from "react"

type ErrorMessageProps = {
    children: ReactNode
}

// Puede ser:
// { children }: ErrorMessageProps o { children }: PropsWithChildren
export default function ErrorMessage({ children }: ErrorMessageProps) {
    return (
        <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">{children}</p>
    )
}

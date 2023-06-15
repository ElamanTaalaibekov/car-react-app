import { FC } from "react"

const ErrorMessage: FC<{error?: string}> =({error}) => {
    if (!error) return null

    return ( <p style={{color: 'red'}}>Name is required man</p>)
}

export default ErrorMessage
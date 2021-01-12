import React from 'react'

export const LoginScreen = ( { history } ) => {

    const handleClick = () => {
        
        /** PROTECCIÓN DE RUTA:
         * Voy a reemplazar en la historia que NO visitó el login y
         * ahora llegó al '/'
         */
        history.replace( '/' ); // A que componente quiero que me redireccione
    }

    return (
        <div className="container mt-5">

            <h1>Login Screen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleClick }
            >
                Login
            </button>

        </div>
    )
}

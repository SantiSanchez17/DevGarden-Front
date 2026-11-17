import { Link } from "react-router-dom"

function Login() {
    return (
        <>
            <h1 className="text-4xl text-[#830000] font-bold">Inicia Sesión</h1>
            
            <nav className="mt-4">
                <Link
                    className="text-center text-[#FFCB56] text-sm block"
                    to="/auth/registro"
                >
                    ¿No estas registrado? Crea tu cuenta aqui
                </Link>
            </nav>
        </>
    )
}

export default Login
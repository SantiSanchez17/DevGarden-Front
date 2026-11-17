import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage";
import type { RegisterForm } from "../interfaces/IUser";
import axios, { isAxiosError } from "axios";


function Registro() {
    const initialValues: RegisterForm = {
        name: '',
        handle: '',
        email: '',
        password: '',
        password_com: ''
    }

    const { register, watch, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

    const password = watch('password')

    const handleRegistro = async (formData: RegisterForm) => {
        try {
            const backConexion = import.meta.env.VITE_BACKEND_URL;
            const { data } = await axios.post(`${backConexion}/auth/registro`, formData)
            console.log(data);
        } catch (error) {
            if (isAxiosError(error) && error.response) console.log(error.response.data.error);
            console.log(error);
        }
    }

    return (
        <>
            <h1 className="text-4xl text-[#830000] font-bold">Crear cuenta</h1>
            <form
                onSubmit={handleSubmit(handleRegistro)}
                className="bg-[#8BBB92] px-5 py-4  rounded-lg space-y-3  mt-2"
            >
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="name" className="text-lg text-[#830000]">Nombre</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Nombre Completo"
                        className="bg-[#efe5fb] border-none p-2 rounded-lg placeholder-[#4D2A00]"
                        {...register('name', {
                            required: 'campo obligatorio'
                        })}
                    />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="handle" className="text-lg text-[#830000]">Handle</label>
                    <input
                        id="handle"
                        type="text"
                        placeholder="Usuario"
                        className="bg-[#efe5fb] border-none p-2 rounded-lg placeholder-[#4D2A00]"
                        {...register('handle', {
                            required: 'campo obligatorio'
                        })}
                    />
                    {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="email" className="text-lg text-[#830000]">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Correo de Registro"
                        className="bg-[#efe5fb] border-none p-2 rounded-lg placeholder-[#4D2A00]"
                        {...register('email', {
                            required: 'campo obligatorio',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Correo invalido'
                            }
                        })}
                    />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="password" className="text-lg text-[#830000]">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Contraseña de Registro"
                        className="bg-[#efe5fb] border-none p-2 rounded-lg placeholder-[#4D2A00]"
                        {...register('password', {
                            required: 'campo obligatorio',
                            minLength: {
                                value: 8,
                                message: 'la contraseña debe ser minimo 8 caracteres'
                            }
                        })}
                    />
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </div>

                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="password_confirmation" className="text-lg text-[#830000]">Repetir Password</label>
                    <input
                        id="password_com"
                        type="password"
                        placeholder="Comfirmar Contraseña"
                        className="bg-[#efe5fb] border-none p-2 rounded-lg placeholder-[#4D2A00]"
                        {...register('password_com', {
                            required: 'Comfirme la contraseña',
                            validate: (value) => value === password || 'La contraseña no es igual'
                        })}
                    />
                    {errors.password_com && <ErrorMessage>{errors.password_com.message}</ErrorMessage>}
                </div>

                <input
                    type="submit"
                    className="bg-[#FF933E] p-1 text-lg w-full uppercase text-[#4D2A00] rounded-lg font-bold cursor-pointer"
                    value='Crear Cuenta'

                />
            </form>
            <nav className="mt-4">
                <Link
                    className="text-center text-[#FFCB56] text-sm block"
                    to="/auth/login"
                >
                    ¿Ya estas registrado?
                    Inicia Sesión
                </Link>
            </nav>
        </>
    )
}

export default Registro
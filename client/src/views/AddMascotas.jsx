import { useState } from "react"
import useForm from "../hooks/useForm";
import '../App.css'
import axios from "axios"
import Swal from 'sweetalert2'
import { NavLink, useNavigate } from "react-router-dom"

const AddMascotas = ({EditarMascotas}) => {
    const navegate = useNavigate()
    const initialValues = {
        name: '',
        type: '',
        description: '',
        skill_uno: '',
        skill_dos: '',
        skill_tres: '',
    }
    console.log(initialValues)

    const { values: pet, handleChange } = useForm(initialValues)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/pet', pet)
            .then(res => {
                console.log(res.data.pet)
                navegate("/")
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: "Agregaste un Jugador!!",
                });
                setError("")
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.error.message)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <h1>Refugio de mascotas</h1>
                    <NavLink to="/" className="link-offset-2 link-underline link-underline-opacity-50">Volver a la página principal</NavLink>
                </div>
                <h3>Sabes si una mascota necesita un hogar?</h3>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <div className="text-danger">{error}</div>
                        <div>
                            <label className="mt-3">Nombre de la mascota: </label>
                            <input type="text" className="form-control" name="name" value={pet.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="mt-3">Tipo de mascota: </label>
                            <input type="text" className="form-control" name="type" value={pet.type} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="mt-3">Descripción: </label>
                            <input type="text" className="form-control" name="description" value={pet.description} onChange={handleChange} />
                        </div>
                        <div />
                    </div>
                    <div className="col-6">
                    <h3>Habilidades (opcional)</h3>
                    <div className="text-danger">{error}</div>
                        <div>
                            <label className="mt-3">Habilidad 1: </label>
                            <input type="text" className="form-control" name="skill_uno" value={pet.skill_uno} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="mt-3">Habilidad 2:  </label>
                            <input type="text" className="form-control" name="skill_dos" value={pet.skill_dos} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="mt-3">Habilidad 3:  </label>
                            <input type="text" className="form-control" name="skill_tres" value={pet.skill_tres} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Añadir Mascota</button>
            </form>
        </>
    )
}

export default AddMascotas
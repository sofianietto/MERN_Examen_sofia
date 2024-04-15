import { useParams, Link, NavLink, useNavigate } from "react-router-dom";
import '../App.css'
import useAxios from "../hooks/useAxios";
import moment from 'moment/min/moment-with-locales'; // Importa Moment.js con todos los locales
import Swal from 'sweetalert2'
import EliminarMascotas from "./EliminarMascota";
import Likes from "../componentes/Likes";



const DetalleMascotas = () => {


    const navegate = useNavigate()
    const { id } = useParams();

    const { data, isLoading, error } = useAxios(`http://localhost:8000/api/pet/${id}`)

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    const { Pet } = data

    const successEliminar = (personId) => {
        console.log(personId)
        Swal.fire({
            icon: "success",
            title: "Adoptado!",
            text: "Adoptaste a una mascota!!",
        });
        navegate("/")
    }



    return (

        <>
        <div className="flex container mt-5">
            <h1>Refugio de mascotas</h1>
            <NavLink to="/"  className="link-offset-2 link-underline link-underline-opacity-50">Volver a la página principal</NavLink>
        </div>
        <div className="flex container mt-3">
            <h3>Detalles sobre {Pet.name}</h3>
            <EliminarMascotas petId={Pet._id} successCallback={successEliminar} />
        </div>
        <div className="container">
        <ul className="list-group list-group-flush">
            <li className="list-group-item mt-3 big">Tipo de mascota: {Pet.type}</li>
            <li className="list-group-item mt-3 big">Descripción: {Pet.description}</li>
        </ul>
        </div>
        <div className="container mt-5">
        <h3>Habilidades:</h3>
        <ul className="list-group list-group-flush"> 
            <li className="list-group-item mt-3 big"> {Pet.skill_uno} </li>
            <li className="list-group-item mt-3 big"> {Pet.skill_dos} </li>
            <li className="list-group-item mt-3 big"> {Pet.skill_tres} </li>
        </ul>
        </div>
        <Likes inicio={0}/>
        </>
    )
}

export default DetalleMascotas


import { NavLink } from "react-router-dom"
import useAxios from "../hooks/useAxios"
import '../App.css'

const ListaMascotas = () => {

    const {data, isLoading, error, setData} = useAxios("http://localhost:8000/api/pet")

    if(error){
        return <div>{error.message}</div>
    }

    if(isLoading){
        return <div>Loading...</div>
    }


    return (
        <>
            <div>
                <div className="flex">
                    <h1>Refugio de mascotas</h1>
                    <NavLink to="/new"  className="link-offset-2 link-underline link-underline-opacity-50">Añade una mascota al refugio</NavLink>
                </div>
                <h3>Estas mascotas buscan un hogar con mucho amor!</h3>
                    <hr />
                <table className="mt-4 table table-striped table-hover table-bordered">
                    <thead> 
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((Pet) => (
                            <tr key={Pet._id}>
                                <td>{Pet.name}</td>
                                <td>{Pet.type}</td>
                                <td>{Pet.type}</td>
                                <td>
                                    <NavLink to={`/${Pet._id}`}  className='btn btn-outline-warning'>Detalles</NavLink>
                                    <NavLink to={`/${Pet._id}/update`}  className='btn btn-outline-success ms-5'>Editar</NavLink>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListaMascotas
import axios from "axios"
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';

const EliminarMascota = ({ petId, successCallback }) => {

    const EliminarMascota = (petId) => {

        Swal.fire({
            title: "Seguro que quieres adoptarlo?",
            text: "Estas a punto de adoptar a una mascota.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, quiero adoptarlo!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/pet/${petId}`)
                    .then(res => {
                        console.log(res)
                        successCallback(petId)
                    })
            }
        });
    }

    return (
        <button onClick={() => EliminarMascota(petId)} className="btn btn-outline-success btn-sm">Adoptar mascota</button>
    )
}

EliminarMascota.propTypes = {
    petId: PropTypes.string.isRequired,
    successCallback: PropTypes.func.isRequired
}

export default EliminarMascota
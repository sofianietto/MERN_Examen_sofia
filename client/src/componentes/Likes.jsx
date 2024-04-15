import { useState } from "react";
import PropTypes from 'prop-types';

const Likes = ({inicio}) => {

    // VARIABLES
    const [likes, setLikes] = useState(inicio)


    // MANEJADORES
    const SubirLikes = () => {
        setLikes(likes + 1);
    }

    

    //JSX
    return (
        <div className="mt-4">
            <button 
                onClick={SubirLikes} 
                className={`btn btn-${ (likes > 30)? 'warning':'success' } btn-sm ms-3 `}
            >
                Like!
            </button>
            <span className="container ms-5">Likes: {likes}</span>
        </div>
    )
}

Likes.propTypes = {
    inicio: PropTypes.number.isRequired
};


export default Likes
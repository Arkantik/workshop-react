/**
 * Utiliser un state pour stocker le nombre de donuts consommes par chaque personnage de la serie
 * Ajouter un bouton avec un emoji donu pour mettre a jour le state
 * Afficher la valeur du state a cote du bouton
 */
 import { useState } from 'react'

function Avatar({ image, firstName, lastName }){

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    };

    return ( 
        <figure>
            <img src={image} alt="" />
            <figcaption> {firstName} {lastName} </figcaption>
            <button onClick={handleClick}>🍩</button>
            <span>{count}</span>
        </figure>
    )
};

export default Avatar;
function Avatar({ image, firstName, lastName }){
    return ( 
        <figure>
            <img src={image} alt="" />
            <figcaption> {firstName} {lastName} </figcaption>
        </figure>
    )
};

// function Avatar(props){
//     return ( 
//         <figure>
//             <img src={props.image} alt="" />
//             <figcaption> {props.firstName} {props.lastName} </figcaption>
//         </figure>
//     )
// };


export default Avatar;



// Exemple :

// array = [5,24,42]
// array[0]
// simpsons[0].image

// myObj = {
//  cle1:"val1",
//  cle3:"val1",
//  cle4:"val1",
// }
// myObj.cle1
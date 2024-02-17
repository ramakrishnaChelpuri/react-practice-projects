import "./CoreConcept.css"

function CoreConcept(props){
    return(
        <>
            <li id="core-concepts">
                <img src={props.image} alt={props.title}/>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </li>
        </>
    )
}

export default CoreConcept;
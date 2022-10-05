
const Toto = (props) => {

    // console.log(props);    
    const btnreponseToto = props.leState.messageMama !== null ? (<button onClick={props.reponseToto}>Réponse</button>) : (<button disabled >Réponse</button>);

    return (
        <div>
            <h2>{props.name}</h2>
            {btnreponseToto}
            <p>{props.leState.messageToto}</p>
        </div>
    )
}

export default Toto;

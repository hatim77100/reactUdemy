
export const Welcome = () => {

    const bonjour = () => {
        console.log("Bonjour");
      }
    
    const bonsoir = (arg) => {
        console.log(arg);
    }
    
    return (
        <div>
            <button onClick={bonjour}>function bonjour</button>
            <button onClick={() => bonsoir("bonsoir")}>function avec argument "Bonsoir"</button>
            <button onClick={() => console.log("Bonne nuit")}>function "Bonne nuit"</button>
        </div>
    )
}
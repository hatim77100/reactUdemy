
const Button = ({btnColor, increment, children, handleClic})=>{
    return <button onClick={() => handleClic(increment)} className={`btn btn-${btnColor} mt-4 ms-4`}>+ {increment} %</button>
}

export default Button;
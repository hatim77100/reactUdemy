        
const Btn = ({btnStyle, children, handleClick}) => {
    const CustomBtn = {
      background: "grey",
      border: "none",
      color: "#fff",
      fontSize: "19px",
      padding: "5px 30px",
      textAlign: "center",
      textDecoration: "none",
      borderRadius: "7px",
      display: "block",
      margin: "5px auto",
    };

  return (
    <button
      style={{...CustomBtn, ...btnStyle}}
      onClick={handleClick}
      // onClick={say}
      
    >
      {children}
    </button>
  );
};

export default Btn;



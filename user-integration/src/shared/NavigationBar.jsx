import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NavigationBar = ({ children, setQuery }) => {
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(`/${route}`);
  };
  const handleQuery = (e) =>{
    const query = e.target.value;
    setQuery(query);
  }
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        background:"#5b6ce8",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:"10px"
      }}
    >
      <div style={{ display: "flex", 
        flexDirection:"row",
        justifyContent:"space-around", }}>
        <div
          onClick={() => handleNavigate("")}
          style={{ display: "flex", cursor: "pointer",flexDirection:"row", justifyContent: "space-between",alignItems:"center", width:"100px" }}
        >
          
          <p style={{fontSize:"20px", color:"white"}}>Dashboard</p>
        </div>
        <div
          onClick={() => handleNavigate("Register")}
          style={{ display: "flex", cursor: "pointer" }}
        >
          <p style={{fontSize:"20px", color:"white"}}>Registro</p>
        </div>
        <div style={{alignContent: "center", justifyContent: "center"}}>
            <input
            style={{
              border: "2px black solid",
              width: "150px",
              height: "15px",
              borderRadius: "20px",
              padding:"9px",
              justifyContent:"center",
              paddingLeft:"32px",
              
            }}
            type="text"
            placeholder="Filtrar por nombre"
            onChange={handleQuery}
          />
        </div>
        
      </div>
      {children}
    </div>
  );
};
export default NavigationBar;
import { useNavigate } from "react-router";
import userImage from "../../../assets/userImage.svg"

const Card = ({user}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(user.id);
        navigate(`/users/${user.id}`);
    };

    return (
        <>
        <div>
            <div 
        style = {{
            boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
            backgroundColor:"white",
            width: '230px',
            height: '100px',
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            margin: '20px',
            borderRadius: '10px'
        }}
        onClick={handleClick}
        >
            <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
                <img src={userImage} width={50}  alt="user"/>
            </div>
            <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>

        </div>
        </div>
        </>
    );
};

export default Card;
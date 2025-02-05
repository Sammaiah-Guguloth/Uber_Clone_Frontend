import React , {useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
    const navigate = useNavigate();

    const logoutHandler = async () => {
        const token = localStorage.getItem("token");
        console.log("token : " , token);
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout` , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });

            if(response.status === 200) {
                localStorage.removeItem("token");
                console.log("data : " , response.data);
                navigate("/login");
            }
        }
        catch(error) {
            console.log("Error while logging out the user : " , error);
        }
    }

    useEffect(() => {
        logoutHandler();
    } , []);

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout

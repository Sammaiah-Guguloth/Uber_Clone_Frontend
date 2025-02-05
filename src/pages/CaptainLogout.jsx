import React , {useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {

    const navigate = useNavigate();

    const logoutHandler = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout` , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })

            if(response.status === 200) {
                console.log("response : " , response);
                localStorage.removeItem("token");
                navigate("/captain-login");
            }
        }
        catch(error) {
            console.log("Error while logging out captain : " , error);
        }
    }

    useEffect(() => {
        logoutHandler();
    } , []);


  return (
    <div>CaptainLogout</div>
  )
}

export default CaptainLogout
import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const fetchLogout =()=>{
            try {
                const response = axios.get(`${import.meta.env.VITE_BASE_URL}/auth/logout`,{withCredentials:true})
                navigate('/')
            } catch (error) {
                console.log(error);
            }
        }
        fetchLogout();
    }, [])
    
  return (
    <main>
        <section className='container mx-auto flex justify-center items-center'>
            <h2>Logging Out.....</h2>
        </section>
    </main>
  )
}

export default Logout
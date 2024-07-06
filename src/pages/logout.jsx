import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeLogginStatus } from '../features/login/loginSlice'

const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        const fetchLogout =()=>{
            try {
                const response = axios.get(`${import.meta.env.VITE_BASE_URL}/auth/logout`,{withCredentials:true})
                dispatch(changeLogginStatus(false))
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
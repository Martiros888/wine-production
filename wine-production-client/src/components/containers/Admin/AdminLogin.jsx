import React, { useState, useEffect, memo} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './AdminLogin.scss';
import { post } from '../../Axios/Axios';
import Loader from '../Loader/Loader';
import { AdminToken } from '../AdminToken/AdminToken';

function AdminLogin() {
    const dispatch = useDispatch();
    const history = useHistory()    
    const [state, setState] = useState({
        LoginEmail:'western.alco.co@gmail.com',
        LoginPassword:'hhs13516'
    });
    const [load, setload] = useState(false);
    const changeValue = (e) => {
        setState({
            ...state,
            [e.target.id]:e.target.value
        })
    }
    const AutoLogin =async () =>{
        try {
            if(AdminToken.getToken()){
                setload(true)
                const { name } = await post('/tokenverify',{token:AdminToken.getToken()})
                dispatch({type:'ADMIN',payload:name})
                history.push('/admin')
            }
        } catch(err) {
            setload(false)
            console.log(err)
        }
    }
    useEffect(() => {
        AutoLogin()
    }, []);
    const AdminLogin = async () => {
        try {
            setload(true)
            const token = await post('/adminlogin',state)
            AdminToken.setToken(token)
            const { name } = await post('/tokenverify',{token})
            dispatch({type:'ADMIN',payload:name})
            history.push('/admin')
            setload(false)
        } catch(err) {
            console.log(err)
            setload(false)
        }
    }
    if(load){
        return <Loader/>
    }
    return (
        <>
             <section className='AdminPage'>
                <div className='login'>
                    <span>Please Sign in</span>
                    <input className='form-control' id='LoginEmail' placeholder='email' value={state.LoginEmail} onChange={changeValue} type="text"/>
                    <input className='form-control' id='LoginPassword' placeholder='password' value={state.LoginPassword} onChange={changeValue} type="text"/>
                    <button onClick={AdminLogin} type="button" className="btn btn-primary">login</button>
                </div>
            </section>
        </>
    )
}


export default AdminLogin = memo(AdminLogin);
import React, { useState, useEffect, useMemo, memo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserToken } from '../UserToken/UserToken';
import { post } from '../../Axios/Axios';
import Loader from '../Loader/Loader';

function Login() {

    const dispatch = useDispatch();
    const [load, setload] = useState(false);    
    const [state, setState] = useState({
        loginEmail:'harutunyan.martiros@mail.ru',
        loginPassword:'hhs13516',
    });
    const changeValue = (e) => {
        setState({...state,[e.target.id]:e.target.value})
        console.log(state)
    }
    const UserLogin =async () => {
        try {
            setload(true)
            const token = await post('/login',{state})
            const User = await post('/usertokenverify',{token})
            UserToken.LoginToken(token);
            dispatch({type:"USER", payload:User.name});
            dispatch({type:'DATA',payload:User});
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
            <section className=''>
                <div className='login'>
                    <span>Please Sign in</span>
                    <input className='form-control' id='LoginEmail' placeholder='email' value={state.loginEmail} onChange={changeValue} type="text"/>
                    <input className='form-control' id='LoginPassword' placeholder='password' value={state.loginPassword} onChange={changeValue} type="text"/>
                    <button onClick={UserLogin} type="button" className="btn btn-primary">login</button>
                </div>
            </section>
        </>
    )
}


export default Login = memo(Login);
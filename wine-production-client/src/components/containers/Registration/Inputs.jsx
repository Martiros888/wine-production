import React, { useState, useEffect, useMemo, useRef, memo, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import VerificationArea from "./VerificatonArea";
import Loader from "../Loader/Loader";
import {post} from '../../Axios/Axios';

let Inputs = () => {
    const dispatch = useDispatch();
    const [state, setstate] = useState({
        name: "Martiros",
        surname: "Harutunyan",
        email: "harutunyan.martiros@mail.ru",
        password: "hhs13516",
        confirmPassword: "hhs13516",
        verificationCode: "",
        phone:''
    });
    const verify = useSelector((state) => state.Reducer.verify);
    const [code, setcode] = useState('');
    const [load, setload] = useState(false);
    const [timer, settimer] = useState('');
    const changeValue = useMemo(() => {
        return (e)=> {
            setstate({...state,[e.target.id]:e.target.value})
        }
    }, [state]);
    const clear = () => {
        setstate({
            confirmPassword:'',
            email:'',
            name:'',
            password:'',
            surname:'',
            verificationCode:''
        })
        dispatch({type:"VERIFY",payload:true})
    }
    const timerStart = () => {
        settimer(60);
        let x = 60;
        let interval = setInterval(() => {
            if(x === 0){
                setcode('')
                setstate({...state,verificationCode:''})
                dispatch({type:"VERIFY",payload:true})
                clearInterval(interval)
            }
            settimer(x-1);
            x--
        }, 1000);
    };
    const Registration =async () => {
        try {
            setload(true)
            const data = await post('/checkuser',state)
            setload(false)
            console.log(data)
            setcode(data)
            dispatch({type:"VERIFY",payload:false})
            timerStart()
        } catch(err) {
            console.log(err)
            setload(false)
        }
    }
    if (load) {
        return <Loader/>
    }
    return (
        <>
            <section className="">
                <div className="registracia">
                    <div style={{ fontSize: "2vw" }}>Registracia</div>
                    <input
                        onChange={changeValue}
                        value={state.name}
                        placeholder="name"
                        type="text"
                        id="name"
                    />
                    <input
                        onChange={changeValue}
                        value={state.surname}
                        placeholder="surname"
                        type="text"
                        id="surname"
                    />
                    <input
                        onChange={changeValue}
                        value={state.email}
                        placeholder="email"
                        type="text"
                        id="email"
                    />
                    <input
                        onChange={changeValue}
                        value={state.phone}
                        placeholder="phone"
                        type="text"
                        id="phone"
                    />
                    <input
                        onChange={changeValue}
                        value={state.password}
                        placeholder="password"
                        type="password"
                        id="password"
                    />
                    <input
                        onChange={changeValue}
                        value={state.confirmPassword}
                        placeholder="confirm Password"
                        type="password"
                        id="confirmPassword"
                    />
                    
                    <button
                        onClick={Registration}
                        disabled={
                            state.name.trim() &&
                            state.surname.trim() &&
                            state.email.trim() &&
                            state.password.trim() &&
                            state.confirmPassword.trim() &&
                            state.phone && 
                            state.confirmPassword === state.password &&
                            state.password.length >= 8 &&
                            state.confirmPassword.length >= 8
                                ? false
                                : true
                        }
                    >
                        click
                    </button>
                    {verify ? null : <VerificationArea timer={timer} code={code} state={state} changeValue={changeValue}/> }
                    <button onClick={clear}>clear</button>
                </div>
            </section>
        </>
    );
};

export default Inputs = memo(Inputs);

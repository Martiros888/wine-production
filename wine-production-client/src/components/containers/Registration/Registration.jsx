import React, { useState, useEffect, useMemo, memo } from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get, post } from "../../Axios/Axios";
import { UserToken } from '../UserToken/UserToken';
import Loader from '../Loader/Loader';
import Inputs from './Inputs';




function Registration() {
    const dispatch = useDispatch();
    const [load, setload] = useState(false);
    const setUsers =async () =>{
        try {
            const arr = await get('/getusers')
            console.log(arr)
            setarr(arr)   
        } catch(err) {
            setload(false)
            console.log(err)
        }     
    }
    useEffect(() => {
        setUsers()
    }, [load]);
    const [arr, setarr] = useState([]);
    const UserDelete =async (email) => {
        setload(false)
        let data = await post('/deleteuser',email)
        console.log(data)
        setload(true)
    }
    if (load) {
        return <Loader/>
    }
    return (
        <>
            <section className='div'> 
            <Inputs/>
            {arr.map(
                    (elem, i) => {
                        return (
                            <div key={elem.id}>
                                <p>{elem.email}</p>
                                <p>{elem.password}</p>
                                <button onClick={UserDelete.bind(null,elem.email)}>delete</button>
                            </div>
                        );
                    },
            )}
            </section>
        </>
    )
}

export default Registration = memo(Registration);
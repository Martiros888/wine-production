import React, { useState, useEffect, useMemo, useRef, memo, FC } from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { post } from "../../Axios/Axios";


let VerificationArea = ({ changeValue, state, code, timer }) => {
    const dispatch = useDispatch()
    const [load, setload] = useState(false);
    const SaveUser = async () => {
        try {
            setload(true);
            let res = await post('/saveuser',{state,code});
            console.log(res);
            setload(false);
            dispatch({type:'VERIFY',payload:true})
        } catch(err) {
            console.log(err)
            setload(false)
        }
    };
    if (load) {
        return <Loader/>
    }
    return (
        <>
            <section className="">
                <input
                    type="text"
                    onChange={changeValue}
                    value={state.verificationCode}
                    id="verificationCode"
                />
                <button onClick={SaveUser}>click for verification</button>
                {timer ? `timer: ${timer}` : null}
            </section>
        </>
    );
};

export default VerificationArea = memo(VerificationArea);

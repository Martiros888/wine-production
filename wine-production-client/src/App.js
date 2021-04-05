import React, { useState, useEffect, useMemo, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { UserToken } from "./components/containers/UserToken/UserToken";
import Navigation from "./components/routs/navigation";
import Routs from "./components/routs/routner";
import { post, get } from "./components/Axios/Axios";

function App() {
    const dispatch = useDispatch();
    const AutoLoginAndGetWines = async () => {
        try {
            const wines = await get("/getwines");
            if (UserToken.isLogin()) {
                const data = await post("/usertokenverify", {
                    token: UserToken.isLogin(),
                });
                dispatch({ type: "USER", payload: data.name });
                dispatch({ type: "DATA", payload: data });
                const { wines: WinesString } = data;
                if (WinesString) {
                    const basketWines = JSON.parse(WinesString);
                    let homeWines = wines;
                    basketWines.forEach((elem) => {
                        homeWines = homeWines.filter(e=>e.name!==elem.name)
                    });
                    dispatch({type:'BASKET',payload:basketWines})
                    dispatch({type:"WINES",payload:homeWines});
                    return 
                }
                dispatch({ type: "WINES", payload: wines });
            }
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        AutoLoginAndGetWines();
    }, []);
    return (
        <>
            <Navigation />
            <Routs />
        </>
    );
}

export default App = memo(App);

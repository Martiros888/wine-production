import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Switch, NavLink, Link,Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../containers/Loader/Loader';
const HomePage = lazy(()=>import('../containers/Home/HomePage'))
const AboutPage = lazy(()=>import('../containers/About/AboutPage'))
const ContactPage = lazy(()=>import('../containers/Contact/ContactPage'))
const BasketPage = lazy(()=>import('../containers/Basket/BasketPage'))
const AdminLoginPage = lazy(()=>import('../containers/Admin/AdminLogin'))
const AdminHomePage = lazy(()=>import('../containers/Admin/AdminHomePage/AdminHomePage'))
const Login = lazy(()=>import('../containers/Login/Login'))
const Registration = lazy(()=>import('../containers/Registration/Registration'))


function Routs() {
    
    const dispatch = useDispatch()

    const email = useSelector(state => state.Reducer.Admin)
    const user = useSelector(state => state.Reducer.user);

    return (
        <Suspense fallback={<Loader/>}>
            <Switch>
                <Route exact path='/'><HomePage/></Route>
                <Route path='/about'><AboutPage/></Route>
                <Route path='/contact'><ContactPage/></Route>
                <Route path='/admin-login'><AdminLoginPage/></Route>
                <Route path='/login'><Login/></Route>
                <Route path='/registration'><Registration/></Route>
                {user?<Route path='/basket'><BasketPage/></Route>:null}
                {email?<Route path='/admin'><AdminHomePage/></Route>:null}                
                <Redirect to='/' />
            </Switch>
        </Suspense>
    )
}
export default Routs
import React, { useState, useEffect, useMemo, memo, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get, post } from '../../Axios/Axios';
import './HomePage.scss';
import WineCard from '../WineCard/WineCard';


function HomePage() {
    const wines = useSelector(state => state.Reducer.wines);
    const data = useSelector(state => state.Reducer.data);
    const dispatch = useDispatch();
    const AddToBasket =async (elem) => {
        dispatch({type:"ADDTOBASKET",payload:elem})
        const res = await post('/basket/add',{data,wine:elem})
    }
    
    return (
        <>
            <section className='HomePage'>
               Hello you are in Home 
               <section style={{marginTop:'3vw'}} className='products'>
                    {wines.map((elem,i)=> {
                        return (
                            <Fragment key={i}>
                                <WineCard elem={elem}/>
                                {data?<button onClick={AddToBasket.bind(null,elem)}>click for adding</button>:null}
                            </Fragment>
                        )
                    })}
                </section>
            </section>
        </>
    )
}


export default HomePage = memo(HomePage);
        
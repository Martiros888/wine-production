import React, { useState, useEffect, useMemo, memo, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './BasketPage.scss';
import WineCard from '../WineCard/WineCard';

function BasketPage() {
    const dispatch = useDispatch()
    const wines = useSelector(state => state.Reducer.BasketWines);
    const DeleteFromBasket = (elem) => {
        dispatch({type:"DELETEFROMBASKET",payload:elem})
    }
    return (
        <>
            <section className='BasketPage'>
                Hello you are in Basket 
                <section style={{marginTop:'3vw'}} className='products'>
                    {wines.map((elem,i)=> {
                        return (
                            <Fragment key={i}>
                                <WineCard elem={elem}/>
                                <button onClick={DeleteFromBasket.bind(null,elem)}>delete From Basket</button>
                            </Fragment>
                        )
                    })}
                </section>
            </section>
        </>
    )
}


export default BasketPage = memo(BasketPage);
        
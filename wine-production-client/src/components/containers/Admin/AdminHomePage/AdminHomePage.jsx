import React, { useState, useEffect, useMemo, memo, Fragment} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AdminToken } from '../../AdminToken/AdminToken';
import Loader from '../../Loader/Loader';
import { post, get } from '../../../Axios/Axios';
import WineCard from '../../WineCard/WineCard';
import '../../WineCard/main.css';


function AdminHomePage() {
    const [load, setload] = useState(false);
    const [wines, setwines] = useState([]);
    const getWines =async () =>{
        const data = await get('/getwines')
        console.log(data)
        setwines(data)
    }
    useEffect(() => {
        getWines()
    },[load]);
    const Logout = () => {
        AdminToken.deleteToken()
        dispatch({type:'ADMIN',payload:''})
        history.push('/')
    }
    const name = useSelector(state => state.Reducer.Admin);
    const dispatch = useDispatch()
    const history = useHistory()
    const [state, setstate] = useState({
        name:'',
        loudness:'',
        type:'',
        description:'',
        price:'',
    });
    const [image, setimage] = useState('');
    const changeValue = (e) =>{
        setstate({
            ...state,
            [e.target.id]:e.target.value
        })
    }
    const setFile = (e) => {
        setimage(e.target.files[0])
    }
    const AddWine = async () =>{
        try {
            setload(true)
            const data = new FormData()
            data.append('wine_image',image)
            data.append('name',state.name)
            data.append('loudness',state.loudness)
            data.append('type',state.type)
            data.append('description',state.description)
            data.append('price',state.price)
            const res = await post('/addwine',data)
            console.log(res)
            setload(false)
        } catch(err) {
            console.log(err)
            setload(false)
        }
    }

    const DeleteWines =async (e) => {
        setload(true)
        const data = await post('/deletewine',{name:e.name,image_path:e.image_path})
        setload(false)
    }
    if(load){
        return <Loader/>
    }
    return (
        <>
            <section className=''>
                hello {name}
                <button onClick={Logout}>logout</button>

                <div style={{marginTop:'2vw'}}>
                    <input value={state.name} placeholder='անուն' id='name' onChange={changeValue} type="text"/>
                    <input value={state.price} placeholder='գին' id='price' onChange={changeValue} type="text"/>
                    <input value={state.description} placeholder='նկարագրություն' id='description' onChange={changeValue} type="text"/>
                    <input value={state.loudness} placeholder='թնդություն' id='loudness' onChange={changeValue} type="text"/>
                    <input value={state.type} placeholder='տեսակ' id='type' onChange={changeValue} type="text"/>
                    <input value={state.image} placeholder='նկար' id='image' onChange={setFile} type='file'/>
                    <button onClick={AddWine} disabled={state.name.trim() && state.price.trim() && state.type.trim() && state.loudness.trim() && state.description.trim() && image ? false : true}>AddWine</button>
                </div>

                <section style={{marginTop:'3vw'}} className='products'>
                    {wines.map((elem,i)=> {
                        return (
                            <Fragment key={i}>
                                <WineCard elem={elem}/>
                                <button onClick={DeleteWines.bind(null,elem)}>click for delete</button>
                            </Fragment>
                        )
                    })}
                </section>
            </section>
        </>
    )
}


export default AdminHomePage = memo(AdminHomePage);
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBooks} from "../../redux/action/catalogActions";
import Spinner from "../Spinner";

const BooksCatalog = () => {
    const dispatch = useDispatch()
    const{books,loading,errors} = useSelector(store => store.catalog)
    useEffect( () => {
dispatch(getBooks())
    },[dispatch])
    if (loading){
        return  <Spinner/>
    }
    return (
        <div className='row'>

            {
                books.map(item =>
<div className='col-md-4' key={item.id}>
    <div className="card" >
        <img src={item.coverImage} className="card-img-top w-100 book-height" alt={item.author}/>
            <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                <p className="card-text">Price{item.price} $</p>
                <button  className="btn btn-primary">Add to cart</button>
            </div>
    </div>

</div>
                )
            }
        </div>
    );
};

export default BooksCatalog;
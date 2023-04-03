import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MdStarRate } from 'react-icons/Md';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addCART } from '../redux/action';



const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCART(product))
    }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
        setLoading(false);

    }, [])

    return (
        loading ?
            <div class="col-md-6" style={{ lineHeight: 2 }}>
                <Skeleton height={400} />
                <Skeleton height={50} width={50} />
                <Skeleton height={75} />

            </div>

            :

            <div className="countainer py-5">
                <div className='row py-4'>

                    <div className="col-md-6">
                        <img src={product.image} alt={product.title} height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <h4 className='text-uppercase text-black-50'>{product.category}</h4>

                        <h1 className='display-5'>{product.title}</h1>
                        <p className='lead'>
                            Rating {product.rating && product.rating.rate}
                            <MdStarRate />
                        </p>
                        <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                        <p className='lead'>{product.description}</p>
                        <button className='btn btn-outline-dark' onClick={() => addProduct(product)}>add to cart</button>
                        <Link to="/Cart" className="btn btn-dark ms-2 px-3 py-2">Go to cart</Link>
                    </div>
                </div>
            </div>
    )
}






export default Product;



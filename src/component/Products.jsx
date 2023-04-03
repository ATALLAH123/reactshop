import React from 'react'
import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';


export default function products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(true);
    let componentMounted = true;

    useEffect(() => {

        const getProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);

            }
            return () => {
                componentMounted = false;
            }

        }
        getProducts();

    }, []);


    const Loading = () => {
        return (
            <><div class="dot-spinner">
                <div class="dot-spinner__dot"> </div>
                <div class="dot-spinner__dot"> </div>
                <div class="dot-spinner__dot"> </div>
                <div class="dot-spinner__dot"> </div>
                <div class="dot-spinner__dot"> </div>
                <div class="dot-spinner__dot"> </div>
                <div class="dot-spinner__dot"> </div>
                <div class="dot-spinner__dot"> </div>
            </div>
            </>
        )
    }
    const filterProduct = (cat) => {
        const updatedList = data.filter((e) => e.category === cat);
        setFilter(updatedList);
    };

    const Showproducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>men's clothing </button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>women's clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>jewelery </button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>electronics</button>
                </div>
                {
                    filter.map((product) => {
                        return (
                            <>
                                <div className="col-md-3 mb-4 ">
                                    <div className="card h-100 text-center p-4" key={product.id}>
                                        <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title}</h5>
                                            <h5 className="card-text lead">{product.description}</h5>
                                            <p className="card-text lead fw-bold">${product.price}</p>
                                            <Link to={`/product/${product.id}`} className="btn btn-outline-dark">buy now </Link>
                                        </div>
                                    </div>
                                </div>
                            </>

                        );
                    }
                    )
                }
            </>
        )

    }
    return (
        <div>
            <div className="countainer my-3 py-3">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest products</h1><hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {(loading ? <Loading /> : <Showproducts />)}
                </div>

            </div>
        </div>
    )
}

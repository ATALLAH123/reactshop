import React from 'react'
// import FontAwesomeIcon from 'fortawesome/react-fontawesome'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/Fi';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Product from './product';
import Cart from './Cart';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const state = useSelector((state) => state.handleCart)
    return (
        <div><nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm mb-1">
            <div class="container">
                <Link class="navbar-brand fw-bold fs-4" to={"/Home"}>SHOPILIDZAIR</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to={"/Home"}>Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to={"/Products"}>products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/about"}>about</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/contact"}>contact</Link>
                        </li>


                    </ul>
                    <div class="buttons">
                        <Link to={"/login"} class="btn btn-outline-dark ms-2"> <FiLogIn />login</Link>
                        <Link to={"/register"} class="btn btn-outline-dark ms-2"><FiLogIn /> register</Link>
                        <Link to={"/Cart"} class="btn btn-outline-dark ms-2"><AiOutlineShoppingCart /> cart ({state.length})</Link>
                    </div>
                </div>

            </div>
        </nav>
            <Routes>
                <Route path='/Home' element={<Home />} />
                <Route path='/Products' element={<Products />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/Cart' element={<Cart />} />
            </Routes>

        </div>

    )
}

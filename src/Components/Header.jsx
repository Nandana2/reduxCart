import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import wishlistReducer from '../Redux/store'
import cartReducer from '../Redux/store'
import { searchProducts } from '../slices/productSlice'

function Header() {


const dispatch=useDispatch()
  const wishlist=useSelector(state=>state.wishlistReducer)
  const cartlist=useSelector(state=>state.cartReducer)
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to={'/'}>ReduxCart</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   
                      <div className='me-auto ms-5'>
                        <input type="search" className='form-control' placeholder='Enter keyword for search  ' onChange={(e) => {dispatch(searchProducts(e.target.value))}} />

                        </div> 
                           
                   
                    <form className="d-flex gap-3">
                        
                         <Link className="btn btn-outline-dark" to={'/wishlist'}>
                          <i className="fa-solid fa-heart" style={{color:' #85260f'}}></i>
                            Wishlist
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{wishlist?.length}</span>
                        </Link>
                         <Link className="btn btn-outline-dark" to={'/carts'}>
                          <i className="fa-solid fa-cart-shopping" style={{color:'#301877'}}></i>

                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartlist?.length}</span>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header

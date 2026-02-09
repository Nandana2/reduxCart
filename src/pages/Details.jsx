import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { addToWishlist } from '../slices/wishlistSlice'

function Details() {

const[productObj,setProductObj]=useState({})
const {id}=useParams()
console.log(id)

useEffect(()=>{
getData()
},[])

const dispatch=useDispatch()

const getData=()=>{
    const products=localStorage.getItem('products')
    const prod=JSON.parse(products).find(items=>items.id==id)
    console.log(prod)
    setProductObj(prod)

}


  return (
    <>
       <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                
                    
                         <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={productObj?.thumbnail} alt="..." /></div>
                    <div class="col-md-6">
                        <div class="small mb-1">ID: {productObj?.id}</div>
                        <h1 class="display-5 fw-bolder">{productObj?.title}</h1>
                        <div class="fs-5 mb-5">
                            <span>${productObj?.price}</span>
                        </div>
                        <p class="lead">{productObj?.description}</p>
                        <div class="d-flex justify-content-between">
                            <button className='btn'>
                               <i className="fa-solid fa-heart-circle-plus fa-2xl" style={{color:'#801b14'}} onClick={()=>(dispatch(addToWishlist(productObj)))}></i>
                                </button>
                                <button className='btn'>
                                    <i className="fa-solid fa-cart-plus fa-2xl" style={{color:'#101451'}}></i>
                                </button>
                            
                        </div>
                    </div>
                </div>
                    
                

            </div>
        </section>
    </>
  )
}

export default Details

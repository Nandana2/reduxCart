import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cartReducer from '../Redux/store'
import { decrementQuantity, incrementQuantity, removeFromCart,checkout } from '../slices/cartSlice'

function Carts() {

const cart =useSelector(state=>state.cartReducer)
 const dispatch=useDispatch()

  return (
    <>
      <div className="container-fluid">
        <h2 className='mb-3'>Cart Summary</h2>
        <div className='row'>
              <div className='col sm-12 col-md-8'>
                {
                  cart?.length >0 ?
                    <table className='table table-bordered shadow'>
                     <thead>
                      <tr>
                        <th>ID</th>
                       <th>Product Title </th>
                       <th>Image</th>
                        <th>Unit Price </th>
                         <th>Quantity</th>
                          <th>Total Price </th>
                           <th></th>
                      </tr>
                     </thead>
                     <tbody>
                      {
                         cart?.map(items => (
                       <tr>
                        <td>{items.id}</td>
                       <td>{items.title}</td>
                       <td>
                        <img src={items.thumbnail} alt="product" className='img-fluid' />
                       </td>
                        <td>{items.price}</td>
                         <td>
                          <button className="btn" onClick={()=>{dispatch(incrementQuantity(items.id))}}>+</button>
                            <input type="text" className="form-control form-inline" value={items.quantity}/>
                           <button className="btn" onClick={()=>{dispatch(decrementQuantity(items.id))}}>-</button>
   
                         </td>
                          <td>{items.price*items.quantity} </td>
                           <td>
                            <button className='btn'>
                              <i class="fa-solid fa-trash" style={{color:' #da3f0b'}} onClick={()=>{dispatch(removeFromCart(items.id))}}></i>
                            </button>
                           </td>
                      </tr>
                         ))
}
                     </tbody>
                  </table>
                
                  :
                  <div>
                    <h2 className='text-center text-danger'>NO PRODUCTS ADDED IN THE CART</h2>
                  </div>
}
              </div>
              <div className='col-sm-12 col-md-4 '>
              <div className='p-2 border border-3 shadow ' >
                 <h4>Total Products : <span className='text-info'>{cart?.length}</span></h4>
                 <h4>Total Price : <span className='text-success'>{
                  cart?.reduce((prev,item)=>prev+(item.quantity*item.price),0)
                  }</span></h4>
                  <div className='d-grid'>
                   <button className="btn btn-success" onClick={()=>{dispatch(checkout())}}>CHECKOUT</button>
                  </div>
              </div>
              </div>
        </div>
      </div>
    </>
  )
}

export default Carts

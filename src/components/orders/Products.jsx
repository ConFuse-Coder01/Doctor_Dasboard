import React, { useState } from 'react'

const Products = () => {
  const [addressArray,setAddressArray]=useState([]);
  const [address, setAddress]=useState(addressArray.length > 0 ? addressArray[0] : {}) ;
  

  const [addExpand,setAddExpand]=useState(false)
  const [productExpand,setProductExpand]=useState(true)
  const [paymentExpand,setPaymentExpand]=useState(false)

  const togglePoduct=()=>{
    setProductExpand(!productExpand)
   // if(productExpand==true)
    setAddExpand(false)
    setPaymentExpand(productExpand)
  }

  const togglePayment=()=>{
    setPaymentExpand(!paymentExpand)
    setProductExpand(paymentExpand)
    setAddExpand(paymentExpand)
  }

  const toggleAddressbar=()=>{
    setAddExpand(!addExpand);
    setProductExpand(addExpand)
    setPaymentExpand(addExpand)
  }
  
  const handleSelectedAdd=(selectedAddress)=>{
      setAddress(selectedAddress);
      setAddExpand(false);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const addressObject = {};
    formData.forEach((value, key) => {
      addressObject[key] = value;
    });
    setAddressArray([...addressArray, addressObject]);
    event.target.reset();
  };


    const products = [
        {
            image: 'https://res.cloudinary.com/du8msdgbj/image/upload/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/v1460448326/fqhutvgaohwhrti9ang3.png',
            name: 'Product 1',
            description: 'Description of Product 1',
            price: 10.99,
            quantity: 1
        },
        {
            image: 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol-reborn/en_IN/product-detail/380x463/Crocin-240-Suspension--100ml-Bottle.png?auto=format',
            name: 'Product 2',
            description: 'Description of Product 2',
            price: 15.99,
            quantity: 1
        },
        {
            image: 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol-reborn/en_IN/product-detail/380x463/Crocin-240-Suspension--100ml-Bottle.png?auto=format',
            name: 'Product 2',
            description: 'Description of Product 2',
            price: 15.99,
            quantity: 1
        },
        // Add more products here as needed
    ];

    return (

      <div className='flex w-full text-center justify-center bg-gray-100 p-12 h-screen'>
        <div className='overflow-y-auto flex flex-col w-2/3 mx-2'>
        <div className=' bg-white-300 bg-white mb-2 p-4'>
          <div className='flex justify-between'>
            {Object.keys(address).length>0?(<div className='flex flex-col'>
            <div className='flex mt-2'>
              Delivery to:<span className='font-bold'>{address.name}</span> <span className="mx-1 bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-300 dark:text-gray-700">Home</span> <span className=''>{address.mobile}</span>
              </div>
              <div className='flex mt-2'>
              <p className='font-light'>HIG-143,Sailashree Vihar, {address.city},{address.pincode}</p>              
              </div>
            </div>) :( <p className='text-red-600 font-bold text-lg'>No address provided</p>)}
            
            <div>
              <button className='px-3 py-2 bg-violet-500 text-white' onClick={toggleAddressbar}>+ADD</button>
            </div>
          </div>
          {addExpand && (
            <>
            <hr />
                      
            <div className={`bg-white-300 bg-white mb-1 p-4 transition-all duration-500 ${addExpand ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
             <div className='mx-6 my-4 p-6 flex flex-col'>
           {
           addressArray.map((addressElement,index)=>(
            <div className='border-b pb-2'>
              <div className='flex'>
                <input type="radio" className='mx-2 text-lg font-semibold' onChange={()=>handleSelectedAdd(addressElement)} />
                <div className='flex flex-col mt-5'>
                  <div className='flex mt-2'>
                    Delivery to:<span className='font-bold'>{addressElement.name}</span> <span className="mx-1 bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-300 dark:text-gray-700">Home</span> <span className=''>{addressElement.mobile}</span>
                  </div>
                  <div className='flex mt-2'>
                    <p className='font-light'>HIG-143,Sailashree Vihar, {addressElement.city},{addressElement.pincode}</p>              
                  </div>
                </div>
              </div>
            </div>
                ))
           }
              
              </div>
              <form className='mx-4 my-2 p-6' onSubmit={handleSubmit}>
      <div className="flex flex-col mb-2 px-6">
        <h2 className="text-md text-violet-500 font-semibold mt-4 mb-2 text-start">Add New Address</h2>
        <div className="flex">
          <input type="text" name="name" placeholder="Name" className="px-4 py-2 border border-gray-400 mr-2 w-1/2" />
          <input type="text" name="mobile" placeholder="Mobile" className="px-4 py-2 border border-gray-400 mr-2 w-1/2" />
        </div>
        <div className="flex mt-3">
          <input type="text" name="pincode" placeholder="Pincode" className="px-4 py-2 border border-gray-400 mr-2 w-1/2" />
          <input type="text" name="city" placeholder="City" className="px-4 py-2 border border-gray-400 mr-2 w-1/2" />
        </div>
        <div className="flex mt-3 h-32">
          <input type="text" name="address" placeholder="Address" className="px-2 py-2 border border-gray-400 mr-2 w-full" />
        </div>
        <div className="flex mt-3">
          <input type="text" name="landmark" placeholder="Landmark" className="px-4 py-2 border border-gray-400 mr-2 w-1/2" />
          <input type="text" name="alternatePhone" placeholder="Alternate Phone" className="px-4 py-2 border border-gray-400 mr-2 w-1/2" />
        </div>
        <div className="flex mt-2">
          <input type="checkbox" id="home" name="home" />
          <label htmlFor="home" className="mr-2">Home</label>
          <input type="checkbox" id="office" name="office" />
          <label htmlFor="office" className="mr-2 ml-2">Office</label>
        </div>
        <div className="flex mt-3">
          <button type="submit" className="px-4 py-2 bg-violet-500 text-white">Submit</button>
        </div>
      </div>
    </form>
        </div>
        </>
      )}

        </div>
       
        <div className='bg-white-300 bg-white mb-2 '>
         
        {  
        productExpand?(
          <div>
        {products.map((product,key)=>(
             <div key={key} className='flex p-4 border-b'>
                <div className='flex flex-col w-0.5/4 ml-8  justify-center items-center p-4'>
                  <img src={product.image} alt={product.name} className="w-28 h-28 mb-4" />
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400">
                       <button className="text-gray-600">-</button>
                     </div>
                    <span className="mx-2">{product.quantity}</span>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400">
                      <button className="text-gray-600">+</button>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col pt-4 w-2/4 justify-start text-start'>
                   <h1 className='font-normal text-lg m-2'>Paracetamol 100mg,1 strip </h1>
                   <p className='m-2'>Seller : Sun Pharma</p>
                   <h1 className='text-lg font-semibold m-2'><span className='text-sm line-through mr-3'>Rs.400</span>Rs.{product.price}</h1>
                   <div>
                   <button className='text-end m-2 text-md font-semibold inline-block w-auto hover:text-red-600'>REMOVE</button>
                   </div>
                   
                </div>
                <div className='flex flex-col pt-4 w-1/4 ustify-start text-start'>
                   <h1 className=' text-md font-light'>Delivery by <span className='font-semibold '>Mon 15 April </span></h1>

                </div>
                
          </div> 
           ))}
          

           <div>
            <button className='px-6 py-3 text-white bg-violet-800 text-lg m-4 justify-end' onClick={togglePoduct}>Place Order</button>
           </div>
          </div>
         
        ):(
          <div className='flex justify-between p-2 items-center'>
            <div className='flex flex-col'>
              <div className='flex mx-2 px-2'>
              <h1 className='text-lg font-bold'>Order Summary</h1>
              </div>
                
                <div className='flex mx-2 px-2'>
                  <h2 className='text-md font-semibold mr-3'>Rs.20000.00</h2>
                   <p className='text-violet-500 font-medium'>3 items</p>
                </div>
                
            </div>
            
            <div>
              <button className='px-3 py-2 bg-violet-500 text-white' onClick={togglePoduct}>Change</button>
            </div>
          </div>
        )}
          
        </div>


        <div className='bg-white-300 bg-white mb-2 '>
          {
            paymentExpand?( 
            <div>
              <div className='bg-violet-500 text-white font-medium text-lg p-3'>
                 Choose Payment Option
              </div>
              <div className='flex flex-col p-4 m-4'>
              <div className='flex p-3 font-semibold text-lg justify-between'>
                  <div className='flex'><input type="radio" className='mx-2'/> UPI</div>
                  <button className='bg-violet-500 text-sm font-normal mx-4 p-1'>Place Order</button>
              </div>
   
              <hr />
   
             <div className='flex p-3 font-semibold text-lg justify-between'>
               <div className='flex'><input type="radio" className='mx-2' /> Net Banking</div>
                  
                  <button className='bg-violet-500 text-sm font-normal mx-4 p-1'>Place Order</button>
             </div>
           <hr />
             <div className='flex p-3 font-semibold text-lg justify-between'>
             <div className='flex'><input type="radio" className='mx-2' /> Wallet</div>
                  <button className='bg-violet-500 text-sm font-normal mx-4 p-1'>Place Order</button>
             </div>
             <hr />
             <div className='flex p-3 font-semibold text-lg justify-between'>
             <div className='flex'><input type="radio" className='mx-2'/> Credit/Debit Card</div>
                  <button className='bg-violet-500 text-sm font-normal mx-4 p-1'>Place Order</button>
             </div>
             <hr />
             <div className='flex p-3 font-semibold text-lg justify-between'>
                  <div className='flex'><input type="radio" className='mx-2'/> Cash on Delivery</div>
                  <button className='bg-violet-500 text-sm font-normal mx-4 p-1'>Place Order</button>
             </div>
             <hr />
            </div>
             </div>):( 
              <div className='flex justify-between p-2 items-center'>
              <div className='flex flex-col'>
                <div className='flex mx-2 px-2'>
                <h1 className='text-lg font-bold'>Order Summary</h1>
                </div>
                  
                  <div className='flex mx-2 px-2'>
                    <p>Choose a payment method</p>
                  </div>
                  
              </div>
              
              <div>
                <button className='px-3 py-2 bg-violet-500 text-white' onClick={togglePayment}>Change</button>
              </div>
            </div>
              )
          }
         
        
           
        </div>
      


        </div>
       

        <div className=' w-1/3 h-[55%] bg-white mb-1 px-8'>

          <h1 className='text-lg font-bold text-gray-500 p-2 ml-2 text-start'>PRICE DETAILS</h1>
          <hr />
          <div className='p-4'>
          <table className='w-full'>
            <tr className='flex justify-between text-md m-3'>
              <td>Price</td>
              <td>Rs.20000.00</td>
            </tr>

            <tr className='flex justify-between text-md m-3'>
              <td>Discount</td>
              <td>Rs.4000.00</td>
            </tr>

            <tr className='flex justify-between text-md m-3'>
              <td>Delivery Charges</td>
              <td><span className='text-violet-600 font-bold'>Free</span></td>
            </tr>
            <tr className='flex justify-between text-md m-3'>
              <td>Price</td>
              <td>Rs.20000.00</td>
            </tr>
            <hr />
            <tr className='flex justify-between text-lg mx-3 my-4 font-semibold bg-violet-200 p-1'>
              <td>Total Price</td>
              <td>Rs.20000.00</td>
            </tr>
            <hr />
          </table>
          </div>
          
        
        </div>

      </div>
      
        
    )
}

export default Products
"use client"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '@/lib/store/features/cart/cartSlice';
import CartCard from '@/components/CartCard';
import axios from 'axios';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [currentPage, setCurrentPage] = useState(1);
  const [SelectedState, setSelectedState] = useState("");
  const [Hashs,setHashs]=useState()
  const [NewTransactionId,setNewTransactionId]=useState()
  const [FormData,setFormData]=useState({
    name:"",
    email:"",
    pincode:"",
    address:"",
    phonenumber:""

  })
  const [FinaleAmount, setFinaleAmount] = useState(cartItems.reduce((total, item) => Number(total) + Number(item?.totalPrice), 0));
  const [PlusPrice, setPlusPrice] = useState(0);
  const [TransactinIds,setTransactinIds]=useState()
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL

  

  const CartBasePrice = cartItems.reduce((total, item) => Number(total) + Number(item?.totalPrice), 0);

  useEffect(() => {
    if (SelectedState) {
      setFinaleAmount((prev) => {
        let baseAmount = cartItems.reduce((total, item) => Number(total) + Number(item?.totalPrice), 0);
        if (baseAmount >= 400) {
          return baseAmount + 0;
        } else {
          if (SelectedState === "NO") {
            setPlusPrice(0);
            return CartBasePrice + 0;
          }
          if (SelectedState === "GJ") {
            setPlusPrice(40);
            return baseAmount + 40;
          } else {
            setPlusPrice(80);
            return baseAmount + 80;
          }
        }
      });
    }
  }, [SelectedState, cartItems]);

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ _id: id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ _id: id }));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ _id: id }));
  };

  const generateTransactionId = () => {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000000); 
    const merchantPrefix = 'T';
    const transactionId = `${merchantPrefix}${timestamp}${randomNum}`;
    setTransactinIds(transactionId);
    return transactionId;
  };

  const handelPayment = async (e) => {
    // e.preventDefault();
    const transactionId = generateTransactionId();
    await getHash(transactionId);
  };

  const getHash = async (transactionId) => {
    try {
      const paymentData = {
        name: FormData.firstname,
        email: FormData.email,
        phonenumber: FormData.phonenumber,
        amount: FinaleAmount,
        txnid:transactionId,
        productinfo: "Ghash ka tel" 
      };
     
      const response = await axios.post(`${BASE_URL}/api/payments/gethash`, paymentData);
      const { hash, txnid } = response.data;
      setHashs(hash);
      // setNewTransactionId(txnid);
      // document.getElementById('payuForm').submit();
    } catch (error) {
      // console.error("Error getting hash:", error);
      alert("An error occurred while processing your payment. Please try again.");
    }
  };

  const handleChange = (e)=>{
    const {name,value}  = e.target
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
}




  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  


  console.log(NewTransactionId)

  return (
    <section className='w-full h-full py-10 px-10 container_maxWidth_1440 md:px-2 pt-32 container_maxWidth_14402'>
      <div className='w-full flex justify-center mt-10'>
        <div className='flex items-center gap-2'>
          <button 
            className={`${currentPage === 1 ? 'bg-brand_colors' : 'bg-gray-400'} p-3 rounded-full text-white`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          <p>Cart</p>
          <div className='w-48 md:w-45 border border-brand_b_color'></div>
          <button 
            className={`${currentPage === 2 ? 'bg-brand_colors' : 'bg-gray-400'} p-3 rounded-full text-white`}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>
          <p>Address</p>
        </div>
      </div>
      <br/>
      {currentPage === 1 ? (
        <div className='w-full flex justify-center flex-col items-center gap-7'>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <CartCard 
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item}
                quantity={item.quantity}
                details={item.details}
                totalPrice={item.totalPrice}
                variations={item.variations}
                onIncreaseQuantity={handleIncreaseQuantity}
                onDecreaseQuantity={handleDecreaseQuantity}
                onRemoveFromCart={handleRemoveFromCart}
              />
            ))
          )}
        </div>
      ) : currentPage === 2 ? (
        <div className='w-[100%] flex justify-center font-lato'>
          <div className='w-[400px] md:w-[100%] md:px-[20px]'>
            <h1 className='font-[600] text-center text-[20px]'>Details</h1>
            <br/>
            <form>
            <label>Title</label>
            <select onChange={(e) => setSelectedTitle(e.target.value)} className='border-[1px] rounded-[10px] p-2 w-[100%]'>
            <option value="">Select Title</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
            <option value="Miss">Miss</option>
            </select>
            <br/>
            <br/>
            <label>First Name</label>
            <input className='border-[1px] rounded-[10px] p-2 w-[100%]' name="firstname" type='text' onChange={handleChange}/>
            <br/>
            <br/>
            <label>Last Name</label>
            <input className='border-[1px] rounded-[10px] p-2 w-[100%]' name="lastname" type='text' onChange={handleChange}/>
            <br/>
            <br/>

            <label>Email</label>
            <input className='border-[1px] rounded-[10px] p-2 w-[100%]' name="email" type='email' onChange={handleChange}/>
            <br/>

            <br/>
            <label>Address</label>
            <input className='border-[1px] rounded-[10px] p-2 w-[100%]' name="address" type='text' onChange={handleChange}/>
            <br/>
            <br/>
            <label>Pincode</label>
            <input className='border-[1px] rounded-[10px] p-2 w-[100%]' name="pincode" type='number' onChange={handleChange}/>
            <br/>
            <br/>

            <label>Phone Number</label>
            <input className='border-[1px] rounded-[10px] p-2 w-[100%]' name="phonenumber" type='number' onChange={handleChange}/>
            <br/>
            <br/>
            
              <label>Select Your State</label><br/>
              <select onChange={(e)=>setSelectedState(e.target.value)} className='border-[1px] rounded-[10px] p-2 w-[100%]'>
  <option value="NO">Select a State</option>
  <option value="AN">Andaman and Nicobar Islands</option>
  <option value="AP">Andhra Pradesh</option>
  <option value="AR">Arunachal Pradesh</option>
  <option value="AS">Assam</option>
  <option value="BR">Bihar</option>
  <option value="CH">Chandigarh</option>
  <option value="CT">Chhattisgarh</option>
  <option value="DN">Dadra and Nagar Haveli and Daman and Diu</option>
  <option value="DD">Daman and Diu</option>
  <option value="DL">Delhi</option>
  <option value="GA">Goa</option>
  <option value="GJ">Gujarat</option>
  <option value="HR">Haryana</option>
  <option value="HP">Himachal Pradesh</option>
  <option value="JH">Jharkhand</option>
  <option value="KA">Karnataka</option>
  <option value="KL">Kerala</option>
  <option value="LD">Lakshadweep</option>
  <option value="MP">Madhya Pradesh</option>
  <option value="MH">Maharashtra</option>
  <option value="MN">Manipur</option>
  <option value="ME">Meghalaya</option>
  <option value="MZ">Mizoram</option>
  <option value="NL">Nagaland</option>
  <option value="OD">Odisha</option>
  <option value="PY">Puducherry</option>
  <option value="PB">Punjab</option>
  <option value="RJ">Rajasthan</option>
  <option value="SK">Sikkim</option>
  <option value="TN">Tamil Nadu</option>
  <option value="TS">Telangana</option>
  <option value="TR">Tripura</option>
  <option value="UP">Uttar Pradesh</option>
  <option value="UT">Uttarakhand</option>
  <option value="WB">West Bengal</option>
</select>


              <br/>
            </form>
          </div>
        </div>
      ) : (
        <div className='w-[100%] flex justify-center font-lato'>
          <div className='w-[400px] md:w-[100%] md:px-[20px]'>
            <h1 className='font-[600] text-center text-[20px]'>Order Summary</h1>
            <br/>
            <div className='w-[100%] flex flex-col gap-3'>
              <div className='w-[100%] flex justify-between items-center'>
                <p>Items</p>
                <p className='font-[600]'>₹{CartBasePrice?.toLocaleString()}</p>
              </div>
              <div className='w-[100%] flex justify-between items-center'>
                <p>Delivery Charges</p>
                <p className='font-[600]'>₹{PlusPrice}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='w-full flex justify-center gap-4 mt-8'>
        <button 
          onClick={() => {
            if(currentPage === 2){
              if(SelectedState !== "" && SelectedState !== "NO"){
                setCurrentPage(prev => prev + 1);
              }else{
                alert("Please Select Your State");
              }
            }else{
              setCurrentPage(prev => prev + 1);
            }
            handelPayment();
          }} 
          className={currentPage <= 2 ?`w-48 text-center p-2 rounded bg-brand_colors text-white`:''}
        >
          {currentPage <= 2 ? `Next` : ''}
        </button>
        {currentPage === 2 && (
          <button 
            className='w-48 text-center p-2 rounded bg-brand_colors text-white' 
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            Previous
          </button>
        )}
        {currentPage === 3 && (
          <button 
            className='w-48 text-center p-2 rounded bg-brand_colors text-white' 
            // onClick={handelPayment}  
            onClick={
              ()=>{
             
                document.getElementById('payuForm').submit();
              }
            }
          >
            Pay ₹{FinaleAmount?.toLocaleString()}
          </button>
        )}
        <form id="payuForm"  action="https://secure.payu.in/_payment" method='post'>
<input type="hidden" name="key" value="qRhovz" />
<input type="hidden" name="txnid" value={TransactinIds} />
<input type="hidden" name="productinfo" value="Ghash ka tel" />
<input type="hidden" name="amount" value={FinaleAmount} />
<input type="hidden" name="email" value={FormData.email} />
<input type="hidden" name="firstname" value={FormData.firstname} />
{/* <input type="hidden" name="lastname" value="verma" /> */}
 <input type="hidden" name="surl" value={`${BASE_URL}/success`} /> 
<input type="hidden" name="furl" value={`${BASE_URL}/failure`} /> 
<input type="hidden" name="phone" value={FormData.phonenumber}/>
<input 
  type="hidden" 
  name="hash" 
  value={Hashs} 
/>

<input type="submit" value=""/> 

</form>





      </div>
    </section>
  );
};

export default Cart;

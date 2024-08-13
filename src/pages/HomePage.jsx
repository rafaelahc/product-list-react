import React, {useState} from 'react';



//Components
import MainContent from '../components/MainContent';
import Cart from '../components/Cart';
import Modal from '../components/Modal';

const HomePage = () => {

  const [cartList, setCartList] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);


  const addToCart = (product) => {
    const existingProduct = cartList.find(item => item.id === product.id);
    if (existingProduct) {
      setCartList(cartList.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ))
    } else {
      setCartList([...cartList, {product, quantity: 1}])
    }
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCartList(cartList.filter(item => item.id !== productId))
    } else {
      setCartList(cartList.map(item =>
        item.product.id === productId ? {...item, quantity} : item
       ))
      
    }

  }

  const removeItem = (itemId) => {
    const updatedCartList = cartList.filter(item => item.product.id !== itemId);
    setCartList(updatedCartList);

  }


  const clearCart = () => {
    setCartList([]);
  }
  
  const handleConfirmClick = () => {
    setIsModalOpen(true);
  };


  const handleModalClose = () => {
    setIsModalOpen(false);
    clearCart();
  
  };



    return (
     
    <div className='flex flex-row justify-center items-center p-16'>
      <div className='flex justify-center items-start flex-wrap w-1440 gap-8'>
        <MainContent addToCart={addToCart} cartList={cartList} updateQuantity={updateQuantity} />
        <Cart cartList={cartList} setCartList={setCartList} removeItem={removeItem} onConfirmClick={handleConfirmClick} />
        {isModalOpen ? (
          <Modal cartList={cartList} isModalOpen={isModalOpen} handleModalClose={handleModalClose} /> 
        ) : (
          <div></div>
        )}
       
      </div>
    </div>
  );
};

export default HomePage;




//Components
import AddedItemsAndTotal from '../components/AddedItemsAndTotal';
import Total from '../components/Total';
    //Icons
    import IconCarbonNeutral from './Icons/IconCarbonNeutral';
    import IconIllustrationEmptyCart  from './Icons/IconIllustrationEmptyCart';
    import IconRemoveIcon from './Icons/IconRemoveItem';


const Cart = ({cartList = [],  removeItem, onConfirmClick}) => {

    const totalCartItems = cartList.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="bg-white rounded-xl p-4 w-96">

            {cartList.length === 0 ? (
                <>
                    <header>
                        <h1 className="text-lg font-redTextBold text-red">Your Cart {'(0)'}</h1>
                    </header>
                    <div className="empty flex flex-col items-center my-6">
                        <IconIllustrationEmptyCart />
                        <span className="text-roseDark font-redTextSemiBold text-sm">Your added items appear here</span>
                    </div>  
                </>
              
            ) : (
                <>
                    <header>
                        <h1 className="text-lg font-redTextBold text-red">Your Cart ({totalCartItems})</h1>
                    </header>
                    <div className="">
                        {cartList.map(item => {
                            return (
                                <div className='flex items-center justify-between gap-4 border-b-2 border-bgBody '>
                                <AddedItemsAndTotal item={item} removeItem={removeItem} isCustomLayout={false}/>
                                    <div className='removeBtn'>
                                        <button onClick={() => removeItem(item.product.id)}>
                                        <IconRemoveIcon />
                                        </button>
                                    </div>
                                </div>
                            )
                        })} 

                        <div>
                            <Total cartList={cartList} />
                        </div>

                        <div className="carbon-neutral flex items-center justify-center gap-2 bg-lightColor p-4 rounded-md my-6">
                            <IconCarbonNeutral />
                            <span className="text-sm text-darkColor font-redTextSemiBold">This is <span className="text-xs font-redTextBold">carbon-neutral</span> delivery</span>
                        </div>

                        <div className="button-confirm">
                            <button onClick={onConfirmClick} className="bg-red text-white rounded-3xl px-4 py-2 w-full text-sm">Confirm Order</button>
                        </div>


                    </div>                
                </>



            )}            

        </div>
    )
};

export default Cart;    


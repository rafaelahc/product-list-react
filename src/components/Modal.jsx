    //Components
    import AddedItemsAndTotal from '../components/AddedItemsAndTotal';
    import Total from './Total';
    //Icons
    import IconOrderConfirmed from './Icons/IconOderConfirmed';


    const Modal = ({cartList, handleModalClose}) => {
  
    
        return(
            <div className="fixed inset-0 flex w-full p-4 justify-center items-center gap-2 bg-modalBg">
                <div className="flex flex-col items-start shrink-0 gap-8 w-[37rem] max-w-[60vw] h-auto max-h-[95vh] p-10 bg-white rounded-xl">
                    <header className='flex flex-col gap-8'>
                        <IconOrderConfirmed />
                        <div className="texts">
                            <h1 className='text-darkColor text-2.5 font-redTextBold'>Order Confirmed</h1>
                            <span>We hope you enjoy your food!</span>
                        </div>
                    </header>

                    
                    <div className='bg-lightColor p-6 rounded-lg flex flex-col w-full max-h-[250px] gap-4 ' >
                        <div className='overflow-y-auto'>
                            {cartList.map((item, index )=> {
                                return (
                                    <div key={index} className="item flex items-start self-stretch ">
                                        <AddedItemsAndTotal item={item} isCustomLayout={true}/>
                                    </div>
                                )
                            })}
                        </div>


                        <div>
                            <Total cartList={cartList} />
                        </div>        

                    </div>

                    
                    <div className="btnReset w-full">
                        <button onClick={handleModalClose} className='w-full bg-red text-white p-4 rounded-62.4375rem font-redTextSemiBold'>Start New Order</button>
                    </div>           



                </div>
            </div>
        )
    }

    export default Modal;
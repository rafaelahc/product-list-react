    //Images
    import Images from '../assets/images/images';

const AddedItemsAndTotal = ({item, className, isCustomLayout}) => {
    const total = (item.quantity * item.product.price).toFixed(2);

    return (
        <div className='w-full'>
            <div className='container my-2 w-full'>
                <div className="item flex justify-between items-center my-2 w-full">

                    {isCustomLayout ? (
                        <div key={item.product.id} className='title-and-prices flex justify-between items-center w-full'>
                            <div className='flex items-center gap-2 '>
                                <div>
                                    <img className='w-[64px] h-[64px] rounded-lg border-transparent'  src={item.product.image} alt={item.product.name} />
                                </div>
                                <div>
                                    <h3 className="font-redTextSemiBold text-sm">{item.product.name}</h3>
                                    <div>
                                        <span className="font-redTextSemiBold text-sm text-red">{item.quantity} x</span>
                                        <span className="text-sm text-roseDark ml-2">${item.product.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className='font-redTextBold text-base text-darkColor ml-1.5x '>${total} </span>
                            </div>
                        </div>
                    ) : (
                        <div key={item.product.id} className='title-and-prices'>
                            <h3 className="font-redTextSemiBold text-sm">{item.product.name}</h3>
                            <div className='flex flex-start gap-2 my-2 '>
                                <div>
                                    <span className="font-redTextSemiBold text-sm text-red">{item.quantity} x</span>
                                    <span className="text-sm text-roseDark ml-2">${item.product.price.toFixed(2)}</span>
                                </div>
                                <div>
                                    <span className='font-redTextSemiBold text-sm text-roseDark ml-1.5x'>${total} </span>
                                </div>
                            </div>
                        </div>  
                    )}

                
                </div>
            </div>

        </div>
    )
}

export default AddedItemsAndTotal;

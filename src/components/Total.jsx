 const Total = ({cartList = []}) => {

    const totalAmount = cartList.reduce((sum, item) => {
        return sum + (item.quantity * item.product.price);
    }, 0).toFixed(2);

    return (
        <div>                 
            <div className="total item flex justify-between items-center mt-6">
                <p className="font-redTextRegular text-sm">Order Total </p>

                <h2 className="font-redTextBold text-2xl text-darkColor">$ {totalAmount}</h2>
            </div>            
        </div>
    )
 }

 export default Total;
import Images from "../assets/images/images";

//Components
 //Icons
 import IconAddToCart from "./Icons/IconAddToCart";
 import IconIncrement from "./Icons/IconIncrement";
 import IconDecrement from "./Icons/IconDecrement";


const MainContent = ({addToCart, cartList, updateQuantity}) => {

    const products = [
        {
            id: 1,
            name: 'Waffle with Berries',
            price: 6.50,
            category: 'Waffle',
            image: Images.waffleDkt
        },
        {
            id: 2,
            name: 'Vanilla Bean Crème Brúlèe',
            price: 7.00,     
            category: 'Crème Brúlèe',
            image: Images.cremeBruleeDkt  
        },
        {
            id: 3,
            name: 'Macaron Mix of Five',
            price: 8.00,
            category: 'Macaron',
            image: Images.macaronDkt           
        },
        {
            id: 4,
            name: 'Classic Tiramisu',
            price: 5.50,
            category: 'Tiramisu',
            image: Images.tiramisuDkt     
        },
        {
            id: 5,
            name: 'Pistachio Baklava',
            price: 4.00,
            category: 'Baklava',
            image: Images.pistachioBaklavaDkt      
        },
        {
            id: 6,
            name: 'Lemon Meringue Pie',
            price: 5.00,
            category: 'Pie',
            image: Images.lemonPieDkt          
        },
        {
            id: 7,
            name: 'Red Velvet Cake',
            price: 4.50,
            category: 'Cake',
            image: Images.redVelvetDkt          
        },
        {
            id: 8,
            name: 'Salted Caramel Brownie',
            price: 5.50,
            category: 'Brownie',
            image: Images.brownieDkt
        },
        {
            id: 9,
            name: 'Vanilla Panna Cotta',
            price: 6.50,
            category: 'Panna Cotta',
            image: Images.pannaCottaDkt           
        }
    ]

    const isInCart = (productId) => {
        return cartList.find(item => item.product.id === productId);
    }

    return (
        <div>
            <h1 className="text-3xl font-redTextBold text-darkColor">Desserts</h1>

            <div className="list flex flex-wrap gap-4 w-50rem max-w-50rem">
        
                {products.map(product => {
                    const cartItem = isInCart(product.id);
                    return(
                        <div key={product.id} className="item flex flex-col flex-start">
                        <div className="img-and-add-cart flex flex-col gap-[-1.375rem] items-center self-stretch">
                            {cartItem ? (
                                <>
                                    <img className='w-64 h-60 rounded-lg border-4 border-red' key='cremeBruleeDkt' src={product.image} alt='' />
                                    <div className="border-[.5px] border-red rounded-3xl mt-[-25px] p-3 text-sm bg-red font-redTextRegular flex justify-between items-center w-40 max-w-40 text-white" >
                                        <button onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}>
                                            <IconDecrement />
                                        </button>                                 
                                        <span>{cartItem.quantity}</span>
                                        <button onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}>
                                            <IconIncrement />
                                        </button>
                                    </div>   
                                </>
      
                            ) : (
                                <>
                                    <img className='w-64 h-60 rounded-lg border-4 border-transparent' key='cremeBruleeDkt' src={product.image} alt='' />
                                    <button onClick={() => addToCart(product)}  className="border-[.5px] border-roseMd rounded-3xl mt-[-25px] p-3 text-sm bg-white font-semibold flex justify-center w-40 max-w-40 hover:text-red hover:border-red" >
                                       <IconAddToCart />
                                        Add to Cart
                                    </button>   
                                </>

                            )}

                        </div>
                        <div className="item-info mt-4">
                            <span className="text-sm font-extralight text-roseMd">{product.category}</span>
                            <h2 className="text-base font-semibold text-darkColor">{product.name}</h2>
                            <h2 className="text-base font-semibold text-red ">{product.price.toFixed(2)}</h2>
                        </div>
                    </div>  
                    )
   
                })}
        
            </div>
            
        </div>
    )
};

export default MainContent;


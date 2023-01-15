import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.style';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartonOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <CartIconContainer onClick={toggleIsCartonOpen}> 
           <ShoppingIcon className='shopping-icon'/>
           <ItemCount>{cartCount}</ItemCount> 
        </CartIconContainer>
    )
}

export default CartIcon;
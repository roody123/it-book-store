import { useSelector, useDispatch } from "react-redux";
import { getCartItems, getTotalPrice, removeItemFromCart } from "../../redux/cartSlice";
import Swal from 'sweetalert2';

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const dispatch = useDispatch();

    const handleRemove = (isbn13, title) => {
        dispatch(removeItemFromCart(isbn13));
        Swal.fire({
            title: 'Removed!',
            text: `${title} has been removed from your cart.`,
            icon: 'info',
            confirmButtonColor: '#007bff'
        });
    };

    if (cartItems.length === 0) {
        return (
            <div className="container">
                <h2>Your cart is empty...</h2>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <div className="container">
                <h1>Your Cart</h1>
            </div>

            <div className="container">
                <p className="total-price">Total: <span>${totalPrice}</span></p>
            </div>

            <div className="search-results">
                {cartItems.map((cartItem) => (
                    <div key={cartItem.isbn13} className="book-card">
                        <h2>{cartItem.title}</h2>
                        <a href={cartItem.url} target="_blank">
                            <img src={cartItem.image} alt={cartItem.title} width="200px" />
                        </a>
                        <span>{cartItem.price}</span>
                        <button 
                            className="btn-remove" 
                            onClick={() => handleRemove(cartItem.isbn13, cartItem.title)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
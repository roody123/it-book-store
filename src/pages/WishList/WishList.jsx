import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, getWishList, toggleWishList } from "../../redux/cartSlice";

const Wishlist = () => {
    const wishlist = useSelector(getWishList);
    const dispatch = useDispatch();

    if (wishlist.length === 0) {
        return (
            <div className="container">
                <h2>You haven't liked any books yet...</h2>
            </div>
        )
    }

    return (
        <div className="wishlist-container">
            <div className="container">
                <h1>Your Wishlist</h1>
            </div>

            <div className="search-results">
                {wishlist.map((book) => (
                    <div key={book.isbn13} className="book-card">
                        <h2>{book.title}</h2>
                        <a href={book.url} target="_blank">
                            <img src={book.image} alt="book" width="200px" />
                        </a>
                        <div className="btn-group">
                            <button className="btn-add" onClick={() => dispatch(addItemToCart(book))}>Add To Cart</button>
                            <button className="btn-remove" onClick={() => dispatch(toggleWishList(book))}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
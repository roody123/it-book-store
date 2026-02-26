import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, getWishList, toggleWishList } from "../../redux/cartSlice";
import Swal from 'sweetalert2'

export const SearchBookCard = ({ books, price }) => {
    
    const dispatch = useDispatch();
    const wishList = useSelector(getWishList);
    const handleAddToCart = (book) => {
        dispatch(addItemToCart(book));
        Swal.fire({
            icon: 'success',
            title: 'Added To Cart',
            text: `${book.title} is now in your cart!`,
        });
    }

    const filteredBooks = books.filter((book) => {
        if (price === 'free') return book.price === "$0.00";
        if (price === 'paid') return book.price !== "$0.00";
        return true;
    });

    if (filteredBooks.length === 0) {
        return (
            <div className="container">
                Nothing found :/
            </div>
        )
    }

    return (
        <div className="search-results">
            {filteredBooks.map((book) => {

                const isFavourite = wishList.some(fav => fav.isbn13 === book.isbn13);

                return (
                    <div key={book.isbn13} className="book-card">
                        <h2>{book.title}</h2>

                        <button
                        onClick={() => dispatch(toggleWishList(book))}
                        className="btn-fav">
                            {isFavourite ? '❤️' : '🤍'}
                        </button>

                        <a href={book.url} target="_blank">
                            <img src={book.image} alt="book" width='300px'/>
                        </a>

                        <span>{book.price}</span>
                        <button className="btn-add" onClick={() => handleAddToCart(book)}>Add To Cart</button>
                    </div>
                )
            })}
        </div>
    );
};
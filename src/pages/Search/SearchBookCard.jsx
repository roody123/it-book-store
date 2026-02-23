export const SearchBookCard = ({ books, price }) => {

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
            {filteredBooks.map((book) => (
                <div key={book.isbn13} className="book-card">
                    <h2>{book.title}</h2>
                    <a href={book.url} target="_blank">
                        <img src={book.image} alt="book" width='300px'/>
                    </a>
                    <span>{book.price}</span>
                </div>
            ))}
        </div>
    );
};
import { useState } from "react"

export const NewBookCard = ({books}) => {

    const [bookIndex, setBookIndex] = useState(0);

    const previousBook = () => {
        bookIndex === 0 ? setBookIndex(books.length - 1) : setBookIndex(bookIndex - 1)
    }

    const nextBook = () => {
        bookIndex === books.length - 1 ? setBookIndex(0) : setBookIndex(bookIndex + 1)
    }

    return (
        <div className="book-card">
            
            <h2>{bookIndex + 1}. {books[bookIndex].title}</h2>

            <div className="img-container">
                <button onClick={previousBook} className="btn-previous">←</button>
                <a href={books[bookIndex].url} target="_blank">
                    <img src={books[bookIndex].image} alt="book" width='400px' />
                </a>
                <button onClick={nextBook} className="btn-next">→</button>
            </div>

            <span>{books[bookIndex].price}</span>

        </div>
    )
}
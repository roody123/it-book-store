import { useEffect, useState } from "react";
import axios from 'axios';
import { SearchBookCard } from "./SearchBookCard";
import searchImage from './search.png'
import { Loader } from '../Loader/Loader.jsx'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";
import { getPriceFilter, setPriceFilter } from "../../redux/cartSlice.jsx";

function Search() {
    const [inputText, setInputText] = useState('');
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [books, setBooks] = useState([]);

    const price = useSelector(getPriceFilter);
    const dispatch = useDispatch();

    const getInputText = (e) => {
        setInputText(e.target.value);
    }

    const search = (e) => {
        e.preventDefault()
        setSearchText(inputText)
    }

    useEffect(() => {
        if (searchText !== '') {
            const getData = async () => {
                try {
                    setIsLoading(true);
                    const response = await axios.get('https://api.itbook.store/1.0/search/' + searchText);
                    setBooks(response.data.books);
                    if (response.data.books.length === 0) {
                        Swal.fire({
                            icon: 'error',
                            title: "Oops...",
                            text: "Nothing found. Try another query.",
                            confirmButtonColor: '#007bff'
                        });
                    }
                } catch (error) {
                    console.error("Error while receiving data:", error);
                } finally {
                    setIsLoading(false);
                }
            };

            getData();
        }
    }, [searchText]);

    return (
        <div>
            <form onSubmit={search}>
                <div className="search-form">
                    <input type="text" placeholder="React..." onChange={getInputText} value={inputText}/>
                    <img src={searchImage}
                    onClick={search}
                    alt="search"
                    width='50px'
                    className="search-btn"/>
                </div>

                <div className="filter-container">
                    <select 
                        id="price-filter"
                        value={price} 
                        onChange={(e) => dispatch(setPriceFilter(e.target.value))}>
                        <option value='all'>All</option>
                        <option value="paid">Paid</option>
                        <option value="free">Free</option>
                    </select>
                </div>
            </form>
            
            <div className="container">
                {isLoading && <Loader/>}
                {books.length > 0 && <SearchBookCard books={books} price={price}/>}
            </div>
        </div>
    )
}

export default Search;
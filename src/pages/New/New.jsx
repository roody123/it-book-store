import axios from 'axios';
import { useEffect, useState } from 'react';
import { NewBookCard } from './NewBookCard';
import { Loader } from '../Loader/Loader';

function New() {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://api.itbook.store/1.0/new');
                setBooks(response.data.books);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, []);

    return (
        <div className="new-page">
            <div className='container'>
                <h1>New Products</h1>
            </div>

            <div className='container'>
                {isLoading ? <Loader/> : <NewBookCard books={books}/>}
            </div>
        </div>
    );
}

export default New;
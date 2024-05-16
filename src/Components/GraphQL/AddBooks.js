import axios from 'axios';
import{useState} from 'react';

import styles from "../Styles/Book.module.css";
import { useNavigate } from 'react-router-dom';

function AddBooks(){
let [title,setTitle]=useState('');
let [author,setAuthor]=useState('');
const navigate=useNavigate();

const handleAddBook = async () => {
    const query = `
        mutation AddBook($book: BookInput!) {
            addBook(input: $book) {
                id
                title
                author
            }
        }
    `;

    const variables = {
        book: {
            title,
            author
        }
    };

    try {
        const response = await axios.post('http://localhost:4000/graphql', {
            query,
            variables
        });
        console.log('Book added:', response.data);
        alert('Book added successfully!');
        navigate('/books');
    } catch (error) {
        console.error('Error adding book:', error);
        alert('Failed to add book.');
    }
};

    
 return (
    <div>
        <h1>Add Books</h1>
    
    <form className={styles.loginForm} >
    <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.label}>Title:</label>
        <input
            type="text"
            id="title"
            name="title"
            className={styles.input}
            value={title}
            onChange={(e)=>setTitle(e.target.value)}

        />
        {/*errors.name && <span className={styles.error} >{errors.name}</span>*/}
    </div>
    <div className={styles.inputGroup}>
        <label htmlFor="author" className={styles.label}>Author:</label>
        <input
            type="text"
            id="author"
            name="author"
            className={styles.input}
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}

        />
        {/*errors.email && <span className={styles.error} >{errors.email}</span>*/}
    </div>
    
   
    
    <button type="button" className={styles.submitButton} onClick={handleAddBook}
    >Add Book</button>
</form>
</div>
 )
}

export default AddBooks
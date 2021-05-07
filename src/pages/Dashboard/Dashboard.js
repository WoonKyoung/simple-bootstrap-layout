import {useState, useEffect} from 'react'
import firebase from 'firebase/app';
import BookList from "../../components/Book/BookList";
import BookForm from "../../components/Book/BookForm";
import {Toaster, ToasterContext} from "../../ui";

const Dashboard = () => {
    const db = firebase.firestore();

    const [book, setBook] = useState({
       title: '',
       pages: '',
       publishDate:''
    });

    const [books, setBooks] = useState([]);

    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        (async () =>{
            const snapshot = await db.collection('books').get();
            const booksArray = [];
            snapshot.forEach(doc => {
                booksArray.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setBooks(booksArray);
            setToasts(['Rendering current page']);
        })();
    }, [book]);

    return (
        <ToasterContext.Provider value={['toasts']} >

            <div>
                <BookForm book={book} setBook={setBook} setToasts={setToasts}/>

                <BookList books={books}/>

                <Toaster toasts={toasts}/>
            </div>
        </ToasterContext.Provider>
    );
}

export default Dashboard;
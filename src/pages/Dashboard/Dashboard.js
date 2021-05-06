import {useState, useEffect} from 'react'
import firebase from 'firebase/app';
import BookList from "../../components/Book/BookList";
import {Button, Field, Message, Modal} from "../../ui";

const Dashboard = () => {
    const db = firebase.firestore();


    const [book, setBook] = useState({
       title: '',
       pages: '',
       publishDate:''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [books, setBooks] = useState([]);

    const [isModal, setIsModal] = useState(false);

    useEffect( () => {
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
        })();
    }, []);


    const onChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(book);
        setLoading(true);

        try {
            const docRef = await db.collection("books").add({
                ...book,
                publishDate: new Date(book.publishDate)
            });
            console.log(docRef.id);
            setBook({
                title: '',
                pages: '',
                publishDate: ''
            });
        } catch (e) {
            console.error('An error', error);
            setError('An error occured while trying to save the book');
        }
        setLoading(false);
    };

    const modalShow = (v) => setIsModal(v);

    return (
        <div>
            Dashboard
            <div>
                <Button onClick={modalShow.bind(this, true)} outline>
                    Add Book
                </Button>
            </div>
            <Modal
                title="Add new Book"
                show={isModal}
                close={modalShow.bind(this, false)}
            >
                <form onSubmit={onSubmit}>
                    <Field labelText="Title : " id="book-title">
                        <input
                            type="text"
                            value={book.title}
                            onChange={onChange}
                            name="title"
                            id="book-title"/>
                    </Field>
                    <Field labelText="Pages :" id="book-pages">
                        <input
                            type="number"
                            value={book.pages}
                            onChange={onChange}
                            name="pages"
                            id="book-pages"/>
                    </Field>
                    <Field labelText="Publish Date :" id="book-publish-date">
                        <input
                            type="date"
                            value={book.publishDate}
                            onChange={onChange}
                            name="publishDate"
                            id="book-publish-date"/>
                    </Field>

                    <div>
                        <Button outline loading={loading} label="Save" type="submit" title="hello world"/>
                    </div>
                    <Message error={error} type="error"/>
                </form>
            </Modal>

            <BookList books={books}/>
        </div>
    );
}

export default Dashboard;
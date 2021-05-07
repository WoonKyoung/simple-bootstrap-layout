import {Button, Field, Message, Modal} from "../../ui";
import {useState} from 'react';
import firebase from 'firebase/app';

function BookForm({book:book, setBook:setBook, setToasts:setToasts}){
    const db = firebase.firestore();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isModal, setIsModal] = useState(false);

    const onChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const docRef = await db.collection("books").add({
                ...book,
            });
            setBook({
                title: '',
                pages: '',
                publishDate: ''
            });
            setIsModal(false);
            setToasts(['Successfully save books']);

        } catch (e) {
            console.error('An error', error);
            setError('An error occured while trying to save the book');
        }
        setLoading(false);
    };

    const modalShow = (v) => setIsModal(v);

    return(
        <>
            <div>
                <Button onClick={modalShow.bind(this, true)} label="Add Book" />
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

        </>
    )
}

export default BookForm;
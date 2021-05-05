import {useState} from 'react'



const Dashboard = () => {

    const [book, setBook] = useState({
       title: '',
       pages: '',
       publishDate:''
    });

    const onChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(book);
    }

    return(
        <div>
            Dashboard
            <div>
                <label htmlFor="book-title"> Title : </label>
                <input type="text" value = {book.title} onChange={onchange} name="title" id="book-title" />
            </div>
            <div>
                <label htmlFor="book-pages"> Pages : </label>
                <input type="number" value = {book.pages} onChange={onchange} name="pages" id="book-pages" />
            </div>
            <div>
                <label htmlFor="book-publish-date"> Publish Date : </label>
                <input type="date" value = {book.publishDate} onChange={onchange} name="publish-date" id="book-publish-date" />
            </div>
        </div>
    )
}

export default Dashboard;
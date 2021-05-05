function BookList({books}){
    return(
        <div className="book-list">
            <h2>Book List</h2>
            {books.map(book=> (
                <div key={book.id} className="book-item">
                    <h4>{book.title}</h4>
                    <span><strong>
                        Pages:
                    </strong>
                        {book.pages}
                    </span>
                    <span><strong>
                        Publishing Date :
                    </strong>
                        {new Date(book.publishDate).toDateString()}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default BookList;
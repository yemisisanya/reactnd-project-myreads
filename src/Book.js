import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {

    render() {
        const { book, onShelf, books } = this.props

        const imageCover = book.imageLinks.smallThumbnail
        return(
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"

                        style={{ width: 130, height: 162, backgroundImage: `url(${imageCover})` }}>
                        
                        <ShelfChanger book={book} books={books} onShelf={onShelf} />

                        </div>
                        
                    
                 </div>
                 <div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
                    
            </div>
                    
        )
    }

}

export default Book
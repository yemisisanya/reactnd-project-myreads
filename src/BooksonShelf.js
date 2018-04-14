import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'



class BooksonShelf extends Component {
	

	render() {
		const {books, title, onShelf} = this.props
		return (
			<div className="bookshelf">
		        <h2 className="bookshelf-title">{title}</h2>
		         <div className="bookshelf-books">
		          <ol className="books-grid">
                 {books.map((book) => {
		        			return (
		        				<li key={book.id}>
			        				<Book books={books} book={book} onShelf={onShelf}/>
			        			</li>
		        			)
		        		})}

                 </ol>
		         </div>
		    </div>
		)
	}
	static propTypes = {
		books: PropTypes.array.isRequired, 
		title: PropTypes.string.isRequired,
		onShelf: PropTypes.func.isRequired
	
	}
}

export default BooksonShelf
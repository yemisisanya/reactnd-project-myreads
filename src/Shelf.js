import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BooksonShelf from './BooksonShelf'

class Shelved extends Component {
	

	render() {
		const {books, onShelf} = this.props

       const shelfStatus = [{ bookType: 'currentlyReading', title: 'Currently Reading' },
                            { bookType: 'wantToRead', title: 'Want to Read' },
                            { bookType: 'read', title: 'Read' },
                            
                           ]

		return (
			<div>
				<div className='list-books'>
					<div className="list-books-title">
			        	<h1>MyReads</h1>
			        </div>
			        <div className="list-books-content" >

			        {shelfStatus.map((shelf, index) => {
                     const sBooks = books.filter(book => book.shelf === shelf.bookType)
                      return (
			       		<BooksonShelf key={index}
			       			title={shelf.title}
			       			books={sBooks}
			       			onShelf={onShelf}
			       		/>
			       		)
			       		 })}
			        </div> 
			   

				</div>
				<div className="open-search">
		          <Link to='/search' className='open-search'>Add a book</Link>
		        </div>
			</div>

		)
	}
	static propTypes = {
		books: PropTypes.array.isRequired,
		onShelf: PropTypes.func.isRequired
	}
}

export default Shelved

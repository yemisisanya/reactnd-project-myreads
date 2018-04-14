import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'


class BookSearch extends Component {
    
	state = {
		query: '',
		bookSearch: [],
		error: false
	}

	updateBookShelf = (event) => {
		const query = event.target.value
		this.setState (
			{query: query}
	)

   if(query) {
			BooksAPI.search(query, 20).then((res) => {
		    if(!res || res.error || res === undefined) {
				this.setState({ bookSearch: [], error: true })
			
				return

				} 
		      	this.setState(state => ({
		        	bookSearch: res, error	: false
		        	
		      	}))
		    })
		} else {
		this.setState(state => ({
			bookSearch: [], error: false
		}))
	  }

	} 

	render() {
		const { query, bookSearch, error} = this.state
		const {books,onShelf} = this.props
		return (
			<div className="search-books">
	            <div className="search-books-bar">
	            	<div className="close-search">
			          <Link to='/' className='close-search'>Close</Link>
			        </div>
	             	<div className="search-books-input-wrapper">
		                <input
		                	type="text"
		                	placeholder="Title or Author"
		                	value={query}
		                	onChange={(event) => this.updateBookShelf(event)}
		                />
	              	</div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{bookSearch.filter((book) => book.imageLinks !== undefined).map((book) => {
		        			return (
		        				<li key={book.id}>
			        				<Book books={books} book={book} onShelf={onShelf}/>
			        			</li>
		        			)
		        		})}
	              </ol>

	              </div>
	            {error && (
	            	
                 <div>
                <div className='search-books-noresults'>
                  <h1>0 Search Results found.</h1>
                  </div>
                </div>
            
	              )}
	            
          </div>
		)
	}
static propTypes = {
		books: PropTypes.array.isRequired,
		onShelf: PropTypes.func.isRequired
	}
}

export default BookSearch
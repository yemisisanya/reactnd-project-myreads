import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {

render() {

	const { book, onShelf, books } = this.props
     
     let currentShelf = 'none'

        
            for(let item of books) {
                if(item.id === book.id) {
                    currentShelf = item.shelf
                }
            }
        
        

     return(
       
          <div className="book-shelf-changer">
                        <select defaultValue={currentShelf} onChange={(event) => onShelf(book, event.target.value)}>

                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
               
           


     	)
}

static propTypes = {
        book: PropTypes.object.isRequired,
        onShelf: PropTypes.func.isRequired,
        books: PropTypes.array
    }

}

export default ShelfChanger
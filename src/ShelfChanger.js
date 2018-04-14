import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {

render() {

	const { book, onShelf, booksM } = this.props
     
    let currentShelf = 'Currently Reading'

        if(booksM) {
            for(let item of booksM) {
                if(item.id === book.id) {
                    book.shelf = item.shelf
                }
            }
        }

     return(
       
          <div className="book-shelf-changer">
                        <select defaultValue={currentShelf} onChange={(event) => onShelf(book, event.target.value)}>

                            <option disabled>Move to...</option>
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
        booksM: PropTypes.array
    }

}

export default ShelfChanger
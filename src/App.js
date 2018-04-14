import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Shelf from './Shelf.js'
import BookSearch from './BookSearch.js'


class BooksApp extends React.Component {
  state = {
   books: []
  }
  
  componentDidMount() {

    //load books
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

changeofShelf = (book, shelf) =>{
BooksAPI.update(book, shelf).then(() =>{
BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  })
}

  render() {
      return (
      <div className="app">
      
        <Route exact={true} path='/' render={({ history }) => (
          <Shelf
            books={this.state.books}
            onShelf={(book, shelf) => {
              this.changeofShelf(book, shelf)
              history.push('/')
           }}
          />
      )}/>
        <Route exact={true} path='/search' render={({ history }) => (
          <BookSearch
            books={this.state.books}
            onShelf={(book, shelf) => {
              this.changeofShelf(book, shelf)
              history.push('/')
            }}
          />
        )}/>
      </div>
      )
  }
}

export default BooksApp

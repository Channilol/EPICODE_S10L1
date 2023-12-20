import React from 'react'
import './MyMain.css'
import fantasy from '../../data/fantasy.json'
import history from '../../data/history.json'
import horror from '../../data/horror.json'
import romance from '../../data/romance.json'
import scifi from '../../data/scifi.json'
import Book from '../Book/Book'
import books from '../../data/books.json'

class MyMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: null,
            bookTitle: '',
            filteredBooks: [],
        };
        this.handleCategoryClick = this.handleCategoryClick.bind(this)
    }

    handleCategoryClick = (category) => {
        this.setState({ selectedCategory: category })
        const cardsSearch = document.querySelector('.cardsSearch')
        cardsSearch.style.display = 'none'
        const cardsButton = document.querySelector('.cardsButton')
        cardsButton.style.display = 'flex'
        this.setState ({ bookTitle: '' })
    }

    handleSearch = (e) => {
        const searchTitle = e.target.value.toLowerCase()
        const booksArray = Object.values(books)

        const removeDuplicates = (books) => {
            const uniqueBooks = [];

            books.map((book) => {
                if (!uniqueBooks.some((uniqueBook) => uniqueBook.asin === book.asin)) {
                  uniqueBooks.push(book);
                }
              });

            return uniqueBooks
        }

        const filteredBooksWithDouble = booksArray.flatMap((category) => {
            return category.filter((book) => {
                return book.title && book.title.toLowerCase().includes(searchTitle)
            })
        })

        const filteredBooks = removeDuplicates(filteredBooksWithDouble)

        this.setState({ bookTitle: e.target.value, filteredBooks: filteredBooks })
        const cardsButton = document.querySelector('.cardsButton')
        cardsButton.style.display = 'none'
        const cardsSearch = document.querySelector('.cardsSearch')
        cardsSearch.style.display = 'flex'
    }

    render() {
        const { selectedCategory, filteredBooks, clickedCards } = this.state
        
        let selectedData = [];
        switch (selectedCategory) {
          case 'Fantasy':
            selectedData = books.fantasy;
            break;
          case 'History':
            selectedData = books.history;
            break;
          case 'Horror':
            selectedData = books.horror;
            break;
          case 'Romance':
            selectedData = books.romance;
            break;
          case 'Scifi':
            selectedData = books.scifi;
            break;
          default:
            break;
        }

        return (
            <main>
                <div className='mainTop'>
                    <h1>Welcome to EpiBooks!</h1>
                    <p>This is our book list!</p>
                    <p>Choose a category of books you want to see</p>
                </div>
                <div className='categoryButtons'>
                    <button onClick={() => this.handleCategoryClick('Fantasy')}>Fantasy</button>
                    <button onClick={() => this.handleCategoryClick('History')}>History</button>
                    <button onClick={() => this.handleCategoryClick('Horror')}>Horror</button>
                    <button onClick={() => this.handleCategoryClick('Romance')}>Romance</button>
                    <button onClick={() => this.handleCategoryClick('Scifi')}>Scifi</button>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                    }}>
                        <label htmlFor='searchBook'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </label>
                        <input type='text' name='searchBook' id='searchBook' placeholder='Cerca il tuo libro' value={this.state.bookTitle} onChange={this.handleSearch}/>
                    </form>
                </div>
                <div className='cardsContainer'>
                    <div className='cardsSearch'>
                        {filteredBooks.map((book) => {
                            return (
                                <Book key={book.asin} img={book.img} title={book.title} />
                            )
                        })}
                    </div>
                    <div className='cardsButton'>
                        {selectedData.map((book) => {
                            return (
                                <Book key={book.asin} img={book.img} title={book.title} />
                            )
                        })}
                    </div>
                </div>
            </main>
        )
    }
}

export default MyMain;
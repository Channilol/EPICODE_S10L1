import React from 'react'
import './MyMain.css'
import fantasy from '../../data/fantasy.json'
import history from '../../data/history.json'
import horror from '../../data/horror.json'
import romance from '../../data/romance.json'
import scifi from '../../data/scifi.json'

class MyMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: null,
        };
    }

    handleCategoryClick = (category) => {
        this.setState({ selectedCategory: category })
    }

    render() {
        const { selectedCategory } = this.state
        
        let selectedData = [];
        switch (selectedCategory) {
          case 'Fantasy':
            selectedData = fantasy;
            break;
          case 'History':
            selectedData = history;
            break;
          case 'Horror':
            selectedData = horror;
            break;
          case 'Romance':
            selectedData = romance;
            break;
          case 'Scifi':
            selectedData = scifi;
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
                </div>
                <div className='cardsContainer'>
                    {selectedData.map((book) => {
                        return (
                            <div className='Card' key={book.id}>
                                <div className='cardImg'>
                                    <img src={book.img} />
                                </div>
                                <h3>{book.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </main>
        )
    }
}

export default MyMain;
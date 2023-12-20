import React from "react";
import './Book.css'

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedBook: 'no',
        };
    }

    render () {
        const clickedBook = this.state.clickedBook
        return (
            <div className={`Card ${clickedBook === 'yes' ? 'clicked' : ''}`} onClick={() => {
                if (clickedBook === 'no') {
                    this.setState({clickedBook: 'yes'})
                } else {
                    this.setState({clickedBook: 'no'})
                }
            }}>
            <div className='cardImg'>
                <img src={this.props.img} />
            </div>
            <h3>{this.props.title}</h3>
        </div>
        )
    }
}

export default Book;
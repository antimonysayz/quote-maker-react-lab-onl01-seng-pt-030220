import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => 
              <QuoteCard 
              key={quote.id} 
              quote={quote}
              upvoteQuote={this.props.upvoteQuote}
              downvoteQuote={this.props.downvoteQuote}
              />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps = state => ({quotes: state.quotes})


const mapPropsToDispatch = dispatch => ({
  removeQuote: id => dispatch({type: 'REMOVE_QUOTE', quoteId: id}),
  upvoteQuote: id => dispatch({type: 'UPVOTE_QUOTE', quoteId: id}),
  downvoteQuote: id => dispatch({type: 'DOWNVOTE_QUOTE', quoteId: id})
})

export default connect(mapStateToProps, mapPropsToDispatch)(Quotes);

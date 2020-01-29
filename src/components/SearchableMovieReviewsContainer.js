import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: "",
        reviews: []
    }

    handleChange = e => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch(URL+`&query=${this.state.searchTerm}`).then(res => res.json())
            .then(message => {
                // console.log(message)
                this.setState({reviews: message.results})
            })
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <h1>Search for Reviews:</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Search" onChange={this.handleChange} />
                    <button>Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer

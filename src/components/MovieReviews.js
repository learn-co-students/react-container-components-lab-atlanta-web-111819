import React from 'react'

function genMovies(movies) {
    // console.log('generating movies')
    if (movies) {
        return movies.map(m => {
            return (
                <div className='review'>
                    <h2>Movie: {m.display_title}</h2>
                    <h3>{m.byline}</h3>
                    <h2>Title: {m.headline}</h2>
                    <p>Summary: {m.summary_short}</p>
                </div>
            )
        })
    }
}

function MovieReviews(props) {
    return (
        <div className='review-list'>
            {genMovies(props.reviews)}
        </div>
    )
}

export default MovieReviews

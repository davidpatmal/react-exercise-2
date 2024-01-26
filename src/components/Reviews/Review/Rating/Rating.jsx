const Rating = (review) => {
    console.log(review)
    return (
        <div>
            <p>Puntuacion:{review.review.review.rating}</p>
        </div>
    )
}

export default Rating

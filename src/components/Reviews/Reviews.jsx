import Review from "./Review/Review"

const Reviews = ({ reviews }) => {
    return (
        <div>
            {reviews.map((item, index) => {
                return <Review key={index} review={item.review}></Review>
            })}
        </div>
    )
}

export default Reviews

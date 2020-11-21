import { FavoriteBorder, Star } from '@material-ui/icons'
import './Result.css'
const Result = ({ img, title, location, description, star, price, total }) => {
    return (
        <div className="result">
            <img src={img} alt="" />
            <FavoriteBorder className="result__heart" />
            <div className="result__info">
                <div className="result__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>______</p>
                    <p>{description}</p>
                </div>
                <div className="result__infoBottom">
                    <div className="result__stars">
                        <Star className="result__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className="result__price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>


        </div>
    )


}

export default Result;
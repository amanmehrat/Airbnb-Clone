import { useState } from 'react';
import { Button } from '@material-ui/core'
import DatePicker from './DatePicker';
import './Banner.css'
import { useHistory } from 'react-router-dom';

const Banner = () => {
    const [showDatePicker, setShowDatePicker] = useState(false)
    const history = useHistory();
    return (
        <div className="banner">
            <div className="banner__search">
                <Button
                    variant='outlined'
                    className="banner__searchButton"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                >{showDatePicker ? "Hide" : "Search Dates"}</Button>
                {showDatePicker && <DatePicker />}
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button variant='outlined' onClick={() => history.push('/search')} >Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner;
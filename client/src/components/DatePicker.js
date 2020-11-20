import { useState } from 'react'
import { addDays } from 'date-fns';
import './DatePicker.css'
import { People } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const DatePicker = () => {
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    console.log(dateRange);
    return (
        <div className="search">
            <DateRangePicker
                onChange={item => setDateRange([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                direction="horizontal"
            />
            <h2>
                Number of guests
                <People />
            </h2>
            <input
                min={0}
                type="number"
                defaultValue={2}
            />
            <Button>Search Airbnb</Button>
        </div>
    )
}
export default DatePicker;
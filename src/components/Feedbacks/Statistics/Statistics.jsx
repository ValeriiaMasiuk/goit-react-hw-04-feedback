import PropTypes from 'prop-types';
import {List, ListItem} from './Statistics.styled'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            <List>
                <ListItem>Good: {good}</ListItem>
                <ListItem>Neutral: {neutral}</ListItem>
                <ListItem>Bad: {bad}</ListItem>
                <ListItem>Total: {total}</ListItem>
                <ListItem>% of positive feedbacks: {positivePercentage}%</ListItem>
            </List>
        </div>
    )
}

export default Statistics

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}
import PropTypes from 'prop-types';
import {ButtonList, Button} from './Controls.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        (options.map((option, index)=> {
            return (
                <ButtonList key={index}>
                    <Button type="button" name={option} onClick={onLeaveFeedback}> {option}</Button>
                </ButtonList>
            )
        }))
    )
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
    option: PropTypes.string,
    index: PropTypes.number,
}
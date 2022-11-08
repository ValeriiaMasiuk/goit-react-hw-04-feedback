import PropTypes from 'prop-types';
import {Message} from './Notification.styled'

const NotificationMessage = ({ message }) => {
    return (
        <div>
            <Message>{message}</Message>
        </div>
    )
}

export default NotificationMessage

NotificationMessage.propTypes = {
    message: PropTypes.string
}
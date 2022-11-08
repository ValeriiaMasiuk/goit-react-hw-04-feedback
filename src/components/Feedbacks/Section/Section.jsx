import PropTypes from 'prop-types';
import {Wrapper, SectionHeader} from './Section.styled'

const Section = ({title, children}) => {
        return (
        <Wrapper>
            <SectionHeader>{title}</SectionHeader>
            {children}
        </Wrapper>
        )
}

export default Section

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
}
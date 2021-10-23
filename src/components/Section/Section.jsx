import PropTypes from 'prop-types';
import s from './Section.module.css'

function Section ({title,children}) {
    return (
        <div className={s.section}>
            <h1 className={s.title}>{title}</h1>
            {children}
        </div>
    )
}

Section.propTypes ={
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Section;
import PropTypes from "prop-types"
import css from "components/FeedbackOptions/FeedbackOptions.module.css"


const FeedbackOptions = ({ nameOptions, onLeaveFeedback }) => {
    console.log(nameOptions)
    const elements = nameOptions.map((name) => {

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
}
        return (
            <button key={name} className={css.btn} onClick={() => onLeaveFeedback(`${name}`)}>{capitalizeFirstLetter(name)}</button>
    )})
    return (
        <>
            {elements}
        </>
        
    )
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
    nameOptions: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}
import PropTypes from "prop-types"
import css from "components/FeedbackOptions/FeedbackOptions.module.css"


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    console.log(options)
    const elements = options.map((name) => {

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
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}
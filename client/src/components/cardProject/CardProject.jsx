import PropTypes from "prop-types"

CardProject.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const CardProject = (props) => {
    const { name, image, description } = props
    return (
        <div>
            <h4>{name}</h4>
            <img src={image} alt="project-image" />
            <p>{description}</p>
        </div>
    )
};

export default CardProject
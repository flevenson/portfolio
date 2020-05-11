export default function Project(props) {

    const {name, description, images}

    return(
        <div>
            <p>Name = {name}</p>
            <p>Description = {description}</p>
            <img src={images} />
        </div>
    )
}
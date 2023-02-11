import PropTypes from "prop-types";
import {Link} from "react-router-dom";

Movie.propTypes={
    coverImg : PropTypes.string.isRequired, 
    title : PropTypes.string.isRequired, 
    summary : PropTypes.string.isRequired, 
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    id : PropTypes.number.isRequired,
}

function Movie({coverImg, title, summary, genres, id}){
    return (

        <div>
              <img src={coverImg} />
              <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
              </h2>
              <p>{summary}</p>
              <ul>
                {genres.map((g)=>(
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
        
    )
}

export default Movie
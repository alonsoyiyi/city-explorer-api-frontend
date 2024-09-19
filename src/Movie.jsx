import { Image } from "react-bootstrap";
function Movie(props) {
    return (
        <section>
            <h2> top rated movie</h2>
            {props.movie.map((peli,index)=>(
                <div key={index}>
                    <p> title:  {peli.title}       </p>                                                                            
                    <p> overview: {peli.overview}     </p>
                    <p> average_votes:{peli.average_votes} </p>
                    <p> total_votes:  {peli.total_votes}</p>
                    <p> image_url:</p>
                    <Image src={peli.image_url}/>
                    <p> popularity:  {peli.popularity}  </p>
                    <p> released_on: {peli.released_on}  </p> 
                </div>
            ))}
        </section>
    )
}
export default Movie;
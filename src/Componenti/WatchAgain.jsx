import { Container } from "react-bootstrap";




export function WatchAgain (props)  {
    //console.log(props);
        return (
        <>
            <Container>
                <h3 className="text-white">Watch Again</h3>
                <div className="d-flex flex-wrap ">
                    {props.props.map((e, i)=>
                            (<div className="dFilm m-0" key={i}><img className="film" src={e.Poster} alt="immagine" /></div>))}                         
                </div>
            </Container>
        </>
        )      
}
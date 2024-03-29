import { Component } from "react";
import { LinkApi, Ricerca, Ricerca2 } from "../Dati/Dati";
import "../fileCss/Main.css"
import {Container, Row, Col, Dropdown, DropdownButton,ButtonGroup, InputGroup, Form, Button, Spinner } from "react-bootstrap";
import { WatchAgain } from "./WatchAgain";

export default class Main extends Component {

state = {
    film : [],
    inpR : "harry%20potter",
    stato: false
}

change = (e) => {
    this.setState({inpR : e.target.value});
}

bottone = () => {
    fetch(LinkApi+this.state.inpR).then(response=>response.json()).then(json=>this.setState({film:json.Search}).catch(err=> console.log(err)));
}

componentDidMount(){
    this.setState({
        stato : true
    })
        return (setTimeout(() => {
            fetch(LinkApi+this.state.inpR).then(response=> response.json(), 
            this.setState({
                stato : false
            })
            ).then(json=>this.setState({film:json.Search})).catch(err=> console.log(err),
            this.setState({
                stato : false
            }))
        }, 3000))
}

render(){
    //console.log(this.state.inpR)
    return (
        <>
            <Container className="bg-dark text-white" >
                <Row className="justify-content-between">
                    <Col lg={3} className=" d-flex">
                        <h3 className="text-white">TV Shows</h3>
                        <div className="ps-5">
                        <DropdownButton
                        as={ButtonGroup}
                        align={{ lg: 'end' }}
                        title="Genere"
                        id="dropdown-menu-align-responsive-1"
                        >
                        <Dropdown.Item eventKey="1">genere1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">genere 2</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    </Col>
                    <Col className="text-end" md={{ span: 3, offset: 3 }}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="inserisci genere"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={this.change}
                            
                        />
                        <Button onClick={this.bottone}   
                         variant="outline-secondary" id="button-addon2">
                        Button
                        </Button>
                    </InputGroup>
                    </Col>
                </Row>
            </Container>
            {
                this.state.stato && (
                    <div>
                        <Spinner animation="grow" variant="danger" />
                    </div>
                )
            }
            <Container>
                <h3 className="text-white">Film</h3>
                <div className="d-flex flex-wrap ">
                    {this.state.film.map((e, i)=>
                        (<div className="dFilm m-0" key={i}><img className="film" src={e.Poster} alt="immagine" /></div>)
                    )};
                </div>
            </Container>
            <WatchAgain props={this.state.film} />
        </>
    )
}

}
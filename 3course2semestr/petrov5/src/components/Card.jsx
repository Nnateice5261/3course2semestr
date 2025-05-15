import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, CardImgOverlay} from "react-bootstrap";

function Card1({item}) {

    return (
        <Card style={{ width: '100%' }}>
                <Card.Img src={item.img} style={{objectFit: 'contain', width: '100%', height: '100%'}}/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Информация о блюде</Accordion.Header>
                        <Accordion.Body>
                            <h5>Цена: {item.cost}</h5>
                            Состав: {`Состав: ${item.composition.join(',')}`}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
    );
}

export default Card1;
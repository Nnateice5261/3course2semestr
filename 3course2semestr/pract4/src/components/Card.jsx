import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1({img, name, description}) {
    return (
        <Card style={{ width: '250px' }}>
            <Card.Img style={{height: '400px'}} variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Card1;
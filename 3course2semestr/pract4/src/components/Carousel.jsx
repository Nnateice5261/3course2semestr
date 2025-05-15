import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
    return (
        <Carousel id='Carousel'>
            <Carousel.Item interval={1000}>
                <img alt='first slide' src="https://wallpapers.com/images/hd/berserk-manga-j9jhaeik74jcrw1q.jpg"></img>
                <Carousel.Caption>
                    <h3 style={{color: 'black', outlineStyle: 'solid', outlineColor: 'black', backgroundColor: 'lightblue'}}>Погрузитесь в мир Гатса, Чёрного Мечника! Пролистайте галерею и ощутите боль, ярость и решимость его пути мести.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img alt='first slide' src="https://i.ytimg.com/vi/fgsWGc83waQ/maxresdefault.jpg"></img>
                <Carousel.Caption>
                    <h3 style={{color: 'black', outlineStyle: 'solid', outlineColor: 'black', backgroundColor: 'lightblue'}}>От наёмника до Чёрного Мечника: взгляните на трагичную эволюцию Гатса, закалённого в бесчисленных сражениях.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt='first slide' src="https://i.ytimg.com/vi/JYOGw0Mp3uM/maxresdefault.jpg"></img>
                <Carousel.Caption>
                    <h3 style={{color: 'black', outlineStyle: 'solid', outlineColor: 'black', backgroundColor: 'lightblue'}}>Гатс. Воин. Легенда. Вспомните захватывающие моменты жизни Чёрного Мечника, его силу и боль.
                    </h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;
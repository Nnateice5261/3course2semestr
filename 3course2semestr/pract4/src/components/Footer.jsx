import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4" id='Footer'>
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Информация</h5>
                        <ul className="list-unstyled">
                            <li><a href="" className="text-light">О нас</a></li>
                            <li><a href="" className="text-light">Контакты</a></li>
                            <li><a href="" className="text-light">Политика конфиденциальности</a></li>
                            <li><a href="" className="text-light">Условия использования</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Категории</h5>
                        <ul className="list-unstyled">
                            <li><a href="" className="text-light">Художественная литература</a></li>
                            <li><a href="" className="text-light">Нехудожественная литература</a></li>
                            <li><a href="" className="text-light">Детские книги</a></li>
                            <li><a href="" className="text-light">Наука и техника</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Подпишитесь на рассылку</h5>
                        <p>Получайте новости о новинках и скидках.</p>
                        <form>
                            <div className="mb-3">
                                <input type="email" className="form-control bg-secondary border-0 text-light" placeholder="Ваш email" />
                            </div>
                            <button type="submit" className="btn btn-outline-light">Подписаться</button>
                        </form>
                    </Col>
                </Row>
                <hr className="border-light my-4" />
                <Row>
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} Книжный Магазин. Все права защищены.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
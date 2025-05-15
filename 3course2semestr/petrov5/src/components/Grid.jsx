import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card1 from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';

function Grid() {
    const card = [
        {
            name: "Паста Карбонара",
            composition: ["спагетти", "яйца", "панчетта", "сыр пармезан", "черный перец"],
            cost: 12.99,
            img: "https://static-actual-production.chibbis.ru/96aa55231687ad5c8a4e342a4612262b.jpeg"
        },
        {
            name: "Пицца Маргарита",
            composition: ["тесто для пиццы", "томатный соус", "моцарелла", "базилик", "оливковое масло"],
            cost: 10.50,
            img: "https://avatars.mds.yandex.net/i?id=57517a0fc4a0243c711de2f575f536db02d16d65-9182425-images-thumbs&n=13"
        },
        {
            name: "Бургер Классический",
            composition: ["булочка для бургера", "говяжья котлета", "сыр чеддер", "лист салата", "помидор", "лук", "соус"],
            cost: 8.75,
            img: "https://avatars.mds.yandex.net/i?id=63143ca955e90ad0ae6a3c77ead6284ec29e9261-12569562-images-thumbs&n=13"
        },
        {
            name: "Суши Сет Ассорти",
            composition: ["рис для суши", "нори", "лосось", "тунец", "авокадо", "огурец", "соевый соус", "васаби", "имбирь"],
            cost: 18.50,
            img: "https://avatars.mds.yandex.net/i?id=05998bac4119913945c4440d12d09fd4_l-3602423-images-thumbs&n=13"
        },
        {
            name: "Салат Цезарь",
            composition: ["салат ромэн", "сухарики", "сыр пармезан", "соус цезарь", "куриное филе (опционально)"],
            cost: 9.25,
            img: "https://avatars.mds.yandex.net/i?id=8a09f2f1500c4206db7dbd715818755a31db9e0c-5189723-images-thumbs&n=13"
        }
    ];
    const card1 = [{
            name: "Стейк Рибай",
            composition: ["говяжий стейк рибай", "соль", "перец", "розмарин", "тимьян", "чеснок", "оливковое масло"],
            cost: 25.99,
            img: "https://alberogroup.ru/assets/image-cache/images/products/324/e1deb7394fdd7f15ede274980b1ee6e7baac4eba.ed408d64.jpg"
        },
        {
            name: "Куриный Суп Лапша",
            composition: ["куриный бульон", "куриное мясо", "лапша", "морковь", "сельдерей", "лук", "петрушка"],
            cost: 6.50,
            img: "https://avatars.mds.yandex.net/i?id=b00a651fad89d1297d59e69138ccb0bbf0efe9bb-9214194-images-thumbs&n=13"
        },
        {
            name: "Картофель Фри",
            composition: ["картофель", "растительное масло", "соль"],
            cost: 4.00,
            img: "https://avatars.mds.yandex.net/i?id=7e82dc097670e83059c134e1ceb16074_l-12145584-images-thumbs&n=13"
        },
        {
            name: "Шоколадный Торт",
            composition: ["мука", "сахар", "какао-порошок", "яйца", "масло", "молоко", "шоколадная глазурь"],
            cost: 7.50,
            img: "https://avatars.mds.yandex.net/i?id=fb2727dffeeae0f6f5eb5549e18c31ea9707304a-9181330-images-thumbs&n=13"
        },
        {
            name: "Мороженое Ванильное",
            composition: ["молоко", "сливки", "сахар", "ванильный экстракт"],
            cost: 3.50,
            img: "https://avatars.mds.yandex.net/i?id=651a3329976194dc33e509c2dddf9c52_l-5754847-images-thumbs&n=13"
        }]
    const card2 = [
        {
            name: "Том Ям Кунг",
            composition: ["креветки", "бульон", "листья каффир-лайма", "галангал", "лемонграсс", "перец чили", "рыбный соус", "лаймовый сок"],
            cost: 14.75,
            img: "https://sun9-77.userapi.com/impg/ViP-tjPJ60WVlbVAHO-ZebGPUgC4WfwfdnQf2w/0LcNjGJDMp4.jpg?size=1920x1440&quality=96&sign=fcb8f16961008fc498403bf326caa58a&c_uniq_tag=C9K06N3--ZVEN1hUp5-CujEA8GYdE-HAEAWEhiSvvq0&type=album"
        },
        {
            name: "Паэлья с Морепродуктами",
            composition: ["рис", "шафран", "оливковое масло", "курица", "креветки", "мидии", "кальмары", "зеленый горошек", "помидоры"],
            cost: 22.00,
            img: "https://www.koolinar.ru/all_image/recipes/88/88717/recipe_3fee330e-5546-41fe-9edf-742b641297df.jpg"
        },
        {
            name: "Борщ Украинский",
            composition: ["свекла", "капуста", "картофель", "морковь", "лук", "томатная паста", "мясной бульон (опционально)", "сметана", "зелень"],
            cost: 7.99,
            img: "https://avatars.mds.yandex.net/i?id=d7431507051c1c5dca4feed149e6bd1519db3540-5280865-images-thumbs&n=13"
        },
        {
            name: "Блины с Икрой",
            composition: ["мука", "молоко", "яйца", "сахар", "соль", "растительное масло", "красная икра"],
            cost: 16.50,
            img: "https://avatars.mds.yandex.net/i?id=1d1789e056cd7b07f20e027e2cd3ee3f95593196-10814639-images-thumbs&n=13"
        },
        {
            name: "Яблочный Пирог",
            composition: ["мука", "масло", "сахар", "яблоки", "корица", "лимонный сок"],
            cost: 6.00,
            img: "https://avatars.mds.yandex.net/i?id=b7fbc005e864f363ff6d9fc4513d784e4e21c20d-4960439-images-thumbs&n=13"
        }
    ]
    return (
        <Container>
            <Row>
                {card.map((item, index) => (
                    <Col key={index} xs={2} md={2} lg={4} className="mb-4" id='card'>
                        <Card1 item={item}/>
                    </Col>
                ))}
            </Row>
            <Row>
                {card1.map((item, index) => (
                    <Col key={index} xs={2} md={2} lg={4} className="mb-4"  id='card2'>
                        <Card1 item={item}/>
                    </Col>
                ))}
            </Row>
            <Row>
                {card2.map((item, index) => (
                    <Col key={index} xs={2} md={2} lg={4} className="mb-4" id='card3'>
                        <Card1 item={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Grid;
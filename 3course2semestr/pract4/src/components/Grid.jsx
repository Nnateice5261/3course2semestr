import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Card1 from "./Card";

const Grid = () => {
    const books1 = [
        {
            name: "Мастер и Маргарита",
            description: "Роман Михаила Булгакова, одно из самых известных произведений русской литературы XX века, сочетающее философскую глубину, сатиру и мистику.",
            img: "https://www.mann-ivanov-ferber.ru/assets/images/covers/87/30387/1.50x-thumb.png"
        },
        {
            name: "1984",
            description: "Антиутопический роман Джорджа Оруэлла, описывающий тоталитарное общество, где правительство контролирует каждый аспект жизни граждан.",
            img: "https://www.mann-ivanov-ferber.ru/assets/images/covers/91/32291/1.50x-thumb.png"
        },
        {
            name: "Гордость и предубеждение",
            description: "Роман Джейн Остин, рассказывающий о развитии отношений между Элизабет Беннет и мистером Дарси, затрагивающий темы любви, брака и социального статуса в Англии XIX века.",
            img: "https://www.mann-ivanov-ferber.ru/assets/images/covers/99/31899/1.50x-thumb.png"
        },
        {
            name: "Убить пересмешника",
            description: "Роман Харпер Ли, повествующий о детстве девочки Глазастика Финч на Юге США во время Великой депрессии и затрагивающий темы расовой несправедливости.",
            img: "https://avatars.mds.yandex.net/get-entity_search/1783226/483013417/S600xU_2x"
        },
        {
            name: "Преступление и наказание",
            description: "Роман Федора Достоевского, психологическая драма о студенте Родионе Раскольникове, совершившем убийство и испытывающем муки совести.",
            img: "https://www.mann-ivanov-ferber.ru/assets/images/covers/15/30415/1.50x-thumb.png"
        },
    ];
    const books2 = [
        {
            name: "Гарри Поттер и философский камень",
            description: "Первая книга из серии романов Джоан Роулинг о юном волшебнике Гарри Поттере и его приключениях в школе чародейства и волшебства Хогвартс.",
            img: "https://cdn.eksmo.ru/v2/ITD000000001090213/COVER/cover4__w820.jpg"
        },
        {
            name: "Властелин колец: Братство Кольца",
            description: "Первая часть эпической фэнтези Джона Р. Р. Толкина о путешествии хоббита Фродо Бэггинса с целью уничтожить Кольцо Всевластия.",
            img: "https://fkniga.ru/media/product/04/040412/KA-00091530.jpg"
        },
        {
            name: "Маленький принц",
            description: "Философская сказка Антуана де Сент-Экзюпери, рассказывающая о встрече летчика, потерпевшего крушение в пустыне, с маленьким принцем с другой планеты.",
            img: "https://www.mann-ivanov-ferber.ru/assets/images/covers/87/30587/1.50x-thumb.png"
        },
        {
            name: "Скотный двор",
            description: "Аллегорическая повесть Джорджа Оруэлла, сатирически изображающая революцию и ее последствия на примере жизни обитателей фермы.",
            img: "https://avatars.mds.yandex.net/get-mpic/5068955/img_id9077815909815014537.jpeg/orig"
        },
        {
            name: "Над пропастью во ржи",
            description: "Роман Джерома Сэлинджера, рассказывающий о переживаниях и бунте шестнадцатилетнего подростка Холдена Колфилда.",
            img: "https://cdn1.ozone.ru/s3/multimedia-1-l/7080500649.jpg"
        },
    ]
    const books3 = [
        {
            name: "Джейн Эйр",
            description: "Роман Шарлотты Бронте, история жизни и любви гувернантки Джейн Эйр, столкнувшейся с трудностями и предрассудками.",
            img: "https://www.mann-ivanov-ferber.ru/assets/images/covers/20/30420/1.50x-thumb.png"
        },
        {
            name: "О дивный новый мир",
            description: "Антиутопический роман Олдоса Хаксли, описывающий футуристическое общество, основанное на генетической инженерии и контроле над сознанием.",
            img: "https://avatars.mds.yandex.net/i?id=5c2bf164daecd34d39a3e371a5dc2a6d6147e0f6-10850090-images-thumbs&n=13"
        },
        {
            name: "Три товарища",
            description: "Роман Эриха Марии Ремарка о дружбе трех ветеранов Первой мировой войны в послевоенной Германии.",
            img: "https://object.pscloud.io/cms/cms/Photo/img_0_1550_695_0.jpeg"
        },
        {
            name: "Старик и море",
            description: "Повесть Эрнеста Хемингуэя о борьбе старого кубинского рыбака Сантьяго с огромным марлином.",
            img: "https://avatars.mds.yandex.net/get-mpic/4880383/img_id3147802546765507220.jpeg/orig"
        },
        {
            name: "Бойцовский клуб",
            description: "Роман Чака Паланика, рассказывающий о жизни безымянного рассказчика, который вместе с харизматичным Тайлером Дерденом создает подпольный бойцовский клуб.",
            img: "https://avatars.mds.yandex.net/i?id=cf97afcf0a59ce77be74a8f8e9e84ff6_l-11424584-images-thumbs&n=13"
        }
    ]
    const arrays = (array) => {
         return array.map((el, index1) =>{
             const Props = {
                 img:el.img, name:el.name, description:el.description
             }
            return (
                <Col key={`el ${index1}`}>
                    <Card1 {...Props}></Card1>
                </Col>
        )})
    }
    return (
        <Container id='Grid'>
            <Row md={5}>
                {arrays(books1)}
            </Row>
            <Row md={5}>
                {arrays(books2)}
            </Row>
            <Row md={5}>
                {arrays(books3)}
            </Row>
        </Container>
    );
};

export default Grid;
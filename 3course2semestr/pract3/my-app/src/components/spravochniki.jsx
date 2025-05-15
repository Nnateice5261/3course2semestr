import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

function Spravochniki() {
    let info = [
        {FIO: "Елисей Балин", favGame: 'Дарк Соулс 3', cherta: 'Страдать', img: 'Елисей.jpg'},
        {FIO: "Дмитрий Смирнов", favGame: 'Раст', cherta: 'Рейд камушками', img: 'Дмитрий.jpg'},
        {FIO: "Полтавский Вячеслав", favGame: 'Помойка 2', cherta: 'Спидран по фронтенд поехали', img: 'Слава.jpg'},
        {FIO: "Кирилл Борисов", favGame: 'Контра', cherta: 'Обьяснит в чате тиммейтам где их родители', img: 'Кирилл.jpg'},
    ]
    const [rerender, setRerender] = useState(info);
    const [newImage, setNewImage] = useState(null);
    const sortNames = (nameKey) => {
        let arrNames = info.map((el) => el[nameKey])
        arrNames.sort();
        arrNames.forEach((el,indexArr) =>  {
            info.forEach((infoEl,indexInfo) => {
                if (infoEl[nameKey] === el) {
                    let oldName = info[indexArr][nameKey];
                    info[indexArr][nameKey] = infoEl[nameKey];
                    info[indexInfo][nameKey] = oldName;
                    return undefined;
                }
            })
        })
        setRerender(info);
    }

    return (
        <Table striped bordered hover >
            <thead>
            <tr>
                <th onClick={() => sortNames('img')}><h4>Photo</h4></th>
                <th onClick={() => sortNames('FIO')}><h4>FIO</h4></th>
                <th onClick={() => sortNames('favGame')}><h4>BestGame</h4></th>
                <th onClick={() => sortNames('cherta')}><h4>Особенность</h4></th>
                <th onClick={() => setNewImage('https://avatars.mds.yandex.net/i?id=9167b2139ad322cb824c580574b1a7d38738e7de-5315434-images-thumbs&n=13')}><h4>Добавьте еще одну колонку</h4></th>
            </tr>
            </thead>
            <tbody>
            {rerender.map((element, index) =>
                <tr key={index}>
                    <td className="containerImage">
                        <img className="image" alt={`photo${index}`} src={element.img}></img>
                    </td>
                    <td>{element.FIO}</td>
                    <td>{element.favGame}</td>
                    <td>{element.cherta}</td>
                    {newImage ?
                        <td className='containerImage'>
                            <img  className="image" alt='papich' src={newImage}></img>
                        </td>
                    : undefined
                    }
                </tr>
            )}
            </tbody>
        </Table>
    );
}

export default Spravochniki;
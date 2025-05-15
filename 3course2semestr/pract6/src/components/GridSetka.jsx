import React from 'react';
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import ItemCard from "./ItemCard";
const GridSetka = () => {
    const clothingItems = [
        {
            img: "https://images.unsplash.com/photo-1741709845803-d96927ad8965?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fCVEMCU5QSVEMCVCQiVEMCVCMCVEMSU4MSVEMSU4MSVEMCVCOCVEMSU4NyVEMCVCNSVEMSU4MSVEMCVCQSVEMCVCOCVEMCVCOSUyMCVEMCVCRiVEMCVCOCVEMCVCNCVEMCVCNiVEMCVCMCVEMCVCQXxlbnwwfHwwfHx8MA%3D%3D",
            name: "Классический пиджак",
            description: "Элегантный пиджак из шерстяной ткани с подкладкой. Идеально подходит для деловых встреч и официальных мероприятий.",
            cost: 8990,
            weight: "1.2 kg",
            height: "70 cm",
            width: "50 cm",
            length: "75 cm",
            material: "Шерсть",
            color: "Черный",
            manufacturer: "Hugo Boss",
            counter: 0
        },
        {
            img: "https://images.unsplash.com/photo-1685435690165-97ba05cb8c1a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUQwJTk0JUQwJUI2JUQwJUI4JUQwJUJEJUQxJTgxJUQxJThCJTIwJUQwJUJGJUQxJTgwJUQxJThGJUQwJUJDJUQwJUJFJUQwJUIzJUQwJUJFJTIwJUQwJUJBJUQxJTgwJUQwJUJFJUQxJThGfGVufDB8fDB8fHww",
            name: "Джинсы прямого кроя",
            description: "Удобные джинсы из плотного денима с пятью карманами. Универсальная модель на каждый день.",
            cost: 3750,
            weight: "0.6 kg",
            height: "100 cm",
            width: "35 cm",
            length: "85 cm",
            material: "Деним",
            color: "Синий",
            manufacturer: "Levi's",
            counter: 0
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1691367782367-2bd37f646abc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUQwJUE1JUQwJUJCJUQwJUJFJUQwJUJGJUQwJUJBJUQwJUJFJUQwJUIyJUQwJUIwJUQxJThGJTIwJUQxJTg0JUQxJTgzJUQxJTgyJUQwJUIxJUQwJUJFJUQwJUJCJUQwJUJBJUQwJUIwfGVufDB8fDB8fHww",
            name: "Хлопковая футболка",
            description: "Базовая футболка из 100% органического хлопка. Мягкая и приятная к телу.",
            cost: 1490,
            weight: "0.2 kg",
            height: "60 cm",
            width: "45 cm",
            length: "70 cm",
            material: "Хлопок",
            color: "Белый",
            manufacturer: "Uniqlo",
            counter: 0
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1733701621492-cb33ed46b733?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUQwJTlBJUQwJUIwJUQxJTg4JUQwJUI1JUQwJUJDJUQwJUI4JUQxJTgwJUQwJUJFJUQwJUIyJUQxJThCJUQwJUI5JTIwJUQxJTgxJUQwJUIyJUQwJUI4JUQxJTgyJUQwJUI1JUQxJTgwfGVufDB8fDB8fHww",
            name: "Кашемировый свитер",
            description: "Теплый свитер из премиального кашемира. Сохраняет тепло даже в самые холодные дни.",
            cost: 12500,
            weight: "0.5 kg",
            height: "65 cm",
            width: "50 cm",
            length: "60 cm",
            material: "Кашемир",
            color: "Серый",
            manufacturer: "Brunello Cucinelli",
            counter: 0
        },
        {
            img: "https://images.unsplash.com/photo-1579003980094-a10e6d6cfaa7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUQwJTlBJUQwJUJFJUQwJUI2JUQwJUIwJUQwJUJEJUQwJUIwJUQxJThGJTIwJUQwJUJBJUQxJTgzJUQxJTgwJUQxJTgyJUQwJUJBJUQwJUIwfGVufDB8fDB8fHww",
            name: "Кожаная куртка",
            description: "Стильная куртка из натуральной кожи с подкладкой. Классический дизайн, который никогда не выйдет из моды.",
            cost: 15990,
            weight: "1.8 kg",
            height: "60 cm",
            width: "55 cm",
            length: "65 cm",
            material: "Натуральная кожа",
            color: "Коричневый",
            manufacturer: "Schott NYC",
            counter: 0
        },
        {
            img: "https://images.unsplash.com/photo-1630355734650-55fe91e1e5c7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUQwJTlCJUQxJThDJUQwJUJEJUQxJThGJUQwJUJEJUQwJUIwJUQxJThGJTIwJUQxJTgwJUQxJTgzJUQwJUIxJUQwJUIwJUQxJTg4JUQwJUJBJUQwJUIwfGVufDB8fDB8fHww",
            name: "Льняная рубашка",
            description: "Легкая рубашка из натурального льна. Идеальный выбор для жаркой погоды.",
            cost: 4250,
            weight: "0.3 kg",
            height: "75 cm",
            width: "50 cm",
            length: "80 cm",
            material: "Лён",
            color: "Бежевый",
            manufacturer: "Massimo Dutti",
            counter: 0
        },
        {
            img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUQwJUE4JUQwJUI1JUQxJTgwJUQxJTgxJUQxJTgyJUQxJThGJUQwJUJEJUQwJUJFJUQwJUI1JTIwJUQwJUJGJUQwJUIwJUQwJUJCJUQxJThDJUQxJTgyJUQwJUJFfGVufDB8fDB8fHww",
            name: "Шерстяное пальто",
            description: "Элегантное пальто из шерсти с добавлением кашемира. Классический силуэт и удобная длина до колена.",
            cost: 19900,
            weight: "2.0 kg",
            height: "110 cm",
            width: "60 cm",
            length: "95 cm",
            material: "Шерсть, кашемир",
            color: "Темно-синий",
            manufacturer: "Burberry",
            counter: 0
        },
        {
            img: "https://images.unsplash.com/photo-1650424362434-cdd13eb9bbb5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fCVEMCVBMSVEMCVCRiVEMCVCRSVEMSU4MCVEMSU4MiVEMCVCOCVEMCVCMiVEMCVCRCVEMSU4QiVEMCVCNSUyMCVEMCVCMSVEMSU4MCVEMSU4RSVEMCVCQSVEMCVCOHxlbnwwfHwwfHx8MA%3D%3D",
            name: "Спортивные брюки",
            description: "Удобные брюки из хлопкового трикотажа с эластичным поясом. Подходят для тренировок и повседневной носки.",
            cost: 2990,
            weight: "0.4 kg",
            height: "90 cm",
            width: "40 cm",
            length: "95 cm",
            material: "Хлопок, эластан",
            color: "Черный",
            manufacturer: "Nike",
            counter: 0
        },
        {
            img: "https://images.unsplash.com/photo-1590588503704-9aaf7d2946d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUQwJUE4JUQwJUI1JUQwJUJCJUQwJUJBJUQwJUJFJUQwJUIyJUQwJUIwJUQxJThGJTIwJUQwJUIxJUQwJUJCJUQxJTgzJUQwJUI3JUQwJUJBJUQwJUIwfGVufDB8fDB8fHww",
            name: "Шелковая блузка",
            description: "Элегантная блузка из натурального шелка. Идеально подходит для создания вечерних и деловых образов.",
            cost: 6750,
            weight: "0.25 kg",
            height: "55 cm",
            width: "45 cm",
            length: "60 cm",
            material: "Шелк",
            color: "Голубой",
            manufacturer: "Zara",
            counter: 0
        },
        {
            img: "https://images.unsplash.com/photo-1621295041908-db706e5aae57?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUQwJUEyJUQwJUI1JUQwJUJGJUQwJUJCJUQwJUIwJUQxJThGJTIwJUQwJUJBJUQxJTgzJUQxJTgwJUQxJTgyJUQwJUJBJUQwJUIwfGVufDB8fDB8fHww",
            name: "Пуховик с капюшоном",
            description: "Теплый пуховик с наполнителем из гусиного пуха. Защитит от холода в зимний период.",
            cost: 14500,
            weight: "1.5 kg",
            height: "75 cm",
            width: "60 cm",
            length: "85 cm",
            material: "Полиэстер, гусиный пух",
            color: "Красный",
            manufacturer: "The North Face",
            counter: 0
        },
        {
            img: "https://images.unsplash.com/photo-1583333001978-8c57d752ce5b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUQwJTlGJUQwJUJCJUQwJUIwJUQxJTgyJUQxJThDJUQwJUI1JTIwJUQwJUJDJUQwJUI4JUQwJUI0JUQwJUI4fGVufDB8fDB8fHww",
            name: "Платье-миди",
            description: "Элегантное платье средней длины из вискозы. Универсальная модель для разных случаев.",
            cost: 5990,
            weight: "0.35 kg",
            height: "90 cm",
            width: "40 cm",
            length: "95 cm",
            material: "Вискоза",
            color: "Зеленый",
            manufacturer: "Mango",
            counter: 0
        },
        {
            img: "https://images.unsplash.com/photo-1672306922100-d8f81ccdbd05?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUQxJTgyJUQwJUJFJUQwJUJEJUQwJUJBJUQwJUI4JUQwJUI5JTIwJUQxJTgxJUQwJUIyJUQwJUI4JUQxJTgyJUQwJUI1JUQxJTgwJTIwJUQwJUJFJUQwJUI0JUQwJUI1JUQwJUI2JUQwJUI0JUQwJUIwfGVufDB8fDB8fHww",
            name: "Водолазка",
            description: "Облегающая водолазка из мягкой пряжи. Отлично сочетается с другими предметами гардероба.",
            cost: 2490,
            weight: "0.3 kg",
            height: "60 cm",
            width: "40 cm",
            length: "65 cm",
            material: "Акрил, шерсть",
            color: "Бордовый",
            manufacturer: "Calvin Klein",
            counter: 0
        }
    ];
    return (
        <Grid container spacing={2} sx={{justifyContent: 'center', marginY: "10px"}}>
            {clothingItems.map((item,index) =>
                <Grid key={index}>
                    <Item>
                        <ItemCard item={item}></ItemCard>
                    </Item>
                </Grid>
                )}
        </Grid>
    );
};

export default GridSetka;
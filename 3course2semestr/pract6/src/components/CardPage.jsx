import React, {useContext, useRef, useState, useEffect} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Button, Container} from "@mui/material";
import {NameContext} from "../App";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {ArrowDownward} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {Link} from "react-router-dom";

const CardPage = ({array, setArray}) => {
    const [favorite, setFavorite] = useState(false);
    const [star, setStar] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState('auto');
    const {mainItem, setMainItem} = useContext(NameContext);
    const accordionRef = useRef(null);
    console.log(array)
    const filterArray = () => {
        const existingItemIndex = array.findIndex(item => item.name === mainItem.name);
        if (existingItemIndex === -1) {
            setArray([...array, {...mainItem, counter: 1, isNew: true}]);
        } else {
            const newArray = [...array];
            newArray[existingItemIndex].counter += 1;
            setArray(newArray);
        }
    }
    useEffect(() => {
        if (accordionRef.current) {
            const height = expanded
                ? `${accordionRef.current.scrollHeight + 32}px` // 32px - дополнительный отступ
                : 'auto';
            setContentHeight(height);
        }
    }, [expanded, mainItem]);

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'black',
            color: 'white',
            marginY: '50px',
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant='h1'>
                {mainItem.name}
            </Typography>
            <Container sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                marginY: '50px',
                border: '1px solid #1976d2',
                padding: '10px'
            }}>
                <Container sx={{
                    width: '300px',
                    height: '400px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <img src={mainItem.img} alt={mainItem.name} style={{width: '100%', height: '100%'}}></img>
                </Container>
                <Container sx={{
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    border: '2px solid #1976d2',
                    borderRadius: '8px',
                    padding: '16px',
                    minHeight: contentHeight,
                    transition: 'min-height 0.3s ease',
                    boxSizing: 'border-box'
                }}>
                    <Typography variant='h4' sx={{mb: 2}}>
                        Характеристики товара
                    </Typography>
                    <Typography variant='h6'>
                        {`Высота: ${mainItem.height}`}
                    </Typography>
                    <Typography variant='h6'>
                        {`Ширина: ${mainItem.width}`}
                    </Typography>
                    <Typography variant='h6'>
                        {`Вес: ${mainItem.weight}`}
                    </Typography>

                    <Accordion
                        ref={accordionRef}
                        expanded={expanded}
                        onChange={() => setExpanded(!expanded)}
                        sx={{
                            color: 'white',
                            backgroundColor: '#1976d2',
                            border: '1px solid #1976d2',
                            width: '100%',
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDownward sx={{color: 'white'}} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography component="span">Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant='h6'>
                                {`Длина: ${mainItem.length}`}
                            </Typography>
                            <Typography variant='h6'>
                                {`Материал: ${mainItem.material}`}
                            </Typography>
                            <Typography variant='h6'>
                                {`Цвет: ${mainItem.color}`}
                            </Typography>
                            <Typography variant='h6'>
                                {`Производитель: ${mainItem.manufacturer}`}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Container>
                <Container sx={{
                    width: '300px',
                    flexDirection: 'column',
                    height: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid #1976d2',
                    padding: '10px'
                }}>
                    <Box sx={{ flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                        <Typography variant='h4'>
                            {`Цена: ${mainItem.cost}`}
                        </Typography>
                        <IconButton onClick={() => setFavorite(!favorite)}>
                            {favorite ? <FavoriteIcon sx={{color: 'red'}}/> : <FavoriteBorderIcon sx={{color: 'white'}}/>}
                        </IconButton>
                        <IconButton onClick={() => setStar(!star)}>
                            {star ? <StarIcon sx={{color: 'gold'}}/> : <StarBorderIcon sx={{color: 'white'}}/>}
                            <Typography>4.6</Typography>
                        </IconButton>
                    </Box>
                    <Button onClick={() => {
                        filterArray();
                    }} color='primary'
                        variant='contained' sx={{border: '1px solid #1976d2', width: '100%', mt: 2}}>
                    <Link to='/shoppingCart' style={{textDecoration: 'none', color: 'white', height: '100%', width: '100%'}}>
                        <Typography>Добавить в корзину</Typography>
                    </Link>
                </Button>
                </Container>
            </Container>
        </Container>
    );
};

export default CardPage;
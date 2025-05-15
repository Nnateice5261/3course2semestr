import React, {useState, useEffect} from 'react';
import {keyframes} from '@emotion/react';
import {Button, Checkbox, Container, FormControlLabel, Modal, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

// Анимации
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const bounce = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
`;

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ShoppingCart = ({array, setArray}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const hasNewItems = array.some(item => item.isNew);
        if (hasNewItems) {
            const timer = setTimeout(() => {
                setArray(prevArray =>
                    prevArray.map(item => ({...item, isNew: false}))
                );
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [array, setArray]);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginY: '50px',
            width: '100%',
            height: '100%'
        }}>
            <Paper sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'black',
                color: 'white',
                marginY: '50px',
                width: '70%',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '150px',
                padding: '20px'
            }}>
                <Typography variant='h1'>Корзина</Typography>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    marginY: '50px',
                    border: '1px solid #1976d2',
                    padding: '10px'
                }}>
                    {array.map((item, index) => (
                        <Container
                            key={`${item.name}-${index}`}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                border: '2px solid #1976d2',
                                borderRadius: '8px',
                                padding: '16px',
                                marginBottom: '16px',
                                animation: item.isNew
                                    ? `${fadeIn} 0.5s ease-out forwards, ${bounce} 0.5s 0.5s forwards`
                                    : 'none',
                                opacity: item.isNew ? 0 : 1,
                            }}
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                style={{
                                    width: '150px',
                                    height: '200px',
                                    objectFit: 'cover'
                                }}
                            />
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: '10px',
                                flexGrow: 1
                            }}>
                                <Typography variant='h4'>{item.name}</Typography>
                                <Typography variant='h6'>{`Цена: ${item.cost}`}</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100px',
                                height: '50%',
                                border: '1px solid white',
                                justifyContent: 'space-between',
                                padding: '5px',
                                alignItems: 'center'
                            }}>
                                <IconButton
                                    sx={{
                                        border: '1px solid white',
                                        width: '30%',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                        }
                                    }}
                                    onClick={() => {
                                        let newArray = [...array];
                                        if (item.counter > 1) {
                                            newArray[index].counter--;
                                            setArray(newArray);
                                        } else {
                                            newArray.splice(index, 1);
                                            setArray(newArray);
                                        }
                                    }}
                                >
                                    <RemoveIcon sx={{color: 'white'}}/>
                                </IconButton>
                                <Typography variant='h4'>
                                    {item.counter}
                                </Typography>
                                <IconButton
                                    sx={{
                                        border: '1px solid white',
                                        width: '30%',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                        }
                                    }}
                                    onClick={() => {
                                        let newArray = [...array];
                                        newArray[index].counter++;
                                        setArray(newArray);
                                    }}
                                >
                                    <AddIcon sx={{color: 'white'}}/>
                                </IconButton>
                            </Box>
                        </Container>
                    ))}
                </Container>
            </Paper>

            <Paper sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '300px',
                height: '300px',
                padding: '16px',
                backgroundColor: 'black',
                color: 'white',
                position: 'sticky',
                top: '20px'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <Typography variant='h4'>Итого:</Typography>
                    <Typography variant='h4'>
                        {array.reduce((acc, item) => acc + item.cost * item.counter, 0)} ₽
                    </Typography>
                </Box>
                <Typography variant='h6'>Доставка: Курский вокзал</Typography>
                <Button
                    onClick={handleOpen}
                    sx={{
                        width: '100%',
                        height: '30%',
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #1976d2',
                        '&:hover': {
                            backgroundColor: 'rgba(25, 118, 210, 0.1)'
                        }
                    }}
                    disabled={array.length === 0}
                >
                    <Typography sx={{width: '100%'}}>Заказать</Typography>
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Покупка совершена!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Спасибо за покупку в магазине одежды YourFashion!
                        </Typography>
                    </Box>
                </Modal>
                <FormControlLabel
                    control={<Checkbox defaultChecked color="primary" />}
                    label="Соглашаюсь с правилами пользования магазина одежды YourFashion"
                    sx={{color: 'white'}}
                />
            </Paper>
        </Box>
    );
};

export default ShoppingCart;
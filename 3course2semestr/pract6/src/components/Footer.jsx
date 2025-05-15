import React from 'react';
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import {Container, Icon} from "@mui/material";

const Footer = () => {
    return (
        <Container maxWidth='100%' sx={{ backgroundColor: 'black', color: 'white', display: 'flex',  justifyContent: 'center', height: '100%', alignItems: 'center'}}>
            <Icon size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img alt="logo" style={{height: '200px', width: '200px', objectFit: 'cover', marginTop: '75px' }} src="/yourfashion_logo (6).svg"></img>
            </Icon>
                <Grid container rowSpacing={10}  sx={{
                    width: '100%',
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                <Grid  size={{ xs: 2, sm: 4, md: 4 }} sx={{ '& > *': { mb: 2 } }}>
                    <Item sx={{fontWeight: 700, fontSize: '24px'}}>Категории</Item>
                    <Item>Обувь</Item>
                    <Item>Женская одежда</Item>
                    <Item>Мужская одежда</Item>
                </Grid>
                <Grid size={{ xs: 2, sm: 4, md: 4 }} sx={{ '& > *': { mb: 2 } }}>
                    <Item sx={{fontWeight: 700, fontSize: '24px'}}>Информация</Item>
                    <Item>О компании</Item>
                    <Item>Доставка и оплата</Item>
                    <Item>Возврат и обмен</Item>
                </Grid>
                <Grid  size={{ xs: 2, sm: 4, md: 4 }} sx={{ '& > *': { mb: 2 } }}>
                    <Item sx={{fontWeight: 700, fontSize: '24px'}}>Контакты</Item>
                    <Item>+7 962 158 08 00</Item>
                    <Item>г. Москва, ул. Модная, д. 123</Item>
                    <Item>Пн-Вс: 10:00 - 22:00</Item>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;
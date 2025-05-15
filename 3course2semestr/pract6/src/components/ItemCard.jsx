import React, {useContext} from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";
import {Link} from 'react-router'
import {NameContext} from "../App";
const ItemCard = ({item}) => {
    const {mainItem, setMainItem} = useContext(NameContext);
    return (
        <Card sx={{ minWidth: 275, backgroundColor: 'black', color: 'white', justifyContent: 'center'}}>
            <CardContent sx={{paddingBottom: '0', padding: '0'}}>
                <Link to={`/${item.name}`} style={{height: "300px", width:"500px", alignItems: 'center', display: 'flex', flexDirection: 'column'}}
                      onClick={() => setMainItem(item)}
                >
                    <img src={item.img} alt={item.name} style={{objectFit: 'cover', height: '100%', width: '70%'}}></img>
                </Link>
                <Container
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start'}}>
                    <Typography sx={{fontWeight: 700, fontSize: '24px'}}>{item.cost}</Typography>
                    <Typography sx={{ fontSize: '24px'}}>{item.name}</Typography>
                </Container>
            </CardContent>
        </Card>
    );
};

export default ItemCard;
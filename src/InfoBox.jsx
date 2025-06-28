import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {

    const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL ="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL= "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL= "https://media.istockphoto.com/id/624868974/photo/its-raining-in-kolkata.webp?a=1&b=1&s=612x612&w=0&k=20&c=TiP5htd8SPDIh28LNJFtToc3-L1OYBC4h4PCXvZwtgs=";

    return(
        <div className="InfoBox">
            <div className="cardContainer">

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity > 80 ?
          <ThunderstormIcon />
           : info.temp > 15
            ?<SunnyIcon/>
             : <AcUnitIcon />
             }
        </Typography>
        <Typography variant="body2"  color= "text.secondary" component={"span"}>
       <p>Temperature = {info.temp}&deg;C</p>
       <p>Humidity = {info.humidity}</p>
       <p>Min Temp = {info.tempMin}&deg;C</p>
       <p>Max Temp = {info.tempMax}&deg;C</p>
       <p>The weather can be describe as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
       
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}
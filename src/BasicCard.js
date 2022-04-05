import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function BasicCard(props) {

  const convertDate = (date) => {
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const d =  new Date(date)
      return `${months[ d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
  }

  return ( <Card variant="outlined"> 
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Name
      </Typography>
      <Typography variant="h5" component="div">
       {props.name}
      </Typography>
       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Super power 
      </Typography>
      <Typography variant="h5" component="div">
       {props.superpower}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        End of an Era 
      </Typography>
      <Typography variant="h5" component="div">
       {convertDate(props.end_of_an_era)}
      </Typography>
    </CardContent>
  </Card>
  );
}

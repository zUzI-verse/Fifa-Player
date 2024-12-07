import React from 'react'
import {
  Card,
  CardBlock,
  CardFooter,
  CardTitle,
  CardText} from 'react-bootstrap-card';
import {
  Col,
  Row,
} from 'react-bootstrap';
const Players = (props) => {
  return (
   
     <Card>
    <CardBlock>
      <CardTitle>
        Some Title
      </CardTitle>
      <div className=''>
        <p> Name: {props.name}</p>
        <p> Age: {props.age}</p>
        <p>Team: {props.team}</p>
        <p> Position: {props.position}</p>
        <p> Nationality: {props.nationality}</p>
        <p> JerseyNumber: {props.jerseyNumber}</p>
        <p> Image: {props.imageUrl}</p>
    </div>
    </CardBlock>
    <CardFooter className="text-xs-center">
      Some Footer
    </CardFooter>
  </Card>
);
  
}

export default Players;
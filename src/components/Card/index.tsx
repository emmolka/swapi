import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Title } from "./style";

interface CardComponentProps {
  image: string;
  playerTitle: string;
  name: string;
  value: string;
  attribute: string;
}

const CardComponent = ({
  image,
  playerTitle,
  name,
  value,
  attribute
}: CardComponentProps): React.ReactElement => (
  <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Image"
        height="300"
        image={`${image}`}
        title="Star wars image"
      />
      <CardContent>
        <Title>{playerTitle}</Title>
        <p>Name: {name}</p>
        <p>
          {attribute}: {value}
        </p>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default CardComponent;

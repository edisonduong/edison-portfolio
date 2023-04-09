import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ItemCard(props) {
  return (
    <Card
      className={props.isDesktop ? "experience-card desktop" : "experience-card"}
      sx={{ minWidth: 275, backgroundColor: "Gray" }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        {props.description && <Typography variant="body2">{props.description}</Typography>}
      </CardContent>
    </Card>
  );
}

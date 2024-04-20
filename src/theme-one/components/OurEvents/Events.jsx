import React, { useContext, useEffect, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  CardMedia,
  createTheme,
  styled,
  Card,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { grey, green, blue } from "@mui/material/colors";

import { useNavigate } from "react-router-dom";
import moment from "moment";
const Para = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  lineHeight: "25px",
  color: grey[700],
  marginTop: "20px",

  [theme.breakpoints.down(900)]: {
    textAlign: "center",
    margin: "5px 15px",
  },
  [theme.breakpoints.down(600)]: {
    padding: "0px 50px",
    textAlign: "center",
  },
  [theme.breakpoints.down(480)]: {
    padding: "0px 20px",
    textAlign: "center",
  },
}));

const CustomCard = styled(Card)(({ theme }) => ({
  width: "90%",
  height: 245,
  [theme.breakpoints.down(1200)]: {
    width: 400,
    height: 225,
  },
  [theme.breakpoints.down(900)]: {
    width: 400,
    height: 225,
  },
  [theme.breakpoints.down(400)]: {
    maxWidth: 400,
    height: 225,
  },
}));

const TimeIcon = styled(AccessTimeIcon)(() => ({
  fontSize: "0.7rem",
  marginTop: "2px",
  color: "#f86f03",
}));
const Times = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "5px",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));
const ReadButoon = styled(Button)(() => ({
  marginLeft: "-7px",
  fontWeight: "bold",
  fontSize: "10px",
  color: "black",
}));

const Random = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));
const Date = styled(Typography)(() => ({
  fontSize: "15px",
  textAlign: "right",
  marginBottom: "35px",
}));

const Time = styled(Typography)(() => ({
  fontSize: "0.7rem",
}));

const Events = ({ cards }) => {
  let navigate = useNavigate();

  let onlyDay = cards.fromDate;

  const date = moment(onlyDay);
  const specificDate = date.format("Do");

  const specificMonth = date.format("MMMM ,YYYY");

  const time = moment(cards.fromDate);
  const specificTime = time.format("h:mm A");

  let handleNavigate = () => {
    navigate(`/eventdetails/${cards._id}`, { state: cards });
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} sm={12} md={12} lg={3} justifyContent="center">
        <Random sx={{ marginRight: "30px" }}>
          <Typography mt={7} variant="h4" textAlign="right">
            {specificDate}
          </Typography>
          <Date> {specificMonth}</Date>
        </Random>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={5}
        sx={{
          marginY: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomCard onClick={handleNavigate}>
          <CardMedia component="img" image={cards.image} height="297" />
        </CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={3}>
        <Random>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              mt: { lg: 5, md: 2, xs: 1 },
              fontSize: "25px",
            }}
            gutterBottom
          >
            {cards.title}
          </Typography>
        </Random>
        <Times>
          <TimeIcon />
          <Time>{specificTime}</Time>
        </Times>

        <Para>{cards.shortEvent.substring(0, 150) + "....."}</Para>
        <Random>
          <ReadButoon onClick={handleNavigate}>
            Read More
            <ChevronRightIcon fontWeight={600}></ChevronRightIcon>
          </ReadButoon>
        </Random>
      </Grid>
    </Grid>
  );
};

export default Events;

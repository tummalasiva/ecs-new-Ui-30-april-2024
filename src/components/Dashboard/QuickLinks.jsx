import { Box, Card, Fab, Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";

import {
  CardMembership,
  FindInPage,
  Groups,
  Message,
} from "@mui/icons-material";

const DataContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  justifyContent: "space-evenly",
  padding: "25px 0px",
  flexDirection: "column",
}));
const StyledFab = styled(Fab)(({ theme }) => ({
  background: "#1b3779",
  color: "#fff",
  "&:hover": {
    color: "#1b3779",
  },
}));
export default function QuickLinks() {
  return (
    <>
      <Paper sx={{ padding: 2 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            display="flex"
            justifyContent="center"
          >
            <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
              Quick Links
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
            <DataContainer>
              <Box>
                <StyledFab size="small">
                  <Groups />
                </StyledFab>
              </Box>
              <Box>Admit Students</Box>
            </DataContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
            <DataContainer>
              <Box>
                <StyledFab size="small">
                  <Groups />
                </StyledFab>
              </Box>
              <Box>Admit Employee</Box>
            </DataContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
            <DataContainer>
              <Box>
                <StyledFab size="small">
                  <FindInPage />
                </StyledFab>
              </Box>
              <Box> Exam Results</Box>
            </DataContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
            <DataContainer>
              <Box>
                <StyledFab size="small">
                  <CardMembership />
                </StyledFab>
              </Box>
              <Box>Marks Cards</Box>
            </DataContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
            <DataContainer>
              <Box>
                <StyledFab size="small">
                  <Message />
                </StyledFab>
              </Box>
              <Typography>Communication</Typography>
            </DataContainer>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

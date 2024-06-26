import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import FormSelect from "../../forms/FormSelect";
import PageHeader from "../../components/PageHeader";

const Header = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "21px",
  },
}));

const DataContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  padding: "40px",
  [theme.breakpoints.down("lg")]: {
    width: "80%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
}));

const Signature = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
  },
}));

const ListItem = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  width: "48%",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    width: "100%",
  },
}));

const Content = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  fontWeight: 500,
  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));
export default function TransferCertificate() {
  const entryFormik = useFormik({
    initialValues: {
      academicYear: "",
      student: "",
    },
    onSubmit: console.log("nnnn"),
  });
  return (
    <>
      <PageHeader title="Study Certificate" />
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Grid rowSpacing={1} columnSpacing={2} container>
          <Grid xs={12} md={6} lg={3} item>
            <FormSelect
              required={true}
              name="academicYear"
              formik={entryFormik}
              label="Select Academic Year"
              // options={""}
            />
          </Grid>

          <Grid xs={12} md={6} lg={3} item>
            <FormSelect
              required={true}
              name="student"
              formik={entryFormik}
              label="Select Student"
              // options={""}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={3}
            display="flex"
            alignSelf="center"
            justifyContent="flex-end"
            gap={1}
            item
          >
            <Button size="small" variant="contained">
              Issue
            </Button>
            <Button size="small" variant="contained">
              Bulk Issue
            </Button>
            <Button size="small" variant="contained">
              Print
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "25px", sm: "25px", md: "30px", lg: "30px" },
              fontWeight: "bold",
            }}
          >
            Kayaka school
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{ textAlign: "center" }}
        >
          <Title>ENGLISH MEDIUM PRIMARY AND HIGH SCHOOL</Title>
          <Title>Kayaka school</Title>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ textAlign: "center" }}>
          <Header>TRANSFER CERTIFICATE</Header>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Container>
            <Grid container spacing={2}>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>1] Name of the School:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="schoolName"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>2] Name of the Pupil in full:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="studentName"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>3] G. R. No:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="grNo"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>4] Place of Birth:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="birthPlace"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem> 5] Date of Birth(in figures and words):</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="dobWords"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>6] Sex:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="sex"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>7] Nationality:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="nationality"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>8] Religion:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="religion"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>9] Caste:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="caste"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>
                  {" "}
                  10] Whether the candidate belongs to SC and ST:
                </ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="belongs"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>11] Aadhar No.:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="aadhar"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>12] Name of the father:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="fatherName"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>13] Name of the mother:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="motherName"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem> 14] Date of Admission in the Scchool:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="admissionDate"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>15] School Previously Attended:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="prevSchool"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>
                  {" "}
                  16] Standard in which admission is granted:
                </ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="admissionGrant"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>
                  {" "}
                  17] Standard in which the pupil was studying at the time of
                  leaving the school(in words):
                </ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="currentClass"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>18] Medium of instruction:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="instructions"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>
                  {" "}
                  19] Whether the pupil has paid all the free due of the school:
                </ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="fees"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>20] Promoted to/ Detained in:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="proDet"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>
                  {" "}
                  21] Whether medically examinated or not ? :
                </ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="medical"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>
                  {" "}
                  22] Date of pupil's last attendance at the school:
                </ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="lastAttend"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>
                  {" "}
                  23] Date of which the application for the Transfer Certificate
                  was received:
                </ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="transferRecivied"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>
                  {" "}
                  24] Date of issue of the Transfer Certificate:
                </ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="dateIssue"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>25] Attendance:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="attendance"
                />
              </DataContainer>
              <DataContainer item xs={12} sm={12} md={12} lg={12}>
                <ListItem>26] Character & Conduct:</ListItem>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  name="character"
                />
              </DataContainer>
              <Grid item xs={12} sm={12} md={12} lg={12} textAlign={"center"}>
                <Header>CERTIFICATE</Header>
              </Grid>
              <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center" }}>
                <Content>
                  Certified that the entries made in this Transfer Certificate
                  are taken from the entries made as per the general egister
                  maintained in the institution. The entries with the original
                  records persented by the parents
                </Content>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Signature>Prepared By</Signature>
                <Signature>Checked By</Signature>
                <Signature>Head Master</Signature>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

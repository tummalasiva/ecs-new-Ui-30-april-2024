import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import CustomTable from "../../components/Tables/CustomTable";
import { resultTableKeys } from "../../data/tableKeys/result";
import FormSelect from "../../forms/FormSelect";
import { Button, Grid, Paper } from "@mui/material";
import { useFormik } from "formik";
import { Box, ButtonGroup, styled } from "@mui/material";
const MuiBUtton = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: "20px",
});

export default function Result() {
  const [data, setData] = useState([]);
  const entryFormik = useFormik({
    initialValues: {
      academicYear: "",
      class: "",
    },
    onSubmit: console.log("nnnn"),
  });
  return (
    <>
      <PageHeader title="Result" />
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
              name="class"
              formik={entryFormik}
              label="Select Class"
              // options={""}
            />
          </Grid>

          <Grid xs={12} md={6} lg={3} sx={{ alignSelf: "center" }} item>
            <Button size="small" variant="contained">
              Find
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <MuiBUtton>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button variant="contained">Pending:56</Button>
          <Button>Approved: 100</Button>

          <Button>Rejected:0</Button>
        </ButtonGroup>
      </MuiBUtton>

      <CustomTable
        actions={["edit"]}
        tableKeys={resultTableKeys}
        bodyDataModal="result"
        bodyData={data}
      />
    </>
  );
}

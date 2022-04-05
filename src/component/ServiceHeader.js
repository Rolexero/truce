import * as React from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ServiceTabs from "./ServicesTabs";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  border: "none",
  backgroundColor: "#f6f6f6",
}));

export default function ServiceHeader() {
  return (
    <Container maxWidth="xl">
      <Toolbar />
      <Box sx={{ flexGrow: 1, margin: "auto", maxWidth: "1300px" }}>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <Item elevation={0}>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "start",
                  fontSize: "28px",
                }}
              >
                Service Directory
              </Typography>
              <Typography
                sx={{
                  textAlign: "start",
                  fontSize: "14px",
                  color: "#202223",
                }}
              >
                A Service in Truce represents a component, microservice or piece
                of infrastructer a team operates,
                <br />
                manages, and monitors. Usually, it's something you'd go on call
                for. Learn more about the service directory.
              </Typography>
            </Item>
          </Grid>
          <Grid item md={4} xs={12}>
            <Item
              elevation={0}
              sx={{
                textAlign: "end",
              }}
            >
              <Button variant="contained" sx={{ textTransform: "none" }}>
                <AddIcon /> New Service{" "}
              </Button>
            </Item>
          </Grid>
        </Grid>
        <Toolbar />
        <ServiceTabs />
      </Box>
    </Container>
  );
}

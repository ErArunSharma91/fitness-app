import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export default function FitnessDetails() {
  return (
    <>
      <Grid
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Grid item>
          <Card
            style={{
              width: "178px",
              height: "178px",
              backgroundColor: "#2F2F2F",
              borderRadius: "45px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute" }}>
              <CardMedia
                component="img"
                sx={{
                  width: "150px",
                  height: "150px",
                  marginLeft: "20px",
                  marginTop: "-12px",
                }}
                image="/Group 2.png"
                alt="Smart Watch"
              />
            </div>
            <CardContent>
              <Typography
                style={{
                  fontSize: "20px",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  marginTop: "12px",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                5,233
              </Typography>
              <Typography
                style={{
                  fontSize: "10px",
                  color: "#FF8250",
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Steps
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <div style={{ marginLeft: "20px" }}>
            <Button
              style={{
                width: "193px",
                height: "81px",
                borderRadius: "41px",
                textTransform: "capitalize",
                fontSize: "20px",
                fontFamily: "DM Sans, sans-serif",
                backgroundColor: "#FFF4EF",
                color: "#2F2F2F",
                fontWeight: "bold",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  color: "#FF8250",
                  marginBottom: "-42px",
                }}
              >
                Calories
              </span>
              <br />
              1200 Kcal
            </Button>
          </div>
          <div style={{ marginLeft: "20px", marginTop: "15px" }}>
            <Button
              style={{
                width: "193px",
                height: "81px",
                borderRadius: "41px",
                textTransform: "capitalize",
                fontSize: "20px",
                fontFamily: "DM Sans, sans-serif",
                backgroundColor: "#FFF4EF",
                color: "#2F2F2F",
                fontWeight: "bold",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  color: "#FF8250",
                  marginBottom: "-42px",
                }}
              >
                Water
              </span>
              <br />
              1.8 Ltrs
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

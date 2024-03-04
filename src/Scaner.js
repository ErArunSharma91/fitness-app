import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export default function Scaner() {
  return (
    <>
      <Grid
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          position: "relative", // Add position relative to the parent container
        }}
      >
        <Card
          style={{
            width: "368px",
            height: "255px",
            borderRadius: "30px",
            backgroundColor: "#FFE3D8",
            position: "absolute", // Add position absolute to position the card
            top: 0, // Position the card at the top
            // zIndex: 3, // Set the highest z-index to bring it to the top
          }}
        ></Card>
        <Card
          style={{
            width: "398px",
            height: "229px",
            borderRadius: "35px",
            backgroundColor: "#FFBFA6",
            position: "absolute", // Add position absolute to position the card
            top: "21px", // Position the card with a gap from the top
            //zIndex: 2, // Set a lower z-index to stack behind the first card
          }}
        ></Card>
        <Card
          style={{
            width: "418px",
            height: "286px",
            borderRadius: "40px",
            backgroundColor: "#2F2F2F",
            position: "absolute", // Add position absolute to position the card
            top: "43px", // Position the card with a gap from the top
            zIndex: 1, // Set the lowest z-index to stack behind the other cards
            // boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.5)",
            // boxShadow: "0 0 6px 3px rgba(0, 0, 0, 0.3)",
            boxShadow: "rgba(0, 0, 0, 0.9) 0px 47px 29px -13px",
          }}
        >
          <CardContent>
            <Typography
              style={{
                fontSize: "13px",
                fontWeight: "600",
                fontFamily: "DM Sans, sans-serif",
                color: "#FF8250",
                // marginBottom: "3px",
              }}
            >
              Smart Watch
            </Typography>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "26px",
                color: "#FFFFFF",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Fire Boltt
            </Typography>
            <Typography
              style={{
                fontSize: "10px",
                fontFamily: "DM Sans, sans-serif",
                color: "#FFFFFF",
                marginTop: "87px",
              }}
            >
              Scan the device <br />
              QR to connect
            </Typography>
          </CardContent>
          {/* <CardMedia
            component="img"
            sx={{ width: "322px", height: "322px" }}
            image="/watch.png"
            alt="Smart Watch"
          /> */}
          <CardActions>
            <Button
              style={{
                width: "127px",
                height: "49px",
                backgroundColor: "#FF6020",
                color: "#FFFFFF",
                borderRadius: "30px",
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "DM Sans, sans-serif",
                textTransform: "capitalize",
              }}
            >
              Scan
            </Button>
          </CardActions>
        </Card>
        <div style={{ zIndex: "1", marginLeft: "108px", marginTop: "21px" }}>
          <img
            src="/watch.png"
            alt="Girl in a jacket"
            width="322"
            height="322"
          />
        </div>
      </Grid>
    </>
  );
}

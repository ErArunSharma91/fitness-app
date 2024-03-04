import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import React from "react";

export default function Form() {
  return (
    <>
      <Grid
        container
        style={{
          width: "428px",
          height: "510px",
          borderRadius: "40px 40px 0px 0px",
          backgroundColor: "#FF6020",
          marginTop: "30px",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          style={{
            marginTop: "30px",
            marginLeft: "20px",
            marginBottom: "0px",
            marginLeft: "18px",
          }}
        >
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "600",
              fontFamily: "DM Sans, sans-serif",
              color: "#FFFFFF",
            }}
          >
            Shipping Address
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "-0px", marginLeft: "18px" }}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="filled"
            InputProps={{
              disableUnderline: true,
              style: {
                backgroundColor: "white",
                borderRadius: "30px",
                height: "50px",
                width: "95%",
              },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          style={{ marginLeft: "18px", display: "flex" }}
        >
          <div style={{ marginRight: "10px", width: "90%" }}>
            <TextField
              required
              id="age"
              name="age"
              label="Age"
              type="number"
              fullWidth
              autoComplete="family-age"
              variant="filled"
              InputProps={{
                disableUnderline: true,
                style: {
                  backgroundColor: "white",
                  borderRadius: "30px",
                  height: "50px",
                },
              }}
            />
          </div>
          <div style={{ width: "100%", marginRight: "15px" }}>
            <TextField
              required
              id="height"
              name="height"
              label="Height"
              fullWidth
              autoComplete="Height"
              variant="filled"
              InputProps={{
                disableUnderline: true,
                style: {
                  backgroundColor: "white",
                  borderRadius: "30px",
                  height: "50px",
                },
              }}
            />
          </div>
        </Grid>
        {/* <Grid item xs={12} sm={6} style={{ marginLeft: "15px" }}>
          <TextField
            required
            id="height"
            name="height"
            label="Height"
            fullWidth
            autoComplete="Height"
            variant="filled"
            InputProps={{
              disableUnderline: true,
              style: {
                backgroundColor: "white",
                borderRadius: "30px",
                height: "50px",
                width: "65%",
              },
            }}
          />
        </Grid> */}
        <Grid item xs={12} style={{ marginLeft: "18px", marginRight: "12px" }}>
          <TextField
            id="gym-details"
            name="gym-details"
            label="Are you a gym member?"
            fullWidth
            autoComplete="Are you a gym member?"
            variant="filled"
            InputLabelProps={{
              style: {
                color: "#2F2F2F",
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: "DM Sans, sans-serif",
              },
            }}
            InputProps={{
              disableUnderline: true,
              style: {
                backgroundColor: "white",
                borderRadius: "30px",
                height: "50px",
                width: "100%",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#2F2F2F",
                    }}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} style={{ marginLeft: "18px", marginRight: "12px" }}>
          <TextField
            id="gym-details"
            name="gym-details"
            label="Are you a gym member?"
            fullWidth
            autoComplete="Are you a gym member?"
            variant="filled"
            InputLabelProps={{
              style: {
                color: "#2F2F2F",
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: "DM Sans, sans-serif",
              },
            }}
            InputProps={{
              disableUnderline: true,
              style: {
                backgroundColor: "white",
                borderRadius: "30px",
                height: "50px",
                width: "100%",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#2F2F2F",
                    }}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} style={{ marginLeft: "18px", marginRight: "12px" }}>
          <FormControl variant="filled" fullWidth>
            <InputLabel
              id="gym-details-label"
              style={{
                color: "#2F2F2F",
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Are you a gym member?
            </InputLabel>
            <Select
              labelId="gym-details-label"
              id="gym-details"
              fullWidth
              autoComplete="Are you a gym member?"
              style={{
                backgroundColor: "white",
                borderRadius: "30px",
                height: "50px",
                width: "100%",
              }}
              InputProps={{
                disableUnderline: true,
                style: {
                  backgroundColor: "white",
                  borderRadius: "30px",
                  height: "50px",
                  width: "100%",
                },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#2F2F2F",
                      backgroundColor: "white",
                    }}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                </InputAdornment>
              }
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

'use client';

import { useState } from "react";
import QRCode from "qrcode";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";

export default function Qgen() {
  const [input, setInput] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  // Generate QR Code
  const generateQRCode = async () => {
    try {
      const url = await QRCode.toDataURL(input);
      setQrCodeUrl(url);
    } catch (err) {
      console.error("Error generating QR Code:", err);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Montserrat, sans-serif",
        backgroundColor: "#416788",
        color: "#B5BAD0",
        flexDirection:'column'
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#B5BAD0",
        }}
      >
        Qgen
      </Typography>

      <Grid
        container
        sx={{
          width: "80%",
          height: "75%",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
          backgroundColor: "#7389AE",
          borderRadius: 2,
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
            borderRight: "2px solid #B5BAD0",
          }}
        >
          
          <Typography
            variant="body1"
            sx={{
              color: "#B5BAD0",
            }}
          >
            Enter a URL or text to generate your QR code.
          </Typography>
          <TextField
            label="Enter text or URL"
            variant="filled"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            fullWidth
            InputProps={{
              sx: {
                backgroundColor: "#B5BAD0",
                borderRadius: 1,
                color: "#416788",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#416788",
              },
            }}
          />
          <Button
            variant="contained"
            onClick={generateQRCode}
            disabled={!input}
            sx={{
              backgroundColor: "#416788",
              color: "#B5BAD0",
              "&:hover": {
                backgroundColor: "#B5BAD0",
                color: "#416788",
              },
              fontWeight: "bold",
            }}
          >
            Generate QR Code
          </Button>
        </Grid>

        {/* QR Code Section */}
        <Grid
          item
          xs={6}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {qrCodeUrl ? (
            <>
              <Typography
                variant="h6"
                sx={{
                  color: "#B5BAD0",
                }}
              >
                Your QR Code:
              </Typography>
              <Box
                sx={{
                  padding: 2,
                  backgroundColor: "#B5BAD0",
                  borderRadius: 2,
                }}
              >
                <img
                  src={qrCodeUrl}
                  alt="QR Code"
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
              </Box>
              <Button
                href={qrCodeUrl}
                download="qrcode.png"
                variant="outlined"
                sx={{
                  color: "#B5BAD0",
                  borderColor: "#B5BAD0",
                  "&:hover": {
                    backgroundColor: "#B5BAD0",
                    color: "#416788",
                  },
                  fontWeight: "bold",
                }}
              >
                Download QR Code
              </Button>
            </>
          ) : (
            <Typography variant="body1" sx={{ color: "#B5BAD0" }}>
              Your QR Code will appear here.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}


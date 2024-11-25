import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const InputField = ({ label, value = "", onChange, error, type = "text" }) => {
  const [warningMessage, setWarningMessage] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (type === "number" && isNaN(inputValue)) {
      setWarningMessage("Please enter a valid number.");
    } else {
      setWarningMessage("");
    }
    onChange(e); // Pass the value to the parent handler
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label
        style={{
          display: "block",
          fontWeight: "500",
          fontSize: "16px",
          fontFamily: "Poppins, sans-serif",
          marginBottom: "5px",
        }}
      >
        {label}
      </label>
      <TextField
        fullWidth
        value={value || ""}
        onChange={onChange}
        error={!!error}
        helperText={error}
        type={type}
        variant="outlined"
        sx={{
          "& .MuiInputBase-root": { borderRadius: "8px" },
          "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
        }}
      />
      {warningMessage && (
        <Typography
          sx={{ color: "red", fontSize: "12px", marginTop: "5px" }}
        >
          {warningMessage}
        </Typography>
      )}
    </div>
  );
};

export default InputField;

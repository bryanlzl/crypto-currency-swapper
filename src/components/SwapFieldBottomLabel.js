import React, { useState, useEffect } from "react";

function BottomLabel(props) {
  const swappedCurrency = props.swappedCurrency;
  const fieldType = props.fieldType;
  const [message, setMessage] = useState("");

  const createMessage = () => {
    if (fieldType === "pay") {
      const USDvalue = swappedCurrency[fieldType]["USD"];
      if (USDvalue !== 0) {
        let formattedValue;
        if (USDvalue >= 1000000000) {
          formattedValue =
            (USDvalue / 1000000000).toLocaleString("en-US", {
              style: "decimal",
              maximumFractionDigits: 2,
            }) + "B";
        } else if (USDvalue >= 1000000) {
          formattedValue =
            (USDvalue / 1000000).toLocaleString("en-US", {
              style: "decimal",
              maximumFractionDigits: 2,
            }) + "M";
        } else {
          formattedValue = USDvalue.toLocaleString("en-US", {
            style: "decimal",
            maximumFractionDigits: 2,
          });
        }
        return `$${formattedValue}`;
      } else {
        return "";
      }
    } else {
      // Handle other cases here if needed
    }
  };

  useEffect(() => {
    setMessage(createMessage());
  }, [swappedCurrency]); // Depend on swappedCurrency and fieldType

  return <p style={{ margin: "0" }}>{message}</p>;
}

export default BottomLabel;

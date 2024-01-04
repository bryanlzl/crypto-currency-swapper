import React, { useState, useEffect } from "react";

function BottomLabel(props) {
  const swappedCurrency = props.swappedCurrency;
  const currency = props.currency;
  const fieldType = props.fieldType;
  const [message, setMessage] = useState({
    payFieldMessage: "-",
    receiveFieldMessage: "-",
  });
  const swappedConvRate = props.swappedConvRate;
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
        setMessage((prev) => {
          return {
            ...prev,
            payFieldMessage: `$${formattedValue}`,
          };
        });
      } else {
        setMessage((prev) => {
          return {
            ...prev,
            payFieldMessage: "-",
          };
        });
      }
    } else {
      const RTPRate = swappedConvRate.receiveToPayRate;
      const receiveCurrency = swappedConvRate.receiveCurrency;
      const payCurrency = swappedConvRate.payCurrency;
      setMessage((prev) => {
        return {
          ...prev,
          receiveFieldMessage: RTPRate
            ? `1 ${receiveCurrency} = ${RTPRate} ${payCurrency}`
            : "-",
        };
      });
    }
  };

  useEffect(() => {
    createMessage();
  }, [swappedCurrency, swappedConvRate]);

  return (
    <p style={{ margin: "0" }}>
      {fieldType === "pay"
        ? message.payFieldMessage
        : message.receiveFieldMessage}
    </p>
  );
}

export default BottomLabel;

import React from "react";
import DaumPostcode from "react-daum-postcode";

export default function Postcode(props) {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    let zonecode = data.zonecode;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    props.setfullAddressFn(fullAddress, zonecode);
  };

  return <DaumPostcode onComplete={handleComplete} />;
}

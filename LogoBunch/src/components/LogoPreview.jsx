import React, { useEffect, useState, useContext } from "react";
import { UpdateStorageContext } from "./context/UpdateStorageContext";
import { icons } from "lucide-react";
import html2canvas from "html2canvas";

const LogoPreview = ({ downloadIcon, setDownloadIcon }) => {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage } = useContext(UpdateStorageContext);
  const BASE_URL = 'https://logoexpress.tubeguruji.com';

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadPngLogo();
      setDownloadIcon(false); // Reset the state to avoid continuous download
    }
  }, [downloadIcon]);

  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");

    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "Logo_Bunch.png";
      downloadLink.click();
    });
  };

  const Icon = ({ name, color, size, rotate,icon }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return null;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        icon={icon} //
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="h-[500px] w-[500px] bg-gray-200 outline-dotted outline-gray-300 mb-5"
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          id="downloadLogoDiv"
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          {storageValue?.icon?.includes('.png') ? (
            <img
              src={`${BASE_URL}/png/${storageValue?.icon}`}
              style={{
                height: storageValue?.iconSize,
                width: storageValue?.iconSize,
              }}
            />
          ) : (
            <Icon
              name={storageValue?.icon}
              color={storageValue?.iconColor}
              icon={storageValue?.icon} //
              size={storageValue?.iconSize}
              rotate={storageValue?.iconRotate}
            />
          )}
        </div>
      </div>
      <div className="h-[70px] mb-3"></div>
    </div>
  );
};

export default LogoPreview;

import React, { useState } from "react";
import "./App.css";
import BackgroundController from "./components/BackgroundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./components/context/UpdateStorageContext";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState(false);

  const triggerDownload = () => {
    setDownloadIcon(true);
  };

  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div>
        <Header triggerDownload={triggerDownload} />
        <div>
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>
        <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
          <div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
            {selectedIndex === 0 ? (
              <IconController key="iconController" />
            ) : (
              <BackgroundController key="backgroundController" />
            )}
          </div>
          <div className="md:col-span-3">
            <LogoPreview downloadIcon={downloadIcon} setDownloadIcon={setDownloadIcon} />
          </div>
          <div className="w-screen md:col-span-1 border h-screen">Ads Banner</div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}

export default App;

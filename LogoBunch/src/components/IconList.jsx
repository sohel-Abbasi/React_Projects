import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Smile, icons } from "lucide-react";
import { iconList } from "@/constants/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";


const IconList = ({ selectedIcon }) => {
  
  const [openDialog, setOpenDialog] = useState(false);
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");

  const [pngIconList,setPngIconList] = useState([]);

 const BASE_URL ='https://logoexpress.tubeguruji.com';

   useEffect(()=>{
           getPngIcons();
   },[])

  const Icon = ({ name, color, size ,icon}) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} icon={icon} />;
  };

  const getPngIcons= ()=>{
       axios.get(BASE_URL+"/getIcons.php").then(resp=>{
           
            setPngIconList(resp.data);
       })
  }

  return (
    <div>
      <div>
        <label>Icon</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] flex my-2 items-center justify-center
        "
        >
          {icon?.includes('.png')?
            <img src={BASE_URL+"/png/"+icon} /> :
            <Icon name={icon} icon={icon} color={"#000"} size={20} />
          }
         
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className=" bg-white">
          <DialogHeader>
            <DialogTitle>Pic Your Favorite Icon</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="icon" className="w-[400px]">
                <TabsList>
                  <TabsTrigger className="hover:bg-gray-300 cursor-pointer border rounded-[8px] m-1" value="icon">Icons</TabsTrigger>
                  <TabsTrigger className="hover:bg-gray-300 cursor-pointer  border rounded-[8px]" value="color-icon">Color Icons</TabsTrigger>
                </TabsList>
                <TabsContent value="icon">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                {iconList.map((icon, index) => (
                  <div
                    className="border p-3 flex rounded-sm items-center justify-center cursor-pointer
                    hover:bg-slate-200"
                    onClick={() => {
                      selectedIcon(icon);
                      setOpenDialog(false);
                      setIcon(icon);
                    }}
                  >
                    <Icon name={icon} color={"#000"} icon={icon} size={20} key={index} />
                  </div>
                ))}
              </div>
                </TabsContent>
                <TabsContent value="color-icon">
                 
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                {pngIconList.map((icon, index) => (
                  <div
                    className="border p-3 flex rounded-sm items-center justify-center cursor-pointer
                    hover:bg-slate-200"
                    onClick={() => {
                      selectedIcon(icon);
                      setOpenDialog(false);
                      setIcon(icon);
                    }}
                  >
                    <img src={BASE_URL+"/png/"+icon} alt="" />
                  </div>
                ))}
              </div>

                </TabsContent>
              </Tabs>

             
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconList;

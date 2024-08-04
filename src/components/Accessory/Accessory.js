// Linh kiện
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import { Button } from "@nextui-org/react";
import React from "react";
import laptopgaming01 from "./../../assets/img/laptopgaming01.jpg";

function Accessory() {
  return (
    <div className="container py-10">
      <div className="bg-accessory">
        <h2 className="text-white pl-3 font-bold py-4 border-b-1">LINH KIỆN</h2>
        <TabGroup>
          <TabPanels>
            <TabPanel>
              <div className="flex flex-wrap py-3 gap-3 ml-3">
                <div className="flex-1 bg-white p-5">
                  <div className="relative">
                    <img src={laptopgaming01} alt="" className="w-full " />
                    <div className="absolute bg-bg-sale bottom-0 h-9 left-0 bg-cover bg-center bg-no-repeat px-2 rounded-md">
                      <p className="font-bold text-xs text-sale">TIẾT KIỆM</p>
                      <p className="font-bold text-white text-sm">4.000.000đ</p>
                    </div>
                  </div>
                  <h6 className="text-sm font-semibold text-title my-3">
                    ACER
                  </h6>
                  <p className="text-xs">
                    Laptop Acer Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                    (AMD Ryzen 5-7535HS) (Đen)
                  </p>
                  <Button className="w-full py-2 border-2 mt-3 rounded-md text-blue-700 font-bold">
                    Thêm vào giỏ
                  </Button>
                </div>
                <div className="flex-1 bg-white p-5">
                  <div className="relative">
                    <img src={laptopgaming01} alt="" className="w-full " />
                    <div className="absolute bg-bg-sale bottom-0 h-9 left-0 bg-cover bg-center bg-no-repeat px-2 rounded-md">
                      <p className="font-bold text-xs text-sale">TIẾT KIỆM</p>
                      <p className="font-bold text-white text-sm">4.000.000đ</p>
                    </div>
                  </div>
                  <h6 className="text-sm font-semibold text-title my-3">
                    ACER
                  </h6>
                  <p className="text-xs">
                    Laptop Acer Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                    (AMD Ryzen 5-7535HS) (Đen)
                  </p>
                  <Button className="w-full py-2 border-2 mt-3 rounded-md text-blue-700 font-bold">
                    Thêm vào giỏ
                  </Button>
                </div>
                <div className="flex-1 bg-white p-5">
                  <div className="relative">
                    <img src={laptopgaming01} alt="" className="w-full " />
                    <div className="absolute bg-bg-sale bottom-0 h-9 left-0 bg-cover bg-center bg-no-repeat px-2 rounded-md">
                      <p className="font-bold text-xs text-sale">TIẾT KIỆM</p>
                      <p className="font-bold text-white text-sm">4.000.000đ</p>
                    </div>
                  </div>
                  <h6 className="text-sm font-semibold text-title my-3">
                    ACER
                  </h6>
                  <p className="text-xs">
                    Laptop Acer Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                    (AMD Ryzen 5-7535HS) (Đen)
                  </p>
                  <Button className="w-full py-2 border-2 mt-3 rounded-md text-blue-700 font-bold">
                    Thêm vào giỏ
                  </Button>
                </div>
                <div className="flex-1 bg-white p-5">
                  <div className="relative">
                    <img src={laptopgaming01} alt="" className="w-full " />
                    <div className="absolute bg-bg-sale bottom-0 h-9 left-0 bg-cover bg-center bg-no-repeat px-2 rounded-md">
                      <p className="font-bold text-xs text-sale">TIẾT KIỆM</p>
                      <p className="font-bold text-white text-sm">4.000.000đ</p>
                    </div>
                  </div>
                  <h6 className="text-sm font-semibold text-title my-3">
                    ACER
                  </h6>
                  <p className="text-xs">
                    Laptop Acer Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                    (AMD Ryzen 5-7535HS) (Đen)
                  </p>
                  <Button className="w-full py-2 border-2 mt-3 rounded-md text-blue-700 font-bold">
                    Thêm vào giỏ
                  </Button>
                </div>
                <div className="flex-1 bg-white p-5 mr-3">
                  <div className="relative">
                    <img src={laptopgaming01} alt="" className="w-full " />
                    <div className="absolute bg-bg-sale bottom-0 h-9 left-0 bg-cover bg-center bg-no-repeat px-2 rounded-md">
                      <p className="font-bold text-xs text-sale">TIẾT KIỆM</p>
                      <p className="font-bold text-white text-sm">4.000.000đ</p>
                    </div>
                  </div>
                  <h6 className="text-sm font-semibold text-title my-3">
                    ACER
                  </h6>
                  <p className="text-xs">
                    Laptop Acer Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003)
                    (AMD Ryzen 5-7535HS) (Đen)
                  </p>
                  <Button className="w-full py-2 border-2 mt-3 rounded-md text-blue-700 font-bold">
                    Thêm vào giỏ
                  </Button>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

export default Accessory;

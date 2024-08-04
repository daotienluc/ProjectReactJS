import React from "react";
import bg_macbook from "./../../assets/img/bg_Macbook.jpg";
import laptopgaming01 from "./../../assets/img/laptopgaming01.jpg";
import {
  Button,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import classNames from "classnames";

function Macbook() {
  return (
    <div className="container py-10">
      <div className="relative">
        <img src={bg_macbook} alt="" className="w-full rounded-lg" />
        <TabGroup className="absolute top-0 w-full">
          <TabList className="flex justify-between bg-white">
            <Tab
              className={({ selected }) =>
                classNames(
                  "font-bold h-14 w-4/12 rounded-tl-lg rounded-tr-lg focus:outline-none focus:ring-0 border-none",
                  selected ? "bg-black text-white" : " text-black bg-white"
                )
              }
            >
              Macbook M3 giảm thêm 300K
              <p className="text-xs">tặng thêm Balo cho Macbook Air</p>
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  "font-bold h-14 w-4/12 rounded-tl-lg rounded-tr-lg focus:outline-none focus:ring-0 border-none",
                  selected ? "bg-black text-white" : " text-black bg-white"
                )
              }
            >
              MacBook M2 giảm thêm 200K
              <p className="text-xs">tặng thêm Balo cho MacBook Air</p>
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "font-bold h-14 w-4/12 rounded-tl-lg rounded-tr-lg focus:outline-none focus:ring-0 border-none",
                  selected ? "bg-black text-white" : " text-black bg-white"
                )
              }
            >
              Deal HOT trong tuần
              <p className="text-xs">Giảm đến 35%</p>
            </Tab>
          </TabList>
          <TabPanels className=" absolute w-full">
            <TabPanel className="ml-64">
              <div className="flex flex-wrap py-20 gap-3">
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
            <TabPanel className="ml-64">
              <div className="flex flex-wrap py-20 gap-3">
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
            <TabPanel className="ml-64">
              <div className="flex flex-wrap py-20 gap-3">
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

export default Macbook;

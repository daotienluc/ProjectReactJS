// OutstandingProducts.js
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import React from "react";
import ProductCard from "./ProductCard";
import laptopgaming01 from "./../../assets/img/laptopgaming01.jpg";
import { Pagination } from "@nextui-org/react";

function OutstandingProducts() {
  const products = [
    {
      image: laptopgaming01,
      discount: "4.000.000đ",
      brand: "ACER",
      description:
        "Laptop Acer Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003) (AMD Ryzen 5-7535HS) (Đen)",
    },
  ];

  return (
    <div className="container py-10">
      <div className="bg-gray-50">
        <h2 className="text-black pl-3 font-bold py-4 border-b-1">
          SẢN PHẨM NỔI BẬT
        </h2>
        <TabGroup>
          <TabPanels>
            <TabPanel>
              <div className="grid grid-cols-5 gap-3 py-3 mx-3">
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    image={product.image}
                    discount={product.discount}
                    brand={product.brand}
                    description={product.description}
                  />
                ))}
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
      <div className="flex justify-center mt-3">
        <Pagination isCompact showControls total={10} initialPage={1} />
      </div>
    </div>
  );
}

export default OutstandingProducts;

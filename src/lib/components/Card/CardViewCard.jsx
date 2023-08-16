import Image from 'next/image';
import React from 'react'

export default function CardViewCard({data}) {
  return (
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md border">
          <div className="flex items-center space-x-4">
              <Image
                  className="w-12 h-12 object-cover rounded-full"
                  src={data.seller_avatar}
                  alt={data.seller_name}
                  width={"200"}
                  height={"200"}
              />
              <div className="flex flex-col space-y-1">
                  <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-sm font-semibold"
                  >
                      {data.seller_name}
                  </a>
                  <span className="text-sm">
                      {data.seller_city},{data.seller_country}
                  </span>
              </div>
          </div>
          <div>
              <Image
                  className="w-full h-80 object-cover rounded-md"
                  src={data?.image}
                  alt={data?.title}
                  width={"200"}
                  height={"200"}
              />
              <h3 className="mb-1 text-xl font-semibold mt-5">{data?.title}</h3>
              <h2 className="mb-1 text-2xl font-semibold">${data?.price}</h2>
              
          </div>
      </div>
  );
}

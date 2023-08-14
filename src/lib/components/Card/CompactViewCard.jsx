import Image from 'next/image';
import React from 'react'

export default function CompactViewCard({data}) {
    const {
        title,
        image,
        price,
        seller_name,
        seller_avatar,
        seller_city,
        seller_country,
    } = data;
  return (
      <div>
          <div class="flex items-center overflow-hidden bg-white rounded-md shadow-md">
              <div class="w-1/3">
                  <Image
                      className="w-auto h-32 object-cover"
                      src={image}
                      alt={title}
                      width={"200"}
                      height={"200"}
                  />
              </div>

              <div class="w-full px-4">
                  <div className="flex items-center gap-4 mb-2">
                      <Image
                          className="w-8 h-8 object-cover rounded-full"
                          src={seller_avatar}
                          alt={seller_name}
                          width={"200"}
                          height={"200"}
                      />
                      <div>
                          <h4 className="font-semibold text-sm line-clamp-1">
                              {seller_name}
                          </h4>
                          <p className="text-xs line-clamp-1">
                              {seller_city},{seller_country}
                          </p>
                      </div>
                  </div>

                  <h1 class="text-md font-bold text-gray-800 mb-2 line-clamp-1">
                      {title}
                  </h1>

                  <div class="flex justify-between item-center">
                      <h1 class="text-lg font-bold text-gray-700 md:text-xl line-clamp-1">
                          ${price}
                      </h1>
                      <button className="bg-teal-100 text-teal-600 px-2 py-1 rounded-md text-sm">
                          Buy Now
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

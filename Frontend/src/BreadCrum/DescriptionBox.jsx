import React from 'react';

const DescriptionBox = () => {
  return (
    <div className="px-6 md:px-20 py-10">
      {/* Tabs */}
      <div className="flex gap-6 border-b pb-3 mb-6 text-gray-700 text-sm md:text-base font-semibold">
        <div className="border-b-2 border-blue-600 pb-1 text-blue-600 cursor-pointer">
          Description
        </div>
        <div className="hover:text-blue-600 cursor-pointer">
          Reviews
        </div>
      </div>

      {/* Description Content */}
      <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
        <p>
          An e-commerce website is an online platform that allows users to buy and sell products or services over the internet. 
          It typically features a user-friendly interface, product listings with images and descriptions, a shopping cart for managing purchases, 
          secure payment processing, and order tracking. E-commerce websites can range from small businesses selling handmade goods 
          to large retailers offering a wide variety of products. They often include features like customer reviews, wish lists, 
          and personalized recommendations to enhance the shopping experience.
        </p>
        <p>
          E-commerce websites have become increasingly popular due to their convenience, allowing customers to shop from anywhere at any time. 
          They also provide businesses with a global reach, enabling them to expand their customer base beyond geographical boundaries. 
          With the rise of mobile commerce, many e-commerce websites are optimized for mobile devices, ensuring a seamless shopping experience across different platforms.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

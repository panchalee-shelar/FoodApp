import React, { useState } from 'react';


const RestoCards = ({ resData }) => {
  const { name, cloudinaryImageId, locality, avgRating, sla, costForTwo, cuisines } = resData;


  const fallbackImage = 'https://via.placeholder.com/508x320?text=No+Image';

  const actualImage = cloudinaryImageId?.length > 0
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508/${cloudinaryImageId}`
    : fallbackImage;

  const [imgSrc, setImgSrc] = useState(actualImage);

  return (
    <div className="card border rounded-lg overflow-hidden p-2 hover:shadow-2xl">
      <div className="w-full h-48 overflow-hidden rounded-md">
        <img
          className="w-full h-full object-cover"
          src={imgSrc}
          onError={() => setImgSrc(fallbackImage)}
          alt={name}
        />
      </div>
      <div className="content-wrap">
        <h3 className='text-lg font-bold mt-3'>{name}</h3>
        <p className='text-slate-500'>{Array.isArray(cuisines) ? cuisines.join(", ") : 'Cuisines not available'}</p>
        <p className='font-semibold'>{costForTwo}</p>
        <p className='text-slate-500'><strong>Location:</strong> {locality || 'N/A'}</p>
        <p className='text-slate-500'><strong>Delivery:</strong> {sla?.deliveryTime || '--'} mins</p>
        <p> ⭐ {avgRating || 'N/A'}</p>
      </div>
    </div>
  );
};

// Higher Order Function, HOF return pure component

export const withDiscountLabel = (RestoCards) => {
  return (props) => {
    const discount = props?.resData?.aggregatedDiscountInfoV3;
    return (
      <>
        <div className='relative'>
          {discount && (
            <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded z-10">
              <span>{discount.header}</span>
              <span className='ml-2'>{discount.subHeader}</span>
            </div>
          )}
          <RestoCards {...props} />
        </div>
      </>
    )
  }
}

export default RestoCards;

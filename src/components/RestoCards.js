import React, { useState } from 'react';


const RestoCards = ({ resData }) => {
  const { name, cloudinaryImageId, locality, avgRating, sla, costForTwo, cuisines } = resData;


  const fallbackImage = 'https://via.placeholder.com/508x320?text=No+Image';

  const actualImage = cloudinaryImageId?.length > 0
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508/${cloudinaryImageId}`
    : fallbackImage;

  const [imgSrc, setImgSrc] = useState(actualImage);

  return (
    <div className="card">
      <div className='img-wrap w-full h-48 overflow-hidden'>
        <img
          className="card-img w-full h-full object-cover"
          src={imgSrc}
          onError={() => setImgSrc(fallbackImage)}
          alt={name}
        />
      </div>
      <div className="content-wrap p-4">
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

export default RestoCards;

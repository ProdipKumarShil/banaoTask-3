import React from 'react';

const CardPlaceholder = () => {
  return (
    <div className="p-2 mb-2 border  rounded-3 d-flex align-items-center gap-4">
      {/* {
        imgError ? <Skeleton height={80} width={80} circle /> :
        <img className="img-sizing rounded-circle" onError={handleImgErr} src={avatar} alt="" />
      } */}
      
      <div className="flex-grow-1 placeholder-glow">
        <span className='placeholder'></span>
        {/* <p className="text-24">{profile.firstName + " " + profile.lastName}</p> */}
        {/* <p className="">{jobTitle}</p> */}
      </div>
      <div className=" ">
        {/* <button className="btn btn-warning ml-auto" onClick={() => setCardId(id)}>View Details</button> */}
      </div>
    </div>
  );
};

export default CardPlaceholder;
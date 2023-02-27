import React from 'react';
import Comments from '../Components/Comments';
import ItemHeader from '../Components/ItemHeader';
import LikeAndAdd from '../Components/LikeAndAdd';

function Item() {
  return (
    <div className="max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto mt-10">
      {/* Item header */}
      <ItemHeader />

      {/* Item options (like and add to personal library) */}
      <LikeAndAdd />

      {/* Item comments */}
      <Comments />
    </div>
  );
}

export default Item;

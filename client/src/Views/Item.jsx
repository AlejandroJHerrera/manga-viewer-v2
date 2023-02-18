import React from 'react';
import Comments from '../Components/Comments';
import ItemHeader from '../Components/ItemHeader';

function Item() {
  return (
    <div className="max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
      {/* Item header */}
      <ItemHeader />

      {/* Item options (like and add to personal library) */}

      {/* Item comments */}
      <Comments />
    </div>
  );
}

export default Item;

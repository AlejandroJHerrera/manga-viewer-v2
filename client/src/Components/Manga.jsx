import React from 'react';

function Manga({ author, chapters, image, title }) {
  return (
    <div className="carousel-item group cursor-pointer">
      <div className="flex flex-col">
        <img
          src={
            image ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSUfOBASjo-OhpeRz3ig71gF-OdaJnL_EAmw&usqp=CAU'
          }
          alt={title}
          className="object-cover w-full rounded-lg h-64 group-hover:scale-105 transition-transform duration-200 ease-out"
        />
        <p className="font-semibold text-md text-gray-400 truncate mt-1">
          {title}
        </p>
      </div>
    </div>
  );
}

export default Manga;

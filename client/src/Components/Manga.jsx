import React from 'react';
import { NavLink } from 'react-router-dom';

function Manga({ image, title, id }) {
  return (
    <div className="carousel-item group cursor-pointer">
      <NavLink to={`/manga/${id}`}>
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
      </NavLink>
    </div>
  );
}

export default Manga;

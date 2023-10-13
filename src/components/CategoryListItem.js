import React from 'react';

const CategoryListItem = ({ categoryName }) => (
  <li className="">
    <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap hover:cursor-pointer">
      {categoryName}
    </a>
  </li>
);

export default CategoryListItem;

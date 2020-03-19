import React from 'react';
import BottomNavItem from './BottomNavItem.jsx';

const BottomNav = ({ list, classType, activeCategory, changeActive }) => (
  <nav className="bottomNavBar">
    <ul className="bottomNavList">
      {list.map((item, index) => (
        <BottomNavItem
          key={index} index={index} item={item} classType={classType}
          activeCategory={activeCategory} changeActive={changeActive}
        />
      ))}
      <li className="bottomNavItems">
        <p>REI Outlet</p>
        <p className="exitArrow"> &gt;</p>
      </li>
    </ul>
  </nav>
);

module.exports = BottomNav;

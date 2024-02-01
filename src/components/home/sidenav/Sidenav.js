import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog Page</li>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Make a game using flame</li>
        <li className="sidenavLi">Responsive website</li>
      </ul>
      <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi">pantai Coconut beach</li>
        <li className="sidenavLi">Atmosfer Stadion segiri</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+62 859-6274-0736</li>
        <li className="sidenavLi">muhammadramadhan@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav
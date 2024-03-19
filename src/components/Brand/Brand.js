import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>KATIT</h4> */}
      <svg id="Katit" data-name="Katit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 254.52 71.38">
        <defs>
          <style>
          </style>
        </defs>
        <path class="cls-1" d="M39.96,71.38l-25.77-31.75v31.75H0V.1h14.21v31.95L39.96.1h17.15l-29.22,35.34,30.03,35.93h-17.96Z"/>
        <path class="cls-1" d="M105.61,57.79h-28.2l-4.67,13.58h-14.9L83.28,0h16.53l25.46,71.38h-15.01l-4.67-13.58ZM101.75,46.36l-10.25-29.82-10.25,29.82h20.51Z"/>
        <path class="cls-1" d="M177.92.1v11.53h-18.86v59.74h-14.21V11.64h-18.86V.1h51.95-.02Z"/>
        <path class="cls-1" d="M197.42.1v71.28h-14.21V.1h14.21Z"/>
        <path class="cls-1" d="M254.52.1v11.53h-18.86v59.74h-14.21V11.64h-18.88V.1h51.95Z"/>
      </svg>
    </div>
  );
};

export default Brand;

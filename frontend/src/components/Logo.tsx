import React from 'react';

import '../styles/Logo.css';

export default function Logo() {
  return (
    <svg viewBox="0 0 610.48 538.7">
      <polygon
        className="logo-outline"
        points="56.33 119.06 219.66 50.39 186.99 199.06 169.66 211.06 184.33 331.06 313.66 35.06 362.33 333.06 420.33 192.06 404.33 173.73 437.66 35.06 598.33 51.73 568.99 186.39 546.33 199.06 430.33 458.39 294.33 433.06 277.99 323.06 237.66 429.73 93.66 491.73 52.33 282.06 34.98 270.41 56.33 119.06"
      />
      <polygon
        className="logo-shadow"
        points="44.72 141.7 18.19 153.47 0 292.33 25.41 307.66 70.45 538.7 207.59 477.31 216.99 448.43 88.12 502.76 44.93 286.49 26.8 274.47 44.72 141.7"
      />
      <polygon
        className="logo-shadow"
        points="259.79 357.21 275.53 458.67 417.02 486.47 427.14 456.86 302.24 433.29 282.5 297.69 259.79 357.21"
      />
      <polygon className="logo-shadow" points="174.17 276.06 182.31 334.57 305.65 56.98 288.22 12.85 174.17 276.06" />
      <polygon
        className="logo-shadow"
        points="347.49 292.66 389.65 193.83 371.11 174.47 405.42 37.86 432.94 41.45 402.4 165.51 420.5 185.23 354.9 336.89 347.49 292.66"
      />
    </svg>
  );
}
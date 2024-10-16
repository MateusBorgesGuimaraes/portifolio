import { IconProps } from '../types';

const CssIcon = ({ theme = 'black' }: IconProps) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_39_6)">
        <path
          d="M25.0066 0H33.5999V3.59333H28.5999V7.18667H33.5999V10.78H25.0066V0ZM35.3166 0H43.9133V3.12667H38.9133V3.75H43.9133V10.9367H35.3166V7.65667H40.3166V7.03H35.3166V0ZM45.6333 0H54.2233V3.12667H49.2233V3.75H54.2233V10.9367H45.6333V7.65667H50.6333V7.03H45.6333V0Z"
          fill={theme === 'black' ? 'black' : 'white'}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.97 80.0001L16.8233 73.5734L10 15.7234H70L63.18 73.5667L39.97 80.0001ZM23.49 41.9101L24.1267 49.0034H48.7167L47.8933 58.2034L39.98 60.3434H39.9733L32.0733 58.2101L31.5667 52.5534H24.4433L25.4367 63.6934L39.97 67.7267L54.5267 63.6934L56.3 43.8134L56.4733 41.9101L57.7533 27.5467H22.2133L22.86 34.6434H49.98L49.3333 41.9101H23.49Z"
          fill={theme === 'black' ? 'black' : 'white'}
        />
      </g>
      <defs>
        <clipPath id="clip0_39_6">
          <rect width="80" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CssIcon;

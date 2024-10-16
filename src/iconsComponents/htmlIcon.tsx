import { IconProps } from '../types';

const HtmlIcon = ({ theme = 'black' }: IconProps) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_39_9)">
        <mask
          id="mask0_39_9"
          // style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="80"
          height="80"
        >
          <path d="M0 0H80V80H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_39_9)">
          <path
            d="M16.9333 0H20.54V3.56333H23.84V0H27.4467V10.7867H23.84V7.17667H20.54V10.7867H16.9367L16.9333 0ZM32.1867 3.57667H29.0134V0H38.97V3.57667H35.7934V10.7867H32.1867V3.57667ZM40.55 0H44.31L46.6234 3.79L48.9334 0H52.6934V10.7867H49.1034V5.44L46.6234 9.27667H46.56L44.0767 5.44333V10.7867H40.55V0ZM54.4867 0H58.0967V7.22333H63.1634V10.79H54.4867V0Z"
            fill={theme === 'black' ? 'black' : 'white'}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.82 73.5734L10 15.7234H70L63.1767 73.5667L39.9667 80.0001L16.82 73.5734ZM30.61 41.9067L29.9633 34.6401H57.1133L57.7467 27.5467H22.2133L24.1267 49.0034H48.7167L47.8933 58.2034L39.98 60.3434H39.9733L32.0733 58.2101L31.5667 52.5534H24.44L25.4333 63.6934L39.9667 67.7267L54.5233 63.6934L56.2967 43.8134L56.47 41.9101L30.61 41.9067Z"
            fill={theme === 'black' ? 'black' : 'white'}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_39_9">
          <rect width="80" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HtmlIcon;

import { IconProps } from '../types';

const NestIcon = ({ theme = 'black' }: IconProps) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.5 77.5L60 60.15C52.5 80 41.7 76.4 37.6 77.5C36.45 77.8 45.95 75.1 50 67.5C45.5 69.15 42.2 70 40.1 70C47.2 63.85 49.65 58 47.6 52.5C45.9 64.15 24.55 73.05 19.95 62.8C16.95 55.95 18.55 51.65 24.8 49.95C24.8 55.25 27.35 57.9 32.5 57.9V52.5L42.35 57.05C40.8 40.7 30 34.15 10 37.5C5 31.75 2.5 27.6 2.5 25C2.5 21.1 3.75 20 7.5 20C11.25 20 12.5 19.9 17.65 14.75C25.45 7.3 35.5 5.5 47.5 12.85C46.4 9.7 48.15 6.25 52.75 2.5C60.15 6.15 63.4 11.15 62.45 17.5C61.5 23.85 57.35 27.2 49.95 27.5C52.4 29.35 55.7 29.35 59.95 27.5C61.9764 26.6639 63.7363 25.2909 65.0403 23.5288C66.3442 21.7667 67.1428 19.6823 67.35 17.5C74.1 25.85 77.45 34.15 77.45 42.5C77.45 50.85 75.7 57.6 72.25 62.8L69.75 52.5C64.85 70 61.95 74 57.4 77.5H57.5Z"
        stroke={theme === 'black' ? 'black' : 'white'}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NestIcon;

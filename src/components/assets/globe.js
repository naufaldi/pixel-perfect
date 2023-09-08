import React from 'react';

const Globe = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
        stroke="#64748B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g opacity="0.4">
        <path
          d="M5.99971 2.25H6.74971C5.28721 6.63 5.28721 11.37 6.74971 15.75H5.99971"
          stroke="#64748B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.25 2.25C12.7125 6.63 12.7125 11.37 11.25 15.75"
          stroke="#64748B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.25 12V11.25C6.63 12.7125 11.37 12.7125 15.75 11.25V12"
          stroke="#64748B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.25 6.75007C6.63 5.28757 11.37 5.28757 15.75 6.75007"
          stroke="#64748B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default Globe;

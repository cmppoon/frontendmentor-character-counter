import React from "react";

export default function WordCountPattern({className} : {className: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      fill="none"
      viewBox="0 0 150 150"
      className={className}
    >
      <g clipPath="url(#a)">
        <mask
          id="b"
          width="150"
          height="150"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{maskType:"luminance"}}
        >
          <path fill="#fff" d="M150 0H0v150h150V0Z" />
        </mask>
        <g mask="url(#b)">
          <path
            fill="#FFB844"
            fillRule="evenodd"
            d="M0 0h50v50H0V0Zm100 50H50v50H0v50h50v-50h50v50h50v-50h-50V50Zm0 0h50V0h-50v50Z"
            clipRule="evenodd"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h150v150H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

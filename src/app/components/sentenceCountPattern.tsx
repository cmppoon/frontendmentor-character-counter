import React from "react";

export default function SentenceCountPattern({className} : {className: string}) {
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
          <path fill="#fff" d="M0 0v150h150V0H0Z" />
        </mask>
        <g mask="url(#b)">
          <path
            fill="#FA9A82"
            fillRule="evenodd"
            d="M32.442 130.99V150h10.116v-19.01c0-7.418 6.014-13.432 13.432-13.432H94.01c7.418 0 13.432 6.014 13.432 13.432V150h10.116v-19.01c0-7.418 6.014-13.432 13.433-13.432H150v-10.116h-19.009c-7.419 0-13.433-6.013-13.433-13.432V55.99c0-7.418 6.014-13.432 13.433-13.432H150V32.442h-19.009c-7.419 0-13.433-6.014-13.433-13.432V0h-10.116v19.01c0 7.418-6.014 13.432-13.432 13.432H55.99c-7.418 0-13.432-6.014-13.432-13.432V0H32.442v19.01c0 7.418-6.014 13.432-13.432 13.432H0v10.116h19.01c7.418 0 13.432 6.014 13.432 13.432v38.02c0 7.419-6.014 13.432-13.432 13.432H0v10.116h19.01c7.418 0 13.432 6.014 13.432 13.432Zm75-55.99V55.99c0-7.418-6.014-13.432-13.432-13.432H55.99c-7.418 0-13.432 6.014-13.432 13.432v38.02c0 7.419 6.014 13.432 13.432 13.432H94.01c7.418 0 13.432-6.013 13.432-13.432V75Z"
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

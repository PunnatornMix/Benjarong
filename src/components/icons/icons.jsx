import { useState } from "react";

export function CirclePhone({ className = null }) {
  return (
    <svg
      version="1.1"
      id="svg2"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      sodipodi:docname="phone-alt.svg"
      inkscape:version="0.48.4 r9939"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1200 1200"
      enableBackground="new 0 0 1200 1200"
      xmlSpace="preserve"
      //   fill="#100F9C"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          id="path16180"
          inkscape:connector-curvature="0"
          d="M600,0C268.629,0,0,268.629,0,600s268.629,600,600,600 s600-268.629,600-600S931.371,0,600,0z M384.375,238.33c12.362-0.729,23.536,6.66,32.007,19.775l82.031,155.566 c8.637,18.434,3.729,38.172-9.155,51.343l-37.573,37.573c-2.319,3.178-3.845,6.757-3.882,10.693 c14.409,55.775,58.117,107.223,96.681,142.603c38.562,35.38,80.009,83.281,133.812,94.629c6.65,1.855,14.797,2.52,19.556-1.903 l43.652-44.458c15.068-11.421,36.866-16.956,52.954-7.617h0.732l148.021,87.378c21.728,13.619,23.979,39.944,8.423,55.957 L849.683,941.016c-15.056,15.44-35.058,20.631-54.491,20.654c-85.948-2.575-167.158-44.759-233.862-88.11 C451.84,793.907,351.407,695.114,288.355,575.757c-24.182-50.05-52.589-113.91-49.878-169.774 c0.242-21.016,5.928-41.605,20.728-55.151l101.953-101.953C369.1,242.121,376.957,238.768,384.375,238.33z"
        ></path>{" "}
      </g>
    </svg>
  );
}

export function Mail({ className = null }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <svg
        viewBox="0 -3.5 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
        fill="#100F9C"
        className={className}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <title>mail</title> <desc>Created with Sketch Beta.</desc>{" "}
          <defs> </defs>{" "}
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            sketch:type="MSPage"
          >
            {" "}
            <g
              id="Icon-Set-Filled"
              sketch:type="MSLayerGroup"
              transform="translate(-414.000000, -261.000000)"
              fill={isHover ? "#DC1E32" : "#100F9C"}
            >
              {" "}
              <path
                d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"
                id="mail"
                sketch:type="MSShapeGroup"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
}

export function LineIcon({ className = null, fill, filltext }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M30 14.4979C30 8.15792 23.7199 3 15.9999 3C8.28094 3 2 8.15792 2 14.4979C2 20.1817 6.98063 24.9417 13.7084 25.8418C14.1644 25.9412 14.7849 26.146 14.9419 26.5404C15.0831 26.8986 15.0342 27.4598 14.987 27.8216C14.987 27.8216 14.8227 28.8214 14.7873 29.0343C14.7264 29.3926 14.5061 30.4353 15.9999 29.7981C17.4942 29.1609 24.0626 24.9935 26.9998 21.572C29.0287 19.3204 30 17.0353 30 14.4979Z"
            fill={fill}
            // fill={fill || isHover ? "#DC1E32" : "#100F9C"}
          ></path>{" "}
          <path
            d="M10.7884 16.5969H8.12013V11.6998C8.12013 11.5476 7.99802 11.4241 7.84773 11.4241H6.86545C6.71489 11.4241 6.59277 11.5476 6.59277 11.6998V17.8652C6.59277 18.0149 6.71435 18.1411 6.86518 18.1411H10.7884C10.9389 18.1411 11.0605 18.0174 11.0605 17.8652V16.8725C11.0605 16.7203 10.9389 16.5969 10.7884 16.5969Z"
            // fill="white"
            fill={filltext || "white"}
          ></path>{" "}
          <path
            d="M13.1553 11.4244H12.1733C12.0228 11.4244 11.9004 11.5478 11.9004 11.6995V17.866C11.9004 18.0179 12.0228 18.1411 12.1733 18.1411H13.1553C13.3059 18.1411 13.428 18.0179 13.428 17.866V11.6995C13.428 11.5478 13.3059 11.4244 13.1553 11.4244Z"
            fill={filltext || "white"}
          ></path>{" "}
          <path
            d="M19.9147 11.4244H18.9327C18.7821 11.4244 18.66 11.5478 18.66 11.6995V15.3631L15.8645 11.5467C15.8128 11.4683 15.729 11.4295 15.6375 11.4244H14.6558C14.5052 11.4244 14.3828 11.5478 14.3828 11.6995V17.866C14.3828 18.0179 14.5052 18.1411 14.6558 18.1411H15.6375C15.7883 18.1411 15.9104 18.0179 15.9104 17.866V14.2035L18.7094 18.0247C18.7597 18.0967 18.845 18.1411 18.9327 18.1411H19.9147C20.0655 18.1411 20.1874 18.0179 20.1874 17.866V11.6995C20.1874 11.5478 20.0655 11.4244 19.9147 11.4244Z"
            fill={filltext || "white"}

            // fill="white"
          ></path>{" "}
          <path
            d="M25.3372 12.9683C25.4878 12.9683 25.6094 12.8452 25.6094 12.6927V11.7C25.6094 11.5478 25.4878 11.4241 25.3372 11.4241H21.4143C21.2636 11.4241 21.1416 11.5501 21.1416 11.6998V17.8655C21.1416 18.0147 21.2633 18.1411 21.4137 18.1411H25.3372C25.4878 18.1411 25.6094 18.0174 25.6094 17.8655V16.8725C25.6094 16.7206 25.4878 16.5969 25.3372 16.5969H22.6692V15.5546H25.3372C25.4878 15.5546 25.6094 15.4311 25.6094 15.2789V14.2863C25.6094 14.1341 25.4878 14.0104 25.3372 14.0104H22.6692V12.9683H25.3372Z"
            fill={filltext || "white"}
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
}

export function UnitedStates({ className = null }) {
  return (
    <svg
      viewBox="0 -4 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g cliPath="url(#clip0_503_2952)">
          {" "}
          <rect width="28" height="20" rx="2" fill="white"></rect>{" "}
          <mask
            id="mask0_503_2952"
            // style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="28"
            height="20"
          >
            {" "}
            <rect width="28" height="20" rx="2" fill="white"></rect>{" "}
          </mask>{" "}
          <g mask="url(#mask0_503_2952)">
            {" "}
            <rect width="28" height="20" fill="#0A17A7"></rect>{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-1.28244 -1.91644L10.6667 6.14335V-1.33333H17.3334V6.14335L29.2825 -1.91644L30.7737 0.294324L21.3263 6.66667H28V13.3333H21.3263L30.7737 19.7057L29.2825 21.9165L17.3334 13.8567V21.3333H10.6667V13.8567L-1.28244 21.9165L-2.77362 19.7057L6.67377 13.3333H2.95639e-05V6.66667H6.67377L-2.77362 0.294324L-1.28244 -1.91644Z"
              fill="white"
            ></path>{" "}
            <path
              d="M18.668 6.33219L31.3333 -2"
              stroke="#DB1F35"
              strokeWidth="0.666667"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M20.0128 13.6975L31.3666 21.3503"
              stroke="#DB1F35"
              strokeWidth="0.666667"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M8.00555 6.31046L-3.83746 -1.67099"
              stroke="#DB1F35"
              strokeWidth="0.666667"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M9.29006 13.6049L-3.83746 22.3105"
              stroke="#DB1F35"
              strokeWidth="0.666667"
              strokeLinecap="round"
            ></path>{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 12H12V20H16V12H28V8H16V0H12V8H0V12Z"
              fill="#E6273E"
            ></path>{" "}
          </g>{" "}
        </g>{" "}
        <defs>
          {" "}
          <clipPath id="clip0_503_2952">
            {" "}
            <rect width="28" height="20" rx="2" fill="white"></rect>{" "}
          </clipPath>{" "}
        </defs>{" "}
      </g>
    </svg>
  );
}

export function ThailandIcon({ className = null }) {
  return (
    <>
      <svg
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        // class="iconify iconify--twemoji"
        className={className}
        preserveAspectRatio="xMidYMid meet"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill="#A7122D"
            d="M0 26.518V27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-.482H0z"
          ></path>
          <path fill="#EEE" d="M0 22.181h36v4.485H0z"></path>
          <path fill="#292648" d="M0 13.513h36v8.821H0z"></path>
          <path fill="#EEE" d="M0 9.181h36v4.485H0z"></path>
          <path
            fill="#A7122D"
            d="M0 9.333V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v.333H0z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function TriangleIcon({ className = null }) {
  return (
    <>
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M8.72798 15.795L3.72798 7.795C3.10356 6.79593 3.82183 5.5 4.99998 5.5L15 5.5C16.1781 5.5 16.8964 6.79593 16.272 7.795L11.272 15.795C10.6845 16.735 9.31549 16.735 8.72798 15.795Z"
            fill="#000000"
          ></path>{" "}
        </g>
      </svg>
    </>
  );
}

export function ThreeDotIcon({ className = null }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="#100F9C"
        height="40px"
        width="40px"
        version="1.1"
        id="Icons"
        viewBox="0 0 32 32"
        xml:space="preserve"
      >
        <g>
          <path d="M16,10c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S14.3,10,16,10z" />
          <path d="M16,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,13,16,13z" />
          <path d="M16,22c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,22,16,22z" />
        </g>
      </svg>
    </div>
  );
}

export function SearchIcon({ className = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="white"
      className="h-6 w-6 opacity-70"
    >
      <path
        fillRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function LocationIcon({ className = null, stroke }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={stroke || "currentColor"}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

export function PhoneIcon({ className = null, stroke }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={stroke || "currentColor"}
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

export function FacebookIcon({ className = null }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        width="full"
        height="full"
        viewBox="0 0 24 24"
        className={className}
      >
        <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
      </svg>
    </div>
  );
}

export function XIcon({ className = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 1668.56 1221.19"
      viewBox="0 0 1668.56 1221.19"
      id="twitter-x"
      className={className}
    >
      <circle
        cx="834.28"
        cy="610.6"
        r="481.33"
        stroke="#fff"
        stroke-miterlimit="10"
      ></circle>
      <path
        fill="#fff"
        d="M485.39,356.79l230.07,307.62L483.94,914.52h52.11l202.7-218.98l163.77,218.98h177.32
L836.82,589.6l215.5-232.81h-52.11L813.54,558.46L662.71,356.79H485.39z M562.02,395.17h81.46l359.72,480.97h-81.46L562.02,395.17
z"
        transform="translate(52.39 -25.059)"
      ></path>
    </svg>
  );
}

export function Icon({ className = null }) {
  return <div></div>;
}

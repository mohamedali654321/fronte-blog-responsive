import React,{useState} from "react";
import "./ModalSearch.css";
function ModalSearch(props) {
  const [show,setShow]=useState(true)
  
  return (
    <div>
    {show ? (
      <div class="modalSearch_SearchResults">
      <div class="modalSearch_wrapper">
        <div class="modalSearch_InputText">
          <div class="modalSearch_InputText_style">
            <svg width="40" height="40" fill="none" class="modalSearch_InputIcon">
            <g >
                <path
                  d="M4 9.4c0-2.24 0-3.36.436-4.216a4 4 0 011.748-1.748C7.04 3 8.16 3 10.4 3h19.2c2.24 0 3.36 0 4.216.436a4 4 0 011.748 1.748C36 6.04 36 7.16 36 9.4v19.2c0 2.24 0 3.36-.436 4.216a4 4 0 01-1.748 1.748C32.96 35 31.84 35 29.6 35H10.4c-2.24 0-3.36 0-4.216-.436a4 4 0 01-1.748-1.748C4 31.96 4 30.84 4 28.6V9.4z"
                  fill="#eaf2fa"
                  
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.922 22.401l-2.209-2.236a4.08 4.08 0 00.547-2.028A4.14 4.14 0 0019.13 14 4.14 4.14 0 0015 18.137a4.14 4.14 0 004.13 4.137c.727 0 1.446-.2 2.086-.583l2.198 2.228a.264.264 0 00.38 0l1.128-1.14a.267.267 0 000-.378zm-5.792-6.79a2.525 2.525 0 010 5.051 2.525 2.525 0 010-5.05z"
                  fill="#8D1CB8"
                ></path>
              </g>
              <defs>
                <filter
                  
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feColorMatrix
                    values="0 0 0 0 0.102907 0 0 0 0 0.102907 0 0 0 0 0.261974 0 0 0 0.1 0"
                  ></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <input
              type="text"
              placeholder="Search for a ressource"
              aria-label="Search for a ressource"
            />
          </div>
          <button class="modalSearch_inputButton">
            <p
            onClick={()=>{setShow(!show)}}
              class="
                  modalSearchText
                  modalSearchText_small
                  modalSearchText_color
                "
            >

              Cancel
            </p>
          </button>
        </div>
        <div class="modalSearchContent">
          <div class="modalSearchContent_noResults">
            <svg
              width="35"
              height="35"
              fill="none"
              class="modalSearchContent_noResultsIcon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.727 29.405l-7.73-7.827a14.28 14.28 0 001.915-7.099C28.912 6.497 22.422 0 14.456 0 6.49 0 0 6.497 0 14.48c0 7.982 6.49 14.479 14.456 14.479 2.543 0 5.058-.702 7.3-2.041l7.693 7.8c.173.173.42.282.666.282.246 0 .492-.1.665-.282l3.947-3.992a.935.935 0 000-1.32zM14.454 5.64c4.867 0 8.823 3.963 8.823 8.838 0 4.876-3.956 8.84-8.823 8.84-4.867 0-8.823-3.965-8.823-8.84S9.587 5.64 14.454 5.64z"
                fill="#8D1CB8"
              ></path>
            </svg>
            <p
              class="
                  modalSearchText
                  modalSearchContent_small
                  modalSearchText_color
                "
            >
              No results
            </p>
          </div>
        </div>
      </div>
    </div>

    ) : null}
   
    </div>
  );
}

export default ModalSearch;

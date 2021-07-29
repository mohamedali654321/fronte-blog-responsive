import React,{useState} from "react";
import "./SearchBar.css";
import SearchModal from './ModalSearch/ModalSearch'
function SearchBar() {
const [showResult,setShowResult]=useState(false)

const handleOnclick=()=>{
  setShowResult(!showResult)
}

  return (
    <div class="SearchBarContainer">
      <div class="SearchBarContent SearchBarWrapper">
        <h1
          class="
                  SearchBarTitleWrapper
                  SearchBarTitle
                  SearchBarTitle_small
                  SearchBarTitle_themes_color
                "
        >
          Resource Center
        </h1>
        <div class="SearchContainer" onClick={()=>handleOnclick()}>
          <div class="SearchContainerLeft">
            <svg viewBox="0 0 40 40" fill="none" class="SearchIcone">
              <g>
                <path
                  d="M4 9.4c0-2.24 0-3.36.436-4.216a4 4 0 011.748-1.748C7.04 3 8.16 3 10.4 3h19.2c2.24 0 3.36 0 4.216.436a4 4 0 011.748 1.748C36 6.04 36 7.16 36 9.4v19.2c0 2.24 0 3.36-.436 4.216a4 4 0 01-1.748 1.748C32.96 35 31.84 35 29.6 35H10.4c-2.24 0-3.36 0-4.216-.436a4 4 0 01-1.748-1.748C4 31.96 4 30.84 4 28.6V9.4z"
                  fill="#fff"
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
                  id="search_svg__filter0_d"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feflood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feflood>
                  <fecolormatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></fecolormatrix>
                  <feoffset dy="1"></feoffset>
                  <fegaussianblur stdDeviation="2"></fegaussianblur>
                  <fecolormatrix values="0 0 0 0 0.102907 0 0 0 0 0.102907 0 0 0 0 0.261974 0 0 0 0.1 0"></fecolormatrix>
                  <feblend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  ></feblend>
                  <feblend
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  ></feblend>
                </filter>
              </defs>
            </svg>
            <p
              class="
                      SearchInner_title
                      SearchBarTitle_small
                      SearchInner_color
                    "
            >
              Search for a resource
            </p>
          </div>
        </div>
      </div>
      {
        showResult &&(
          <SearchModal
            show={showResult}
          /> 
        )
      }
      {/* <SearchModal/> */}
    </div>
  );
}

export default SearchBar;

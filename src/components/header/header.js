import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.text}><svg width="378" height="31" viewBox="0 0 378 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 24H2.15909C7.90909 24 9.89773 20.8409 10.2841 12.8636L10.6477 5.15909H16.3409V24H21.7841V0.727272H5.45455L5.07955 10.7955C4.85227 17.1477 3.82955 19.2273 1.38636 19.5227L0.75 19.5909V24ZM33.4403 24.3295C38.929 24.3295 42.2585 20.7045 42.2585 15.3295C42.2585 9.94318 38.929 6.31818 33.4403 6.31818C27.9517 6.31818 24.6222 9.94318 24.6222 15.3295C24.6222 20.7045 27.9517 24.3295 33.4403 24.3295ZM33.4744 20.1364C31.4176 20.1364 30.2812 18.1818 30.2812 15.2955C30.2812 12.3977 31.4176 10.4318 33.4744 10.4318C35.4631 10.4318 36.5994 12.3977 36.5994 15.2955C36.5994 18.1818 35.4631 20.1364 33.4744 20.1364ZM45.1051 24H53.8097C58.446 24 60.9801 22.2955 60.9801 19.2045C60.9801 17.0568 59.2528 15.125 55.7074 14.9318C58.3892 14.4773 59.9119 13.1023 59.9119 11.2955C59.9119 8.19318 57.1392 6.54545 52.6392 6.54545H45.1051V24ZM50.2756 19.9773V16.6932H53.8097C54.9801 16.6932 55.7074 17.3409 55.7074 18.3977C55.7074 19.3864 54.9801 19.9773 53.8097 19.9773H50.2756ZM50.2756 13.6818V10.6705H52.6392C53.9233 10.6705 54.7188 11.2386 54.7188 12.1591C54.7188 13.1136 53.9915 13.6818 52.7869 13.6818H50.2756ZM67.1278 30.5455C71.1278 30.5455 73.1165 28.5227 74.0824 25.6705L80.6619 6.55682L74.8097 6.54545L71.5483 19H71.3665L68.1506 6.54545H62.3324L68.5369 24.6364L68.321 25.1591C67.7869 26.4659 66.5824 26.4886 64.946 25.9545L63.7188 29.9886C64.5597 30.3295 65.7983 30.5455 67.1278 30.5455ZM82.7926 6.54545V24H107.327V6.54545H102.065V19.7159H97.6903V6.54545H92.429V19.7159H88.054V6.54545H82.7926ZM110.699 24H116.256V18.2045H117.869L121.699 24H128.21L122.278 15.2841L128.153 6.54545H121.722L117.483 13.0455H116.256V6.54545H110.699V24ZM134.869 24.2955C137.301 24.2955 138.983 23.3523 139.938 21.5682H140.074V24H145.301V12.1364C145.301 8.44318 142.017 6.31818 137.574 6.31818C132.881 6.31818 130.222 8.68182 129.778 11.8636L134.903 12.0455C135.142 10.9318 136.062 10.25 137.528 10.25C138.892 10.25 139.756 10.9091 139.756 12.0795V12.1364C139.756 13.2045 138.597 13.4318 135.619 13.6932C132.085 13.9886 129.131 15.2955 129.131 19.1591C129.131 22.6136 131.528 24.2955 134.869 24.2955ZM136.585 20.6591C135.301 20.6591 134.392 20.0455 134.392 18.8864C134.392 17.7614 135.278 17.0795 136.858 16.8409C137.892 16.6932 139.165 16.4659 139.79 16.1364V17.7955C139.79 19.5 138.358 20.6591 136.585 20.6591ZM155.574 24H160.767V10.7955H166.074V24H171.335V6.54545H155.574V24ZM174.855 30.5455H180.412V21.1705H180.526C181.23 22.7841 182.798 24.25 185.435 24.25C189.298 24.25 192.412 21.2273 192.412 15.2841C192.412 9.125 189.116 6.31818 185.469 6.31818C182.707 6.31818 181.196 7.93182 180.526 9.53409H180.355V6.54545H174.855V30.5455ZM180.298 15.2727C180.298 12.4205 181.48 10.6591 183.514 10.6591C185.571 10.6591 186.707 12.4659 186.707 15.2727C186.707 18.0909 185.571 19.9205 183.514 19.9205C181.48 19.9205 180.298 18.1023 180.298 15.2727ZM203.483 24.3295C208.062 24.3295 211.074 22.1136 211.71 18.6818L206.608 18.5341C206.176 19.6932 205.04 20.3182 203.585 20.3182C201.449 20.3182 200.131 18.8977 200.131 16.7614V16.6136H211.767V15.2273C211.767 9.47727 208.267 6.31818 203.312 6.31818C198.04 6.31818 194.653 9.93182 194.653 15.3409C194.653 20.9318 197.994 24.3295 203.483 24.3295ZM200.131 13.3864C200.21 11.6477 201.585 10.3295 203.426 10.3295C205.256 10.3295 206.574 11.6023 206.597 13.3864H200.131ZM213.401 29.1477H218.81V24H228.73V29.1477H234.003V19.7159H231.276V6.54545H217.139L216.73 11.8523C216.491 14.7955 216.264 18.9091 214.707 19.7159H213.401V29.1477ZM220.116 19.7159C221.094 18.0909 221.469 15.6023 221.685 11.8523L221.776 10.6818H226.094V19.7159H220.116ZM235.722 24H237.358C241.006 24 243.267 21.7273 243.562 15.8182L243.835 10.7955H247.449V24H252.71V6.54545H238.892L238.608 14.2727C238.46 18.2045 237.756 19.7159 236.244 19.7159H235.688L235.722 24ZM264.253 24.3295C269.741 24.3295 273.071 20.7045 273.071 15.3295C273.071 9.94318 269.741 6.31818 264.253 6.31818C258.764 6.31818 255.435 9.94318 255.435 15.3295C255.435 20.7045 258.764 24.3295 264.253 24.3295ZM264.287 20.1364C262.23 20.1364 261.094 18.1818 261.094 15.2955C261.094 12.3977 262.23 10.4318 264.287 10.4318C266.276 10.4318 267.412 12.3977 267.412 15.2955C267.412 18.1818 266.276 20.1364 264.287 20.1364ZM274.134 24H280.599L284.622 17.4091H285.077V24H290.634V17.4091H291.088L295.099 24H301.565L295.793 14.8409L301.554 6.54545H295.236L291.134 13.1591H290.634V6.54545H285.077V13.1591H284.565L280.463 6.54545H274.145L279.918 14.8409L274.134 24ZM311.452 24.3295C316.031 24.3295 319.043 22.1136 319.679 18.6818L314.577 18.5341C314.145 19.6932 313.009 20.3182 311.554 20.3182C309.418 20.3182 308.099 18.8977 308.099 16.7614V16.6136H319.736V15.2273C319.736 9.47727 316.236 6.31818 311.281 6.31818C306.009 6.31818 302.622 9.93182 302.622 15.3409C302.622 20.9318 305.963 24.3295 311.452 24.3295ZM308.099 13.3864C308.179 11.6477 309.554 10.3295 311.395 10.3295C313.224 10.3295 314.543 11.6023 314.565 13.3864H308.099ZM327.835 6.54545H322.574V24H327.835V17.3409H333.006V24H338.233V6.54545H333.006V13.1023H327.835V6.54545ZM346.866 16.8068V6.54545H341.605V24H346.957L352.526 13.7045V24H357.787V6.54545H352.446L346.866 16.8068ZM366.585 16.8068V6.54545H361.324V24H366.676L372.244 13.7045V24H377.506V6.54545H372.165L366.585 16.8068ZM371.665 0.363636C371.653 1.39773 371.017 2.34091 369.392 2.34091C367.722 2.34091 367.097 1.36364 367.108 0.363636H363.483C363.472 3.21591 365.756 5.09091 369.392 5.09091C373.028 5.09091 375.312 3.21591 375.324 0.363636H371.665Z" fill="url(#paint0_linear)"/>
                <defs>
                    <linearGradient id="paint0_linear" x1="269.233" y1="-23.7026" x2="266.659" y2="48.7239" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0093D0"/>
                        <stop offset="1" stop-color="#002573"/>
                    </linearGradient>
                </defs>
            </svg>
            </div>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <svg width="114" height="36" viewBox="0 0 114 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M35.7313 0.00137329H0V36.0005H35.7313V0.00137329ZM31.1937 21.3146C31.1937 26.4267 25.2139 30.5709 17.8373 30.5709C10.9046 30.5709 5.20557 26.9104 4.54488 22.2261C4.47437 21.7262 4.88808 21.3146 5.39031 21.3146H6.88993C7.39216 21.3146 7.78873 21.7306 7.91569 22.2191C8.65394 25.0597 12.8149 27.2353 17.8373 27.2353C23.3812 27.2353 27.8754 24.5845 27.8754 21.3146V9.6786C27.8754 9.17367 27.4682 8.76434 26.966 8.76434H15.5113C15.0091 8.76434 14.6019 8.35501 14.6019 7.85007V6.34298C14.6019 5.83805 15.0091 5.42872 15.5113 5.42872H30.2843C30.7866 5.42872 31.1937 5.83805 31.1937 6.34298V21.3146Z"
                              fill="url(#paint0_linear)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M74.867 0.000915527H39.1357V36H74.867V0.000915527ZM66.1857 18C66.1857 23.1125 62.072 27.2569 56.9976 27.2569C51.9232 27.2569 47.8096 23.1125 47.8096 18C47.8096 12.8876 51.9232 8.7431 56.9976 8.7431C62.072 8.7431 66.1857 12.8876 66.1857 18ZM69.4752 18C69.4752 24.9428 63.8888 30.5711 56.9976 30.5711C50.1064 30.5711 44.52 24.9428 44.52 18C44.52 11.0572 50.1064 5.4289 56.9976 5.4289C63.8888 5.4289 69.4752 11.0572 69.4752 18Z"
                              fill="url(#paint1_linear)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M114 0H78.2688V35.9991H114V0ZM93.107 18.7041C93.4939 18.3141 93.4939 17.6851 93.1069 17.2952L84.3553 8.47798C83.9682 8.08807 83.9682 7.45896 84.3553 7.06905L85.2728 6.1446C85.664 5.75054 86.3012 5.75055 86.6923 6.1446L95.4225 14.9402C95.8137 15.3343 96.451 15.3343 96.8421 14.9402L105.573 6.14246C105.964 5.74831 106.601 5.74831 106.992 6.14246L107.91 7.06701C108.297 7.4569 108.297 8.08589 107.91 8.47579L99.158 17.2949C98.771 17.6848 98.771 18.3139 99.158 18.7037L107.912 27.5233C108.299 27.9132 108.299 28.5423 107.912 28.9322L106.994 29.8567C106.603 30.2508 105.966 30.2508 105.575 29.8567L96.8424 21.0587C96.4512 20.6646 95.8139 20.6647 95.4228 21.0588L86.6922 29.8567C86.301 30.2509 85.6637 30.2509 85.2725 29.8567L84.355 28.9322C83.9681 28.5423 83.9681 27.9133 84.355 27.5234L93.107 18.7041Z"
                              fill="url(#paint2_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="25.3159" y1="-0.9" x2="17.9311" y2="36.0135"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0093D0"/>
                                <stop offset="1" stop-color="#002573"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="50.6317" y1="9.05726e-06" x2="74.8974" y2="33.406"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0093D0"/>
                                <stop offset="1" stop-color="#002573"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear" x1="103.585" y1="-0.901374" x2="79.7224" y2="37.4484"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0093D0"/>
                                <stop offset="1" stop-color="#002573"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className={styles.logo}>
                    <img src="logo_rosatom.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;
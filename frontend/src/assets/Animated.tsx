import { useRef } from "react";
import { motion } from "framer-motion";
import icon2 from "./icon2.svg"
import icon3 from "./icon3.svg"
import img from "./Dog.png";
import clickSound from "./bark.mp3";

export default function Animated() {
  const audioRef = useRef(new Audio(clickSound));

  const handleClick = () => {
    audioRef.current.play();
  };
  return (
    <div onClick={handleClick} className="group relative w-[621px] h-fit">
      <div className="absolute top-0 left-0 z-10">
        <svg className="" width="621" height="418" viewBox="0 0 621 718" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="group-hover:fill-[#63de50] transition" d="M0 400.691C0 212.129 0 117.848 58.5786 59.2696C117.157 0.690918 211.438 0.690918 400 0.690918H500.945C557.513 0.690918 585.798 0.690918 603.371 18.2645C620.945 35.8381 620.945 64.1224 620.945 120.691V633.116C620.945 672.714 620.945 692.513 608.643 704.815C596.342 717.116 576.543 717.116 536.945 717.116H83.9999C44.402 717.116 24.603 717.116 12.3015 704.815C0 692.513 0 672.714 0 633.116V400.691Z" fill="#ef4444" />
        </svg>
      </div>
      <img className="absolute top-0 left-36 z-20 h-[26rem]" src={img} alt="" />
      <motion.img
        src={icon2}
        className="absolute top-0 left-20 z-20 h-28"
        alt=""
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
      <motion.img
        src={icon3}
        className="absolute top-20 left-96 z-20 h-28"
        alt=""
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
      <div className="absolute top-60 left-0 z-20 h-28">
        <svg width="604" height="137" viewBox="0 0 904 237" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g filter="url(#filter0_d_91_31)">
            <rect className="group-hover:fill-[#ef4444] transition" x="4" width="596" height="229" rx="23" fill="#63DE50" />
          </g>
          <rect x="34.5" y="28.5" width="535" height="172" rx="6.5" stroke="white" strokeWidth="3" />
          <rect x="294.5" y="106.5" width="275" height="94" stroke="white" strokeWidth="3" />
          <rect x="294.5" y="28.5" width="275" height="172" rx="6.5" stroke="white" strokeWidth="3" />
          <rect x="95" y="52" width="132" height="125" fill="url(#pattern0_91_31)" />
          <path d="M338.696 53.3824H346.218C347.646 53.3824 348.937 53.628 350.091 54.1192C351.256 54.6104 352.181 55.3643 352.867 56.3809C353.552 57.3862 353.895 58.6713 353.895 60.2362C353.895 61.7897 353.552 63.0977 352.867 64.16C352.181 65.2224 351.256 66.0277 350.091 66.576C348.937 67.1129 347.646 67.3813 346.218 67.3813H342.963V76H338.696V53.3824ZM342.963 63.9373H345.036C345.836 63.9373 346.555 63.823 347.195 63.5946C347.846 63.3547 348.366 62.972 348.754 62.4466C349.143 61.9211 349.337 61.2186 349.337 60.339C349.337 59.448 349.143 58.7512 348.754 58.2486C348.366 57.7346 347.846 57.369 347.195 57.152C346.555 56.9235 345.836 56.8093 345.036 56.8093H342.963V63.9373ZM358.983 69.9344C359.017 70.5741 359.188 71.1452 359.497 71.6478C359.805 72.1504 360.251 72.5445 360.833 72.8301C361.427 73.1157 362.136 73.2585 362.958 73.2585C363.701 73.2585 364.352 73.1671 364.911 72.9843C365.483 72.8016 365.962 72.5788 366.351 72.3161C366.75 72.0419 367.047 71.7792 367.242 71.5279L369.041 74.2009C368.721 74.6007 368.293 74.9719 367.756 75.3146C367.23 75.6459 366.556 75.9086 365.734 76.1028C364.923 76.3084 363.906 76.4112 362.684 76.4112C361.142 76.4112 359.788 76.1085 358.623 75.5031C357.458 74.8977 356.55 74.0238 355.899 72.8815C355.247 71.7392 354.922 70.3799 354.922 68.8035C354.922 67.4327 355.213 66.199 355.796 65.1024C356.378 63.9944 357.224 63.1205 358.332 62.4808C359.451 61.8412 360.793 61.5213 362.358 61.5213C363.832 61.5213 365.106 61.8069 366.179 62.378C367.265 62.9378 368.104 63.7602 368.698 64.8454C369.292 65.9306 369.589 67.2557 369.589 68.8206C369.589 68.912 369.583 69.1005 369.572 69.3861C369.572 69.6602 369.561 69.843 369.538 69.9344H358.983ZM365.511 67.2442C365.5 66.8787 365.385 66.4846 365.168 66.062C364.963 65.6393 364.637 65.2795 364.192 64.9825C363.746 64.6855 363.152 64.537 362.41 64.537C361.667 64.537 361.056 64.6798 360.576 64.9654C360.108 65.2509 359.754 65.605 359.514 66.0277C359.274 66.4389 359.137 66.8444 359.103 67.2442H365.511ZM371.311 61.9325H373.847V56.1582H378.165V61.9325H381.489V65.5479H378.165V70.6369C378.165 71.3108 378.274 71.8363 378.491 72.2133C378.708 72.5788 379.05 72.7616 379.519 72.7616C379.873 72.7616 380.164 72.693 380.393 72.556C380.621 72.4075 380.758 72.3046 380.804 72.2475L382.346 75.366C382.278 75.4346 382.055 75.5545 381.678 75.7258C381.312 75.8972 380.838 76.0514 380.256 76.1885C379.684 76.337 379.039 76.4112 378.319 76.4112C377.029 76.4112 375.961 76.04 375.115 75.2975C374.27 74.5436 373.847 73.3784 373.847 71.802V65.5479H371.311V61.9325ZM391.43 76.4112C389.934 76.4112 388.597 76.0914 387.421 75.4517C386.256 74.812 385.342 73.9381 384.679 72.8301C384.017 71.7107 383.685 70.437 383.685 69.0091C383.685 67.5812 384.017 66.3076 384.679 65.1881C385.342 64.0572 386.256 63.1662 387.421 62.5151C388.597 61.8526 389.934 61.5213 391.43 61.5213C392.938 61.5213 394.269 61.8526 395.423 62.5151C396.576 63.1662 397.479 64.0572 398.13 65.1881C398.781 66.3076 399.107 67.5812 399.107 69.0091C399.107 70.437 398.781 71.7107 398.13 72.8301C397.479 73.9381 396.576 74.812 395.423 75.4517C394.269 76.0914 392.938 76.4112 391.43 76.4112ZM391.43 72.7958C392.15 72.7958 392.773 72.6359 393.298 72.3161C393.835 71.9848 394.246 71.5336 394.532 70.9624C394.829 70.3799 394.977 69.723 394.977 68.992C394.977 68.2609 394.829 67.6041 394.532 67.0215C394.246 66.4389 393.835 65.982 393.298 65.6507C392.773 65.308 392.15 65.1367 391.43 65.1367C390.711 65.1367 390.082 65.308 389.545 65.6507C389.02 65.982 388.609 66.4389 388.312 67.0215C388.015 67.6041 387.866 68.2609 387.866 68.992C387.866 69.723 388.015 70.3799 388.312 70.9624C388.609 71.5336 389.02 71.9848 389.545 72.3161C390.082 72.6359 390.711 72.7958 391.43 72.7958ZM406.346 83.128H402.028V61.9325H406.397V64.2114C406.534 63.8802 406.831 63.5032 407.288 63.0806C407.745 62.6579 408.339 62.2924 409.07 61.9839C409.813 61.6755 410.658 61.5213 411.606 61.5213C412.942 61.5213 414.108 61.8469 415.101 62.498C416.095 63.1491 416.861 64.0401 417.397 65.171C417.946 66.2904 418.22 67.5584 418.22 68.9748C418.22 70.3913 417.934 71.665 417.363 72.7958C416.792 73.9153 415.998 74.8006 414.981 75.4517C413.965 76.0914 412.783 76.4112 411.435 76.4112C410.418 76.4112 409.544 76.2285 408.813 75.8629C408.082 75.4974 407.511 75.0862 407.1 74.6292C406.688 74.1723 406.437 73.8125 406.346 73.5498V83.128ZM413.953 68.9748C413.953 68.1866 413.782 67.4956 413.439 66.9016C413.108 66.2961 412.663 65.8278 412.103 65.4965C411.543 65.1538 410.921 64.9825 410.235 64.9825C409.516 64.9825 408.864 65.1538 408.282 65.4965C407.699 65.8392 407.237 66.3133 406.894 66.9187C406.563 67.5127 406.397 68.1981 406.397 68.9748C406.397 69.7516 406.563 70.4427 406.894 71.0481C407.237 71.6421 407.699 72.1105 408.282 72.4531C408.864 72.7844 409.516 72.9501 410.235 72.9501C410.921 72.9501 411.543 72.7844 412.103 72.4531C412.663 72.1219 413.108 71.6592 413.439 71.0653C413.782 70.4598 413.953 69.763 413.953 68.9748ZM421.276 76V61.9325H425.611V76H421.276ZM423.504 58.3C422.784 58.3 422.173 58.0487 421.67 57.5461C421.179 57.0435 420.934 56.4438 420.934 55.747C420.934 55.0502 421.185 54.4447 421.687 53.9307C422.19 53.4167 422.796 53.1596 423.504 53.1596C423.972 53.1596 424.4 53.2796 424.789 53.5195C425.177 53.7479 425.491 54.0564 425.731 54.4447C425.971 54.8331 426.091 55.2672 426.091 55.747C426.091 56.4438 425.834 57.0435 425.32 57.5461C424.817 58.0487 424.212 58.3 423.504 58.3ZM440.639 76V73.5498C440.536 73.8011 440.274 74.1552 439.851 74.6121C439.428 75.069 438.857 75.486 438.137 75.8629C437.429 76.2285 436.595 76.4112 435.636 76.4112C434.288 76.4112 433.094 76.0914 432.055 75.4517C431.015 74.8006 430.198 73.9153 429.604 72.7958C429.022 71.665 428.731 70.3913 428.731 68.9748C428.731 67.5584 429.022 66.2904 429.604 65.171C430.198 64.0401 431.015 63.1491 432.055 62.498C433.094 61.8469 434.288 61.5213 435.636 61.5213C436.573 61.5213 437.384 61.6812 438.069 62.0011C438.766 62.3095 439.325 62.675 439.748 63.0977C440.182 63.5089 440.462 63.8802 440.588 64.2114V61.9325H444.906V76H440.639ZM432.997 68.9748C432.997 69.763 433.174 70.4598 433.528 71.0653C433.882 71.6592 434.351 72.1219 434.933 72.4531C435.516 72.7844 436.15 72.9501 436.835 72.9501C437.555 72.9501 438.195 72.7844 438.754 72.4531C439.314 72.1105 439.754 71.6421 440.074 71.0481C440.405 70.4427 440.571 69.7516 440.571 68.9748C440.571 68.1981 440.405 67.5127 440.074 66.9187C439.754 66.3133 439.314 65.8392 438.754 65.4965C438.195 65.1538 437.555 64.9825 436.835 64.9825C436.15 64.9825 435.516 65.1538 434.933 65.4965C434.351 65.8278 433.882 66.2961 433.528 66.9016C433.174 67.4956 432.997 68.1866 432.997 68.9748ZM468.964 72.179C470.152 72.179 471.209 72.0134 472.134 71.6821C473.059 71.3394 473.739 71.0024 474.173 70.6712L476.006 74.3208C475.481 74.7777 474.573 75.2404 473.282 75.7087C472.003 76.1771 470.472 76.4112 468.69 76.4112C467.022 76.4112 465.463 76.1199 464.012 75.5374C462.562 74.9434 461.288 74.1209 460.191 73.07C459.095 72.0077 458.238 70.7683 457.621 69.3518C457.004 67.9239 456.696 66.3818 456.696 64.7255C456.696 63.0691 456.998 61.527 457.604 60.0991C458.221 58.6598 459.077 57.409 460.174 56.3467C461.271 55.2843 462.544 54.4562 463.995 53.8622C465.457 53.2682 467.022 52.9712 468.69 52.9712C470.472 52.9712 472.003 53.2053 473.282 53.6737C474.573 54.142 475.481 54.6047 476.006 55.0616L474.173 58.7112C473.739 58.38 473.059 58.0487 472.134 57.7174C471.209 57.3747 470.152 57.2034 468.964 57.2034C467.753 57.2034 466.674 57.3976 465.726 57.786C464.789 58.1744 463.989 58.717 463.327 59.4138C462.676 60.0991 462.179 60.893 461.836 61.7955C461.493 62.6979 461.322 63.6574 461.322 64.6741C461.322 65.7021 461.493 66.6731 461.836 67.5869C462.179 68.4894 462.676 69.289 463.327 69.9858C463.989 70.6712 464.789 71.208 465.726 71.5964C466.674 71.9848 467.753 72.179 468.964 72.179ZM490.336 76V73.5498C490.233 73.8011 489.97 74.1552 489.548 74.6121C489.125 75.069 488.554 75.486 487.834 75.8629C487.126 76.2285 486.292 76.4112 485.333 76.4112C483.985 76.4112 482.791 76.0914 481.752 75.4517C480.712 74.8006 479.895 73.9153 479.301 72.7958C478.719 71.665 478.427 70.3913 478.427 68.9748C478.427 67.5584 478.719 66.2904 479.301 65.171C479.895 64.0401 480.712 63.1491 481.752 62.498C482.791 61.8469 483.985 61.5213 485.333 61.5213C486.269 61.5213 487.08 61.6812 487.766 62.0011C488.463 62.3095 489.022 62.675 489.445 63.0977C489.879 63.5089 490.159 63.8802 490.285 64.2114V61.9325H494.602V76H490.336ZM482.694 68.9748C482.694 69.763 482.871 70.4598 483.225 71.0653C483.579 71.6592 484.048 72.1219 484.63 72.4531C485.213 72.7844 485.847 72.9501 486.532 72.9501C487.252 72.9501 487.891 72.7844 488.451 72.4531C489.011 72.1105 489.451 71.6421 489.771 71.0481C490.102 70.4427 490.267 69.7516 490.267 68.9748C490.267 68.1981 490.102 67.5127 489.771 66.9187C489.451 66.3133 489.011 65.8392 488.451 65.4965C487.891 65.1538 487.252 64.9825 486.532 64.9825C485.847 64.9825 485.213 65.1538 484.63 65.4965C484.048 65.8278 483.579 66.2961 483.225 66.9016C482.871 67.4956 482.694 68.1866 482.694 68.9748ZM502.236 76H497.884V61.9325H502.236V64.2114H502.151C502.23 63.9373 502.448 63.5889 502.802 63.1662C503.167 62.7436 503.67 62.3666 504.309 62.0353C504.949 61.6927 505.72 61.5213 506.623 61.5213C507.274 61.5213 507.862 61.6184 508.387 61.8126C508.924 61.9954 509.307 62.1781 509.536 62.3609L507.822 65.9249C507.674 65.7421 507.394 65.5536 506.982 65.3594C506.583 65.1653 506.08 65.0682 505.475 65.0682C504.755 65.0682 504.155 65.2681 503.675 65.6679C503.196 66.0563 502.836 66.536 502.596 67.1072C502.356 67.6669 502.236 68.1924 502.236 68.6835V76ZM514.064 69.9344C514.098 70.5741 514.269 71.1452 514.578 71.6478C514.886 72.1504 515.332 72.5445 515.914 72.8301C516.508 73.1157 517.217 73.2585 518.039 73.2585C518.782 73.2585 519.433 73.1671 519.992 72.9843C520.564 72.8016 521.043 72.5788 521.432 72.3161C521.832 72.0419 522.129 71.7792 522.323 71.5279L524.122 74.2009C523.802 74.6007 523.374 74.9719 522.837 75.3146C522.311 75.6459 521.637 75.9086 520.815 76.1028C520.004 76.3084 518.987 76.4112 517.765 76.4112C516.223 76.4112 514.869 76.1085 513.704 75.5031C512.539 74.8977 511.631 74.0238 510.98 72.8815C510.329 71.7392 510.003 70.3799 510.003 68.8035C510.003 67.4327 510.294 66.199 510.877 65.1024C511.459 63.9944 512.305 63.1205 513.413 62.4808C514.532 61.8412 515.874 61.5213 517.439 61.5213C518.913 61.5213 520.187 61.8069 521.26 62.378C522.346 62.9378 523.185 63.7602 523.779 64.8454C524.373 65.9306 524.67 67.2557 524.67 68.8206C524.67 68.912 524.664 69.1005 524.653 69.3861C524.653 69.6602 524.642 69.843 524.619 69.9344H514.064ZM520.592 67.2442C520.581 66.8787 520.466 66.4846 520.249 66.062C520.044 65.6393 519.718 65.2795 519.273 64.9825C518.827 64.6855 518.233 64.537 517.491 64.537C516.748 64.537 516.137 64.6798 515.657 64.9654C515.189 65.2509 514.835 65.605 514.595 66.0277C514.355 66.4389 514.218 66.8444 514.184 67.2442H520.592Z" fill="white" />
          <path d="M372.977 149.492H384.457V150.845C384.457 152.456 384.183 153.964 383.635 155.369C383.098 156.763 382.327 157.991 381.322 159.053C380.316 160.104 379.123 160.926 377.74 161.52C376.37 162.114 374.856 162.411 373.2 162.411C371.498 162.411 369.944 162.109 368.539 161.503C367.134 160.898 365.923 160.058 364.907 158.984C363.89 157.911 363.102 156.665 362.542 155.249C361.994 153.821 361.72 152.296 361.72 150.674C361.72 149.063 361.994 147.55 362.542 146.133C363.102 144.706 363.89 143.46 364.907 142.398C365.923 141.324 367.134 140.485 368.539 139.879C369.944 139.274 371.498 138.971 373.2 138.971C374.513 138.971 375.684 139.114 376.712 139.4C377.74 139.685 378.637 140.073 379.403 140.565C380.179 141.044 380.848 141.581 381.407 142.175C381.978 142.758 382.452 143.346 382.829 143.94L378.82 145.894C378.272 145.094 377.541 144.409 376.627 143.837C375.724 143.266 374.582 142.981 373.2 142.981C372.172 142.981 371.224 143.186 370.355 143.597C369.499 143.997 368.756 144.551 368.128 145.26C367.511 145.968 367.031 146.79 366.689 147.727C366.346 148.652 366.175 149.635 366.175 150.674C366.175 151.725 366.346 152.713 366.689 153.638C367.031 154.564 367.511 155.386 368.128 156.106C368.756 156.814 369.499 157.368 370.355 157.768C371.224 158.168 372.172 158.367 373.2 158.367C374.136 158.367 374.988 158.23 375.753 157.956C376.518 157.682 377.181 157.294 377.74 156.791C378.312 156.288 378.763 155.7 379.094 155.026C379.425 154.341 379.614 153.604 379.66 152.816H372.977V149.492ZM391.654 154.666C391.654 155.923 391.906 156.928 392.408 157.682C392.911 158.425 393.722 158.796 394.841 158.796C395.972 158.796 396.789 158.425 397.292 157.682C397.794 156.928 398.045 155.923 398.045 154.666V147.933H402.329V155.163C402.329 156.614 402.038 157.888 401.455 158.984C400.873 160.07 400.022 160.915 398.902 161.52C397.794 162.114 396.44 162.411 394.841 162.411C393.253 162.411 391.9 162.114 390.78 161.52C389.672 160.915 388.827 160.07 388.244 158.984C387.662 157.888 387.371 156.614 387.371 155.163V147.933H391.654V154.666ZM406.088 162V147.933H410.423V162H406.088ZM408.315 144.3C407.596 144.3 406.984 144.049 406.482 143.546C405.991 143.043 405.745 142.444 405.745 141.747C405.745 141.05 405.996 140.445 406.499 139.931C407.002 139.417 407.607 139.16 408.315 139.16C408.784 139.16 409.212 139.28 409.6 139.519C409.989 139.748 410.303 140.056 410.543 140.445C410.783 140.833 410.902 141.267 410.902 141.747C410.902 142.444 410.645 143.043 410.131 143.546C409.629 144.049 409.023 144.3 408.315 144.3ZM420.482 162.411C419.145 162.411 417.968 162.091 416.952 161.452C415.947 160.801 415.158 159.915 414.587 158.796C414.027 157.665 413.748 156.391 413.748 154.975C413.748 153.558 414.027 152.29 414.587 151.171C415.158 150.04 415.947 149.149 416.952 148.498C417.968 147.847 419.145 147.521 420.482 147.521C421.43 147.521 422.269 147.676 423 147.984C423.743 148.292 424.337 148.658 424.782 149.081C425.228 149.503 425.491 149.88 425.57 150.211V138.423H429.94V162H425.622V159.55C425.439 159.95 425.102 160.372 424.611 160.818C424.12 161.263 423.52 161.64 422.812 161.949C422.104 162.257 421.327 162.411 420.482 162.411ZM421.715 158.95C422.446 158.95 423.103 158.784 423.686 158.453C424.268 158.11 424.725 157.642 425.056 157.048C425.399 156.443 425.57 155.752 425.57 154.975C425.57 154.198 425.399 153.513 425.056 152.919C424.725 152.313 424.268 151.839 423.686 151.497C423.103 151.154 422.446 150.982 421.715 150.982C421.041 150.982 420.424 151.154 419.865 151.497C419.305 151.828 418.854 152.296 418.511 152.902C418.18 153.496 418.014 154.187 418.014 154.975C418.014 155.763 418.18 156.46 418.511 157.065C418.854 157.659 419.305 158.122 419.865 158.453C420.424 158.784 421.041 158.95 421.715 158.95ZM436.294 155.934C436.328 156.574 436.5 157.145 436.808 157.648C437.116 158.15 437.562 158.545 438.145 158.83C438.739 159.116 439.447 159.258 440.269 159.258C441.012 159.258 441.663 159.167 442.223 158.984C442.794 158.802 443.273 158.579 443.662 158.316C444.062 158.042 444.359 157.779 444.553 157.528L446.352 160.201C446.032 160.601 445.604 160.972 445.067 161.315C444.541 161.646 443.867 161.909 443.045 162.103C442.234 162.308 441.217 162.411 439.995 162.411C438.453 162.411 437.099 162.109 435.934 161.503C434.769 160.898 433.861 160.024 433.21 158.882C432.559 157.739 432.233 156.38 432.233 154.803C432.233 153.433 432.524 152.199 433.107 151.102C433.69 149.994 434.535 149.121 435.643 148.481C436.762 147.841 438.105 147.521 439.67 147.521C441.143 147.521 442.417 147.807 443.491 148.378C444.576 148.938 445.415 149.76 446.009 150.845C446.603 151.931 446.9 153.256 446.9 154.821C446.9 154.912 446.895 155.1 446.883 155.386C446.883 155.66 446.872 155.843 446.849 155.934H436.294ZM442.822 153.244C442.811 152.879 442.697 152.485 442.48 152.062C442.274 151.639 441.948 151.279 441.503 150.982C441.057 150.685 440.463 150.537 439.721 150.537C438.978 150.537 438.367 150.68 437.888 150.965C437.419 151.251 437.065 151.605 436.825 152.028C436.585 152.439 436.448 152.844 436.414 153.244H442.822ZM454.226 162H449.856V138.423H454.226V162ZM458.161 162V147.933H462.496V162H458.161ZM460.388 144.3C459.668 144.3 459.057 144.049 458.555 143.546C458.064 143.043 457.818 142.444 457.818 141.747C457.818 141.05 458.069 140.445 458.572 139.931C459.074 139.417 459.68 139.16 460.388 139.16C460.856 139.16 461.285 139.28 461.673 139.519C462.062 139.748 462.376 140.056 462.616 140.445C462.856 140.833 462.975 141.267 462.975 141.747C462.975 142.444 462.718 143.043 462.204 143.546C461.702 144.049 461.096 144.3 460.388 144.3ZM475.433 147.521C476.393 147.521 477.329 147.721 478.243 148.121C479.157 148.509 479.905 149.132 480.488 149.989C481.082 150.845 481.379 151.965 481.379 153.347V162H477.009V154.101C477.009 152.947 476.735 152.091 476.187 151.531C475.65 150.971 474.942 150.691 474.062 150.691C473.491 150.691 472.943 150.851 472.417 151.171C471.903 151.479 471.481 151.913 471.149 152.473C470.83 153.021 470.67 153.65 470.67 154.358V162H466.317V147.933H470.67V150.177C470.795 149.789 471.081 149.389 471.526 148.978C471.972 148.567 472.537 148.224 473.223 147.95C473.908 147.664 474.645 147.521 475.433 147.521ZM487.999 155.934C488.033 156.574 488.204 157.145 488.513 157.648C488.821 158.15 489.267 158.545 489.849 158.83C490.443 159.116 491.152 159.258 491.974 159.258C492.717 159.258 493.368 159.167 493.927 158.984C494.499 158.802 494.978 158.579 495.367 158.316C495.767 158.042 496.064 157.779 496.258 157.528L498.057 160.201C497.737 160.601 497.309 160.972 496.772 161.315C496.246 161.646 495.572 161.909 494.75 162.103C493.939 162.308 492.922 162.411 491.7 162.411C490.158 162.411 488.804 162.109 487.639 161.503C486.474 160.898 485.566 160.024 484.915 158.882C484.264 157.739 483.938 156.38 483.938 154.803C483.938 153.433 484.229 152.199 484.812 151.102C485.394 149.994 486.24 149.121 487.348 148.481C488.467 147.841 489.809 147.521 491.374 147.521C492.848 147.521 494.122 147.807 495.195 148.378C496.281 148.938 497.12 149.76 497.714 150.845C498.308 151.931 498.605 153.256 498.605 154.821C498.605 154.912 498.599 155.1 498.588 155.386C498.588 155.66 498.577 155.843 498.554 155.934H487.999ZM494.527 153.244C494.516 152.879 494.401 152.485 494.184 152.062C493.979 151.639 493.653 151.279 493.208 150.982C492.762 150.685 492.168 150.537 491.426 150.537C490.683 150.537 490.072 150.68 489.592 150.965C489.124 151.251 488.77 151.605 488.53 152.028C488.29 152.439 488.153 152.844 488.119 153.244H494.527ZM507.438 147.521C508.284 147.521 509.066 147.601 509.786 147.761C510.505 147.91 511.111 148.081 511.602 148.275C512.105 148.469 512.436 148.635 512.596 148.772L511.105 151.394C510.877 151.211 510.465 150.994 509.871 150.743C509.289 150.491 508.638 150.366 507.918 150.366C507.267 150.366 506.719 150.48 506.273 150.708C505.828 150.925 505.605 151.257 505.605 151.702C505.605 152.148 505.845 152.502 506.325 152.764C506.804 153.027 507.473 153.256 508.329 153.45C509.049 153.598 509.757 153.827 510.454 154.135C511.151 154.432 511.728 154.866 512.185 155.437C512.641 155.997 512.87 156.745 512.87 157.682C512.87 158.607 512.67 159.378 512.27 159.995C511.882 160.601 511.362 161.08 510.711 161.435C510.06 161.789 509.346 162.04 508.569 162.188C507.792 162.337 507.021 162.411 506.256 162.411C505.262 162.411 504.388 162.314 503.634 162.12C502.88 161.937 502.258 161.726 501.767 161.486C501.287 161.235 500.944 161.023 500.739 160.852L502.229 157.939C502.526 158.202 503.012 158.493 503.686 158.813C504.371 159.121 505.108 159.276 505.896 159.276C506.719 159.276 507.364 159.133 507.832 158.847C508.312 158.562 508.552 158.179 508.552 157.699C508.552 157.345 508.438 157.06 508.209 156.843C507.981 156.614 507.667 156.426 507.267 156.277C506.867 156.129 506.399 155.997 505.862 155.883C505.371 155.78 504.868 155.632 504.354 155.437C503.84 155.232 503.36 154.963 502.915 154.632C502.469 154.301 502.109 153.89 501.835 153.398C501.561 152.896 501.424 152.296 501.424 151.599C501.424 150.708 501.71 149.966 502.281 149.372C502.852 148.766 503.594 148.309 504.508 148.001C505.422 147.681 506.399 147.521 507.438 147.521Z" fill="white" />
          <rect x="317" y="127" width="44" height="46" fill="url(#pattern1_91_31)" />
          <defs>
            <filter id="filter0_d_91_31" x="0" y="0" width="604" height="237" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_91_31" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_91_31" result="shape" />
            </filter>
            <pattern id="pattern0_91_31" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_91_31" transform="matrix(0.0094697 0 0 0.01 0.0265152 0)" />
            </pattern>
            <pattern id="pattern1_91_31" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image1_91_31" transform="matrix(0.01 0 0 0.00956522 0 0.0217391)" />
            </pattern>
            <image id="image0_91_31" width="100" height="100" xlinkHref="data:image/png;base64,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" />
            <image id="image1_91_31" width="100" height="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBklEQVR4nO3dzU5TQRQH8JvoE/jxCm78iis/noEYIREF9RFECiYkJCBEjD6EtqAbLRAsocUVTdB2zjTEDS5o5CORzoFETXQPuWYKJSyQlvb2njO355+cPef8Op25QO54nkQikUgkEolEIpFIJBKJRNLCyfrZ07lS4Vbe6AeAEFNGD0ShACFme9IlfdP26HEPbMJVZfQEoP4NqP0ol0L4ZXtVm+qKxy1LZumcMvqtMrBLPSgIG8bArjIwrkv6rMchha3CJWX0OvVggB5mzc6CA8Zf6mEAk1IG/ugtfZEEwy5RMLBKPQTgVkZvLOLX86GDgIF35M0jz7J7SqgY9mTRihs41A6ymysVroUHsne0JW8cOJeBRCgY9oHInsHJG0beZWcUysOjfQKnbhZcqW240XSQvV+HMGgWHSgDXU0HAYSn5I2iG6VQ9zcdRBk9Qt0oOFJ2VgKC9BACgvTDFxCkH7iAIP2QBQTpBppey/jTxRkBAQaf7vR6xr8/99DvSHX6H4qTskKAFGO+jNE2c6dc9aLIsReDx2gERUCwORiHUZIrtaMICDYPox4UAcH6N/CudHWMSg0sDgoIhLSBV6sn2T7/SykvIOAYhnxlIS8MAUFeGAKCvDAEBKsPKLP+KTQMAcHqGF1zj0LDEBDkhSEgyAtDQJAXhpMgr5fj/hi8ZLGB92b7/ZzJBfozOAWSWB73b3/sKA/juXph//XSJ1sZC8GuDOdA4ssTBxiVepYfDQSFC4YzIEdhVGo41xgKJwwnQI7DaBQlwwyDPUj8W6IqRtt+jaqxE6FQn6acBLF/j26fvVvz0IZzIzWhcFwZToDYShanAkXJMMZwAiRIlMwJMXoWYqFiOAMSBMr8Bn8Mp0DqQRnaR7EY3Wn+GM6B2Hq/kvTbU7WjDH4eOhFG2HuG8yD1rJS2E62MYH831RIgtiaL04Gi9DDAcBokSJQeJhjOg1RQOmY7I4ERCRBoAIUbRmRAoA4UjhiRAgHU/lSNKI8XelliRA4EakDhjBFJEDgGhTtGZEHgCBQXMCINAodQXMGIPAig9lOrKWcwWgIEHCsBQXoEAUH6wQsI0g+bDwjqfupGwZFSqPuaDqKN7qZuFBwpVSrcazqIvCZW83pNbNJPnlIIP6k/fcC8QnuRso192Tx1w8C/4l5YyW/nL4PROwya9lmW0TuhX+4iq0T/F0ShfuOFnfyP/BlA/Z3804i8yl7/ZO/k8ihir/ex1/xQDwGYFOmVRwcoJX1BIaxQDwOoy8AqOcbh+6jsntKSt+6Y8uEmbr/CPW7ZO31BohUufFH2WcxAgvyqvFofHu1Tqr0/w15XCgivIlIx25PaUtdtj9RzlkgkEolEIpFIJBKJRCKRSDzC/APZejDG1uLOGwAAAABJRU5ErkJggg==" />
          </defs>
        </svg>

      </div>

    </div>

  );
}

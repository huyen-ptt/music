<template>
  <div class="container-music">
    <div class="header">
      <router-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
              d="M12.005 15.4C11.785 15.4 11.585 15.32 11.425 15.16L6.42501 9.96C6.12501 9.64 6.125 9.14 6.445 8.82C6.765 8.52 7.26502 8.52001 7.58502 8.84001L12.005 13.44L16.425 8.84001C16.725 8.52001 17.245 8.52 17.565 8.82C17.885 9.12 17.885 9.64 17.585 9.96L12.585 15.16C12.425 15.32 12.225 15.4 12.005 15.4Z"
              fill="white"/>
        </svg>
      </router-link>
      <div class="title">Now Playing</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
        <g clip-path="url(#clip0_1_311)">
          <path
              d="M2.875 15.3333H4.79167V21.0833C4.79167 21.6126 4.36261 22.0417 3.83333 22.0417C3.30406 22.0417 2.875 21.6126 2.875 21.0833V15.3333Z"
              fill="white"/>
          <path
              d="M10.5417 12.4583H12.4583V21.0833C12.4583 21.6126 12.0293 22.0417 11.5 22.0417C10.9707 22.0417 10.5417 21.6126 10.5417 21.0833V12.4583Z"
              fill="white"/>
          <path
              d="M2.875 1.91666C2.875 1.38739 3.30406 0.958328 3.83333 0.958328C4.36261 0.958328 4.79167 1.38739 4.79167 1.91666V10.5417H2.875V1.91666Z"
              fill="white"/>
          <path
              d="M18.2083 15.3333H20.125V21.0833C20.125 21.6126 19.6959 22.0417 19.1667 22.0417C18.6374 22.0417 18.2083 21.6126 18.2083 21.0833V15.3333Z"
              fill="white"/>
          <path
              d="M18.2083 1.91666C18.2083 1.38739 18.6374 0.958328 19.1667 0.958328C19.6959 0.958328 20.125 1.38739 20.125 1.91666V10.5417H18.2083V1.91666Z"
              fill="white"/>
          <path
              d="M10.5417 1.91666C10.5417 1.38739 10.9707 0.958328 11.5 0.958328C12.0293 0.958328 12.4583 1.38739 12.4583 1.91666V7.66666H10.5417V1.91666Z"
              fill="white"/>
          <rect x="15.3333" y="12.4583" width="7.66667" height="4.79167" rx="2" fill="white"/>
          <rect x="7.66666" y="5.75" width="7.66667" height="4.79167" rx="2" fill="white"/>
          <rect y="12.4583" width="7.66667" height="4.79167" rx="2" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_1_311">
            <rect width="23" height="23" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="song">
      <img class="img-playing" src="/song-5.png"/>
      <div class="name-song">Remedy</div>
      <div class="tac-gia">Annie Schindel</div>
      <div class="thanh-nhac">
        <form>
          <input type="range" id="vol" name="vol" min="0" max="50">
        </form>
        <div class="time-chay">
          <div>00:00</div>
          <div>04:20</div>
        </div>
      </div>
      <div class="tuong-tac">
        <div class="not-nhac">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <g opacity="0.4" filter="url(#filter0_b_1_78)">
              <circle cx="25" cy="25" r="25" fill="white" fill-opacity="0.18"/>
            </g>
            <defs>
              <filter id="filter0_b_1_78" x="-8" y="-8" width="66" height="66" filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_78"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_78" result="shape"/>
              </filter>
            </defs>
          </svg>
          <svg class="not" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
                d="M18.0417 1.86668C17.9509 1.78873 17.8443 1.73126 17.7292 1.69818C17.6142 1.66511 17.4934 1.65721 17.375 1.67501L6.54169 3.34168C6.3444 3.37161 6.16441 3.47134 6.03442 3.62273C5.90444 3.77413 5.83309 3.96714 5.83335 4.16668V12.7917C5.44399 12.6015 5.01668 12.5018 4.58335 12.5C4.00649 12.5 3.44259 12.6711 2.96294 12.9916C2.4833 13.312 2.10946 13.7676 1.88871 14.3005C1.66795 14.8335 1.61019 15.4199 1.72273 15.9857C1.83527 16.5515 2.11306 17.0712 2.52096 17.4791C2.92886 17.887 3.44856 18.1648 4.01434 18.2773C4.58012 18.3898 5.16656 18.3321 5.69951 18.1113C6.23247 17.8906 6.68799 17.5167 7.00847 17.0371C7.32896 16.5575 7.50002 15.9935 7.50002 15.4167V9.05001L16.6667 7.64168V11.125C16.2773 10.9348 15.85 10.8351 15.4167 10.8333C14.8398 10.8333 14.2759 11.0044 13.7963 11.3249C13.3166 11.6454 12.9428 12.1009 12.722 12.6339C12.5013 13.1668 12.4435 13.7532 12.5561 14.319C12.6686 14.8848 12.9464 15.4045 13.3543 15.8124C13.7622 16.2203 14.2819 16.4981 14.8477 16.6106C15.4135 16.7232 15.9999 16.6654 16.5328 16.4447C17.0658 16.2239 17.5213 15.8501 17.8418 15.3704C18.1623 14.8908 18.3334 14.3269 18.3334 13.75V2.50001C18.3334 2.37965 18.3073 2.26071 18.2569 2.15138C18.2066 2.04204 18.1332 1.94492 18.0417 1.86668ZM4.58335 16.6667C4.33613 16.6667 4.09445 16.5934 3.88889 16.456C3.68333 16.3187 3.52312 16.1234 3.42851 15.895C3.3339 15.6666 3.30914 15.4153 3.35737 15.1728C3.4056 14.9303 3.52466 14.7076 3.69947 14.5328C3.87429 14.358 4.09702 14.2389 4.33949 14.1907C4.58197 14.1425 4.8333 14.1672 5.06171 14.2618C5.29012 14.3564 5.48534 14.5167 5.62269 14.7222C5.76004 14.9278 5.83335 15.1695 5.83335 15.4167C5.83335 15.7482 5.70166 16.0661 5.46724 16.3006C5.23282 16.535 4.91488 16.6667 4.58335 16.6667ZM15.4167 15C15.1695 15 14.9278 14.9267 14.7222 14.7894C14.5167 14.652 14.3564 14.4568 14.2618 14.2284C14.1672 14 14.1425 13.7486 14.1907 13.5062C14.2389 13.2637 14.358 13.0409 14.5328 12.8661C14.7076 12.6913 14.9303 12.5723 15.1728 12.524C15.4153 12.4758 15.6666 12.5006 15.895 12.5952C16.1234 12.6898 16.3187 12.85 16.456 13.0556C16.5934 13.2611 16.6667 13.5028 16.6667 13.75C16.6667 14.0815 16.535 14.3995 16.3006 14.6339C16.0662 14.8683 15.7482 15 15.4167 15ZM16.6667 5.95001L7.50002 7.35835V4.85835L16.6667 3.47501V5.95001Z"
                fill="#828282"/>
          </svg>
        </div>
        <div class="not-nhac">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <g opacity="0.4" filter="url(#filter0_b_1_78)">
              <circle cx="25" cy="25" r="25" fill="white" fill-opacity="0.18"/>
            </g>
            <defs>
              <filter id="filter0_b_1_78" x="-8" y="-8" width="66" height="66" filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_78"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_78" result="shape"/>
              </filter>
            </defs>
          </svg>
          <svg class="not" xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
            <path
                d="M14.4951 0.0300538C16.0232 0.144284 17.4595 0.803141 18.5429 1.88681C19.1374 2.48097 19.609 3.18646 19.9308 3.96297C20.2526 4.73947 20.4182 5.57178 20.4182 6.41232C20.4182 7.25286 20.2526 8.08517 19.9308 8.86167C19.609 9.63818 19.1374 10.3437 18.5429 10.9378L10.9408 18.5399C10.846 18.6355 10.7331 18.7114 10.6087 18.7632C10.4844 18.815 10.351 18.8417 10.2163 18.8417C10.0816 18.8417 9.94824 18.815 9.8239 18.7632C9.69955 18.7114 9.58669 18.6355 9.49183 18.5399L1.88979 10.9378C0.741645 9.7977 0.068137 8.26488 0.00489327 6.64805C-0.0583504 5.03122 0.493368 3.45047 1.54895 2.22414C2.60453 0.997805 4.08555 0.216975 5.69379 0.0388868C7.30203 -0.139201 8.91801 0.298683 10.2163 1.26436C11.4488 0.35381 12.9671 -0.0841759 14.4951 0.0300538Z"
                fill="#EB5757"/>
          </svg>
        </div>
      </div>
      <div class="next-song">
        <div class="next">
          <div class="up-next">UP NEXT</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path
                d="M20.1873 5.55833C20.1873 6.19083 19.6698 6.70833 19.0373 6.70833H8.47644C7.84394 6.70833 7.32644 6.19083 7.32644 5.55833C7.32644 4.92583 7.84394 4.40833 8.47644 4.40833H19.0373C19.6698 4.40833 20.1873 4.92583 20.1873 5.55833ZM8.45727 12.65H14.4564C15.0889 12.65 15.6064 12.1325 15.6064 11.5C15.6064 10.8675 15.0889 10.35 14.4564 10.35H8.45727C7.82477 10.35 7.30727 10.8675 7.30727 11.5C7.30727 12.1325 7.82477 12.65 8.45727 12.65ZM16.9289 16.2917H8.45727C7.82477 16.2917 7.30727 16.8092 7.30727 17.4417C7.30727 18.0742 7.82477 18.5917 8.45727 18.5917H16.9289C17.5614 18.5917 18.0789 18.0742 18.0789 17.4417C18.0789 16.8092 17.5806 16.2917 16.9289 16.2917ZM3.99144 4.3125C3.6656 4.3125 3.33977 4.44665 3.10977 4.67665C2.87977 4.90665 2.7456 5.2325 2.7456 5.55833C2.7456 5.88417 2.87977 6.21002 3.10977 6.44002C3.33977 6.67002 3.6656 6.80417 3.99144 6.80417C4.31727 6.80417 4.64311 6.67002 4.87311 6.44002C5.10311 6.21002 5.23727 5.88417 5.23727 5.55833C5.23727 5.2325 5.10311 4.90665 4.87311 4.67665C4.64311 4.44665 4.31727 4.3125 3.99144 4.3125ZM3.99144 10.2542C3.6656 10.2542 3.33977 10.3883 3.10977 10.6183C2.87977 10.8483 2.7456 11.1742 2.7456 11.5C2.7456 11.8258 2.87977 12.1517 3.10977 12.3817C3.33977 12.6117 3.6656 12.7458 3.99144 12.7458C4.31727 12.7458 4.64311 12.6117 4.87311 12.3817C5.10311 12.1517 5.23727 11.8258 5.23727 11.5C5.23727 11.1742 5.10311 10.8483 4.87311 10.6183C4.64311 10.3883 4.31727 10.2542 3.99144 10.2542ZM3.99144 16.1958C3.6656 16.1958 3.33977 16.33 3.10977 16.56C2.87977 16.79 2.7456 17.1158 2.7456 17.4417C2.7456 17.7675 2.87977 18.0934 3.10977 18.3234C3.33977 18.5534 3.6656 18.6875 3.99144 18.6875C4.31727 18.6875 4.64311 18.5534 4.87311 18.3234C5.10311 18.0934 5.23727 17.7675 5.23727 17.4417C5.23727 17.1158 5.10311 16.79 4.87311 16.56C4.64311 16.33 4.31727 16.1958 3.99144 16.1958Z"
                fill="#DDDDDD"/>
          </svg>
        </div>
        <div class="goi-y">
          <div>Im fine</div>
          <div>Ashe</div>
          <div>2:16</div>
        </div>
        <div class="goi-y">
          <div>Dannle</div>
          <div>Hnna</div>
          <div>3:20</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16 18C14.4229 18 12.9465 17.3826 11.8511 16.3346" stroke="#A8A8A8" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.15475 8.05196C5.78876 6.76008 3.95637 6 2 6" stroke="#A8A8A8" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M22.6432 19.0439C23.2699 18.6522 23.2699 17.7396 22.6432 17.3479L17.53 14.1521C16.864 13.7359 16 14.2147 16 15.0001V21.3916C16 22.1771 16.864 22.6559 17.53 22.2396L22.6432 19.0439Z"
            fill="#A8A8A8"/>
        <path d="M16 6V6C13.5778 6 11.3932 7.45643 10.4615 9.69231L8.92308 13.3846C7.75856 16.1795 5.02776 18 2 18V18"
              stroke="#A8A8A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M21.6432 7.04388C22.2699 6.65222 22.2699 5.73956 21.6432 5.34789L16.53 2.15214C15.864 1.73586 15 2.2147 15 3.00013V9.39164C15 10.1771 15.864 10.6559 16.53 10.2396L21.6432 7.04388Z"
            fill="#A8A8A8"/>
      </svg>
      <div class="song-next">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div class="pause">
        <img class="mo" src="/pause1.png"/>
      </div>
      <div class="song-next">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M21.6432 6.04388C22.2699 5.65222 22.2699 4.73956 21.6432 4.34789L16.53 1.15214C15.864 0.735855 15 1.2147 15 2.00013V8.39164C15 9.17707 15.864 9.65592 16.53 9.23964L21.6432 6.04388Z"
            fill="#A8A8A8"/>
        <path
            d="M2.47014 19.0439C1.84347 18.6522 1.84347 17.7396 2.47014 17.3479L7.58334 14.1521C8.24939 13.7359 9.11334 14.2147 9.11334 15.0001V21.3916C9.11334 22.1771 8.24939 22.6559 7.58334 22.2396L2.47014 19.0439Z"
            fill="#A8A8A8"/>
        <path d="M4 11V11C4 7.68629 6.68629 5 10 5V5H15" stroke="#A8A8A8" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M19 12V12C19 15.3137 16.3137 18 13 18V18H8" stroke="#A8A8A8" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>

    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.container-music {
  max-width: 768px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: black;
  backdrop-filter: blur(35px);
  //border-radius: 40px;
  padding: 29px 32px;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 22px;

    .title {
      color: #F0F0F0;
      font-size: 18px;
      font-weight: 700;
    }
  }

  .song {
    padding-bottom: 52px;

    .img-playing {
      width: 100%;
      object-fit: cover;
    }

    .name-song {
      color: #E5E5E5;
      font-size: 26px;
      font-weight: 700;
      letter-spacing: 0.13px;
      padding-bottom: 4px;
    }

    .tac-gia {
      color: #BCBCBC;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.08px;
      padding-bottom: 21px;
    }

    #vol {
      width: 100%;
      margin-bottom: 9px;
    }

    .time-chay {
      display: flex;
      justify-content: space-between;
      color: #FFF;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.07px;
    }

    .tuong-tac {
      display: flex;
      justify-content: space-between;
      padding-bottom: 22px;

      .not-nhac {
        position: relative;
        margin-top: 14px;

        .not {
          position: absolute;
          top: 15px;
          left: 15px;
        }
      }
    }

    .next-song {
      border-radius: 30px;
      opacity: 0.6;
      background: rgba(150, 150, 150, 0.12);
      backdrop-filter: blur(32.5px);
      padding: 15px 21px;
      margin: 0 13px;
    }

    .next-song {
      .next {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 14px;
        color: #F2F2F2;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.06px;

      }


      .goi-y {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 6px;
        color: #F2F2F2;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.08px;
      }
    }

  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .song-next {
      border-radius: 999px;
      background: rgba(150, 150, 150, 0.12);
      padding: 21px;
      position: relative;

      .fa-solid {
        position: absolute;
        top: 12px;
        left: 12px;
        color: #E5E5E5;
      }
    }

    .pause {
      width: 70px;
      height: 70px;
      background: #F0F0F0;
      border-radius: 999px;
      position: relative;

      .mo {
        position: absolute;
        top: 21px;
        left: 21px;
        width: 30px;
      }
    }
  }

}
@media (max-width:586px) {
  .container-music{
    .footer{
      .pause{
        width: 60px;
        height: 60px;
        .mo{
          top: 17px;
          left: 17px;
          width: 27px;

        }
      }
    }
  }


}
</style>
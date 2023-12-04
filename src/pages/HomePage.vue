<template>
  <div class="container">
    <div class="header">
      <div class="form-page">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="43" viewBox="0 0 55 43" fill="none">
            <path d="M3 11H52" stroke="white" stroke-width="5.5" stroke-linecap="round"/>
            <path d="M3 33H52" stroke="white" stroke-width="5.5" stroke-linecap="round"/>
            <circle cx="36" cy="10" r="7.5" fill="black" stroke="white" stroke-width="5"/>
            <circle cx="19" cy="33" r="7.5" fill="black" stroke="white" stroke-width="5"/>
          </svg>
        </div>
        <input type="text"/>
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
          <circle cx="22.5" cy="22.5" r="20" stroke="#919191" stroke-width="5"/>
        </svg>
      </div>
      <div class="loc">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
            <circle cx="30.5" cy="30.5" r="30.5" fill="#A6A6A6"/>
          </svg>
          <div>Recent</div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="61" height="52" viewBox="0 0 61 52" fill="none">
            <path d="M30.1789 6.45916L30.1789 51.9669C-20.3212 29.4669 1.67883 -17.0406 30.1789 6.45916Z"
                  fill="#A6A6A6"/>
            <path
                d="M30.1789 6.53728C1.67882 30.0371 30.1789 51.949 30.1789 51.949C80.6789 29.4491 58.6789 -16.9625 30.1789 6.53728Z"
                fill="#A6A6A6"/>
          </svg>
          <div>Favorites</div>
        </div>
        <div>
          <img src="/logo_1.png"/>
          <div>Playlists</div>
        </div>

      </div>
    </div>
    <div class="content">
      <div>
        <button>
          <div>Shuffle playback</div>
          <img src="/logo-2.png"/>
        </button>
        <div>
          <img src="/sound-waves.png"/>
          <img src="/sound-waves.png"/>
          <img src="/sound-waves.png"/>
        </div>
      </div>
      <div class="list-song">
        <div>song</div>
        <div class="wrapper-list-song">
          <div class="item-song">
            <div>
              <img src="/song-1.png"/>
              <div>
                <div class="name-author">
                  dssd
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="33" viewBox="0 0 27 33" fill="none">
                    <rect x="1" y="1" width="25" height="31" rx="5" stroke="#5B5B5D" stroke-width="2"/>
                    <rect x="8" y="24" width="10" height="2" rx="1" fill="#5B5B5D"/>
                  </svg>
                  <div>Fadaei</div>
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="29" viewBox="0 0 5 29" fill="none">
              <rect width="5" height="5" fill="#646464"/>
              <rect y="12" width="5" height="5" fill="#646464"/>
              <rect y="24" width="5" height="5" fill="#646464"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="img-song">
        <img src="/image-2.png"/>
        <img src="/img-song.png"/>
      </div>
      <div>song song</div>
      <div>hanna</div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.container {
  width: 100%;
  max-width: 1024px;
  background: #1B1B1B;
  height: 100%;
  margin: 0 auto;
}
</style>
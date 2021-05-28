<template>
  <div>
    <div id="bg"></div>
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id="blob1">
      <path
        fill="#FCFCFC"
        d="M35.3,-53.2C49.7,-52.8,68,-51.4,72.8,-42.3C77.6,-33.3,68.8,-16.6,65.8,-1.8C62.7,13.1,65.4,26.2,63.6,40.4C61.8,54.6,55.4,69.8,44.1,79.6C32.7,89.4,16.4,93.7,3,88.5C-10.4,83.4,-20.8,68.7,-30.5,58C-40.2,47.2,-49.2,40.4,-54.3,31.4C-59.3,22.4,-60.6,11.2,-62.2,-0.9C-63.8,-13.1,-65.8,-26.1,-60.6,-34.9C-55.4,-43.8,-43,-48.3,-31.7,-50.5C-20.4,-52.7,-10.2,-52.6,0.1,-52.8C10.4,-53,20.9,-53.6,35.3,-53.2Z"
        transform="translate(100 100)"
      />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style>
#bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
  opacity: 1;
  z-index: -1;
}

#blob1 {
 position: absolute;
  width: 130%;
  height: 230%;
  top: -90%;
  left: -90%;
  z-index: 0;
}
</style>
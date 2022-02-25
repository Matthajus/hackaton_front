<template>
  <div id="main">
    <div id="box1"></div>

    <div id="box2">
      <div id="text">
        ToDo<br>Application
        <div class="text">Simplifies Your Everyday Life</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {

  },
};
</script>

<style scoped>
#main {
  width: 85%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}

#box1 {
  width: 530px;
  height: 625px;
  position: absolute;
  bottom: -100%;
  left: 70%;
  animation: anim 2s forwards, anim2 3s forwards;
}

#box1:after {
  content: '';
  position: absolute;
  width: 530px;
  height: 625px;
  background-image: url("./../assets/tiger2.png");
  background-size: cover;
  left: 40%;
  z-index: -1;
}

@keyframes anim {
  from {
    bottom: -100%;
  }
  to {
    bottom: 0%;
  }
}

@keyframes anim2 {
  from {
    left: 30%;
    width: 530px;
  }
  to {
    width: 0%;
    left: 40%;
  }
}

#box2 {
  width: auto;
  height: auto;
  color: var(--sidebar-bg-color);
  font-size: 5em;
  font-weight: 500;
  line-height: 80px;
  position: absolute;
  top: 200px;
  left: 50px;
  overflow: hidden;
}

#text {
  position: relative;
  left: -100%;
  animation: anim3 2s forwards 3s;
}

@keyframes anim3 {
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
}

.text {
  font-size: 0.5em;
  color: darkgray;
}
</style>

<template>
  <SideBar />
  <div :style="{ 'margin-left': sideBarWidth }">
    <router-view />
  </div>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar";
import { sideBarWidth } from "@/components/sidebar/state";

export default {
  components: {
    SideBar
  },
  setup() {
    return { sideBarWidth }
  }
}
</script>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

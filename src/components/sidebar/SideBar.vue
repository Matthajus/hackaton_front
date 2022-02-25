<template>
  <div class="sidebar" :style="{ width: sideBarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>T</div>
        <div>D</div>
      </span>
      <span v-else>ToDo</span>
    </h1>

    <div class="menu">
      <SideBarLink to="/" icon="fas fa-home">Home</SideBarLink>
      <SideBarLink to="/about" icon="fas fa-a">About</SideBarLink>
    </div>

    <span class="collapse-icon"
          :class="{ 'rotate-180': collapsed }"
          @click="toggleSideBar">
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script>
import SideBarLink from "@/components/sidebar/SideBarLink";
import { collapsed, toggleSideBar, sideBarWidth } from "@/components/sidebar/state";

export default {
  name: "SideBar",
  props: {},
  components: { SideBarLink },
  setup() {
    return { collapsed, toggleSideBar, sideBarWidth }
  },
};
</script>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

.menu {
  margin-top: 100px;
}
</style>
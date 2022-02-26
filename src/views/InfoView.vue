<template>
  <section>
    <div class="container" >
      <h1>Matúš Paľo</h1>
      <h2>Bootcamp Developer</h2>
      <div class="image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSbAWLpZrEdTBZxqXsUHje9U234KyUmUOLQ&usqp=CAU" alt="emoji" />
      </div>
      <p>
        Toto bola moja prvá reálna skúsenosť s Vue js. Aj napriek niekoľkým nezrovnalostiam som
        sa popasoval s problémami a na koniec vznikla celkom pekná ToDo Aplikácia na ktorú som hrdý.
        Myslím si, že by sa dala vzužívať aj v praxi. Každému kto by sa ju rozhodol používať patrí moja veľká poklona.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "InfoView"
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  background-color: white;
  overflow: hidden;
  padding: 100px 20px;
  box-sizing: border-box;
}

section::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--sidebar-item-hover);
  clip-path: circle(65% at 100% -20%);
}

section::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--sidebar-bg-color);
  clip-path: circle(35% at 0% 100%);
}

.container {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 8px;
  margin-bottom: 2rem;
}

h2 {
  font-size: 2rem;
  font-weight: 400;
}

.image {
  position: relative;
  margin: 24px 0;
  border-radius: 50%;
  overflow: hidden;
}

p {
  width: 80%;
  font-size: 1rem;
  color: black;
  line-height: 2rem;
  margin-bottom: 5rem;
}
</style>
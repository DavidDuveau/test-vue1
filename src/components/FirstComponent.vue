<template>
  <div>
    <h1>Test !</h1>
    <p>Hello {{ store.state.message }}</p>

    <h2>Compteur</h2>
    <p>{{ store.state.count }}</p>
    <button @click="this.$store.dispatch('increment')">+1</button>
    <button @click="this.$store.dispatch('decrement')">-1</button>

    <h2>Timer</h2>
    <p
      :class="
        store.state.time % 2 !== 0
          ? { colored: (isColored = false) }
          : { colored: (isColored = true) }
      "
    >
      {{ store.state.time }} s
    </p>
    <button @click="this.$store.dispatch('timer'), seen = false" v-if="seen">
      Start timer
    </button>
    <button @click="this.$store.dispatch('stopTimer'), seen = !seen">
      Stop timer
    </button>

    <h2>Input</h2>
    <p
      id="parag"
      :class="
        store.state.text.length < 5
          ? { colored: (isColored = false) }
          : { colored: (isColored = true) }
      "
    >
      {{ store.state.text }}
    </p>
    <input type="text" v-model="store.state.text" />

    <div>
      <span v-for="(second, index) in store.state.seconds" v-bind:key="index">
        {{ second }}
      </span>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      store: store,
      isColored: false,
      seen: true,
    };
  },

  computed: {},
};
</script>

<style>
button {
  display: block;
  width: 50px;
  margin: 10px auto;
}

.colored {
  color: #42b983;
}

ul {
  list-style-type: none;
}
</style>
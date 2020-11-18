<template>
  <div>
    <table>
      <thead>
        <th>nb Clicks</th>
        <th>Valeur count</th>
      </thead>
      <tbody>
        <tr v-for="(click, index) in store.state.clicks" v-bind:key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ click }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      store: store,
    };
  },
};
</script>

<style>
table {
  margin: 50px auto;
}

th {
  padding: 0 10px;
}
</style>

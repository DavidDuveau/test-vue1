<template>
  <div>
    <h1>test API</h1>
    <div>
      <span v-for="(amiibo, index) in info" :key="index">
        <a href=""><img :src="amiibo.image" alt="Amiibo"/></a>
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
    };
  },

  mounted() {
    axios
      .get("https://www.amiiboapi.com/api/amiibo/")
      .then((res) => (this.info = res.data.amiibo));
  },
};
</script>

<style>
img {
  height: 120px;
  margin: 10px;
}
</style>
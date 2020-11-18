<template>
  <div class="home">
    <FirstComponent/>
    <!-- <Graph/> -->
    <SecondComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue';
import SecondComponent from '@/components/SecondComponent.vue';
// import Graph from '@/components/Graph.vue';

export default {
  name: 'Home',
  components: {
    FirstComponent,
    SecondComponent,
    // Graph
  }
}
</script>

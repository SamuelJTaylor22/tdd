<template>
  <main class="home container">
    <div class="row">
      <div class="col">
        <h1>Christmas Draft</h1>
      </div>
      <div class="col">
        <trainer v-for="trainer in trainers" :key="trainer.name" trainerData/>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import Trainer from '@/components/Trainer.vue'

export default {
  name: 'Home',
  computed:{
    trainers(){
      return this.$store.state.trainers
    },

  },
  components: {
    Trainer
  }
}
</script>

<template>
  <main class="home container">
    <div class="row">
      <div class="col-12">
        <h1>Christmas Draft</h1>
      </div>
      <div v-if="!drafting" class="col-12 d-flex justify-content-center">
        <form @submit.prevent="addTrainer" class="form-inline">
          <div class="form-group">
            <label for=""></label>
            <input v-model="newTrainer.name" type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
            <button type="submit" class="btn btn-primary">Add Trainer</button>
          </div>
        </form>
      </div>
      <div class="col-12">
      <div class="card-columns">
        <trainer class="card" v-for="trainer in trainers" :key="trainer.name" :trainerData="trainer"/>
      </div>
      </div>
      <div class="col-12 mt-3">
        <button v-if="!drafting" type="button" class="btn btn-primary" @click="drafting = true">Start!</button>
        <button v-if="drafting" type="button" class="btn btn-primary" @click="nextDraft">Next</button>
        <button v-if="drafting" type="button" class="btn btn-danger" @click="undo">Undo</button>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import Trainer from '@/components/Trainer.vue'

export default {
  name: 'Home',
  data(){
    return{
      newTrainer:{
        name: ""
      },
      drafting: false
    }
  },
  computed:{
    trainers(){
      return this.$store.state.trainers
    },
  },
  methods:{
    addTrainer(){
      let trainer = this.newTrainer.name
      this.$store.dispatch('newTrainer', {name:trainer, drafting:[]})
      this.newTrainer.name = ""
      
    },
    nextDraft(){
      let trainersCopy = this.trainers
      let lastTrainer = this.trainers[this.trainers.length - 1]
      for (let index = 0; index < this.trainers.length; index++) {
        const element = this.trainers[index];
        let options = trainersCopy.filter(t => t.name != element.name)
        let chosen = this.getRandom(options)
        trainersCopy = trainersCopy.filter(t => t.name != chosen.name)
        element.drafting.push(chosen.name)
        
      }
      if(this.trainers[0].drafting.length != lastTrainer.drafting.length){
        this.undo()
        this.nextDraft()
      }
    },
    undo(){
      let lastTrainer = this.trainers[this.trainers.length - 1]

      this.$store.dispatch('undoLast', lastTrainer.drafting.length)
    },
    getRandom(arr){
      let random = Math.floor((Math.random()*arr.length))
      return arr[random]
    }
  },
  components: {
      Trainer
  },
}
</script>

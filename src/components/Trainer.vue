<template>
  <div>
    <div class="card-body">
      <h4 class="card-title">{{trainerData.name}}</h4>
      <ol>
        <li class="card-text" v-for="trainer in trainerData.drafting" :key="trainer">{{trainer}}</li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
name:"trainer",
props:["trainerData"]
}
</script>

<style>

</style>

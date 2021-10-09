<template>
  <div class="home">
    <div v-for="time in campeonatoBR" :key="time.index" slot="margin:20px">
      <CardTime :time="time" />
    </div>
  </div>
</template>

<script>

import CardTime from '@/components/CardTime.vue'

export default {
  name: 'Início',
  components: {
    CardTime
  },
  data(){
    return{
      campeonatoBR: [{
        titulo: "Time Participante",
        nome: "Corinthians",
        local: "Itaquera",
        },
        {
        titulo: "Time Participante",
        nome: "Palmeiras",
        local: "Allians",  
        },
        {
        titulo: "Time Participante",
        nome: "Atletico Mineiro",
        local: "Mineirão",  
        },
        {
        titulo: "Time Participante",
        nome: "Internacional",
        local: "Beira Rio",  
        },
        {
        titulo: "Time Participante",
        nome: "São Paulo",
        local: "Morumbi",  
        },]
    }
  }
}
</script>

<style>
.home{
  display: flex;
  flex-wrap: wrap ;
}
</style>


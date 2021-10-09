<template>
    <div class="card-time">
      <h3>{{ time.titulo }}</h3>
      <img alt="Vue logo" class="image-brasao" :src="timeFoto">
      <div class="descricao">
        <span> {{ time.nome }}</span>
        <span>Local: {{ time.local }} </span>
        <span v-if="taRebaixado">Situação: Rebaixado</span>
        <span v-else>Situação: Ainda esta vivo no campeonato</span>
        <div class="btn-group" >
        <b-button v-show="!rebaixado" variant="danger" @click="rebaixar">Rebaixar Time</b-button>
        <b-button v-show="rebaixado" variant="success" @click="subirTime">Subir Time</b-button>
        </div>
      </div>
   </div>
</template>

<script>
import logo from '@/assets/brasileirao-2021.png'
export default {
  name:"CardTime",
  data(){
    return{
      timeFoto:logo,
      //nome:"Corinthians Paulista",
      //local: "Itaquera",
      //rebaixado: false
      //situacao: "rebaixadoo",
      rebaixado: false
    }
  },
  computed:{
    taRebaixado(){
      if(this.rebaixado){
        return true
      }
      return false
    }
  },
  methods:{
    rebaixar(){
      this.rebaixado = true
    },
    subirTime(){
      this.rebaixado = false
    }
  },
  props:{
        time: Object
  }
}
</script> 

<style scooped>
 .image-brasao {
   widows: 100px;
   height: 100px;
   margin:30px
  }
  .descricao{
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
  }
  .card-time{
      background: rgb(201, 182, 182);
      width: 400px;
      margin: 16px;
  }
  .btn-group{
    display: flex;
    flex-direction: column;
  }
</style>
<template>
<div>
    <h1>{{ titulo }}</h1>
    <span>{{ subTitle }}</span>
     <Card />
     <b-button variant="succes" @click="exibirMensagem">Clique aqui!!!</b-button>
</div>
     
</template>

<script>
import Card from "../components/Card.vue"
export default {
    name:"Maisinformacoes",
    data() {
        return {
            titulo: "Mais Informações",
            subTitle: "Leia mais"
         
        }
    },
    components: { Card },
    methods:{
        exibirMensagem(){
            window.alert("Foi clicado")
        }
    }
}
</script>

<style>

</style>

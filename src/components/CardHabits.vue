<script setup lang="ts">
    defineProps({
    title: String,
    description: String,
    price: String,
    })
</script>

<template>
    <div class="cardWp">
        <div class="title"> 
            <p>{{ title }}</p>
            <slot name="icon"></slot>
        </div>
        <p>{{ description }}</p>
        <p class="price">{{ price }}</p>
    </div>
</template>

<style>
    @font-face {
        font-family: "Montserrat";
        src: url("../assets/fonts/Montserrat/Montserrat-Medium.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }
    .cardWp {
        width: 300px;
        min-width: 300px;
        background-color: #FFF;
        padding: 8px;
        border-radius: 8px;

        font-family: "Montserrat";
        font-style: normal;
        font-size: 0.75rem;
        line-height: 1.125rem; 
    }
    .cardWp .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1rem;
        line-height: 1.5rem; 
    }
    .cardWp .title svg{
        width: 24px;
        height: 24px;
        color: #1760a5;
    }

    .cardWp .price {
        text-align: end;
        font-size: 1rem;
        line-height: 1.5rem; 
    }
</style>

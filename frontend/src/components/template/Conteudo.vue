<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Conteudo"
}
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    .content {
        background-color: #fff;
    }
</style>
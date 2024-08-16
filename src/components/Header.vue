<template>
    <nav>
        <ul>
            <li class="title" @click.prevent="backToHomepage">
                <strong>Advice Application</strong>
            </li>
        </ul>
        <ul>
            <li><RouterLink :to="{ name: 'about' }">A propos</RouterLink></li>
            <li><RouterLink :to="{ name: 'random' }">Au hasard</RouterLink></li>
            <li><RouterLink :to="{ name: 'search' }">Rechercher</RouterLink></li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function backToHomepage() {
    router.push({ name: "home" });
}
</script>

<style scoped lang="scss">
.title {
    cursor: pointer;
}
</style>
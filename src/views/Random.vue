<template>
    <main class="container-fluid">

        <h2>Conseil au hasard</h2>

        <p v-if="state === 'error'">Une erreur s'est produite ❌</p>
        <div v-else-if="state === 'loading'" aria-busy="true"></div>
        <div v-else-if="state === 'idle' && advice">
            <p :key="advice.slip.id">
                {{ advice.slip.advice }} <TooltipId :advice-id="advice.slip.id" />
            </p>
            <button @click.prevent="fetchRandomAdvice">Regénerer 🔄</button>
        </div>

    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getRandomAdvice } from '../utils/advice';
import { adviceType } from '../types/adviceTypes';
import TooltipId from '../components/TooltipId.vue';

const state = ref<"loading"|"idle"|"error">("loading");
const advice = ref<adviceType|null>(null);

async function fetchRandomAdvice() {
    advice.value = null;
    state.value = "loading";

    try {
        const adviceResponse : adviceType = await getRandomAdvice();
        advice.value = adviceResponse;
        state.value = "idle";
    } catch (e) {
        console.error(e);
        state.value = "error";
    }
}

onMounted(async () => {
    await fetchRandomAdvice();
});

</script>

<style scoped lang="scss"></style>
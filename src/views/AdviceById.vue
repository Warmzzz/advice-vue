<template>
    <main class="container-fluid">
        <h2 v-if="state !== 'error'">Conseil n°{{ route.params.id }}</h2>

        <p v-if="state === 'error'">Une erreur s'est produite ❌</p>
        <div v-else-if="state === 'loading'" aria-busy="true"></div>
        <div v-else-if="state === 'idle' && advice">
            <p :key="advice.slip.id">
                {{ advice.slip.advice }} <TooltipId :advice-id="advice.slip.id" />
            </p>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { adviceType } from '../types/adviceTypes';
import { getAdviceById } from '../utils/advice';

const router = useRouter();
const route = useRoute();

const state = ref<"loading"|"idle"|"error">("loading");
const advice = ref<adviceType|null>(null);

async function fetchAdvice() {
    advice.value = null;
    state.value = "loading";
    const id = route.params.id as string;

    try {
        const adviceResponse : adviceType = await getAdviceById(Number(id));
        advice.value = adviceResponse;
        state.value = "idle";
    } catch (e) {
        console.error(e);
        state.value = "error";
    }
}

watch(() => route.params.id, async () => {
    if(!route.params.id){
        router.push("/");
        return;
    }
    await fetchAdvice();
}, { immediate: true });
</script>
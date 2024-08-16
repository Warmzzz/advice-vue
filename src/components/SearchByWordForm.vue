<template>
    <input type="text" placeholder="Mots-clés en anglais" v-model.lazy.trim="searchWords" required />

    <p v-if="state === 'waiting'">Entrez des mots-clés pour commencer la recherche.</p>
    <div v-else-if="state === 'loading'" aria-busy="true"></div>
    <p v-else-if="state === 'error'">Aucuns conseils trouvés avec ces mots-clés pour le moment ❌</p>
    <div v-else-if="state === 'idle' && searchResponse">
        <ul>
            <SearchResponseItem v-for="slip in searchResponse.slips" :key="slip.id" :advice="slip" />
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { getAdvicesByTerms } from '../utils/advice';
import { searchByTermsResponse } from '../types/adviceTypes';
import SearchResponseItem from './SearchResponseItem.vue';

const state = ref<"loading"|"idle"|"error"|"waiting">("waiting");

const searchWords = ref<string>("");
const searchResponse = ref<searchByTermsResponse|null>(null);

watch(() => searchWords.value, async () => {
    searchResponse.value = null;
    if(!searchWords.value){
        state.value = "waiting";
        return;
    }

    state.value = "loading"
    try {
        const response = await getAdvicesByTerms(searchWords.value);
        searchResponse.value = response;
        console.log(searchResponse.value);
        state.value = "idle";
    } catch (e) {
        console.error(e);
        state.value = "error";
    }
});
</script>
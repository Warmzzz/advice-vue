<template>
    <form @submit.prevent="handleSubmit">
        <fieldset role="group">
            <input type="text" placeholder="ID du conseil" v-model.number="searchId" @keypress="verifyKeypress" required>
            <button type="submit">Rechercher</button>
        </fieldset>
    </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchId = ref("");

function handleSubmit(){
    const id = searchId.value.toString().trim();
    if(!id) return;

    router.push({ name: "advice-by-id", params: { id } });
}

function verifyKeypress(e: KeyboardEvent) {
    const keysAllowed: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'enter'];
    const keyPressed: string = e.key.toLocaleLowerCase();
    
    if (!keysAllowed.includes(keyPressed)) {
           e.preventDefault()
    }
}
</script>
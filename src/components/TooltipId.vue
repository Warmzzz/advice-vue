<template>
    <span :data-tooltip="tooltipText" @click.prevent="copyId" @mouseenter="isAlreadyCopied = false">📋</span>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
        adviceId: number
}>();

const isAlreadyCopied = ref<boolean>(false);
const tooltipText = computed(() => {
    return isAlreadyCopied.value ? "Vous avez copié l'ID dans le presse-papier." : "Cliquez ici pour copier l'ID du conseil dans le presse-papier."
});

function copyId() {
    navigator.clipboard.writeText(props.adviceId.toString());
    isAlreadyCopied.value = true;
}
</script>

<style scoped lang="scss">
    span {
        cursor: pointer;
    }
</style>
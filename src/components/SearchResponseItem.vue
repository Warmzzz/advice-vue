<template>
    <li>
        <RouterLink :to="{ name: 'advice-by-id', params: { id: advice.id } }" target="_blank">
            {{ truncateString(advice.advice, 20) }}
        </RouterLink>
        <span>({{ advice.date }})</span>
    </li>
</template>

<script lang="ts" setup>
import { adviceSearchType } from '../types/adviceTypes';
import { truncateString } from '../utils/truncate';

defineProps<{
    advice: adviceSearchType
}>();
</script>

<style scoped lang="scss">
li {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
</style>
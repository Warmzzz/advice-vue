<template>
    <main class="container-fluid">
        <article>
            <h4>Recherche par ID</h4>
            <SearchByIdForm />
        </article>

        <article>
            <h4>Recherche par mots-clés</h4>
            <SearchByWordForm />
        </article>
    </main>
</template>

<script setup lang="ts">
import SearchByIdForm from '../components/SearchByIdForm.vue';
import SearchByWordForm from '../components/SearchByWordForm.vue';

</script>
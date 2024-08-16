<template>
    <main class="container-fluid">
        <h2>⛔ Erreur 404</h2>
        <p>La page que vous essayez d'accéder est introuvable !</p>
        <RouterLink :to="{ name: 'home' }">Retourner à la page d'accueil</RouterLink>
    </main>
</template>

<script setup lang="ts"></script>
<script setup>
import { ref } from 'vue';

defineProps({
    itemName: String,
    itemDescription: String,
});

</script>
<template>
    <a href="#"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ itemName }}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">{{ itemDescription }}</p>
        <br />

        <div class="flex-auto space-x-1">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Modifier</button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Annuler</button>
        </div>

    </a>
</template>

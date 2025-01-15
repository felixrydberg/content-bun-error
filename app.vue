<script setup lang="ts">
import type { Collections } from '@nuxt/content';



const locale = ref('en');
const collection = ('content_' + locale.value) as keyof Collections;
const content = await queryCollection(collection)
  .where('section', '=', 'landing-page-selling-point')
  .limit(5)
  .all();
</script>

<template>
  <div>

  </div>
</template>

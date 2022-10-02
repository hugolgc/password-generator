<script setup lang="ts">
import { reactive } from "vue";
import { passwordHelper } from "./helpers/password.helper";

const data = reactive({
  lowercases: true,
  uppercases: false,
  specials: true,
  numbers: false,
  length: 12,
  update: 1
});
</script>

<template>
  <main class="h-screen flex">
    <div class="w-full max-w-md m-auto p-4">
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-4 flex space-x-4 mb-4 pb-8 border-b border-neutral-700 border-dashed">
          <p class="flex-1 text-center font-mono">{{ passwordHelper.generate(data) }}</p>
          <button @click="data.update++">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
        </div>
        <button
          @click="data.lowercases = !data.lowercases"
          :class="data.lowercases ? 'bg-neutral-800' : ''"
          class="col-span-2"
        >abcd</button>
        <button
          @click="data.uppercases = !data.uppercases"
          :class="data.uppercases ? 'bg-neutral-800' : ''"
          class="col-span-2"
        >ABCD</button>
        <button
          @click="data.specials = !data.specials"
          :class="data.specials ? 'bg-neutral-800' : ''"
          class="col-span-2"
        >#@&</button>
        <button
          @click="data.numbers = !data.numbers"
          :class="data.numbers ? 'bg-neutral-800' : ''"
          class="col-span-2"
        >1234</button>
        <button
          v-for="value in 4"
          @click="data.length = (value * 4) + 4"
          :class="data.length === (value * 4) + 4 ? 'bg-neutral-800' : ''"
        >x{{ (value * 4) + 4 }}</button>
      </div>
    </div>
  </main>
</template>
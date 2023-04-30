<script lang="ts" setup>
import animistaJson from '~/assets/animista.json'

const formatName = (name: string) => name.replace(/([A-Z])/g, '-$1').replace(/(\d+)/g, '-$1').toLowerCase()

const animista = animistaJson as Record<string, Record<string, string[]>>
const animistaClass = Object.keys(animista).sort((a, b) => a.localeCompare(b))
const activeClass = ref(Object.keys(animista)[0])

const animistaClassValue = computed(() => animista[activeClass.value])
const animistaClassKeys = computed(() => Object.keys(animistaClassValue.value).sort((a, b) => a.localeCompare(b)))
const active = ref(animistaClassKeys.value[0])
const animistaTypeValues = computed(() => animistaClassValue.value[active.value])

const currentAnimista = ref(animistaTypeValues.value[0])

watch(() => activeClass.value, () => {
  active.value = animistaClassKeys.value[0]
  currentAnimista.value = ''
})
watch(() => active.value, () => {
  currentAnimista.value = animistaTypeValues.value[0]
})
</script>

<template>
  <div class="h-[calc(100vh-3rem)] text-center select-none flex flex-col font-mono">
    <div class="flex items-center justify-center text-4 font-bold m-auto p-3 text-gray-500 h-20">
      <div
        v-for="key in animistaClass" :key="key"
        class="mr-2 px-3 py-2 uppercase rounded-md cursor-pointer hover-(bg-blue-5 text-white)"
        :class="[activeClass === key ? 'bg-blue-5 text-white' : '']"
        @click="activeClass = key"
      >
        <div class="">
          {{ key }}
        </div>
      </div>
    </div>
    <div class="flex flex-grow h-0 px-20">
      <div class="overflow-auto  w-80 h-full flex-shrink-0">
        <div
          v-for="v in animistaClassKeys" :key="v"
          class="flex-shrink-0 py-3 mb-1 uppercase cursor-pointer tracking-0.1 text-3.5  rounded-sm"
          :class="[active === v ? 'bg-blue-5 text-white' : 'bg-gray-200']"
          @click="active = v"
        >
          {{ formatName(v) }}
        </div>
      </div>
      <div class="flex-grow w-0 ml-10 flex flex-col h-full">
        <div class="flex item-center flex-wrap bg-gray-200 p-3 pb-0 flex-shrink-0">
          <div
            v-for="v in animistaTypeValues" :key="v"
            class="mr-3 mb-3 min-w-50 rounded-sm"
            :class="[currentAnimista === v ? 'bg-blue-4 text-white' : 'text-gray-800']"
            @click="currentAnimista = v"
          >
            {{ v }}
          </div>
        </div>
        <div class="w-full h-full flex-grow h-0 grid place-items-center">
          <div class="text-5xl w-50 h-50 grid place-items-center bg-blue-4" :class="[`animista-${currentAnimista}`]">
            unocss
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

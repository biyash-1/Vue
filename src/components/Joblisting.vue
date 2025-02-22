<script setup>
import { defineProps ,ref} from "vue";
import { RouterLink } from "vue-router";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const props = defineProps({
    job: Object,
});


const showFullDescription = ref(false);

const truncatedDescription = () => {
  if (!props.job || !props.job.description) return ""; 
  return showFullDescription.value
    ? props.job.description
    : props.job.description.substring(0, 100) + "...";
};
const toggleDescription = () =>{
    showFullDescription.value = !showFullDescription.value;
    toast.success('sucess')
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative p-4">
    <div class="mb-4">
      <div class="text-gray-600 my-2">{{ job.type }}</div>
      <h3 class="text-xl font-bold">{{ job.title }}</h3>
    </div>

    <div class="mb-5">
      {{ truncatedDescription() }}
      <button @click="toggleDescription" class="text-blue-500 underline ml-2">
        {{ showFullDescription ? "Less" : "More" }}
      </button>
    </div>

    <h3 class="text-green-500 mb-2">{{ job.salary }}</h3>

    <div class="border border-gray-100 mb-5"></div>

    <div class="flex flex-col lg:flex-row justify-between mb-4">
      <div class="text-orange-700 mb-3">
        <i class="pi pi-map-marker text-orange-500"></i>
        {{ job.location }}
      </div>
      <RouterLink :to="'/jobs/' +job.id" class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">
        Read More
      </RouterLink>
    </div>
  </div>
</template>

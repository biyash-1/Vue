<script setup>
import { ref, defineProps, onMounted } from "vue";
import axios from "axios";
import Joblisting from "./Joblisting.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue"

// Define props
const props = defineProps({
  limit: {
    type: Number,
    default: 3,
  },
  showButton: {
    type: Boolean,
    default: true,
  },
});

const jobs = ref([]);
const loading = ref(true)
const jobLimit = ref(props.limit);

onMounted(async () => {
  loading.value = true
  try {
    const response = await axios.get("/api/jobs");
    jobs.value = response.data;
    loading.value= false
    
  } catch (err) {
    console.error("Error fetching jobs:", err);
  }
});

// Function to show all jobs
const showAllJobs = () => {
  jobLimit.value = jobs.value.length;
};
</script>

<template>
 
  
  <section>
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <div v-if = "loading" class="text-center">
        <PulseLoader size="5" margin="auto" class="mx-auto text-3xl"/>

      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Joblisting v-for="job in jobs.slice(0, jobLimit)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>

  <!-- View All Jobs Button -->
  <section v-if="showButton && jobLimit < jobs.length" class="text-center mt-4">
    <button 
      @click="showAllJobs" 
      class="w-40 bg-gray-300 text-black hover:bg-gray-700 p-2 rounded mb-2"
    >
      View All Jobs
    </button>
  </section>
</template>
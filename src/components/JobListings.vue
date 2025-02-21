<script setup>
import { ref, defineProps } from "vue";
import Joblisting from "./Joblisting.vue";
import jobData from "../../src/jobs.json";

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

// Reactive variables for job listings
const jobs = ref(jobData.jobs);
const jobLimit = ref(props.limit || jobs.value.length);

// Function to show all jobs
const showAllJobs = () => {
  jobLimit.value = jobs.value.length;
};
</script>

<template>
  <Navbar />
  <Hero />
  <HomeCard />
  <section>
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Vue automatically unwraps refs in templates -->
        <Joblisting v-for="job in jobs.slice(0, jobLimit)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>

  <!-- View All Jobs Button -->
  <section v-if="showButton && jobLimit !== jobs.length">
    <button @click="showAllJobs" class="block w-40 mt-4 bg-gray-300 text-black  text-center mx-auto hover:bg-gray-700 p-2 rounded mb-2">
      View All Jobs
    </button>
  </section>
</template>
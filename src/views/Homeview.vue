<script setup>
import Hero from "../components/Hero.vue"
import JobListings from "../components/JobListings.vue"
import HomeCard from "../components/HomeCard.vue"
</script>

<template>
    <Hero />
    <HomeCard />
    <JobListings :limit="3" :showButton="true" />
</template>
<script setup>
import logo from "../assets/logo.svg";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const isActiveLink = (routePath) => {
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" v-bind:src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  'text-white rounded-md px-3 py-2',
                  isActiveLink('/') ? 'bg-green-500' : 'hover:bg-green-900 hover:text-white',
                ]"
              >
                Home
              </RouterLink>
              <RouterLink
                to="/jobs"
                :class="[
                  'text-white rounded-md px-3 py-2',
                  isActiveLink('/jobs') ? 'bg-green-500' : 'hover:bg-green-900 hover:text-white',
                ]"
              >
                Jobs
              </RouterLink>
              <RouterLink
                to="/jobs/add"
                :class="[
                  'text-white rounded-md px-3 py-2',
                  isActiveLink('/jobs/add') ? 'bg-green-500' : 'hover:bg-green-900 hover:text-white',
                ]"
              >
                Add Job
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

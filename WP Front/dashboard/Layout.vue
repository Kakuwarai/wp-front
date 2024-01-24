<script setup>
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";
import 'element-plus/dist/index.css'
import TopBar from "./TopBar.vue";
import Overlay from "./Overlay.vue";
import Sidebar from "./sidebar/Sidebar.vue";
import { closeSidebar, sidebarOpen } from "./store";

const route = useRoute();

onMounted(() => {
  // set the html tag attribute overflow to hidden when component is mounted
  document.documentElement.style.overflow = "hidden";
});

watch(route, () => {
  // close sidebar on route changes when viewport is less than 1024px
  if (sidebarOpen && window.innerWidth < 1024) {
    closeSidebar();
  }
});
</script>

<!-- lg:w-[calc(100%-16rem)] class get the remained width of the main tag from lg:viewport by subtracting
(the total width by the width of the sidebar component which is w-64 = 16rem)-->
<template>
  <div class="relative h-screen overflow-hidden bg-gray-100 lg:p-4">
    <div class="flex items-start">
      <Overlay />
      <Sidebar mobile-orientation="start" />
      <div
        class="flex h-screen w-full flex-col pl-0 lg:space-y-4"
        :class="sidebarOpen ? 'lg:w-full' : 'lg:pl-4 lg:w-[calc(100%-16rem)]'"
      >
        <TopBar />
        <main
          class="h-screen overflow-auto px-2 pb-36 pt-8 md:pb-8 md:pt-4 lg:pt-0"
        >
          <slot />
         
<footer class=" shadow :bg-gray-900 mt-4 w-full rounded-3xl bg-white p-6 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a class="flex items-center mb-4 sm:mb-0">
                <img src="../images/fastLogo.png" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap :text-white">Fast Services</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 :text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto :border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center :text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Fast Services</a>. All Rights Reserved.</span>
    </div>
</footer>


        </main>
     
      </div>
    
    </div>
  </div>
</template>
<style>
.pagination {
  display: flex;
  padding-left: 0;
  list-style: none
}

.page-link {
  position: relative;
  display: block;
  color: #000000;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #dee2e6;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media (prefers-reduced-motion:reduce) {
  .page-link {
    transition: none
  }
}

.page-link:hover {
  z-index: 1;
  color: #a3a3a3;
  background-color: #e9ecef;
  border-color: #dee2e6
}

.page-link:focus {
  z-index: 1;
  color: #000000;
  background-color: #e9ecef;
  outline: 0;
  box-shadow: 0 0 0 .25rem rgba(88, 88, 88, 0.25)
}

.page-item:not(:first-child) .page-link {
  margin-left: -1px
}

.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-color: #a3a3a3;
  border-color: #a3a3a3
}

.page-item.disabled .page-link {
  color: #000000;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6
}

.page-link {
  padding: .375rem .75rem
}

.page-item:first-child .page-link {
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem
}

.page-item:last-child .page-link {
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem
}

.pagination-lg .page-link {
  padding: .75rem 1.5rem;
  font-size: 1.25rem
}

.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: .3rem;
  border-bottom-left-radius: .3rem
}

.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: .3rem;
  border-bottom-right-radius: .3rem
}

.pagination-sm .page-link {
  padding: .25rem .5rem;
  font-size: .875rem
}

.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: .2rem;
  border-bottom-left-radius: .2rem
}

.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: .2rem;
  border-bottom-right-radius: .2rem
}

/* Skeleton loading */
@keyframes loading {
  40% {
    background-position: 100% 0;
  }

  100% {
    background-position: 100% 0;
  }
}

.headline {
  text-align: center;
  margin-bottom: 48px;
}

.tableWrapper {
  width: 100%;
}

.tableWrapper .table {
  margin: 0 auto;
  text-align: left;
  border-spacing: 0;
}

.tableWrapper .table tbody td {
  padding: 20px 0;
  min-width: 150px;
}

.tableWrapper .table tbody td span {
  color: #fefefe;
}

.tableWrapper .table tbody td:last-child {
  border-radius: 0 8px 8px 0;
}

.tableWrapper .loading {
  position: relative;
}

.tableWrapper .loading .bar {
  background-color: #e7e7e7;
  height: 27px;
  border-radius: 7px;
  width: 100%;
}

.tableWrapper .loading:after {
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 0;
  content: "";
  display: block;
  width: 100%;
  height: 27px;
  background-image: linear-gradient(100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 80%);
  background-size: 200px 24px;
  background-position: -100px 0;
  background-repeat: no-repeat;
  animation: loading 1s infinite;
}

/* Search Box */


.searching input {
  outline: none;
}

.searching input[type="text"] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
}

.searching input::-webkit-search-decoration,
.searching input::-webkit-search-cancel-button {
  display: none;
}

.searching input[type="text"] {
  background: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
  border: solid 1px #ccc;
  padding: 9px 10px 9px 32px;
  width: 55px;

  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;

  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}

.searching input[type="text"]:focus {
  width: 300px;
  background-color: #fff;
  border-color: #66cc75;

  -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
}

.searching input:-moz-placeholder {
  color: #999;
}

.searching input::-webkit-input-placeholder {
  color: #999;
}
</style>
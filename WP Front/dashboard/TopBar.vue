<script setup>
import { toggleSidebar } from "./store";
import Swal from 'sweetalert2';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { globalAPI, swalPopUp, swalLoad, slawStatusPopUpError, slawStatusPopUpWarning } from '@/services/globalFunctions'
const userDetails = ref([{fullname2: 'fullname'}]),
userBranches = ref([]),
router = useRouter(),
visible = ref(false),
value = ref(''),
options = ref([]),
loadingTF = ref(false),
profileLetters = ref(''),
profileColor = ref('')


onMounted(()=>{

  userDetails.value = JSON.parse(localStorage.getItem('login'))
  userBranches.value = JSON.parse(localStorage.getItem('branches'))
  // console.log(userBranches.value);
  initFlowbite();
  myFunction()
  userBranches.value.forEach(branchValues => {

if(userDetails.value.type == "Super"){
value.value = userBranches.value[0].code
if(JSON.parse(localStorage.getItem('userSelectedBranches')) == null){
  localStorage.setItem('userSelectedBranches',JSON.stringify(userBranches.value[0].code))
}else{
  value.value = JSON.parse(localStorage.getItem('userSelectedBranches'))
}


}else{

  if(branchValues.isDefault == 1 ){
  value.value = branchValues.code
  if(JSON.parse(localStorage.getItem('userSelectedBranches')) == null){
    localStorage.setItem('userSelectedBranches',JSON.stringify(branchValues.code))
}else{
  value.value = JSON.parse(localStorage.getItem('userSelectedBranches'))
}
 
}
}


                    options.value.push({
                        value: branchValues.code,
                        label: branchValues.name,
                    });
                });
})

async function changeBranch(){
loadingTF.value = true

await globalAPI().post(`mMenu/dynamicMenu?id=${userDetails.value.id}&branchCode=${value.value}`)
        .then(async (response) => {

            if (response.status == 200) {
              localStorage.setItem('menuList',JSON.stringify(response.data.menuList))
              localStorage.setItem('parent',JSON.stringify(response.data.parent))
            }
            else if (response.status == 202 || response.status == 401) {


                slawStatusPopUpError(response.data)

            } else {

                slawStatusPopUpError(response.data)
            }
            loadingTF.value = false

        })

    await globalAPI().post(`mMenu/userMenusSidebar?id=${userDetails.value.id}&branchCode=${value.value}`)
        .then(async (response) => {

            if (response.status == 200) {
              localStorage.setItem('userSelectedBranches',JSON.stringify(value.value))
              localStorage.setItem("menus",JSON.stringify(response.data) )
              initFlowbite();
              router.replace('/dashboard')
              const event = new Event('menuChange');
              window.dispatchEvent(event);
              loadingTF.value = false
              initFlowbite();
            }
            else if (response.status == 202 || response.status == 401) {


                slawStatusPopUpError(response.data)

            } else {

                slawStatusPopUpError(response.data)
            }
            loadingTF.value = false

        }).catch((error) => {
          loadingTF.value = false
            swalPopUp(error, "Can't connect to server")

        })
}

function logout(){
  localStorage.clear();
  sessionStorage.clear();
  router.replace('/')
}

function dashboard(){
  router.replace('/dashboard')
}
function getLetterBackgroundColor(letter) {
  console.log(letter);
      // Define a mapping of letters to Tailwind CSS background color classes
      const colorMap = {
        A: 'bg-red-200',
        B: 'bg-blue-200',
        C: 'bg-green-200',
        D: 'bg-yellow-200',
        E: 'bg-indigo-200',
        F: 'bg-pink-200',
        G: 'bg-purple-200',
        H: 'bg-teal-200',
        I: 'bg-orange-200',
        J: 'bg-red-300',
        K: 'bg-blue-300',
        L: 'bg-green-300',
        M: 'bg-yellow-300',
        N: 'bg-indigo-300',
        O: 'bg-pink-300',
        P: 'bg-purple-300',
        Q: 'bg-teal-300',
        R: 'bg-orange-300',
        S: 'bg-red-400',
        T: 'bg-blue-400',
        U: 'bg-green-400',
        V: 'bg-yellow-400',
        W: 'bg-indigo-400',
        X: 'bg-pink-400',
        Y: 'bg-purple-400',
        Z: 'bg-teal-400',
      };
      console.log( colorMap[letter]);
      // Check if the letter is in the colorMap, if not, default to 'bg-gray-200'
      return colorMap[letter];
    }

    function getLetterBorderColor(letter) {
      // Define a mapping of letters to Tailwind CSS background color classes
      const colorMap = {
        A: 'border-red-400',
        B: 'border-blue-400',
        C: 'border-green-400',
        D: 'border-yellow-400',
        E: 'border-indigo-400',
        F: 'border-pink-400',
        G: 'border-purple-400',
        H: 'border-teal-400',
        I: 'border-orange-400',
        J: 'border-red-500',
        K: 'border-blue-500',
        L: 'border-green-500',
        M: 'border-yellow-500',
        N: 'border-indigo-500',
        O: 'border-pink-500',
        P: 'border-purple-500',
        Q: 'border-teal-500',
        R: 'border-orange-500',
        S: 'border-red-600',
        T: 'border-blue-600',
        U: 'border-green-600',
        V: 'border-yellow-600',
        W: 'border-indigo-600',
        X: 'border-pink-600',
        Y: 'border-purple-600', 
        Z: 'border-teal-600',
      };
      
      // Check if the letter is in the colorMap, if not, default to 'bg-gray-200'
      return colorMap[letter];
    }

    function addLetters(letter1, letter2) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index1 = alphabet.indexOf(letter1);
  const index2 = alphabet.indexOf(letter2);
  
  if (index1 === -1 || index2 === -1) {
    // Handle invalid input, e.g., if the input is not a valid uppercase letter
    return 'Invalid input';
  }
  
  const resultIndex = (index1 + index2) % 26;
  const resultLetter = alphabet[resultIndex];
  
  return resultLetter;
}


async function myFunction() {
  profileColor.value = ''
  profileLetters.value = ''


  const splitter = userDetails.value.firstname.split(' ')

  splitter.forEach(element => {

    profileColor.value = profileColor.value == ''? element[0]:addLetters(profileColor.value,element[0]).toString()
  
    profileLetters.value = profileLetters.value + element[0]
  });

}
</script>

<template>
  <header
    class="relative z-10 h-16 w-full items-center bg-white shadow md:h-20 lg:rounded-2xl"
  >

  <el-dialog v-model="visible" :show-close="false" width="30%" class="min-w-[300px]">
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">Change branch</h4>y
        <!-- <el-button type="danger" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          Close
        </el-button> -->
        <hr class="bg-blac">
      </div>
    </template>
   
    <el-select v-model="value" filterable placeholder="Select" class="w-full" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
<div>
  <br>
</div>
  <div class="flex justify-end">
  
    <el-button type="primary" @click="changeBranch()" :loading="loadingTF">
    <template #loading>
      <div class="custom-loading">
        <svg class="circular" viewBox="-10, -10, 50, 50">
          <path
            class="path"
            d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          "
            style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
          />
        </svg>
      </div>
    </template>
    <span>Change</span>
  </el-button>

</div>

  </el-dialog>

    <div class="relative mx-auto flex h-full flex-col justify-center px-3">
      <div class="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
        <div class="relative left-0 flex h-full w-3/4">
          <div class="group relative flex h-full w-12 items-center">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              class="text-4xl text-gray-500 focus:outline-none"
              @click="toggleSidebar"
            >
              &#8801;
            </button>
          </div>
          <div class="group relative flex h-full w-36 items-center lg:w-64">
            <h1 class="font-bold">Welcome, {{ userDetails.firstname }}</h1>
            <!-- <div
              class="absolute flex h-10 w-auto cursor-pointer items-center justify-center p-3 pr-2 text-sm uppercase text-gray-500 sm:hidden"
            >
              <svg
                fill="none"
                class="relative h-5 w-5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <svg
              class="pointer-events-none absolute left-0 ml-4 hidden h-4 w-4 fill-current text-gray-500 group-hover:text-gray-400 sm:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
            <input
              type="text"
              class="block w-full rounded-2xl bg-gray-100 py-1.5 pl-10 pr-4 leading-normal text-gray-400 opacity-90 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
            />
            <div
              class="absolute right-0 mr-2 hidden h-auto rounded-2xl border border-gray-300 px-2 py-1 text-xs text-gray-400 md:block"
            >
              +
            </div> -->
          </div>
        </div>
        <div
          class="relative ml-5 flex w-1/4 items-center justify-end p-1 sm:right-auto sm:mr-0"
        >
          <!-- <a class="relative block">
            <img
              alt="Jonathan Ilunga"
              src="/images/9.jpg"
              class="mx-auto h-10 w-10 rounded-full object-cover"
            />
          </a> -->

          <!-- <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" alt="User dropdown" class="w-10 h-10 rounded-full cursor-pointer" src="/images/9.jpg" > -->
          <div>
                <button type="button"
                  class="flex text-sm rounded-full focus:ring-4 focus:ring-blue-300"
                  data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" >
                  <span class="sr-only">Open user menu</span>
                  <div
                  :class="`${getLetterBackgroundColor(profileColor.toUpperCase())} ${getLetterBorderColor(profileColor.toUpperCase())}`"
                    class=" border-2 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
                    <span class=" font-bold text-white ">{{ profileLetters.toUpperCase() }}</span>
                  </div>
                </button>
              </div>
<!-- Dropdown menu -->
<div id="userDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
    <div class="px-4 py-3 text-sm  ">
      <div>{{ userDetails.fullname }}</div>
      <div class="font-medium truncate">{{ userDetails.emailAddress }}</div>
    </div>
    <ul class="py-2 text-sm text-gray-700"  aria-labelledby="avatarButton">
      <li>
        <a class="block px-4 py-2  hover:bg-gray-600 hover:text-white" @click="dashboard()">Dashboard</a>
      </li>
      <li>
        <a class="block px-4 py-2  hover:bg-gray-600 hover:text-white" @click="$router.replace('/profile')">Profile</a>
      </li>
      <li>
        <a @click="visible = true" class="block px-4 py-2  hover:bg-gray-600 hover:text-white">Change branch</a>
      </li>
      <!-- <li>
        <a class="block px-4 py-2  hover:bg-gray-600 hover:text-white">Earnings</a>
      </li> -->
    </ul>
    <div class="py-1">
      <a class="block px-4 py-2 text-sm   hover:bg-gray-600  hover:text-white" @click="logout()">Sign out</a>
    </div>
</div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}
</style>
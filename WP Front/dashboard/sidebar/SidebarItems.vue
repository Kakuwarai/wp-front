<script setup>
const router = useRouter();
import 'element-plus/dist/index.css'
import {
   UploadFilled,
   Tickets,
   Suitcase,
   Menu as IconMenu,
   User,
   Setting,
   OfficeBuilding,
   Collection,
   List,
   Briefcase
} from '@element-plus/icons-vue'
import { initFlowbite } from 'flowbite'

const dashboard = ref(false),
   userDetails = ref(JSON.parse(localStorage.getItem('login'))),
   users = ref(false),
   branch = ref(false),
   transaction = ref(false),
   menu = ref(false),
   onlyMenus = ref([true, true, true, true, true, true, true]),
   //userMenus = ref(localStorage.getItem('menus').toString() == 'undefined' ? 'undefined' : JSON.parse(localStorage.getItem('menus'))),
   menuList = ref(JSON.parse(localStorage.getItem('menuList'))),
   parent = ref(JSON.parse(localStorage.getItem('parent')))

onMounted(() => {

   window.addEventListener('menuChange', () => {
      //userMenus.value = localStorage.getItem('menus').toString() == 'undefined' ? 'undefined' : JSON.parse(localStorage.getItem('menus'))
      menuList.value = JSON.parse(localStorage.getItem('menuList'))
      parent.value = JSON.parse(localStorage.getItem('parent'))
      
      //theMenus()
      initFlowbite();
   });
   //theMenus()
   initFlowbite();
   
})



async function theMenus() {
   initFlowbite();
   if (userDetails.value.type == 'Super') {

      onlyMenus.value[0] = true
      onlyMenus.value[1] = true
      onlyMenus.value[2] = true
      onlyMenus.value[3] = true
      onlyMenus.value[4] = true
      onlyMenus.value[5] = true
      onlyMenus.value[6] = true

   } else {

      if (userMenus.value != 'undefined') {
         const temp1 = userMenus.value.filter(item => item['menuId'] == 3)

         if (temp1.length == 0) {
            onlyMenus.value[0] = false
         }
         else {
            onlyMenus.value[0] = true
         }
         const temp2 = userMenus.value.filter(item => item['menuId'] == 4)
         if (temp2.length == 0) {
            onlyMenus.value[1] = false
         }
         else {
            onlyMenus.value[1] = true
         }
         const temp3 = userMenus.value.filter(item => item['menuId'] == 5)
         if (temp3.length == 0) {
            onlyMenus.value[2] = false
         }
         else {
            onlyMenus.value[2] = true
         }
         const temp4 = userMenus.value.filter(item => item['menuId'] == 6)

         if (temp4.length == 0) {
            onlyMenus.value[3] = false
         }
         else {
            onlyMenus.value[3] = true
         }
         const temp5 = userMenus.value.filter(item => item['menuId'] == 7)

         if (temp5.length == 0) {
            onlyMenus.value[4] = false
         }
         else {
            onlyMenus.value[4] = true

         }
         const temp6 = userMenus.value.filter(item => item['menuId'] == 8)

         if (temp6.length == 0) {
            onlyMenus.value[5] = false
         }
         else {
            onlyMenus.value[5] = true

         }
         const temp7 = userMenus.value.filter(item => item['menuId'] == 9)

         if (temp7.length == 0) {
            onlyMenus.value[6] = false
         }
         else {
            onlyMenus.value[6] = true

         }
      }
      else {
         onlyMenus.value[0] = false
         onlyMenus.value[1] = false
         onlyMenus.value[2] = false
         onlyMenus.value[3] = false
         onlyMenus.value[4] = false
         onlyMenus.value[5] = false
         onlyMenus.value[6] = false
      }

   }

}
function selectMenus(menu){

   if(menu == 3){
      router.replace('/activity/aTransaction/transaction')
   }
   if(menu == 4){
      router.replace('/maintenance/mUsers/users')
   }
   if(menu == 5){
      router.replace('/maintenance/mBranches/branches')
   }
   if(menu == 6){
      router.replace('/maintenance/mMenus/menu')
   }
   if(menu == 7){
      router.replace('/maintenance/mCustomer/customer')
   }
   if(menu == 8){
      router.replace('/maintenance/mCharges/charges')
   }
   if(menu == 9){
      router.replace('/maintenance/mTerms/terms')
   }
   if(menu == 10){
      router.replace('/maintenance/mPosition/position')
   }

}
function cDashboard() {
   router.push('/dashboard')
}
// function aTransaction() {
//    router.replace('/activity/aTransaction/transaction')
// }
// function mUser() {
//    router.replace('/maintenance/mUsers/users')
// }
// function mBranch() {
//    router.replace('/maintenance/mBranches/branches')
// }
// function mMenu() {
//    router.replace('/maintenance/mMenus/menu')
// }
// function mCustomer() {
//    router.replace('/maintenance/mCustomer/customer')
// }
// function mCharges() {
//    router.replace('/maintenance/mCharges/charges')
// }
// function mTerms() {
//    router.replace('/maintenance/mTerms/terms')
// }
// function mPosition() {
//    router.replace('/maintenance/mPosition/position')
// }
// const handleOpen = (key, keyPath) => {
//    console.log(key, keyPath);
// };

const handleClose = (key, keyPath) => {
   console.log(key, keyPath);
};
</script>

<template>
   <!-- <el-menu active-text-color="#2980B9" class="" default-active="2" text-color="#bbbbbbb" @open="handleOpen"
      @close="handleClose">

      <el-menu-item index="1" @click="cDashboard()">
         <el-icon><icon-menu /></el-icon>
         <span>Dashboard</span>
      </el-menu-item>

      <el-sub-menu index="2" v-if="onlyMenus[0] == true">
         <template #title>
            <el-icon>
               <Tickets />
            </el-icon>
            <span>Activity</span>
         </template>

         <el-menu-item index="1-1" @click="aTransaction()" v-if="onlyMenus[0] == true">
            <el-icon>
               <UploadFilled />
            </el-icon>
            Transaction</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3" v-if="onlyMenus[1] == true || onlyMenus[2] == true || onlyMenus[3] == true">
         <template #title>
            <el-icon>
               <Setting />
            </el-icon>
            <span>Maintenance</span>
         </template>

         <el-menu-item index="2-1" @click="mUser()" v-if="onlyMenus[1] == true">
            <el-icon>
               <User />
            </el-icon>

            Users</el-menu-item>
         <el-menu-item index="2-6" @click="mPosition()">
            <el-icon>
               <Briefcase />
            </el-icon>
            Position</el-menu-item>
         <el-menu-item index="2-2" @click="mBranch()" v-if="onlyMenus[2] == true">
            <el-icon>
               <OfficeBuilding />
            </el-icon>
            Branches</el-menu-item>
         <el-menu-item index="2-3" @click="mCustomer()" v-if="onlyMenus[4] == true">
            <el-icon>
               <Suitcase />
            </el-icon>
            Customer</el-menu-item>
         <el-menu-item index="2-4" @click="mCharges()" v-if="onlyMenus[5] == true">
            <el-icon>
               <Collection />
            </el-icon>
            Charges</el-menu-item>
         <el-menu-item index="2-5" @click="mTerms()" v-if="onlyMenus[6] == true">
            <el-icon>
               <Collection />
            </el-icon>
            Terms</el-menu-item>
         <el-menu-item index="2-6" @click="mMenu()" v-if="onlyMenus[3] == true">
            <el-icon>
               <List />
            </el-icon>
            Menus</el-menu-item>
      </el-sub-menu>

      

   </el-menu> -->

   <el-menu v-for="item,index in parent" active-text-color="#2980B9" class="" default-active="2" text-color="#bbbbbbb" @open="handleOpen"
      @close="handleClose">
   <el-sub-menu :index="index + 1" >
         <template #title>
            <el-icon>
               <Tickets v-if="item.id == 1"/>
               <Setting v-if="item.id == 2"/>
            </el-icon>
            <span> {{item.name}} </span>
         </template>
<div v-for="nextItem,nextIndex in menuList.filter(x => x.parentMenuId == item.id)">
         <el-menu-item  :index="`${index + 1}-${nextIndex + 1}`" @click="selectMenus(nextItem.id)">
            <el-icon>
               <UploadFilled v-if="nextItem.id == 3" />
               <User v-if="nextItem.id == 4"/>
               <!-- <Briefcase /> -->
               <OfficeBuilding v-if="nextItem.id == 5"/>
               <Suitcase v-if="nextItem.id == 7"/>
               <Collection v-if="nextItem.id == 8 || nextItem.id == 9 "/>
               <List v-if="nextItem.id == 6"/>
               <Briefcase v-if="nextItem.id == 10"/>
            </el-icon>
            {{ nextItem.name }} </el-menu-item></div>
      </el-sub-menu>
   </el-menu>
   <!-- <div class="h-full px-3 py-4 overflow-y-auto ">
      <ul class="space-y-2 font-medium">
         <li>
            <a class="flex items-center p-2 text-gray-900 rounded-lg dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
               :class="dashboard == true ? 'text-white  bg-gray-700 group' : ''" @click="cDashboard()">
               <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path
                     d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path
                     d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
               </svg>
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <button type="button" v-if="onlyMenus[0] == true"
               class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700"
               aria-controls="dropdown-activity" data-collapse-toggle="dropdown-activity">
               <svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
                  <path
                     d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
               </svg>
               <span class="flex-1 ml-3 text-left whitespace-nowrap">Activity</span>
               <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     d="m1 1 4 4 4-4" />
               </svg>
            </button>
            <ul id="dropdown-activity" class="hidden py-2 space-y-2">
               <li v-if="onlyMenus[0] == true">
                  <a class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700"
                     :class="transaction == true ? 'dark:text-white bg-gray-100 dark:bg-gray-700 group' : ''"
                     @click="aTransaction()">Transaction</a>
               </li>
           
            </ul>
         </li>
         <li>
            <button type="button" v-if="onlyMenus[1] == true || onlyMenus[2] == true || onlyMenus[3] == true"
               class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700"
               aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
               <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clip-rule="evenodd" fill-rule="evenodd"
                     d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75zM17.5 7.5v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75z">
                  </path>
               </svg>
               <span class="flex-1 ml-3 text-left whitespace-nowrap">Maintenance</span>
               <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     d="m1 1 4 4 4-4" />
               </svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
               <li v-if="onlyMenus[1] == true">
                  <a class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700"
                     :class="users == true ? 'dark:text-white bg-gray-100 dark:bg-gray-700 group' : ''"
                     @click="mUser()">Users</a>
               </li>
               <li v-if="onlyMenus[2] == true">
                  <a class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700"
                     :class="branch == true ? 'dark:text-white bg-gray-100 dark:bg-gray-700 group' : ''"
                     @click="mBranch()">Branches</a>
               </li>
               <li v-if="onlyMenus[3] == true">
                  <a class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700"
                     :class="menu == true ? 'dark:text-white bg-gray-100 dark:bg-gray-700 group' : ''"
                     @click="mMenu()">Menu</a>
               </li>
              
            </ul>
         </li>

 
   </ul>
</div> -->
</template>


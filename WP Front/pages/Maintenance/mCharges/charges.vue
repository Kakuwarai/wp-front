<template>
    <!-- Breadcrumb -->
    <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
                <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-60">
                    <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                </a>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="ml-1 text-sm font-medium  md:ml-2 text-gray-400">Maintenance</span>
                </div>
            </li>
            <!-- <li>
          <div class="flex items-center">
            <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 text-gray-400 hover:text-white">Templates</a>
          </div>
        </li> -->
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="ml-1 text-sm font-medium  md:ml-2 text-gray-400">Charges</span>
                </div>
            </li>
        </ol>
    </nav>
  
    <br>
  
    <div class="flex flex-wrap">
        <div class="w-full rounded-3xl bg-white p-6 shadow :bg-gray-900">
  
  
            <!-- component -->
            <div>
  
                <div class="flex flex-col p-2 py-6 w-80">
  
                    <div class="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-1 mb-5 sticky"
                        style="top: 5px">
                        <input v-model="txtSearch" @keypress.enter="getUsers(0)" 
                            class="font-bold rounded-full w-full py-2 pl-2 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                            type="text" placeholder="Search">
  
                        <div @click="getUsers(0)" class="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">
  
                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
  
            <button type="button" @click="addCharges()"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="mr-1 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
  
  
                <span>Add</span>
            </button>
  
            <div class="mt-1 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Code
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Currency
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Amount
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Uom
                            </th>
                          
                            <th scope="col" class="px-6 py-3">
                                Remarks
                            </th>
                            <th scope="col" class="px-6 py-3 ">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3 text-right">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="tblLoading == false">
                        <tr v-for="data in chargesList" class="bg-white border-b  hover:bg-gray-50 ">
                            <td class="px-6 py-4">
                                {{ data.chargeCode }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.chargeName }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.currency }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.amount }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.uom }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.defaultRemarks }}
                            </td>
                            <td class="px-6 py-4">
                                <span v-if="data.status == 1"
                                    class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-green-400">Active</span>
                                    <span v-else
                                    class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-red-400">Inactive</span>
                            </td>
                            <td class="px-6 py-4 text-right">
                                <button type="button" @click="editCharges(data)"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                        <line x1="16" y1="5" x2="19" y2="8" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
  
                    </tbody>
  
                    <tbody v-else>
                        <tr v-for="index in 6">
  
                            <td role="status" class="max-w-sm animate-pulse">
                                <div class=" h-7 bg-gray-200 rounded-lg m-2"></div>
                            </td>
                            <td role="status" class="max-w-sm animate-pulse">
                                <div class=" h-7 bg-gray-200 rounded-lg m-2"></div>
                            </td>
                            <td role="status" class="max-w-sm animate-pulse">
                                <div class=" h-7 bg-gray-200 rounded-lg m-2"></div>
                            </td>
                            <td role="status" class="max-w-sm animate-pulse">
                                <div class=" h-7 bg-gray-200 rounded-lg m-2"></div>
                            </td>
                            <td role="status" class="max-w-sm animate-pulse text-right">
                                <div class=" h-7 bg-gray-200 rounded-lg m-2"></div>
                            </td>
                            <td role="status" class="max-w-sm animate-pulse">
                                <div class=" h-7 bg-gray-200 rounded-lg m-2"></div>
                            </td>
                            <td role="status" class="max-w-sm animate-pulse text-right">
                                <div class=" h-7 bg-gray-200 rounded-lg m-2"></div>
                            </td>
                            <td role="status" class="max-w-sm animate-pulse text-right">
                                <div class=" h-7 bg-gray-200 rounded-lg m-2"></div>
                            </td>
  
                        </tr>
  
                    </tbody>
  
                </table>
                <el-empty v-if="chargesList == '' && tblLoading == false" :image-size="200" />
            </div>
            <br>
            <el-pagination layout="sizes ,prev, pager, next, jumper, -> ,total" @current-change="handleCurrentChange"
              v-model:page-size="pageSize" :total="paginationPage" :page-sizes="[10, 50, 100, 200]" />
  
        </div>
    </div>
  </template>
    
  <script setup>
  import Swal from 'sweetalert2';
  import ElementPlus from 'element-plus'
  import 'element-plus/dist/index.css'
  import { globalAPI, swalPopUp, swalLoad, slawStatusPopUpError, slawStatusPopUpWarning } from '@/services/globalFunctions'
  
  const router = useRouter(),
    userDetails = ref(JSON.parse(localStorage.getItem('login'))),
    txtSearch = ref(''),
    chargesList = ref([]),
    paginationPage = ref(1),
    tblLoading = ref(false),
    pageSize = ref(10)
  
  
  onMounted(() => {
    getUsers(0)
  })
  
  function handleCurrentChange(handleCurrentChange) {
    getUsers(handleCurrentChange - 1)
  }
  
  async function getUsers(page) {
    tblLoading.value = true
    await globalAPI().post(`mCharges/chargesList?page=${page}&size=${pageSize.value}&search=${txtSearch.value}`)
        .then(async (response) => {
  
            if (response.status == 200) {

                chargesList.value = response.data.chargesList
                paginationPage.value = response.data.chargesCount
                tblLoading.value = false    
              
            }
            else if (response.status == 202 || response.status == 401) {
  
  
                slawStatusPopUpError(response.data)
  
            } else {
  
                slawStatusPopUpError(response.data)
            }
            tblLoading.value = false
  
        }).catch((error) => {
            tblLoading.value = false
            swalPopUp(error, "Can't connect to server")
  
        })
  }
  
  function addCharges() {
    router.replace('/maintenance/mCharges/addCharges')
  }
  
  function editCharges(editSelectedCharges) {
  
    sessionStorage.setItem('editCharges', JSON.stringify(editSelectedCharges))
    router.replace('/maintenance/mCharges/editCharges')
  }
  
  
  </script>
    
    
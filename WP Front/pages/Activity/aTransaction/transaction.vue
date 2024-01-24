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
                    <span class="ml-1 text-sm font-medium  md:ml-2 text-gray-400">Activity</span>
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
                    <span class="ml-1 text-sm font-medium  md:ml-2 text-gray-400">Transaction</span>
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
                        <input v-model="getxtSearchReference" @keypress.enter="getReference(0)"
                            class="font-bold rounded-full w-full py-2 pl-2 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                            type="text" placeholder="Search">

                        <div @click="getReference(0)" class="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">

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

            <button type="button" @click="visible = true"
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
                                Reference#
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Reference Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Customer Code
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Customer Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Customer Address
                            </th>
                            <th scope="col" class="px-6 py-3 text-right">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <!--  -->
                    <tbody v-if="tblReferenceLoading == false">
                        <tr v-for="datas, index in referenceList" class="bg-white border-b  hover:bg-gray-50 ">

                            <td class="px-6 py-4">
                                {{ datas.referenceNumber }}
                            </td>
                            <td class="px-6 py-4">
                                {{ datas.referenceDate }}
                            </td>
                            <td class="px-6 py-4">
                                {{ datas.customerCode }}
                            </td>
                            <td class="px-6 py-4">
                                {{ datas.customerName }}
                            </td>
                            <td class="px-6 py-4">
                                {{ datas.companyAddress }}
                            </td>
                            <td class="px-6 py-4 text-right">
                                <button type="button" @click="editTransaction(datas)"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                        <line x1="16" y1="5" x2="19" y2="8" />
                                    </svg>

                                </button>
                                <button type="button" @click="print(datas.referenceNumber,index)" :disabled="printLoading[index]"
                                    class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center mr-2 ">
                                    <svg v-if="printLoading[index] == false" class="h-4 w-4 text-white" width="24" height="24"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                                        <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                                        <rect x="7" y="13" width="10" height="8" rx="2" />
                                    </svg>
                                   
                                        <svg v-else aria-hidden="true"
                                            class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor" />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill" />
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    
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
                            <td role="status" class="max-w-sm animate-pulse">
                                <div class=" h-7 bg-gray-200 rounded-lg m-2"></div>
                            </td>
                            <td role="status" class="max-w-sm animate-pulse">
                                <div class=" h-7 bg-gray-200 rounded-lg m-2"></div>
                            </td>
                        </tr>

                    </tbody>

                </table>

                <el-empty v-if="referenceList == '' && tblReferenceLoading == false" :image-size="200" />

            </div>
            <br>
            <el-pagination layout=" sizes,prev, pager, next, jumper, -> ,total"
                @current-change="handleCurrentChangeReference" :page-sizes="[10, 20, 50, 100]"
                v-model:page-size="pageSizeReference" :total="referenceCount" />




            <!-- dialog -->



            <el-dialog v-model="visible" :show-close="false" width="50%" :style="{ borderRadius: '20px' }">
                <template #header="{ titleId, titleClass }">
                    <div class="my-header">
                        <h1 :id="titleId" :class="titleClass">Select Customer</h1>
                        <!-- <el-button type="danger" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          Close
        </el-button> -->
                        <hr class="bg-blac">
                    </div>
                </template>


                <div>

                    <div class="flex flex-col p-2 py-6 w-80">

                        <div class="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-1  sticky"
                            style="top: 5px">
                            <input @keyup.enter="getCustomer(0)" v-model="getxtSearchCustomer"
                                class="font-bold rounded-full w-full py-2 pl-2 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                                type="text" placeholder="Search">

                            <div class="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">

                                <svg @click="getCustomer(0)" class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

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
                                    Position
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Company
                                </th>
                                <th scope="col" class="px-6 py-3 text-right">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody v-if="tblLoading == false">
                            <tr v-for="data in transactionList" class="bg-white border-b  hover:bg-gray-50 ">
                                <td class="px-6 py-4">
                                    {{ data.code }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ data.name }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ data.position }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ data.companyName }}
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button type="button" @click="selectedCustomer(data)"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>

                                    </button>

                                </td>
                            </tr>

                        </tbody>

                        <tbody v-else>
                            <tr v-for="index in 3">

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



                            </tr>

                        </tbody>

                    </table>
                    <el-empty v-if="transactionList == '' && tblLoading == false" :image-size="200" />
                </div>
                <br>
                <!-- sizes :page-sizes="[5, 30, 50, 100]"  v-model:page-size="pageSize"-->
                <el-pagination layout=" sizes,prev, pager, next, jumper, -> ,total" @current-change="handleCurrentChange"
                    :page-sizes="[3, 5, 10, 50]" v-model:page-size="pageSize" :total="paginationPage" />


                <div>
                    <br>
                </div>


            </el-dialog>


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
    userSelectedBranch = ref(JSON.parse(localStorage.getItem('userSelectedBranches'))),
    referenceList = ref([]),
    referenceCount = ref([]),
    getxtSearchCustomer = ref(''),
    getxtSearchReference = ref(''),
    transactionList = ref([]),
    paginationPage = ref(1),
    tblLoading = ref(false),
    tblReferenceLoading = ref(false),
    visible = ref(false),
    pageSize = ref(3),
    pageSizeReference = ref(10),
    printLoading = ref([false,false,false,false,false,false,false,false,false,false])

onMounted(() => {
    getReference(0)
    getCustomer(0)
})

function handleCurrentChange(handleCurrentChange) {
    getCustomer(handleCurrentChange - 1)
}

function handleCurrentChangeReference(handleCurrentChange) {
    getCustomer(handleCurrentChange - 1)
}


async function getReference(page) {
    tblReferenceLoading.value = true
    await globalAPI().post(`aTransaction/transactionList?userId=${userDetails.value.id}&page=${page}&size=${pageSizeReference.value}&search=${getxtSearchReference.value}&branchId=${userSelectedBranch.value}`)
        .then(async (response) => {

            if (response.status == 200) {

                referenceList.value = response.data.transactions
                referenceCount.value = response.data.transactionsCount
            }
            else if (response.status == 202 || response.status == 401) {


                slawStatusPopUpError(response.data)

            } else {

                slawStatusPopUpError(response.data)
            }
            tblReferenceLoading.value = false

        }).catch((error) => {
            tblReferenceLoading.value = false
            swalPopUp(error, "Can't connect to server")

        })
}

async function getCustomer(page) {
    tblLoading.value = true
    await globalAPI().post(`aTransaction/customerList?id=${userDetails.value.id}&page=${page}&size=${pageSize.value}&search=${getxtSearchCustomer.value}`)
        .then(async (response) => {

            if (response.status == 200) {

                transactionList.value = response.data.customerList
                paginationPage.value = response.data.customerCount
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

function editTransaction(selectedCustomer) {
    sessionStorage.setItem('selectedCustomerEdit', JSON.stringify(selectedCustomer))
    router.replace('/activity/aTransaction/editTransaction')
}

function selectedCustomer(selectedCustomer) {

    sessionStorage.setItem('selectedCustomer', JSON.stringify(selectedCustomer))
    router.replace('/activity/aTransaction/addTransaction')
}

async function print(refNum,index) {
    printLoading.value[index] = true
    await globalAPI().post(`aTransaction/htmlToPdf?referenceNumber=${refNum}&userId=${userDetails.value.id}`, null, {
        responseType: 'blob',
    })
        .then(async (response) => {
     
            if (response.status == 200) {


                const blob = new Blob([response.data], { type: 'application/pdf' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${refNum}-PDF.pdf`;
                a.click();
                window.URL.revokeObjectURL(url);
                printLoading.value[index] = false
            }
            else if (response.status == 202 || response.status == 401) {
            
                printLoading.value[index] = false
                slawStatusPopUpError(response.data)

            } else {
                printLoading[index].value = false
                slawStatusPopUpError(response.data)
            }
       

        }).catch((error) => {
            printLoading.value[index] = false
            swalPopUp(error, "Can't connect to server")

        })
}
</script>
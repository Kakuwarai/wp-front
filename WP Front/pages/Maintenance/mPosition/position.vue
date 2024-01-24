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
                    <span class="ml-1 text-sm font-medium  md:ml-2 text-gray-400">Position</span>
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
                        <input v-model="txtSearch" @keypress.enter="getPosition(0)"
                            class="font-bold rounded-full w-full py-2 pl-2 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                            type="text" placeholder="Search">

                        <div @click="getPosition(0)"
                            class="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">

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

            <button type="button" @click="addDialog()"
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
                                Created By
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Created Date
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3 text-right">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="tblLoading == false">
                        <tr v-for="data in positionrList" class="bg-white border-b  hover:bg-gray-50 ">
                            <td class="px-6 py-4">
                                {{ data.code }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.createdByUserId }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.createdDate }}
                            </td>
                            <td class="px-6 py-4">
                                <span v-if="data.status == 1"
                                    class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-green-400">Active</span>
                                <span v-else
                                    class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-red-400">Inactive</span>
                            </td>
                            <td class="px-6 py-4 text-right">
                                <button type="button" @click="editDialog(data)"
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
                            <td role="status" class="max-w-sm animate-pulse text-right">
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
                <el-empty v-if="positionrList == '' && tblLoading == false" :image-size="200" />
            </div>
            <br>
            <el-pagination layout="sizes ,prev, pager, next, jumper, -> ,total" @current-change="handleCurrentChange"
                v-model:page-size="pageSize" :total="paginationPage" :page-sizes="[10, 50, 100, 200]" />

        </div>
    </div>


    <el-dialog v-model="addPositionDialog" :title="  isAdd ? 'ADD POSITION':'EDIT POSITION' " width="30%" :before-close="handleClose">

        <el-form :label-position="labelPosition" ref="formRef" :model="positionInputs" label-width="130px">
            <el-form-item label="Code" prop="code" :rules="[
                { required: true, message: 'Code is required' },
                // { type: 'string', message: 'age must be a number' },
            ]">
                <el-input v-model.number="positionInputs.code" type="text" autocomplete="off" :disabled="!isAdd"/>
            </el-form-item>

            <el-form-item label="Name" prop="name" :rules="[
                { required: true, message: 'Name is required' },
                // { type: 'string', message: 'age must be a number' },
            ]">
                <el-input v-model.number="positionInputs.name" type="text" autocomplete="off" />
            </el-form-item>

            <el-form-item v-if="!isAdd" label="Status" prop="status" :rules="[
                { required: true, message: 'Status is required' },
                // { type: 'string', message: 'age must be a number' },
            ]">

            <el-select v-model.number="positionInputs.status" placeholder="Select">
            <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value"
                :disabled="item.disabled" />
        </el-select>
            </el-form-item>

          
        </el-form>


        <template #footer>
            <span class="dialog-footer">
                <el-button @click="addPositionDialog = false">Cancel</el-button>
                <el-button type="primary" @click="isAdd ?addPosition():savePosition()">
                    {{ isAdd ? 'ADD':'SAVE' }}
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

  
    
<script setup>
import Swal from 'sweetalert2';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { globalAPI, swalPopUp, swalLoad,slawStatusPopUp, slawStatusPopUpError, slawStatusPopUpWarning } from '@/services/globalFunctions'

const router = useRouter(),
    userDetails = ref(JSON.parse(localStorage.getItem('login'))),
    txtSearch = ref(''),
    positionrList = ref([]),
    paginationPage = ref(1),
    tblLoading = ref(false),
    pageSize = ref(10),
    addPositionDialog = ref(false),
    option = ref([{
        value: true,
        label: "ACTIVE",
    },
        {
            value: false,
            label: "INACTIVE",
        }]),
    positionInputs = ref({
        id:'',
        code: '',
        name: '',
        status: true,

    }),
    labelPosition = ref('top'), 
    isAdd = ref(true)
   


onMounted(() => {
    getPosition(0)
})

function handleCurrentChange(handleCurrentChange) {
    getPosition(handleCurrentChange - 1)
}

async function getPosition(page) {
    tblLoading.value = true
    await globalAPI().post(`mPosition/positionList?page=${page}&size=${pageSize.value}&search=${txtSearch.value}`)
        .then(async (response) => {

            if (response.status == 200) {

                positionrList.value = response.data.positionList
                paginationPage.value = response.data.positionCount
                tblLoading.value = false
                console.log(positionrList.value);
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

function addDialog() {
    positionInputs.value.code =''
    positionInputs.value.name = ''
    isAdd.value = true
    addPositionDialog.value = true
}

function editDialog(editSelectedCustomer) {
    positionInputs.value.id = editSelectedCustomer.id
    positionInputs.value.code = editSelectedCustomer.code
    positionInputs.value.name = editSelectedCustomer.name
    positionInputs.value.status = editSelectedCustomer.status
    isAdd.value = false
    addPositionDialog.value = true
}


async function addPosition() {
    tblLoading.value = true
    await globalAPI().post(`mPosition/positionAdd?`,{
        'Code':positionInputs.value.code,
        'Name':positionInputs.value.name,
        'Status':true,
        'CreatedByUserId':userDetails.value.id
    })
        .then(async (response) => {

            if (response.status == 200) {
                getPosition(0)
                slawStatusPopUp('Successfully added!')
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
async function savePosition() {
    tblLoading.value = true
    await globalAPI().post(`mPosition/positionEdit?`,{
        'Id':positionInputs.value.id,
        'Code':positionInputs.value.code,
        'Name':positionInputs.value.name,
        'Status':positionInputs.value.status,
        'ModifiedByUserId':userDetails.value.id
    })
        .then(async (response) => {

            if (response.status == 200) {
                getPosition(0)
                slawStatusPopUp('Successfully added!')
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
</script>
    
    

<style>
.example-showcase .el-loading-mask {
    z-index: 9;
}
</style>
<template>
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
            <li>
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <a class="cursor-pointer ml-1 text-sm font-medium text-gray-700  md:ml-2 " @click="$router.replace('/maintenance/mBranches/branches')">Branches</a>
                </div>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="ml-1 text-sm font-medium  md:ml-2 text-gray-400">Add</span>
                </div>
            </li>
        </ol>
    </nav>

    <br>

    <div v-loading="loadingBranch" element-loading-text="Loading..." :element-loading-spinner="svg"
        element-loading-svg-view-box="-10, -10, 50, 50" element-loading-background="rgba(255, 255, 255, 0.8)"
        style="width: 100%" class="flex flex-wrap">
        <div class="w-full rounded-3xl bg-white p-6 shadow :bg-gray-900">




            <div aria-label="A complete example of page header">
                <el-page-header @back="onBack">

                    <template #content>
                        <div class="flex items-center">

                            <span class="text-large font-600 mr-3"> Branches </span>

                            <el-tag>Add</el-tag>
                        </div>
                    </template>
                </el-page-header>
            </div>
            <br>

            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">

                <div class="w-full">
                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Code<span
                                class="text-red-600">*</span>
                        </label>
                        <input type="text" v-model="branchesDetails.code" @keypress="cancelError('code')"
                            :class="errorCode == true ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''"
                            :placeholder="errorCode == true ? 'Please enter code!' : 'Enter code'"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500">
                    </div>
                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Name<span
                                class="text-red-600">*</span>
                        </label>
                        <input type="text" v-model="branchesDetails.name" @keypress="cancelError('name')"
                            :class="errorName == true ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''"
                            :placeholder="errorName == true ? 'Please enter name!' : 'Enter name'"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500">
                    </div>
                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Address<span
                                class="text-red-600">*</span>
                        </label>
                        <input type="text" v-model="branchesDetails.address" @keypress="cancelError('address')"
                            :class="errorAddress == true ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''"
                            :placeholder="errorAddress == true ? 'Please enter address!' : 'Enter address'"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500">
                    </div>
                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Postal Code<span
                                class="text-red-600">*</span>
                        </label>
                        <input type="text" v-model="branchesDetails.postalCode" @keypress="cancelError('postalCode')"
                            :class="errorPostalCode == true ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''"
                            :placeholder="errorPostalCode == true ? 'Please enter postal code!' : 'Enter postal code'"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500">
                    </div>
                </div>
                <div class="w-full">
                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Area<span
                                class="text-red-600">*</span>
                        </label>
                        <input type="text" v-model="branchesDetails.area" @keypress="cancelError('area')"
                            :class="errorArea == true ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''"
                            :placeholder="errorArea == true ? 'Please enter area!' : 'Enter area'"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500">
                    </div>
                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Region<span
                                class="text-red-600">*</span>
                        </label>
                        <input type="text" v-model="branchesDetails.region" @keypress="cancelError('region')"
                            :class="errorRegion == true ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''"
                            :placeholder="errorRegion == true ? 'Please enter region!' : 'Enter region'"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500">
                    </div>

                </div>


                <div>

                    <button type="button" @click="savebutton()" :disabled="loadingSave"
                        class="text-white bg-[#3b984a] hover:bg-[#3b984a]/90 focus:ring-4 focus:outline-none focus:ring-[#3b984a]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center :focus:ring-[#3b984a]/55 mr-2 mb-2">

                        <svg v-if="loadingSave == true" aria-hidden="true"
                            class="w-4 h-4 mr-2 text-gray-200 animate-spin :text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>

                        <svg v-else class=" mr-1 h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                            <polyline points="17 21 17 13 7 13 7 21" />
                            <polyline points="7 3 7 8 15 8" />
                        </svg>
                        <span v-if="loadingSave"> Adding </span>
                        <span v-else> Add </span>
                        <svg v-if="loadingSave" version="1.1" xmlns="http://www.w3.org/2000/svg" width="15px" height="10px"
                            viewBox="0 0 80 20">
                            <circle cx="10" cy="20" r="10" fill="#FFFFFF">
                                <animate attributeName="cx" from="10" to="40" dur="0.5s" calcMode="spline"
                                    keySplines="0.42 0 0.58 1" keyTimes="0;1" repeatCount="indefinite" />
                            </circle>
                            <circle cx="10" cy="10" r="0" fill="#FFFFFF">
                                <animate attributeName="r" from="0" to="10" dur="0.5s" calcMode="spline"
                                    keySplines="0.42 0 0.58 1" keyTimes="0;1" repeatCount="indefinite" />
                            </circle>
                            <circle cx="40" cy="10" r="10" fill="#FFFFFF">
                                <animate attributeName="cx" from="40" to="70" dur="0.5s" calcMode="spline"
                                    keySplines="0.42 0 0.58 1" keyTimes="0;1" repeatCount="indefinite" />
                            </circle>
                            <circle cx="70" cy="10" r="10" fill="#FFFFFF">
                                <animate attributeName="r" from="10" to="0" dur="0.5s" calcMode="spline"
                                    keySplines="0.42 0 0.58 1" keyTimes="0;1" repeatCount="indefinite" />
                            </circle>
                        </svg>
                    </button>
                </div>


            </div>


        </div>
    </div>
</template>
    
<script setup>
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { ref } from "vue";
import { globalAPI, swalLoad, swalPopUp, slawStatusPopUpError, slawStatusPopUp } from '@/services/globalFunctions'
import Paginate from 'vuejs-paginate-next';
import Swal from 'sweetalert2';

const branchesDetails = ref({
    'code': '',
    'name': '',
    'address': '',
    'postalCode': '',
    'area': '',
    'region': '',
}),
    userDetails = ref(JSON.parse(localStorage.getItem('login'))),
    userBranch = ref([]),
    options = ref([]),
    loadingBranch = ref(false),
    loadingSave = ref(false),
    router = useRouter(), svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,
    errorCode = ref(false),
    errorName = ref(false),
    errorAddress = ref(false),
    errorPostalCode = ref(false),
    errorArea = ref(false),
    errorRegion = ref(false),
    txtSave = ref('Save')
// loadingInstance2  = ElLoading.service({ fullscreen: true })

const onBack = () => {
    router.replace('/maintenance/mBranches/branches')
}

onMounted(() => {

})

function cancelError(input) {
    if (input == 'code') {
        errorCode.value = false
    } else if (input == 'name') {
        errorName.value = false
    }
    else if (input == 'address') {
        errorAddress.value = false
    }
    else if (input == 'postalCode') {
        errorPostalCode.value = false
    }
    else if (input == 'area') {
        errorArea.value = false
    }
    else if (input == 'region') {
        errorRegion.value = false
    }
}

async function savebutton() {

    if (branchesDetails.value.code == '') {
        errorCode.value = true
    } if (branchesDetails.value.name == '') {
        errorName.value = true
    }
    if (branchesDetails.value.address == '') {
        errorAddress.value = true
    }
    if (branchesDetails.value.postalCode == '') {
        errorPostalCode.value = true
    }
    if (branchesDetails.value.area == '') {
        errorArea.value = true
    }
    if (branchesDetails.value.region == '') {
        errorRegion.value = true
    }


    if (branchesDetails.value.code != '' &&
        branchesDetails.value.name != '' &&
        branchesDetails.value.address != '' &&
        branchesDetails.value.postalCode != '' &&
        branchesDetails.value.area != '' &&
        branchesDetails.value.region != '') {



        loadingSave.value = true
        await globalAPI().post(`mBranches/branchAdd`,
            {
                code: branchesDetails.value.code,
                name: branchesDetails.value.name,
                address1: branchesDetails.value.address,
                postalCode: branchesDetails.value.postalCode,
                area: branchesDetails.value.area,
                region: branchesDetails.value.region,
                createdByUserId: userDetails.value.id,
                status: 1,

            }
        )
            .then(async (response) => {

                if (response.status == 200) {
                    branchesDetails.value.code = ''
                    branchesDetails.value.name = ''
                    branchesDetails.value.address = ''
                    branchesDetails.value.postalCode = ''
                    branchesDetails.value.area = ''
                    branchesDetails.value.region = ''

                    slawStatusPopUp("Success")
                    loadingSave.value = false

                }
                else if (response.status == 202 || response.status == 401) {

                    loadingSave.value = false
                    slawStatusPopUpError(response.data)

                }
                else if (response.status == 208) {

                    errorCode.value = true

                    loadingSave.value = false
                    slawStatusPopUpError(response.data)



                }
                else {
                    loadingSave.value = false
                    slawStatusPopUpError(response.data)
                }

            }).catch((error) => {
                loadingSave.value = false
                swalPopUp(error, "Can't connect to server")

            })
    }



}

</script>
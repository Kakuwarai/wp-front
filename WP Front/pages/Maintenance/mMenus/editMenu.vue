
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
                    <a class="cursor-pointer ml-1 text-sm font-medium text-gray-700  md:ml-2 "
                        @click="$router.replace('/maintenance/mMenus/menu')">Menus</a>
                </div>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="ml-1 text-sm font-medium  md:ml-2 text-gray-400">Edit</span>
                </div>
            </li>
        </ol>
    </nav>

    <br>

    <div v-loading="loading" :element-loading-text="whoIsLoading" :element-loading-spinner="svg"
        element-loading-svg-view-box="-10, -10, 50, 50" element-loading-background="rgba(255, 255, 255, 0.8)"
        style="width: 100%" class="flex flex-wrap">
        <div class="w-full rounded-3xl bg-white p-6 shadow :bg-gray-900">




            <div aria-label="A complete example of page header">
                <el-page-header @back="onBack">

                    <template #content>
                        <div class="flex items-center">

                            <span class="text-large font-600 mr-3"> Menu </span>

                            <el-tag>Edit</el-tag>
                        </div>
                    </template>
                </el-page-header>
            </div>
            <br>
            <h1 class="text-2xl font-bold ">Activity</h1>
            <hr>
            <br>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">

                <button @click="checked[0] == true? checked[0]=false:checked[0]=true"
                :class=" checked[0]?'shadow-blue-100 border-blue-200': 'shadow-gray-100 border-gray-200' "
                class="p-5 border rounded-2xl shadow-xl  hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Transaction
                        <el-tag :type="checked[0]? '':'info'">{{ checked[0]?'Active':'Inactive' }}</el-tag>
                    </h5>
                  
                </button>

            </div>
            <br> <br>
            <h1 class="text-2xl font-bold ">Maintenance</h1>
            <hr>
            <br>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">

                <button  @click="checked[1] == true? checked[1]=false:checked[1]=true"
                :class=" checked[1]?'shadow-blue-100 border-blue-200': 'shadow-gray-100 border-gray-200' "
                class="p-5 border rounded-2xl shadow-xl hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Users
                        <el-tag :type="checked[1]? '':'info'">{{ checked[1]?'Active':'Inactive' }}</el-tag>
                    </h5>
                  
                </button>

                <button  @click="checked[2] == true? checked[2]=false:checked[2]=true"
                :class=" checked[2]?'shadow-blue-100 border-blue-200': 'shadow-gray-100 border-gray-200' "
                class="p-5 border rounded-2xl shadow-xl hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Branches
                        <el-tag :type="checked[2]? '':'info'">{{ checked[2]?'Active':'Inactive' }}</el-tag>
                    </h5>
                  
                </button>

                <button  @click="checked[3] == true? checked[3]=false:checked[3]=true"
                :class=" checked[3]?'shadow-blue-100 border-blue-200': 'shadow-gray-100 border-gray-200' "
                class="p-5 border rounded-2xl shadow-xl hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Menus
                        <el-tag :type="checked[3]? '':'info'">{{ checked[3]?'Active':'Inactive' }}</el-tag>
                    </h5>
                  
                </button>


                <button  @click="checked[4] == true? checked[4]=false:checked[4]=true"
                :class=" checked[4]?'shadow-blue-100 border-blue-200': 'shadow-gray-100 border-gray-200' "
                class="p-5 border rounded-2xl shadow-xl hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Customer
                        <el-tag :type="checked[4]? '':'info'">{{ checked[4]?'Active':'Inactive' }}</el-tag>
                    </h5>
                  
                </button>

                <button  @click="checked[5] == true? checked[5]=false:checked[5]=true"
                :class=" checked[5]?'shadow-blue-100 border-blue-200': 'shadow-gray-100 border-gray-200' "
                class="p-5 border rounded-2xl shadow-xl hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Charges 
                        <el-tag :type="checked[5]? '':'info'">{{ checked[5]?'Active':'Inactive' }}</el-tag>
                    </h5>
                  
                </button>

                <button  @click="checked[6] == true? checked[6]=false:checked[6]=true"
                :class=" checked[6]?'shadow-blue-100 border-blue-200': 'shadow-gray-100 border-gray-200' "
                class="p-5 border rounded-2xl shadow-xl hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Terms 
                        <el-tag :type="checked[6]? '':'info'">{{ checked[6]?'Active':'Inactive' }}</el-tag>
                    </h5>
                  
                </button>

                <button  @click="checked[7] == true? checked[7]=false:checked[7]=true"
                :class=" checked[7]?'shadow-blue-100 border-blue-200': 'shadow-gray-100 border-gray-200' "
                class="p-5 border rounded-2xl shadow-xl hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Position 
                        <el-tag :type="checked[7]? '':'info'">{{ checked[7]?'Active':'Inactive' }}</el-tag>
                    </h5>
                  
                </button>
                

            </div>
            <br>
            <br>
            <br>
            <br>
        <div class="flex justify-end">
            <button type="button" @click="btnSave()" 
                        class="text-white bg-[#3b984a] hover:bg-[#3b984a]/90 focus:ring-4 focus:outline-none focus:ring-[#3b984a]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center :focus:ring-[#3b984a]/55 mr-2 mb-2">
                        <svg class=" mr-1 h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                            <polyline points="17 21 17 13 7 13 7 21" />
                            <polyline points="7 3 7 8 15 8" />
                        </svg>
                     
                        <span > Save </span>
                      
                    </button>
        </div>

<br>
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


const userDetails = ref(JSON.parse(localStorage.getItem('login'))),
    userMenuData = ref(),
    loading = ref(false),
    whoIsLoading = ref('loading....'),
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
      checked = ref([false, false, false, false, false,false,false,false]),
      onBack = () => {
        router.replace('/maintenance/mMenus/menu')
    }

onMounted(() => {
    userMenuData.value = JSON.parse(sessionStorage.getItem('editMenu'))

    userMenu()
})

async function userMenu() {
    loading.value = true
    await globalAPI().post(`mMenu/userMenus?id=${userMenuData.value[0]}&branchCode=${userMenuData.value[1]}`)
        .then(async (response) => {

            if (response.status == 200) {
              
                if(response.data.length != 0){
                    response.data.forEach(element => {
                        if(element.menuId == 3){
                            checked.value[0] = true
                        }
                        if (element.menuId == 4) {
                            checked.value[1] = true
                        }
                        if (element.menuId == 5) {
                            checked.value[2] = true
                        }
                        if (element.menuId == 6) {
                            checked.value[3] = true
                        }
                        if (element.menuId == 7) {
                            checked.value[4] = true
                        }
                        if (element.menuId == 8) {
                            checked.value[5] = true
                        }
                        if (element.menuId == 9) {
                            checked.value[6] = true
                        }
                        if (element.menuId == 10) {
                            checked.value[7] = true
                        }
                        
                    });
                }
                loading.value = false
            }
            else if (response.status == 202 || response.status == 401) {

                loading.value = false
                slawStatusPopUpError(response.data)

            } else {
                loading.value = false
                slawStatusPopUpError(response.data)
            }


        }).catch((error) => {
            loading.value = false
            swalPopUp(error, "Can't connect to server")
        })
}

async function btnSave() {
    whoIsLoading.value = 'Saving...'
    loading.value = true
    await globalAPI().post(`mMenu/userMenusSave`,{
        'userId' : userDetails.value.id,
        'selectedUserId':userMenuData.value[0],
        'transaction' :checked.value[0],
        'users':checked.value[1],
        'customer':checked.value[4],
        'branches':checked.value[2],
        'menus':checked.value[3],
        'charges':checked.value[5],
        'terms':checked.value[6],
        'position':checked.value[7],
        'branchCode':userMenuData.value[1],
    })
        .then(async (response) => {

            if (response.status == 200) {
              
                if(response.data.length != 0){
                    response.data.forEach(element => {
                        if(element.menuId == 3){
                            checked.value[0] = true
                        }
                        if (element.menuId == 4) {
                            checked.value[1] = true
                        }
                        if (element.menuId == 5) {
                            checked.value[2] = true
                        }
                        if (element.menuId == 6) {
                            checked.value[3] = true
                        }
                        if (element.menuId == 7) {
                            checked.value[4] = true
                        }
                        if (element.menuId == 8) {
                            checked.value[5] = true
                        }
                        if (element.menuId == 9) {
                            checked.value[6] = true
                        }
                        if (element.menuId == 10) {
                            checked.value[7] = true
                        }
                       
                    });
                  
                }
                
                        slawStatusPopUp("Success","Successfully Saved")
                loading.value = false
            }
            else if (response.status == 202 || response.status == 401) {

                loading.value = false
                slawStatusPopUpError(response.data)

            } else {
                loading.value = false
                slawStatusPopUpError(response.data)
            }


        }).catch((error) => {
            loading.value = false
            swalPopUp(error, "Can't connect to server")
        })
}

</script>
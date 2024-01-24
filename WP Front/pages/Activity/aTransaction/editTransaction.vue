<template  >
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
          <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
          <span class="ml-1 text-sm font-medium  md:ml-2 text-gray-400">Maintenance</span>
        </div>
      </li>
      <li>
        <div class="flex items-center">
          <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
          <a class="cursor-pointer ml-1 text-sm font-medium text-gray-700  md:ml-2 "
            @click="$router.replace('/activity/aTransaction/transaction')">Transaction</a>
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
          <span class="ml-1 text-sm font-medium  md:ml-2 text-gray-400">Edit</span>
        </div>
      </li>
    </ol>
  </nav>

  <br>

  <div class="flex flex-wrap" v-loading="storageTypeLoading" element-loading-text="Loading..."
    :element-loading-spinner="svg" element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(255, 255, 255, 0.8)" style="width: 100%">
    <div class="w-full rounded-3xl bg-white p-6 ">


      <div aria-label="A complete example of page header">
        <el-page-header @back="onBack">

          <template #content>
            <div class="flex items-center">

              <span class="text-large font-600 mr-3"> Transaction </span>

              <el-tag>Edit</el-tag>
            </div>
          </template>
        </el-page-header>
      </div>
      <br>

      <el-form :label-position="labelPosition" ref="formRef" :model="numberValidateForm" label-width="130px">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="w-full">

            <el-form-item label="Reference" prop="reference" :rules="[
              { required: true, message: 'Reference is required' },
              // { type: 'string', message: 'age must be a number' },
            ]">
              <el-input disabled="true" v-model.number="numberValidateForm.reference" type="text" autocomplete="off" />
            </el-form-item>

            <el-form-item label="Reference Date" prop="referenceDate" :rules="[
              { required: true, message: 'Reference Date is required' },
              // { type: 'string', message: 'age must be a number' },
            ]">
              <el-date-picker v-model="numberValidateForm.referenceDate" format="MM/DD/YYYY" type="date"
                placeholder="Pick a date" clearable />
            </el-form-item>

            <el-form-item label="Customer Code" prop="customerCode" :rules="[
              { required: true, message: 'Customer Code is required' },
              // { type: 'string', message: 'age must be a number' },
            ]">
              <div class="grid gap-4 sm:grid-cols-2 sm:gap-1">
                <el-button type="plain" bg class="w-[100px]" @click="visible = true">


<span class="mr-1">{{ numberValidateForm.customerCode }}</span>
<svg class="h-4 w-4 text-blue" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" />
  <polyline points="16 3 20 7 16 11" />
  <line x1="10" y1="7" x2="20" y2="7" />
  <polyline points="8 13 4 17 8 21" />
  <line x1="4" y1="17" x2="13" y2="17" />
</svg>
</el-button>
              </div>
            </el-form-item>


            <el-form-item label="Customer Name" prop="customerName" :rules="[
              { required: true, message: 'Customer Name is required' },
              // { type: 'string', message: 'age must be a number' },
            ]">
              <el-input :disabled="true" v-model.number="numberValidateForm.customerName" type="text"
                autocomplete="off" />
            </el-form-item>


            <el-form-item label="Remarks" prop="remarks" :rules="[
              { required: true, message: 'Remarks is required' },
              // { type: 'string', message: 'age must be a number' },
            ]">
             <el-input v-model="numberValidateForm.remarks" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
                placeholder="Please input" />
            </el-form-item>
          </div>

          <div class="w-full">

            <el-form-item label="Service Address" prop="serviceAddress" :rules="[
              { required: true, message: 'Service Address is required' },
              // { type: 'string', message: 'age must be a number' },
            ]">
              <el-input v-model.number="numberValidateForm.serviceAddress" type="text" autocomplete="off" />
            </el-form-item>

            <el-form-item label="Storage Type" prop="storageType" :rules="[
              { required: true, message: 'Storage Type is required' },
              // { type: 'string', message: 'age must be a number' },
            ]">
              <el-select v-model="numberValidateForm.storageType" placeholder="Storage Type" clearable>
                <span v-for="data in storageTypeList">
                  <el-option :label="data.display" :value="data.value" />
                </span>

              </el-select>
            </el-form-item>

            <el-form-item label="Commodity" prop="commodity" :rules="[
              { required: true, message: 'Commodity is required' },
              // { type: 'string', message: 'age must be a number' },
            ]">
              <el-input v-model.number="numberValidateForm.commodity" type="text" autocomplete="off" />
            </el-form-item>

            <el-form-item label="Noted By" prop="notedBy" :rules="[
              { required: true, message: 'Noted By is required' },
              // { type: 'string', message: 'age must be a number' },
            ]">
   <el-button class="w-[100%]" @click="visibleNotedBy = true" type="plain" bg>{{ numberValidateForm.notedBy }}
              </el-button>
            </el-form-item>

          </div>

        </div>
        <!-- <el-form-item>
            <el-button type="primary" @click="submitForm">Submit</el-button>
            <el-button @click="resetForm">Reset</el-button>
          </el-form-item> -->
      </el-form>

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
                    <svg class="h-4 w-4 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="16 3 20 7 16 11" />
                      <line x1="10" y1="7" x2="20" y2="7" />
                      <polyline points="8 13 4 17 8 21" />
                      <line x1="4" y1="17" x2="13" y2="17" />
                    </svg>
                    <span class="ml-1">Switch</span>

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


      <el-dialog v-model="visibleNotedBy" :show-close="false" width="50%" :style="{ borderRadius: '20px' }">
        <template #header="{ titleId, titleClass }">
          <div class="my-header">
            <h1 :id="titleId" :class="titleClass">Select User</h1>

            <hr class="bg-blac">
          </div>
        </template>


        <div>

          <div class="flex flex-col p-2 py-6 w-80">

            <div class="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-1  sticky"
              style="top: 5px">
              <input @keyup.enter="getNotedBy(0)" v-model="getSearchNotedBy"
                class="font-bold rounded-full w-full py-2 pl-2 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                type="text" placeholder="Search">

              <div class="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">

                <svg @click="getNotedBy(0)" class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg"
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
                  Firstname
                </th>
                <th scope="col" class="px-6 py-3">
                  Middlename
                </th>
                <th scope="col" class="px-6 py-3">
                  Lastname
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3 text-right">
                  Select
                </th>
              </tr>
            </thead>
            <tbody v-if="notedByLoading == false">
              <tr v-for="data in notedByList" class="bg-white border-b  hover:bg-gray-50 ">
                <td class="px-6 py-4">
                  {{ data.firstname }}
                </td>
                <td class="px-6 py-4">
                  {{ data.middlename }}
                </td>
                <td class="px-6 py-4">
                  {{ data.lastname }}
                </td>
                <td class="px-6 py-4">
                  <span v-if="data.status == 1"
                    class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-green-400">Active</span>

                </td>
                <td class="px-6 py-4 text-right">
                  <button type="button" @click="selectNotedBy(data)"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
          <el-empty v-if="notedByList == '' && notedByLoading == false" :image-size="200" />
        </div>
        <br>

        <el-pagination layout=" sizes,prev, pager, next, jumper, -> ,total" @current-change="handleCurrentChangeNotedBy"
          :page-sizes="[3, 5, 10, 50]" v-model:page-size="pageSizeNotedBy" :total="notedByListPageSize" />


        <div>
          <br>
        </div>


      </el-dialog>

      <el-tabs v-if="numberValidateForm.remarks != '' &&
        numberValidateForm.serviceAddress != '' &&
        numberValidateForm.commodity != '' &&
        numberValidateForm.notedBy != ''
        " type="border-card" class="">
        <el-tab-pane label="Charge">

          <button type="button" @click="visibleCharge = true"
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
                    Row
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Charge Code
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Charge Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Charge Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Currency
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Rates
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Uom
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Remarks
                  </th>
                  <th scope="col" class="px-6 py-3 text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody v-if="tblLoading == false">
                <tr v-for="data, index in selectedChargeList" class="bg-white border-b  hover:bg-gray-50 ">
                  <td class="px-6 py-4">
                    {{ (index + 1) }}
                  </td>
                  <td class="px-6 py-4">
                    {{ data.chargeCode }}
                  </td>
                  <td class="px-6 py-4">
                    {{ data.chargeCategory }}
                  </td>
                  <td class="px-6 py-4">
                    {{ data.chargeName }}
                  </td>
                  <td class="px-6 py-4">
                    {{ data.currency }}
                  </td>
                  <td class="px-6 py-4">
                    <el-form-item>
                      <!--
                        :prop="'data.amount'" 
                        :rules="[
                        { required: true, message: 'Rate is required' },
                       { type: 'number', message: 'Rate must be a number' },
                      ]" -->

                      <el-input v-model="selectedToChangeChargeAmount[index]" type="number" autocomplete="off" />
                    </el-form-item>

                  </td>
                  <td class="px-6 py-4">
                    {{ data.uom }}
                  </td>
                  <td class="px-6 py-4">
                    <el-form-item>
                      <!--
                       :prop="'data.amount'" 
                       :rules="[
                       { required: true, message: 'Rate is required' },
                      { type: 'number', message: 'Rate must be a number' },
                     ]" -->

                      <el-input v-model="selectedToChangeChargeRemarks[index]" type="textarea" autocomplete="off" />
                    </el-form-item>

                  </td>
                  <td class="px-6 py-4 text-right">

                    <button type="button" @click="deleteCharge(data, index)"
                      class="text-white bg-rerd-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                      <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
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
                  <td role="status" class="max-w-sm animate-pulse text-right">
                    <div class=" h-7 bg-gray-200 rounded-lg m-2"></div>
                  </td>



                </tr>

              </tbody>

            </table>
            <el-empty v-if="selectedChargeList == '' && tblLoading == false" :image-size="200" />
          </div>

          <el-dialog v-model="visibleCharge" :show-close="false" width="80%" :style="{ borderRadius: '20px' }">
            <template #header="{ titleId, titleClass }">
              <div class="my-header">
                <h4 :id="titleId" :class="titleClass">Pick Rate</h4>
                <!-- <el-button type="danger" @click="close">
            <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
            Close
          </el-button> -->
                <hr class="bg-black">
              </div>
            </template>

            <div>

              <div class="w-80">

                <div class="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-1 mb-5 sticky"
                  style="top: 5px">
                  <input v-model="getxtSearchCustomerCharge" @keypress.enter="getRate(0)"
                    class="font-bold rounded-full w-full py-2 pl-2 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                    type="text" placeholder="Search">

                  <div class="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">

                    <svg @click="getRate(0)" class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg"
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
                      Row #
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Charge Code
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Charge Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Charge Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Currency
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Rates
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Uom
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Remarks
                    </th>
                    <th scope="col" class="px-6 py-3 text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <!--  -->
                <tbody v-if="tblLoading == false">
                  <tr v-for="datas, index in chargeList" class="bg-white border-b  hover:bg-gray-50 ">
                    <td class="px-6 py-4">
                      <span v-if="chargeCurrentPage == 1"> {{ (index + 1) }}</span>
                      <span v-else>
                        <span v-if="chargeCurrentPage == 2"> {{ (index + 1 + pageSizeCharge) }}</span>
                        <span v-else> {{ (index + 1) + (chargeCurrentPage * pageSizeCharge) }}</span>
                      </span>


                    </td>
                    <td class="px-6 py-4">
                      {{ datas.chargeCode }}
                    </td>
                    <td class="px-6 py-4">
                      {{ datas.chargeCategory }}
                    </td>
                    <td class="px-6 py-4">
                      {{ datas.chargeName }}
                    </td>
                    <td class="px-6 py-4">
                      {{ datas.currency }}
                    </td>
                    <td class="px-6 py-4">
                      {{ datas.rates }}
                    </td>
                    <td class="px-6 py-4">
                      {{ datas.uom }}
                    </td>
                    <td class="px-6 py-4">
                      {{ datas.remarks }}
                    </td>
                    <td class="px-6 py-4 text-right">

                      <button
                        v-if="selectedChargeList.filter(element => element['chargeCode'] == datas.chargeCode).length == 0"
                        type="button" @click="addCharge(datas)"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <line x1="12" y1="8" x2="12" y2="16" />
                          <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                      </button>
                      <!-- deleteCharge(datas,index) -->
                      <button v-else type="button" @click="" :disabled="true"
                        class="text-white/25 bg-gray-700/25 hover:bg-gray-800/25 focus:ring-4 focus:outline-none focus:ring-gray-300/25 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center mr-2 dark:bg-gray-600/25 dark:hover:bg-gray-700/25 dark:focus:ring-gray-800/25">
                        <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <line x1="12" y1="8" x2="12" y2="16" />
                          <line x1="8" y1="12" x2="16" y2="12" />
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
                    <td role="status" class="max-w-sm animate-pulse text-right">
                      <div class=" h-7 bg-gray-200 rounded-lg m-2"></div>
                    </td>



                  </tr>

                </tbody>

              </table>
              <el-empty v-if="chargeList == '' && tblLoading == false" :image-size="200" />
            </div>
            <br>
            <el-pagination layout="sizes ,prev, pager, next, jumper, -> ,total"
              @current-change="handleCurrentChangeCharge" :total="paginationPageCharge" v-model:page-size="pageSizeCharge"
              :page-sizes="[5, 10, 50, 100]" />
            <!--  -->


          </el-dialog>

        </el-tab-pane>
        <el-tab-pane label="Terms">


          <div class="mt-1 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Include?
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Code
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Description
                  </th>
                

                </tr>
              </thead>
              <tbody v-if="tblLoading == false">
                <tr v-for="data, index in termsList" class="bg-white border-b  hover:bg-gray-50 ">
                  <td class="px-6 py-4">
                    <el-checkbox v-model="data.check" :label="data.check == true ? 'YES' : 'NO'" size="large" />
                  </td>
                  <td class="px-6 py-4">
                    {{ data.termsAndConditionCode }}
                  </td>
                  <td class="px-6 py-4">
                    <!-- {{ data.termsAndConditionDescription }} -->
                    <span v-for="letter in data.termsAndConditionDescription.split(' ')">
                      <span v-if="letter.includes('{parameter')" class="font-bold">
                        <input v-if="letter.includes('parameter1')" type="text" v-model="data.parameter1"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[200px] p-1"
                          placeholder="Parameter">

                          <input v-if="letter.includes('parameter2')" type="text" v-model="data.parameter2"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[200px] p-1"
                          placeholder="Parameter">
                        <!-- <el-form-item class="w-28">

<el-input v-model="data.parameter1" type="text" autocomplete="off" />
</el-form-item> -->
                        &nbsp
                      </span>
                      <span v-else>{{ letter }} &nbsp</span>
                    </span>
                  </td>
                  <!-- <td class="px-6 py-4">
                    <el-form-item>
                    

                      <el-input v-model="data.parameter1" type="text" autocomplete="off" />
                    </el-form-item>
                  </td>
                  <td class="px-6 py-4">
                    <el-form-item>
                     

                      <el-input v-model="data.parameter2" type="text" autocomplete="off" />
                    </el-form-item>
                  </td> -->


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
                  <td role="status" class="max-w-sm animate-pulse text-right">
                    <div class=" h-7 bg-gray-200 rounded-lg m-2"></div>
                  </td>



                </tr>

              </tbody>

            </table>
            <el-empty v-if="termsList == '' && tblLoading == false" :image-size="200" />
          </div>

        </el-tab-pane>

      </el-tabs>
      <br>

      <div class="flex justify-end">
        <button @click="addTransaction()" type="button"
          :class="numberValidateForm.remarks != '' &&
            numberValidateForm.serviceAddress != '' &&
            numberValidateForm.commodity != '' &&
            numberValidateForm.notedBy != '' ? 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300' : 'bg-gray-700/25 hover:bg-gray-800/25 focus:ring-4 focus:outline-none focus:ring-gray-300/25'"
          class="px-4 py-3.5 text-base font-medium text-white inline-flex items-center rounded-lg text-center ">

          <svg class="mr-1 h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
          </svg>

          SAVE
        </button>

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
  
  function test() {
    // console.log(termsList.value);
  }
  
  const formRef = ref(null),
    storageTypeLoading = ref(false),
    selectedToChangeChargeAmount = ref([]),
    selectedToChangeChargeRemarks = ref([]),
    labelPosition = ref('left'),
    router = useRouter(),
    userDetails = ref(JSON.parse(localStorage.getItem('login'))),
    getxtSearchCustomer = ref(''),
    getxtSearchCustomerCharge = ref(''),
    selectedChargeList = ref([]),
    paginationPageSelectedCharge = ref(1),
    pageSizeCharge = ref(5),
    visibleNotedBy = ref(false),
    chargeCurrentPage = ref(1),
    termsList = ref([]),
    transactionList = ref([]),
    paginationPage = ref(1),
    tblLoading = ref(false),
    notedByLoading = ref(false),
    visible = ref(false),
    visibleTerms = ref(false),
    pageSizeNotedBy = ref(5),
    visibleCharge = ref(false),
    chargeList = ref([]),
    paginationPageCharge = ref(1),
    notedByListPageSize = ref(5),
    getSearchNotedBy = ref(''),
    notedByList = ref([]),
    pageSize = ref(5),
    selectedNotedBy = ref([0,'']),
    onBack = () => {
      router.replace('/activity/aTransaction/transaction')
    },
    selectedUserDetails = ref(JSON.parse(sessionStorage.getItem('selectedCustomerEdit'))),
    storageTypeList = ref([]),
    svg = `
          <path class="path" d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
        `,
    numberValidateForm = ref({
      reference: selectedUserDetails.value.referenceNumber,
      referenceDate: selectedUserDetails.value.referenceDate,
      customerCode: selectedUserDetails.value.customerCode,
      customerName: selectedUserDetails.value.customerName,
      remarks: selectedUserDetails.value.remarks,
      serviceAddress: selectedUserDetails.value.serviceAddress,
      storageType: selectedUserDetails.value.storageType,
      commodity: selectedUserDetails.value.commodity,
      notedBy: ''
    })
  
  
  
  onMounted(() => {
    getNotedBy(0)
    storageType()
    getCustomer(0)
  })
  
  function handleCurrentChangeCharge(handleCurrentChange) {
    getRate(handleCurrentChange - 1)
    chargeCurrentPage.value = handleCurrentChange
  }
  function handleCurrentChangeNotedBy(handleCurrentChange){
    getNotedBy(handleCurrentChange - 1)
  }
  async function storageType() {
    storageTypeLoading.value = true
    await globalAPI().post(`aTransaction/storageTypeEdit?transcId=${selectedUserDetails.value.notedByUserId}`)
      .then(async (response) => {
  
        if (response.status == 200) {
  
          storageTypeList.value = response.data.dropdown
        //   numberValidateForm.value.storageType = response.data.dropdown[0].value
          // chargeList.value = response.data.rate
          paginationPageCharge.value = response.data.rateCount
          // termsList.value =  response.data.termsAndCondition
          numberValidateForm.value.notedBy = response.data.notedUser
          selectedNotedBy.value[0] = selectedUserDetails.value.notedByUserId
          selectedNotedBy.value[1] = response.data.notedUser

          response.data.rate.forEach(element => {
         
            chargeList.value.push({
              'chargeCode': element.chargeCode,
              'chargeName': element.chargeName,
              'chargeCategory': element.chargeCategory,
              'rates': element.amount,
              'currency': element.currency,
              'uom': element.uom,
              'remarks': element.defaultRemarks
            })
          });
  console.log(chargeList.value);
          response.data.termsAndCondition.forEach(element => {
            termsList.value.push({
              'check': false,
              'termsAndConditionCode': element.code,
              'termsAndConditionDescription': element.description,
              'parameter1': '',
              'parameter2': ''
            })
          });


          await globalAPI().post(`aTransaction/referenceEdit?referenceNumber=${numberValidateForm.value.reference}`)
      .then(async (responseReferenceEdit) => {
  
        if (responseReferenceEdit.status == 200) {
  
       



            responseReferenceEdit.data.transactionDetail.forEach(element => {
              console.log(element);
            const temp = chargeList.value.filter(x => x['chargeCode'] == element.chargeCode)[0]

            selectedToChangeChargeAmount.value.push(element.rates.toString())
            selectedToChangeChargeRemarks.value.push(element.remarks)
           
            selectedChargeList.value.push({
              'chargeCode': element.chargeCode,
              'chargeName': temp.chargeName,
              'chargeCategory': temp.chargeCategory,
              'rates': element.rates,
              'currency': element.currency,
              'uom': element.uom,
              'remarks': element.remarks
            })
          });

          termsList.value.forEach(element => {
    
            responseReferenceEdit.data.transactionTermsCondition.forEach(check => {
               
                if(check.termsAndConditionCode == element.termsAndConditionCode){
                   
                    element.check = true
                    element.parameter1 = check.parameter1
                    element.parameter2 = check.parameter2
                }

            })
                    });

        

  


            storageTypeLoading.value = false
  
        }
        else if (responseReferenceEdit.status == 202 || responseReferenceEdit.status == 401) {
            storageTypeLoading.value = false
  
          slawStatusPopUpError(responseReferenceEdit.data)
  
        } else {
            storageTypeLoading.value = false
          slawStatusPopUpError(responseReferenceEdit.data)
        }
    
  
      }).catch((error) => {
        storageTypeLoading.value = false
        swalPopUp(error, "Can't connect to server")
  
      })



     
        }
        else if (response.status == 202 || response.status == 401) {
  
          storageTypeLoading.value = false
          slawStatusPopUpError(response.data)
  
        } else {
          storageTypeLoading.value = false
          slawStatusPopUpError(response.data)
        }
  
  
      }).catch((error) => {
        storageTypeLoading.value = false
        swalPopUp(error, "Can't connect to server")
  
      })
  
  }
  
  async function getNotedBy(page) {
    notedByLoading.value = true
  await globalAPI().post(`aTransaction/notedByList?&page=${page}&size=${pageSizeNotedBy.value}&search=${getSearchNotedBy.value}`)
    .then(async (response) => {

      if (response.status == 200) {

        notedByList.value = response.data.userList
        notedByListPageSize.value = response.data.userListCount

      }
      else if (response.status == 202 || response.status == 401) {


        slawStatusPopUpError(response.data)

      } else {

        slawStatusPopUpError(response.data)
      }

      notedByLoading.value = false
    }).catch((error) => {
      notedByLoading.value = false
      swalPopUp(error, "Can't connect to server")

    })
}

  function handleCurrentChange(handleCurrentChange) {
    getCustomer(handleCurrentChange - 1)
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
  
  function selectedCustomer(selectedCustomer) {
    sessionStorage.setItem('selectedCustomer', JSON.stringify(selectedCustomer))
    selectedUserDetails.value = selectedCustomer
    numberValidateForm.value.customerCode = selectedUserDetails.value.code
    numberValidateForm.value.customerName = selectedUserDetails.value.name
    visible.value = false
    // sessionStorage.setItem('selectedCustomer', JSON.stringify(selectedCustomer))
    //router.replace('/activity/aTransaction/addTransaction')
  }
  
  
  async function getRate(page) {
    tblLoading.value = true
    await globalAPI().post(`aTransaction/rateList?&page=${page}&size=${pageSizeCharge.value}&search=${getxtSearchCustomerCharge.value}`)
      .then(async (response) => {
  
        if (response.status == 200) {
  
          chargeList.value = []
        response.data.rate.forEach(element => {
          chargeList.value.push({
            'chargeCode': element.chargeCode,
            'chargeName': element.chargeName,
            'chargeCategory': element.chargeCategory,
            'rates': element.amount,
            'currency': element.currency,
            'uom': element.uom,
            'remarks': element.defaultRemarks
          })
        });
          paginationPageCharge.value = response.data.rateCount
  
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
  
  function addCharge(selectedData) {

    selectedToChangeChargeAmount.value.push(selectedData.rates.toString())
    selectedToChangeChargeRemarks.value.push(selectedData.remarks)
    selectedChargeList.value.push(selectedData)
  
  }
  
  function deleteCharge(selectedData, index) {
    // console.log(chargeList.value.filter(element => element['chargeCode'] == '101'));
    selectedToChangeChargeAmount.value.splice(index, 1)
    selectedToChangeChargeRemarks.value.splice(index, 1)
    selectedChargeList.value = selectedChargeList.value.filter(element => element != selectedData)
  }
  
  async function addTransaction() {
    
    
    const newTerm = termsList.value.filter(element => element.check == true)
  
    selectedChargeList.value.forEach((element, index) => {
  
      element.rates = selectedToChangeChargeAmount.value[index]
      element.remarks = selectedToChangeChargeRemarks.value[index]
    });
  
    const pusher = ref(true)

newTerm.forEach(element => {
  if(element.termsAndConditionCode == '004'){
    
      if(element.parameter1 == '' || element.parameter2 == ''){
        pusher.value = false
        slawStatusPopUpError("Parameters empty")
      }
  }
});

   if(pusher.value == true){
    console.log(selectedUserDetails.value);
    storageTypeLoading.value = true
    await globalAPI().post(`aTransaction/referenceEditSave?userId=${userDetails.value.id}`
    , {
    "aTransactionEdits": {
      "referenceNumber":numberValidateForm.value.reference,  
      "referenceDate": numberValidateForm.value.referenceDate,
      "customerCode": numberValidateForm.value.customerCode,
      "customerName": numberValidateForm.value.customerName,
      "storageType": numberValidateForm.value.storageType,
      "serviceAddress":  numberValidateForm.value.serviceAddress,
      "commodity": numberValidateForm.value.commodity,
      "remarks": numberValidateForm.value.remarks,
      "createdByUserId": userDetails.value.id,
      "notedByUserId": selectedNotedBy.value[0],
      'companyName':selectedUserDetails.value.companyName,
      'companyAddress':selectedUserDetails.value.companyAddress
  },
   
    "aTransactionDetailEdit": JSON.stringify(selectedChargeList.value),
    "aTransactionTermsEdit":JSON.stringify(newTerm)
    }
    ).then(async (response) => {
  
        if (response.status == 200) {
          storageTypeLoading.value = false
                slawStatusPopUp("Transaction Success!")
        }
        else if (response.status == 202 || response.status == 401) {
  
          storageTypeLoading.value = false
          slawStatusPopUpError(response.data)
  
        } else {
          storageTypeLoading.value = false
          slawStatusPopUpError(response.data)
        }
        storageTypeLoading.value = false
  
      }).catch((error) => {
        storageTypeLoading.value = false
        swalPopUp(error, "Can't connect to server")
  
      })
   }
  }

  function selectNotedBy(data){
  
  selectedNotedBy.value[0] = data.id
  selectedNotedBy.value[1] = data.fullname
  numberValidateForm.value.notedBy = data.fullname
  visibleNotedBy.value = false
}
  </script>
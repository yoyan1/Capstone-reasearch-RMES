<template>
    <div>
        <div>
            <h5 id="drawer-label" class="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Preview Student</h5>
        </div>
        <button type="button" data-drawer-dismiss="drawer-read-product-advanced" aria-controls="drawer-read-product-advanced" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <span class="sr-only">Close menu</span>
        </button>
        <div class="flex flex-col items-center mb-4 sm:mb-5">
            <div class="w-full max-w-sm bg-white  rounded-lg dark:border-gray-700">
                <div class="flex flex-col items-center pb-10"><br><br>
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="../components/images/default.jpg" alt="Bonnie image"/>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Grade V</span>
                </div>
            </div>
        </div>
        <dl class="sm:mb-5"><dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
            <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                       
                        <tbody>
                            <tr class="bg-white">
                                <th class="font-medium text-gray-500  dark:text-gray-400">
                                    FullName:
                                </th>
                                <td class="px-6">
                                    Roland Clarion
                                </td>
                                <th class="py-1 font-medium text-gray-500  dark:text-gray-400">
                                    Gender:
                                </th>
                                <td class="px-6">
                                    Male
                                </td>
                            </tr>
                            <tr class="bg-white">
                                <th class="py-1 font-medium text-gray-500  dark:text-gray-400">
                                    LRN:
                                </th>
                                <td class="px-6">
                                    134567890
                                </td>
                                <th class="py-1 font-medium text-gray-500  dark:text-gray-400">
                                    Adviser:
                                </th>
                                <td class="px-6">
                                    Yul Clint Argraviador
                                </td>
                            </tr>
                            <tr class="bg-white">
                                <th class="py-1 font-medium text-gray-500  dark:text-gray-400">
                                    Grade: 
                                </th>
                                <td class="px-6">
                                    V
                                </td>
                                <th class="py-1 font-medium text-gray-500  dark:text-gray-400">
                                    Section: 
                                </th>
                                <td class="px-6">
                                    Kamatis
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </dd>
        </dl>
        <dl class="grid grid-cols-2 gap-4 mb-4">
            <div class="col-span-2 p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 sm:col-span-1 dark:border-gray-600">
                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Parents/Guardian</dt>
                <dd class="flex items-center text-gray-500 dark:text-gray-400">
                    Roland Clarion
                </dd>
            </div>
            <div class="col-span-2 p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 sm:col-span-1 dark:border-gray-600">
                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Address</dt>
                <dd class="flex items-center space-x-2 font-light text-gray-500 dark:text-gray-400">
                    SO. Mabuni, Barangay Guadalupe, San Carlos City, Negros Occidental
                </dd>
            </div>
            <div class="p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Contact Number</dt>
                <dd class="text-gray-500 dark:text-gray-400">
                    09123456789
                </dd>
            </div>
            <div class="col-span-2 p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 sm:col-span-1 dark:border-gray-600">
                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Mobile Token</dt>
                <dd class="flex items-center space-x-2 font-light text-gray-500 dark:text-gray-400">
                    XJDH382IR9CH839UR
                    983DNWIE438
                </dd>
            </div>
        </dl>
        <div class="flex flex-col items-center mb-4 sm:mb-5">
            <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 border">
            <div class="grid grid-cols-2 py-3">
                <dl>
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Present</dt>
                <dd class="leading-none text-xl font-bold text-green-500 dark:text-green-400">40</dd>
                </dl>
                <dl>
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Absences</dt>
                <dd class="leading-none text-xl font-bold text-red-600 dark:text-red-500">10</dd>
                </dl>
            </div>
            <!-- chart -->
                <div id="bar-chart"></div>
                <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div class="flex justify-between items-center pt-5">
                        <!-- Button -->
                        <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="lastDaysdropdown"
                        data-dropdown-placement="bottom"
                        class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                        type="button">
                        Last 6 months
                        <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div id="lastDaysdropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 6 months</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last year</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div><br>
        </div>
        <div class="flex bottom-0 left-0 justify-center pb-4 space-x-4 w-full">
            <button type="button" data-drawer-target="drawer-update-product" data-drawer-show="drawer-update-product" aria-controls="drawer-update-product" class="text-white w-full inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                </svg>
                Edit
            </button>
            <button type="button"  data-modal-target="delete-modal" data-modal-toggle="delete-modal" class="inline-flex w-full items-center text-white justify-center bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                <svg aria-hidden="true" class="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" />
                </svg>
                Delete
            </button>
            <button type="button" class="w-full inline-flex items-center justify-center hover:bg-primary-700 hover:border-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-blue-600 ">
                Qr ID
            </button>
        </div>
    </div>
</template>
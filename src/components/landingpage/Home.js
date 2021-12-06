import React from 'react'
import ResultTable from '../search/ResultTable'

function Home() {
    return (
        <div>
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

            <section class="relative py-16 bg-blueGray-50">
                <div class="w-full mb-12 px-4">
                    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
                    bg-pink-900 text-white pb-5">
                        <div class="rounded-t mb-0 px-4 py-3 border-0">
                            <div class="flex flex-wrap items-center">
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1 ">
                                    <h3 class="font-semibold text-lg text-white">All games</h3>
                                </div>
                            </div>
                        </div>
                        <div class="block w-full overflow-x-auto">
  <div class="relative m-3 flex flex-wrap mx-auto justify-center">
                  <ResultTable/>          
                  </div>
    </div>
  </div>
</div>
    <footer class="relative pt-8 pb-6 mt-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-6/12 px-4 mx-auto text-center">
            <div class="text-sm text-blueGray-500 font-semibold py-1">
              <p>Made by Tea using Tailwindcss components</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
</section>
        </div>
    )
}

export default Home

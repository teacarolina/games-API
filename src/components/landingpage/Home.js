import React from 'react';
import ResultTable from '../search/EveryResult';
import Footer from '../footer/Footer';

function Home() {
    return (
      <>
        <div>
          {/*<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
          <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>*/}
          <section className="relative py-16 bg-blueGray-50">
            <div className="w-full mb-12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-pink-900 text-white pb-5">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                      <h3 className="font-semibold text-lg text-white">All games</h3>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                    <ResultTable/>          
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
          </section>
        </div> 
        </>
  )
}

export default Home;
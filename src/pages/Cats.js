import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'

const Cats = () => {
  const [month, setMonth] = useState('');
  const [data, setData] = useState();

  useEffect(() => {
    setData([
      { "month": 1, "age": 15 },
      { "month": 2, "age": 24 },
      { "month": 3, "age": 28 },
      { "month": 4, "age": 32 },
      { "month": 5, "age": 36 },
      { "month": 6, "age": 40 },
      { "month": 7, "age": 44 },
      { "month": 8, "age": 48 },
      { "month": 9, "age": 52 },
      { "month": 10, "age": 56 },
      { "month": 11, "age": 60 },
      { "month": 12, "age": 64 },
      { "month": 13, "age": 68 },
      { "month": 14, "age": 72 },
      { "month": 15, "age": 76 },
      { "month": 16, "age": 80 },
      { "month": 17, "age": 84 },
      { "month": 18, "age": 88 },
      { "month": 19, "age": 92 },
      { "month": 20, "age": 96 },
      { "month": 21, "age": 100 },
    ]);
  }, []);

  function calculateAge() {
    var age = data.filter(function (item) {
      return item.month == month;
    })

    Swal.fire({
      title: 'Edad:',
      text: age[0]['age'],
      icon: 'success',
      confirmButtonText: 'Cool'
    })

  }

  return (
    <div class=" place-items-center h-screen">
      <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="space-y-6" action="#">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">Calcula la edad de tu gato</h5>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Edad (en años)</label>
            <input type="number" min="0" max="21" value={month} onChange={e => setMonth(e.target.value)} name="month" id="month" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="4" required="required">
            </input>
          </div>
          <button onClick={calculateAge} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Calcular</button>
        </div>
      </div>
    </div >

  );
};
export default Cats;
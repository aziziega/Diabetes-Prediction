import React, { useState } from "react";

const FAQ = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-gradient-to-b from-indigo-100 to-white py-20 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            FAQ
          </span>
          <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
            Ada pertanyaan? Lihat di sini
          </h2>
          <p className="mx-auto max-w-3xl text-gray-500 dark:text-gray-300">
            Beberapa pertanyaan yang sering ditanyakan
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Project apa ini?"
              text="Situs Prediksi Diabetes kami menawarkan platform yang mudah digunakan bagi individu untuk menilai risiko mereka terkena diabetes. Dengan memasukkan data demografi dan dari tes MCU (Medical Check Up) kesehatan, pengguna menerima prediksi yang dipersonalisasi yang dihasilkan melalui algoritma pembelajaran mesin yang canggih."
            />
            <AccordionItem
              header="Apa itu BMI (Body Mass Index)?"
              text="Body mass index (BMI) atau Indeks massa tubuh (IMT) adalah berat badan seseorang dalam kilogram dibagi dengan kuadrat tinggi badan dalam meter. IMT adalah metode penyaringan yang murah dan mudah untuk kategori berat badan—berat badan kurang, berat badan sehat, berat badan berlebih, dan obesitas."
            />
            <AccordionItem
              header="Bagaimana Cara Menghitung BMI?"
              text="Dengan sistem metrik, rumus untuk BMI adalah berat badan dalam kilogram (kg) dibagi tinggi badan dalam meter (m) kuadrat. Karena tinggi badan biasanya diukur dalam sentimeter (cm), rumus alternatif dapat digunakan—bagi berat badan dalam kg dengan tinggi badan dalam cm kuadrat, dan kalikan hasilnya dengan 10.000."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Apa itu DPF (Diabetes Pedigree Function)?"
              text="DPF adalah singkatan dari Diabetes Pedigree Function. Fitur ini umum digunakan dalam penelitian medis dan kumpulan data, seperti Pima Indians Diabetes Dataset, untuk menilai kecenderungan genetik seseorang terhadap diabetes berdasarkan riwayat keluarga mereka."
            />
            <AccordionItem
              header="Apa itu Skin Thickness Parameter?"
              text="Parameter SkinThickness mengacu pada pengukuran ketebalan lipatan kulit trisep. Pengukuran ini biasanya dinyatakan dalam milimeter (mm) dan digunakan sebagai cara tidak langsung untuk memperkirakan jumlah lemak subkutan yang ada dalam tubuh."
            />
            <AccordionItem
              header="Apa itu Blood Pressure?"
              text="Blood Pressure atau Tekanan darah adalah jumlah tenaga yang digunakan darah untuk melewati arteri. Saat jantung memompa, ia menggunakan tenaga untuk mendorong darah kaya oksigen keluar ke arteri. Arteri membawa darah ke sel dan jaringan tubuh."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FAQ;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-md dark:bg-gray-700 sm:p-8">
      <button
        className={`faq-btn flex w-full items-center justify-between rounded-md p-4 text-left transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-600 ${
          active ? "bg-indigo-100 dark:bg-gray-600" : ""
        }`}
        onClick={handleToggle}
      >
        <div className="flex items-center">
          <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
            <svg
              className={`fill-current duration-300 ease-in-out ${
                active ? "rotate-180 transform" : ""
              }`}
              width="17"
              height="10"
              viewBox="0 0 17 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                fill=""
                stroke=""
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-12 mt-4 text-gray-600 dark:text-gray-300 ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="text-base leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

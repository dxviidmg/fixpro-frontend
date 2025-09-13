"use client";

import { useEffect, useState } from "react";
import CustomModal from "@/components/CustomModal";
import { createWorkOrder, getWorkOrderOptions } from "@/lib/core";

export default function OrderModal({ isOpen, onClose, order }) {
  const [formData, setFormData] = useState({
    client: "",
    brand: "",
    tool: "",
    serialNumber: "",
    color: "",
    mark: "",
    image: null,
    diagnosis: "",
  });
  const [options, setOptions] = useState({ brands: [], tools: [] });

  useEffect(() => {
    const fetchWorkOrders = async () => {
        const response = await getWorkOrderOptions();
        console.log("response *****", response.data.brands);
        setOptions(response.data);
    };

    fetchWorkOrders();
  }, []);

  useEffect;
  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes enviar el formData a tu backend

    const response = await createWorkOrder(formData)

    console.log(response)




    

  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title={`Orden`}>
      <div>
        <form className="p-5 pt-0 mx-auto space-y-2" onSubmit={handleSubmit}>
          {/* Cliente */}
          <div>
            <label
              htmlFor="client"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cliente
            </label>
            <input
              type="text"
              id="client"
              name="client"
              placeholder="Cliente"
              required
              value={formData.client}
              onChange={handleChange}
              className="w-full h-10 p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* Marca y Herramienta */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Marca
              </label>
              <select
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full h-10 p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Selecciona una opción</option>
                {options.brands.map((element) => (
                  <option key={element.id} value={element.id}>
                    {element.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="tool"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Herramienta
              </label>
              <select
                id="tool"
                name="tool"
                value={formData.tool}
                onChange={handleChange}
                className="w-full h-10 p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Selecciona una opción</option>
                {options.tools.map((element) => (
                  <option key={element.id} value={element.id}>
                    {element.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Número de serie, Color, Seña particular */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="serialNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Número de serie
              </label>
              <input
                type="text"
                id="serialNumber"
                name="serialNumber"
                placeholder="Número de serie"
                value={formData.serialNumber}
                onChange={handleChange}
                className="w-full h-10 p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="color"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Color
              </label>
              <input
                type="text"
                id="color"
                name="color"
                placeholder="Color"
                value={formData.color}
                onChange={handleChange}
                className="w-full h-10 p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="mark"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Seña particular
              </label>
              <input
                type="text"
                id="mark"
                name="mark"
                placeholder="Seña particular"
                value={formData.mark}
                onChange={handleChange}
                className="w-full h-10 p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>

          {/* Imagen */}
          <div>
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Imagen
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              required
              onChange={handleChange}
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* Diagnóstico */}
          <div>
            <label
              htmlFor="diagnosis"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Diagnóstico
            </label>
            <input
              type="text"
              id="diagnosis"
              name="diagnosis"
              placeholder="Diagnóstico"
              required
              value={formData.diagnosis}
              onChange={handleChange}
              className="w-full h-10 p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </CustomModal>
  );
}

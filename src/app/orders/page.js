"use client";

import { useEffect, useState } from "react";
import { getWorkOrders } from "../../lib/core";
import CustomTable from "@/components/CustomTable";
import CustomButon from "@/components/CustomButon";
import OrderModal from "./OrderModal";

export default function PaginatedTable() {
  const [workOrders, setWorkOrders] = useState([]);
  const [statusCount, setStatusCount] = useState({});
  const [pending, setPending] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchWorkOrders = async () => {
      try {
        const response = await getWorkOrders();
        console.log("response", response);
        setWorkOrders(response.data); // asegúrate de que sea un array

        const count = response.data.reduce((acc, item) => {
          acc[item.status_display] = (acc[item.status_display] || 0) + 1;
          return acc;
        }, {});

        console.log(count);

        setStatusCount(count);
      } catch (error) {
        console.error("Error fetching work orders:", error);
      } finally {
        setPending(false);
      }
    };

    fetchWorkOrders();
  }, []);

  // Definimos columnas para la tabla
  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Cliente", selector: (row) => row.client, sortable: true },
    { name: "Marca", selector: (row) => row.brand_name },
    { name: "Herramienta", selector: (row) => row.tooltype_name },

    {
      name: "Status",
      cell: (row) => {
        // Asignar color según status
        let color;
        switch (row.status) {
          case 1: // Pendiente
            color = "yellow";
            break;
          case 2: // En reparación
            color = "orange";
            break;
          case 3: // Reparado
            color = "green";
            break;
          case 4: // Entregado
            color = "skyblue";
            break;
          default:
            color = "lightgray";
        }

        return (
          <span
            style={{
              padding: "4px 8px",
              borderRadius: "4px",
              backgroundColor: color,
              color: "white",
              fontWeight: "bold",
              width: "100%",
              textAlign: "center",
            }}
          >
            {row.status_display} {/* Mostrar nombre legible del estado */}
          </span>
        );
      },
      sortable: true,
    },
  ];

  return (
    <div className="p-5 h-screen bg-gray-100">
      <OrderModal         isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Modal 3"></OrderModal>{" "}
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Órdenes</h2>

        <CustomButon
          text={"Crear"}
          onClick={() => setModalOpen(true)}
        ></CustomButon>
        <CustomTable data={workOrders} columns={columns}></CustomTable>
      </div>
    </div>
  );
}

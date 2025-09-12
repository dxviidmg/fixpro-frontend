"use client"; // Necesario en Next.js App Router
import { useRouter } from "next/navigation";


import { useState } from "react";
import { loginUser } from "../lib/login";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // mantiene los otros campos
      [name]: value, // actualiza solo el campo que cambió
    });
  };


  const handleLoginError = (error) => {
    if (error.response && error.response.status === 400) {
      console.log("Usuario o contraseña incorrecta");
    } else {
      console.log("Error desconocido, intente nuevamente.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData);

      console.log(response)

      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));

        router.push("/orders");

//        handleRedirect(response.data);
//        onLogin();
      } else {
        console.log("Usuario o contraseña incorrecta");
//        showAlert("Usuario o contraseña incorrecta");
      }
    } catch (error) {
      handleLoginError(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            value={formData.email}
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

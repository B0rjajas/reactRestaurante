import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../firebase/index'; // Ajusta la ruta según la ubicación real del archivo

const NuevoPlatillo = () => {
  const navigate = useNavigate();
  const { db } = useContext(FirebaseContext);

  // Validación y leer los datos del formulario
  const formik = useFormik({
    initialValues: {
      nombre: '',
      precio: '',
      categoria: '',
      imagen: null,  // Cambiado a null para archivos
      descripcion: '',
    },
    validationSchema: yup.object({
      nombre: yup.string()
        .min(3, 'El nombre del platillo debe tener al menos 3 caracteres')
        .required('El nombre del platillo es obligatorio'),
      precio: yup.number()
        .min(1, 'Debes agregar un número válido')
        .required('El precio es obligatorio'),
      categoria: yup.string()
        .required('La categoría es obligatoria'),
      descripcion: yup.string()
        .min(10, 'La descripción debe ser más larga')
        .required('La descripción es obligatoria'),
    }),
    onSubmit: async (platillo) => {
      try {
        platillo.existencia = true;

        // Manejo de archivo: Si hay archivo, necesitas cargarlo en algún almacenamiento
        if (platillo.imagen) {
          // Aquí puedes agregar lógica para manejar el archivo de imagen
        }

        // Añadir platillo a Firestore
        await db.collection('productos').add(platillo);

        // Redireccionar
        navigate('/menu');
      } catch (error) {
        console.error('Error al agregar platillo:', error);
      }
    },
    // Manejo de archivo en onChange
    handleChange: (event) => {
      const { id, files } = event.target;
      if (id === 'imagen') {
        formik.setFieldValue(id, files[0]);  // Establece el archivo
      } else {
        formik.handleChange(event);
      }
    }
  });

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Agregar Platillo</h1>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Nombre del Platillo"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.nombre && formik.errors.nombre ? (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.nombre}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">
                Precio
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="precio"
                type="number"
                placeholder="$20"
                min="0"
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.precio && formik.errors.precio ? (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.precio}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">
                Categoría
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="categoria"
                type="text"
                placeholder="Categoría del Platillo"
                value={formik.values.categoria}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.categoria && formik.errors.categoria ? (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.categoria}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">
                Imagen
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="imagen"
                type="file"
                onChange={formik.handleChange}  // Manejo de archivos
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.imagen && formik.errors.imagen ? (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.imagen}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                Descripción
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="descripcion"
                placeholder="Descripción del Platillo"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            {formik.touched.descripcion && formik.errors.descripcion ? (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.descripcion}</p>
              </div>
            ) : null}

            <input
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
              value="Agregar Platillo"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NuevoPlatillo;

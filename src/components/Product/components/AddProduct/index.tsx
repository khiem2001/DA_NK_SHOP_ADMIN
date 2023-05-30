import ImageUploader from '@/components/Upload';
import Notification from '@/components/Notification';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';

const AddProduct = () => {
  const initialValues = {
    name: '',
    type: '',
    description: '',
    price: 0,
    countInStock: 0,
    image: '',
    manufacturer: '',
    modelNumber: '',
    dimensions: '',
    weight: '',
    connectivity: '',
    powerSource: '',
    compatibility: '',
    warranty: ''
  };

  const handleSubmit = (values: any) => {
    console.log(values);
    // Gửi dữ liệu lên server hoặc thực hiện các tác vụ khác
  };

  const validateForm = (values: any) => {
    const errors: any = {};

    // Kiểm tra các trường bắt buộc
    if (!values.name) {
      errors.name = 'Tên sản phẩm là bắt buộc';
    }
    if (!values.type) {
      errors.type = 'Loại sản phẩm là bắt buộc';
    }

    if (!values.description) {
      errors.description = 'Mô tả là bắt buộc';
    }
    // Thêm các kiểm tra khác cho các trường khác

    return errors;
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
        <Form className="flex flex-wrap bg-slate-400">
          <div className="mb-4 w-4/12 p-5">
            <label htmlFor="name" className="block text-xl font-medium text-black">
              Tên sản phẩm:
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 bg-white"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-2" />
          </div>

          <div className="mb-4 w-4/12 p-5">
            <label htmlFor="type" className="block text-xl font-medium text-black">
              Loại sản phẩm:
            </label>
            <Field
              type="text"
              id="type"
              name="type"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 bg-white"
            />
            <ErrorMessage name="type" component="div" className="text-red-500 text-sm mt-2" />
          </div>

          <div className="mb-4 w-4/12 p-5">
            <label htmlFor="description" className="block text-xl font-medium text-black">
              Mô tả:
            </label>
            <Field
              as="textarea"
              id="description"
              name="description"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 bg-white"
            />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-2" />
          </div>

          <div className="mb-4 w-4/12 p-5">
            <label htmlFor="price" className="block text-xl font-medium text-black">
              Giá:
            </label>
            <Field
              type="number"
              id="price"
              name="price"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 bg-white"
            />
            <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-4/12 p-5">
            <label htmlFor="countInStock" className="block text-xl font-medium text-black">
              Số lượng trong kho:
            </label>
            <Field
              type="number"
              id="countInStock"
              name="countInStock"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 bg-white"
            />
            <ErrorMessage name="countInStock" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-4/12 p-5">
            <label htmlFor="image" className="block text-xl font-medium text-black">
              Hình ảnh:
            </label>
            <ImageUploader />
            <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="mb-4 w-4/12 p-5">
            <label htmlFor="manufacturer" className="block text-xl font-medium text-black">
              Nhà sản xuất:
            </label>
            <Field
              type="text"
              id="manufacturer"
              name="manufacturer"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 bg-white"
            />
            <ErrorMessage name="manufacturer" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-4/12 p-5">
            <label htmlFor="modelNumber" className="block text-xl font-medium text-black">
              Mã số mô hình:
            </label>
            <Field
              type="text"
              id="modelNumber"
              name="modelNumber"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 bg-white"
            />
            <ErrorMessage name="modelNumber" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-4/12 p-5">
            <label htmlFor="dimensions" className="block text-xl font-medium text-black">
              Kích thước:
            </label>
            <Field
              type="text"
              id="dimensions"
              name="dimensions"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 bg-white"
            />
            <ErrorMessage name="dimensions" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-4/12 p-5">
            <label htmlFor="weight" className="block text-xl font-medium text-black">
              Trọng lượng:
            </label>
            <Field
              type="text"
              id="weight"
              name="weight"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 bg-white"
            />
            <ErrorMessage name="weight" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-4/12 p-5">
            <label htmlFor="connectivity" className="block text-xl font-medium text-black">
              Kết nối:
            </label>
            <Field
              type="text"
              id="connectivity"
              name="connectivity"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 bg-white"
            />
            <ErrorMessage name="connectivity" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-4/12 p-5">
            <label htmlFor="powerSource" className="block text-xl font-medium text-black">
              Nguồn điện:
            </label>
            <Field
              type="text"
              id="powerSource"
              name="powerSource"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 bg-white"
            />
            <ErrorMessage name="powerSource" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-4/12 p-5">
            <label htmlFor="compatibility" className="block text-xl font-medium text-black">
              Khả năng tương thích:
            </label>
            <Field
              type="text"
              id="compatibility"
              name="compatibility"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 bg-white"
            />
            <ErrorMessage name="compatibility" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4 w-4/12 p-5">
            <label htmlFor="warranty" className="block text-xl font-medium text-black">
              Bảo hành:
            </label>
            <Field
              type="text"
              id="warranty"
              name="warranty"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 bg-white"
            />
            <ErrorMessage name="warranty" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="w-4/12 p-10">
            <button
              type="submit"
              className="inline-flex float-right p-7 py-5 mr-20 mb-10 justify-center  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Thêm sản phẩm
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddProduct;

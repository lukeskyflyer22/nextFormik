'use client'

import { Formik, Form, Field, ErrorMessage } from 'Formik';
import * as Yup from 'yup'
import RadioButtons from './RadioButtons';
import Select from './Select';
import { useState, useEffect } from 'react';

const FormikControl = () => {
  const initialValues = {
    clubOptions: '',
    radioOptions: '',
  }

  const radioOptions = [
    { key: 'สายการเรียน', value: 'rOption1' },
    { key: 'ชมรม', value: 'rOption2' },
    { key: 'โครงการพัฒนาความสามารถ', value: 'rOption3' },
    { key: 'องค์กรนักเรียน', value: 'rOption4' }
]

const selectOptions = radioOptions.map(option => {
  if (option.value === 'rOption1') {
      return [
        { key: 'วิทยาศาสตร์-คณิตศาสตร์', value: 'Option1sP' },
        { key: 'ภาษา-คณิตศาสตร์', value: 'Option2sP' },
        { key: 'ภาษา-ภาษาฝรั่งเศส', value: 'Option3sP' },
        { key: 'ภาษา-ภาษาเยอรมัน', value: 'Option4sP' },
        { key: 'ภาษา-ภาษาญี่ปุ่น', value: 'Option5sP' },
        { key: 'ภาษา-ภาษาจีน', value: 'Option6sP' },
        { key: 'ภาษา-ภาษาสเปน', value: 'Option7sP' },
        { key: 'ภาษา-ภาษาเกาหลี', value: 'Option8sP' }
      ];
    } else if (option.value === 'rOption2') {
      return [
        { key: 'ชมรม', value: 'Option1sC' },
      ];
    } else if (option.value === 'rOption3') {
      return [
        { key: 'โครงการพัฒนาความสามารถพิเศษด้านคณิตศาสตร์', value: 'Option1sG' },
        { key: 'โครงการพัฒนาความสามารถพิเศษด้านวิทยาศาสตร์', value: 'Option2sG' },
        { key: 'โครงการพัฒนาความสามารถพิเศษด้านภาษาอังกฤษ', value: 'Option3sG' },
        { key: 'โครงการพัฒนาความสามารถพิเศษด้านภาษาไทย', value: 'Option4sG' }
      ];
    } else if (option.value === 'rOption4') {
      return [
        { key: 'คณะกรรมการนักเรียน', value: 'Option1sO' },
        { key: 'นักเรียนผู้ช่วยงานประชาสัมพันธ์ (ปชส.)', value: 'cOption2sO' },
        { key: 'กลุ่มนักเรียน AIC (กอ.)', value: 'cOption3sO' }
      ];
    } else {
      return [];
    }
  }).flat();

  const validationSchema = Yup.object({
    radioOptions: Yup.string().required('Please select the option'),
    clubOptions: Yup.string().required('Please select the option'),
  })

  const onSubmit = (values: { clubOptions: string; radioOptions: string }) => {
    console.log('Form data', values);
  }

  return (
    <Formik 
    initialValues={initialValues} 
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      <Form className=' flex flex-col bg-blue-100 justify-center items-center py-8 space-y-4'>
        <p>Hello username</p>

        <RadioButtons 
          label='ประเภท' 
          name='radioOptions' 
          options={radioOptions}
         />
                
          <Select 
           name='selectOptions' 
           options={selectOptions} />
                
           <button 
           className=' bg-orange-400 rounded-lg py-2 px-4 transition-all hover:bg-purple-400 hover:text-white hover:-translate-y-2' 
           type='submit'>Submit</button>
        </Form>
    </Formik>
  )
} 

export default FormikControl;
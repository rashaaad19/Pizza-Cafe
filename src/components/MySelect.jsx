import { useField } from 'formik'
import React from 'react'

const MySelect = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return (
    <div className="w-xs flex flex-col gap-1">
    <label htmlFor={props.id || props.name}>{label}</label>
    <select className='bg-white' {...field} {...props} />
    {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null}
  </div>

)
}

export default MySelect
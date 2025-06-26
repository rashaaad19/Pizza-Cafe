import { useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="w-xs flex flex-col gap-1">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />

      <div
        className={`text-red-500 text-sm h-5 ${
          meta.touched && meta.error ? "visible" : "invisible"
        }`}
      >
        {meta.error}
      </div>
    </div>
  );
};

export default MyTextInput;

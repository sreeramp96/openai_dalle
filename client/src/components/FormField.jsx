import React from "react";

const FormField = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="mb-2 flex items-center gap-2">
      <label
        htmlFor={name}
        className="front-medium block text-sm text-gray-900"
      >
        {LabelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="rounded=[5px] bg-[#ECECF1] py-1 text-xs font-semibold text-black"
        ></button>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="focus-border-[#4649ff] outtline none block w-full rounded-lg border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:ring-[#4649ff]"
      />
    </div>
  );
};

export default FormField;

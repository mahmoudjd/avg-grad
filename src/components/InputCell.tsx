import React from "react";

interface InputProps<T> {
  label: string;
  type: string;
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
}

const InputCell = <T extends string | number>({
  label,
  type,
  value,
  setValue,
}: InputProps<T>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      type === "number"
        ? e.target.value === ""
          ? ""
          : Number(e.target.value)
        : e.target.value;
    setValue(newValue as T);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-300 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className="w-full p-2 bg-gray-700 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
  );
};

export default InputCell;

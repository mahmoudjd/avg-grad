import React, { useEffect, useState } from "react";
import InputCell from "./InputCell";

interface Module {
  moduleName: string;
  grad: number;
  points: number;
}

interface FormProps {
  setModules: React.Dispatch<React.SetStateAction<Module[]>>;
  handleSave: (module: Module) => void;
  moduleToEdit: Module | null;
}

const FormAddModule = ({ handleSave, moduleToEdit }: FormProps) => {
  const [module, setModule] = useState<string>("");
  const [grad, setGrad] = useState<number>(0);
  const [point, setPoint] = useState<number>(0);

  useEffect(() => {
    if (moduleToEdit) {
      setModule(moduleToEdit.moduleName);
      setGrad(moduleToEdit.grad);
      setPoint(moduleToEdit.points);
    }
  }, [moduleToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (module && grad > 0 && point > 0) {
      const newModule = { moduleName: module, grad, points: point };
      handleSave(newModule);
      setModule("");
      setGrad(0);
      setPoint(0);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-500 rounded p-4 bg-gray-800"
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        {moduleToEdit ? "Edit Module" : "Add Module"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputCell
          label="Module"
          type="text"
          value={module}
          setValue={setModule}
        />
        <InputCell label="Note" type="number" value={grad} setValue={setGrad} />
        <InputCell
          label="Points"
          type="number"
          value={point}
          setValue={setPoint}
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-bold transition"
      >
        {moduleToEdit ? "Save Changes" : "ADD"}
      </button>
    </form>
  );
};

export default FormAddModule;

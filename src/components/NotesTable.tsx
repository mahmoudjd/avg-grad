import React, { useMemo, useState } from "react";
import FormAddModule from "./FormAddModule";
import ShowResult from "./ShowResult";

interface Module {
  moduleName: string;
  grad: number;
  points: number;
}

const NotesTable = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [result, setResult] = useState<number>(0.0);
  const [allPoints, setAllpoints] = useState<number>(0);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useMemo(() => {
    let sumGrades = 0.0;
    let totalPoints = 0;
    modules.forEach((module) => {
      sumGrades += module.grad * module.points;
      totalPoints += module.points;
    });

    setAllpoints(totalPoints);
    setResult(totalPoints ? sumGrades / totalPoints : 0);
  }, [modules]);

  const handleEdit = (index: number) => {
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    setModules(modules.filter((_, i) => i !== index));
    // Reset edit index if the edited item is deleted
    if (editIndex === index) setEditIndex(null);
  };

  const handleSave = (module: Module) => {
    if (editIndex !== null) {
      const updatedModules = [...modules];
      updatedModules[editIndex] = module;
      setModules(updatedModules);
      setEditIndex(null);
    } else {
      setModules([...modules, module]);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <FormAddModule
        setModules={setModules}
        handleSave={handleSave}
        moduleToEdit={editIndex !== null ? modules[editIndex] : null}
      />
      {modules.length > 0 && (
        <ShowResult result={result} allPoints={allPoints} />
      )}
      <table
        id="pdf-content"
        className="table-auto w-full mt-6 bg-gray-800 text-gray-300 rounded"
      >
        <thead className="bg-gray-700">
          <tr className="text-left text-md font-semibold">
            <th className="py-2 px-4">Module</th>
            <th className="py-2 px-4">Grade</th>
            <th className="py-2 px-4">ECTS Points</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((module, index) => (
            <tr key={index} className="border-t border-gray-600">
              <td className="py-2 px-4">{module.moduleName}</td>
              <td className="py-2 px-4">{module.grad}</td>
              <td className="py-2 px-4">{module.points}</td>
              <td>
                <button
                  onClick={() => handleEdit(index)}
                  className="text-yellow-500 hover:text-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-600 ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {modules.length === 0 && (
            <tr>
              <td colSpan={4} className="py-4 text-center">
                No modules added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NotesTable;

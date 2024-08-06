import React from "react";

interface Props {
  result: number;
  allPoints: number;
}

const ShowResult = ({ result, allPoints }: Props) => {
  return (
    <div className="w-full p-4 mt-6 bg-gray-800 text-gray-300 border border-green-500 rounded">
      <p className="flex flex-col py-2 px-4 font-md font-bold">
        <span>All points: {allPoints}</span>
        <span>Average note: {result.toFixed(1)}</span>
      </p>
    </div>
  );
};

export default ShowResult;

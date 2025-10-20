"use client";
import { useState } from "react";
import Todoprops from "./Todoprops";
export default function Todolist() {
  const [todo, setTodo] = useState<string[]>([]);
  const [change, setChange] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChange(e.target.value);
  };
  const handleAdd = () => {
    if (change.trim() === "") return;
    setTodo((prev) => [...prev, change]);
    setChange("");
  };

  //   const handleDelete = (id:string)=>{
  //     setTodo((prev) => prev.filter((row)=> row.id!==id))
  //   }
  const handleDelete = (index: number) => {
    setTodo((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-indigo-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <i data-feather="check-circle" className="mr-2"></i>
                Todo List
              </h1>
              <button
                id="theme-toggle"
                className="text-white hover:text-indigo-200 transition-colors"
              >
                <i data-feather="moon"></i>
              </button>
            </div>
          </div>

          <div className="p-6 border-b">
            <div id="add-task-form" className="flex gap-2">
              <input
                value={change}
                onChange={handleChange}
                type="text"
                id="new-task"
                placeholder="What needs to be done?"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                // autocomplete="off"
                required
              />
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                onClick={handleAdd}
              >
                <i data-feather="plus" className="mr-1"></i> Thêm
              </button>
            </div>
          </div>
          {todo.length === 0 && (
            <div className="text-center py-8 text-gray-400" id="empty-state">
              <i data-feather="inbox" className="w-12 h-12 mx-auto mb-3"></i>
              <p>Chưa có nhiệm vụ nào.Hãy thêm một nhiệm vụ ở trên!</p>
            </div>
          )}
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Nhiệm vụ</h2>
              <div id="task-count" className="text-sm text-gray-500">
                {todo.length} nhiệm vụ
              </div>
            </div>

            <div id="task-list" className="space-y-3">
              <div className="text-center py-8 text-gray-400" id="empty-state">
                <i data-feather="inbox" className="w-12 h-12 mx-auto mb-3"></i>
                {todo.map((todo, index) => (
                  <Todoprops
                    key={index}
                    text={todo}
                    onDelete={() => handleDelete(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500">
            <p>
              Tạo công việc{" "}
              <i
                data-feather="heart"
                className="inline w-4 h-4 text-red-500"
              ></i>{" "}
              cho những người năng suất
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

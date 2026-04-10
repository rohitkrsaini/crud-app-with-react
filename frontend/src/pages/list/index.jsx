import React, { useEffect, useState } from "react";
import DataCard from "./data-card";
import { Link } from "react-router-dom";
import { deleteUser, getAll } from "./api";
import toast from "react-hot-toast";

const List = () => {
  const [allData, setAllData] = useState([]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete " + id);
    console.log(confirm);
    if (confirm) {
      try {
        deleteUser(id);
        toast.success("User deleted");
        //getAllUser()
        setAllData((pre)=>pre.filter(item=>item.id!=id))
      } catch (error) {
        toast.error("Error while deleteing");
      }
    }
  };
  const getAllUser = async () => {
    const data = await getAll();
    console.log({ data });
    setAllData(data);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div className="flex flex-col m-8">
      <div className="flex justify-end">
        <Link to={"/create"} className="rounded bg-green-500 text-white p-2">
          Create
        </Link>
      </div>
      <div className="flex my-8">
        {allData.length === 0 ? (
          <div className="text-center">NO Data</div>
        ) : (
          <div className="w-full grid gap-6 grid-cols-[repeat(auto-fit,minmax(20%,1fr))]">
            {allData.map((item) => {
              return (
                <DataCard
                  key={item.id}
                  info={item}
                  handleDelete={handleDelete}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;

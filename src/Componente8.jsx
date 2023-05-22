import React, { useEffect, useState } from "react";
import { getDepartments } from "./MetropolitanApi";

const Componente8 = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const data = await getDepartments();
      setDepartments(data);
    };

    fetchDepartments();
  }, []);

  return (
    <div>
      <h1>Llamada a la API</h1>
      <ul>
        {departments.map((department) => (
          <li key={department.departmentId}>{department.displayName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Componente8;

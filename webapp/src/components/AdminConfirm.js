import React, { useState, useEffect } from "react";
import "./AdminLogin.css";
import CustomerCard from "./CustomerCard";

function AdminConfirm() {
  // const [dataList,setDataList] = useState([])
  const customers = [
    {
      name: "Bob eiei",
      address: "Chiang Mai,Thailand xxx-xxxxxxx",
      picture: "id1.jpg",
      package: "sim1",
      status: "vertify",
    },
    {
      name: "Boby eiei",
      address: "Chiang Mai,Thailand xxx-xxxxxxx",
      picture: "id2.jpg",
      package: "sim2",
      status: "delivery",
    },
  ];

  const [pg1, setPg1] = useState([]);
  const [pg2, setPg2] = useState([]);

  useEffect(() => {
    ana_sim();
  }, []);

  function ana_sim() {
    const sim1 = customers.filter((person) => person.package === "sim1");
    if (sim1 == null) {
      alert("empty");
    } else setPg1(sim1);
    console.log(pg1);

    const sim2 = customers.filter((person) => person.package === "sim2");
    if (sim2 == null) {
      alert("empty");
    } else setPg2(sim2);
    console.log(pg2);
  }

  return (
    <div>
      <h2>CUSTOMER LISTS</h2>
      <CustomerCard data={pg1}/>
      <CustomerCard data={pg2} />
    </div>
  );
}

export default AdminConfirm;

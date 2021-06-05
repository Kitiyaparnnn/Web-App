import React from "react";
import "./AdminLogin.css"

function CustomerCard({data}) {
const ButonStatus = (status) => {
  if(status === "vertify"){
    return <button className='vertify'><i class="fa fa-credit-card-alt" aria-hidden="true"></i> {status}</button>
  }
  else if(status === "delivery"){
    return <button className='delivery'><i class="fa fa-plane" aria-hidden="true"></i> {status}</button>
  }
}

  return (
    <div>
      <div className="table_header">
        <p>Order : package</p>
        <p>amout : {data.length}</p>
      </div>
      <table className='customer'>
        <thead>
          <th>STATUS</th>
          <th>NAME</th>
          <th>ADDRESS</th>
          <th>PICTURE</th>
          <th>PACKAGE</th>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr>
              <td>
                {/* <button > {person.status}</button> */}
               {ButonStatus(person.status)}
              </td>
              <td>{person.name}</td>
              <td>{person.address}</td>
              <td>{person.picture}</td>
              <td>{person.package}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </div>
  );
}

export default CustomerCard;

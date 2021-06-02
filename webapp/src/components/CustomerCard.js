import React from "react";

function CustomerCard({data}) {
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
                <i class="bi bi-person-check"></i>
                {person.status}
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

import React from "react";
function Table({data,search}) {

  const filteredData = data.filter((item) => {
    const matchesSearch = (
      item.customerCode.toString().includes(search) ||
      item.customerName.toLowerCase().includes(search.toLowerCase())     );

    return matchesSearch;
  });
  return (
    <div>
      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th>CUSTOMER TYPE</th>
            <th>CUSTOMER CODE</th>
            <th>CUSTOMER NAME</th>
            <th>C2K</th>
            <th>STATUS</th>
            <th>TOTAL USER</th>
          </tr>
        </thead>
        <tbody>
            {filteredData.map((item, i)=>(
                <React.Fragment key={i}>

                <tr >
                    <td>{item.customerType}</td>
                    <td>{item.customerCode}</td>
                    <td>{item.customerName}</td>
                    <td>{item.c2k}</td>
                    <td>{item.status}</td>
                    <td>{item.totalUser}</td>
                </tr>
                <tr>
                <td className="p-2 border-t border-gray-300" colSpan="6"></td>
              </tr>
                </React.Fragment>
               
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

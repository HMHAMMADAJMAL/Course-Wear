import React from 'react'

const Contact = () => {
  return (
    <div style={{ width: "100%" }}>
      <table className="table table-borderless" style={{ width: "100%" }}>
        <thead style={{ width: "100%" }}>
          <tr style={{ width: "100%" }}>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody style={{ width: "100%", textAlign: "left" }}>
          <tr style={{ width: "100%", textAlign: "left" }}>
            <th scope="row">1</th>
            <td>Otto</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>

          </tr>

        </tbody>
      </table>
    </div >
  )
}

export default Contact
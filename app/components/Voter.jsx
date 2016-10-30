import React from 'react'

export default (props) => {
  const { voter } = props;

// table of voter bio data from state->props 
  return (
    <div>
      <table className="table">
        <thead className="padded">
          <tr className="bg-info">
            <th>{ voter.bio.name }</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Age</th>
            <td>{ voter.bio.age }</td>
          </tr>
          <tr>
            <th>Street</th>
            <td>{ voter.bio.address }</td>
          </tr>
          <tr>
            <th>City</th>
            <td> { voter.bio.city } </td>
          </tr>
          <tr>
            <th>State</th>
            <td> { voter.bio.state } </td>
          </tr>
          <tr>
            <th>Zip</th>
            <td> { voter.bio.zip } </td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{ voter.bio.phone }</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{ voter.bio.email }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

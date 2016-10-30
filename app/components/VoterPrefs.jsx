import React from 'react'

export default (props) => {
  const { voter, predictions, predict } = props;

// check to see if there are predictions on the state. if so, display them.
// this will only occur when the user asks for predictions and only for values
// that are currently blank (unknown)
  let jobs = !predictions.jobs ? voter.prefs.jobs : predictions.jobs;
  let healthcare = !predictions.healthcare ? voter.prefs.healthcare : predictions.healthcare;
  let childcare = !predictions.childcare ? voter.prefs.childcare : predictions.childcare;
  let lowerTaxes = !predictions.lowerTaxes ? voter.prefs.lowerTaxes : predictions.lowerTaxes;
  let gunRights = !predictions.gunRights ? voter.prefs.gunRights : predictions.gunRights;
  let racialInjustice = !predictions.racialInjustice ? voter.prefs.racialInjustice : predictions.racialInjustice;
  let education = !predictions.education ? voter.prefs.education : predictions.education;
  let lawEnforcement = !predictions.lawEnforcement ? voter.prefs.lawEnforcement : predictions.lawEnforcement;
  let foreignPolicy = !predictions.foreignPolicy ? voter.prefs.foreignPolicy : predictions.foreignPolicy;
  let terrorism = !predictions.terrorism ? voter.prefs.terrorism : predictions.terrorism;

// table of voter issue values, including unknowns and any predictions made 
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>
              Voter Issue Spectrum
            </th>
            <td>
              <button onClick={ () => predict(voter.prefs.id) } className='btn btn-success'>Predict Values</button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Jobs</th>
            <td>{ jobs }</td>
          </tr>
          <tr>
            <th>Healthcare</th>
            <td>{ healthcare }</td>
          </tr>
          <tr>
            <th>Childcare</th>
            <td>{ childcare }</td>
          </tr>
          <tr>
            <th>Low Taxes</th>
            <td>{ lowerTaxes }</td>
          </tr>
          <tr>
            <th>Gun Rights</th>
            <td>{ gunRights }</td>
          </tr>
          <tr>
            <th>Racial Injustice</th>
            <td>{ racialInjustice }</td>
          </tr>
          <tr>
            <th>Education</th>
            <td>{ education }</td>
          </tr>
          <tr>
            <th>Crime</th>
            <td>{ lawEnforcement }</td>
          </tr>
          <tr>
            <th>Foreign Policy</th>
            <td>{ foreignPolicy }</td>
          </tr>
          <tr>
            <th>Terrorism</th>
            <td>{ terrorism }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

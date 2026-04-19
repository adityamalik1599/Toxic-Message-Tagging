export default function ProcessedReports({ listOfTaggedData }) {

  const headingList = ['Message', 'Logged By', 'Toxicity Type', 'Impact', 'Comment', 'Updated By', 'Date & Time']
  return (
    <div className="listOuterBox">
      <table border="1" cellPadding='10'>
        <thead>
          <tr>
            {headingList.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listOfTaggedData.map((element) => (
            <tr key={element.id}>
              <td>{element.message}</td>
              <td>{element.loggedBy}</td>
              <td>{element.toxicity.join(', ') || '-'}</td>
              <td style={{
                color:
                  element.impact === "Critical" ? "red" :
                    element.impact === "High" ? "orange" :
                      element.impact === "Medium" ? "yellow" :
                        "green"
              }}>{element.impact || '-'}</td>
              <td>{element.comment}</td>
              <td>{element.updatedBy}</td>
              <td>{element.dateTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

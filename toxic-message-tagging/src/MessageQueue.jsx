import { useState } from "react"
import './App.css'
import TaggingPanelModal from "./TaggingPanelModal"
export default function MessageQueue({ listOfData, setListOfData, setActiveTab }) {

  const headingList = ['Id', 'Logged By', 'Message', 'Toxicity Type', 'Impact', 'Status', 'Action']
  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})

  const handleActionButton = (item) => {
    setShowModal(true)
    setSelectedItem(item)
  }

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
          {listOfData.map((element) => (
            <tr key={element.id} style={{ backgroundColor: element.status === "Untagged" ? "#ffe6e6" : "white" }}>
              <td>{`#${element.id}`}</td>
              <td>{element.loggedBy}</td>
              <td>{element.message}</td>
              <td>{element.toxicity.join(', ') || '-'}</td>
              <td>{element.impact || '-'}</td>
              <td>{element.status}</td>
              <td><button onClick={() => handleActionButton(element)}>{element.status === 'Untagged' ? 'Add' : 'Edit'}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && <TaggingPanelModal setListOfData={setListOfData} data={selectedItem} setShowModal={setShowModal} setActiveTab={setActiveTab} />}
    </div>
  )
}

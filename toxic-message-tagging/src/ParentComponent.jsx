import JsonData from "./JsonData"
import { useState } from "react"
import MessageQueue from "./MessageQueue"
import ProcessedReports from "./ProcessedReports"
import './App.css'

export default function ParentController() {
  const [activeTab, setActiveTab] = useState("queue")
  const [listOfData, setListOfData] = useState(() =>
    JsonData.map((item) => ({
      ...item,
      toxicity: [],
      impact: '',
      status: 'Untagged',
      updatedBy: '',
      dateTime: '',
      comment: ''
    })))
  return (
    <div className="startPoint">
      <div className="header">
        <h2>Toxic Message Dashboard</h2>

        {activeTab === 'queue' && <div className="counts">
          <span>Tagged: {listOfData.filter(i => i.status === "Tagged").length}</span>
          <span>Untagged: {listOfData.filter(i => i.status === "Untagged").length}</span>
        </div>}
      </div>
      <div className="tabs">
        <button style={{ background: activeTab === 'queue' ? '#0056b3' : '#ffe6e6' }} onClick={() => setActiveTab("queue")}>
          Message Queue
        </button>
        <button style={{ background: activeTab === 'processed' ? '#0056b3' : '#ffe6e6' }} onClick={() => setActiveTab("processed")}>
          Processed Reports
        </button>
      </div>
      {activeTab === "queue" ? (
        <MessageQueue
          listOfData={listOfData}
          setListOfData={setListOfData}
          setActiveTab={setActiveTab}
        />
      ) : (
        <ProcessedReports
          listOfTaggedData={listOfData.filter((element) => element.status === 'Tagged')}
        />
      )}
    </div>

  )
}

import { useState, useRef } from 'react'
import './App.css'
import ToxicTypeDropDown from './ToxicTypeDropDown'

export default function TaggingPanelModal({ setListOfData, data, setShowModal, setActiveTab }) {
  const commentRef = useRef('')
  const [selectedToxicity, setSelectedToxicity] = useState(data.toxicity || [])
  const [selectedImpact, setSelectedImpact] = useState(data.impact || "")
  const handleSubmitTagged = function () {
    if (selectedToxicity.length === 0) {
      alert("Please select Toxicity Type");
      return;
    } else if (!selectedImpact) {
      alert("Please select Impact");
      return;
    }

    const updatedItem = {
      ...data,
      toxicity: selectedToxicity,
      impact: selectedImpact,
      status: "Tagged",
      comment: commentRef.current.value,
      updatedBy: 'Get it from Auth',
      dateTime: new Date().toLocaleString()
    };

    setListOfData((prev) =>
      prev.map((item) =>
        item.id === data.id ? updatedItem : item
      )
    );
    setShowModal(false)
    setActiveTab("processed")
  }

  const listOfImpact = ['Low', 'Medium', 'High', 'Critical']
  return (
    <div className='modalOverlay' onClick={() => setShowModal(false)}>
      <div className='modalBox' onClick={(e) => e.stopPropagation()}>
        <h3 className="modalTitle">Tag Message</h3>
        <div className='modalGroup'>
          <label>Message : </label>
          <span className='readonly'>{data.message}</span>
        </div>
        <div className='modalGroup'>
          <label>Logged By</label>
          <span className="readonly">{data.loggedBy}</span>
        </div>

        <div className='modalGroup'>
          <label>Toxicity Type</label>
          <ToxicTypeDropDown
            selected={selectedToxicity}
            setSelected={setSelectedToxicity}
          />
        </div>
        <div className='modalGroup'>
          <label>Impact</label>
          <div className="radioGroup">
            {listOfImpact.map((impact) => (
              <label key={impact} className="radioItem">
                <input
                  type='radio'
                  name='impact'
                  value={impact}
                  checked={selectedImpact === impact}
                  onChange={(e) => setSelectedImpact(e.target.value)}
                />
                {impact}
              </label>
            ))}
          </div>
        </div>
        <div className='modalGroup'>
          <label>Comment</label>
          <input className="inputFull" ref={commentRef} />
        </div>

        <button className="submitBtn" onClick={handleSubmitTagged}>
          Submit
        </button>
      </div>
    </div>
  )
}

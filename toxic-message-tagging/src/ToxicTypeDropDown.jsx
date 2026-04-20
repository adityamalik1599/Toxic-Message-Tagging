export default function ToxicTypeDropDown({ selected, setSelected, open, setOpen }) {

  const listOfToxicType = [
    "Harassment",
    "Hate",
    "Threats",
    "Trolling",
    "Slurs",
    "Abuse",
    "Personal Attack",
    "Discrimination",
    "Spamming",
    "Toxic Behavior",
    "Bullying",
    "Cheating",
    "Custom"
  ]

  const handleChange = (type) => {
    if (selected.includes(type)) {
      setSelected(selected.filter((item) => item !== type))
    } else {
      setSelected([...selected, type])
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={(e) => {
          setOpen(!open)
          e.stopPropagation()
        }}
        style={{
          border: "1px solid #ccc",
          padding: "5px",
          cursor: "pointer",
          background: "#fff"
        }}
      >
        {selected.length > 0 ? selected.join(", ") : "Select Toxicity"}
      </div>
      {open && (
        <div
          style={{
            position: "absolute",
            background: "white",
            border: "1px solid #ccc",
            width: "100%",
            maxHeight: "150px",
            overflowY: "auto",
            zIndex: 10
          }}
        >
          {listOfToxicType.map((type) => (
            <div key={type} onClick={(e) => e.stopPropagation()}>
              <input
                type="checkbox"
                checked={selected.includes(type)}
                onChange={() => handleChange(type)}
              />
              <span>{type}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

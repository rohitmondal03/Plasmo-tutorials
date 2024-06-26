import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div>
      <h1>Popup</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={() => console.log(data)}>
        Submit
      </button>
    </div>
  )
}

export default IndexPopup

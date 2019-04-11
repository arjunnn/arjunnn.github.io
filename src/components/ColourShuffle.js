import React, { useState } from "react"

const ColourShuffle = () => {
  let [value, setValue] = useState(0)
  let setRandomColour = () => {
    let backgrounds = [
      "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
      "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
      "linear-gradient(to bottom,#3f51b1 0%,#5a55ae 13%,#7b5fac 25%,#8f6aae 38%,#a86aa4 50%,#cc6b8e 62%,#f18271 75%,#f3a469 87%,#f7c978 100%)",
      "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
      "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
      "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
      "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
      "linear-gradient(to right, #434343 0%, black 100%);",
    ]
    let randomValue = Math.floor(Math.random() * backgrounds.length)
    let newBackground = backgrounds[randomValue]
    if (value === randomValue) {
      setRandomColour()
    } else {
      document.body.style.backgroundImage = newBackground
      setValue(randomValue)
    }
  }
  return (
    <button
      onClick={setRandomColour}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "none",
        border: "0",
        cursor: "pointer",
      }}
      title="Click me!"
    >
      <span role="img" aria-label="change background">
        🎨
      </span>
    </button>
  )
}

export default ColourShuffle

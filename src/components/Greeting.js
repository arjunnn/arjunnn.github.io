import React from "react"

const getGreeting = () => {
  let greeting = "day"
  let currentTime = new Date().getHours()
  if (currentTime >= 5 && currentTime < 12) {
    greeting = "morning"
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "afternoon"
  } else if (currentTime === 0 || currentTime <= 5 || currentTime >= 18) {
    greeting = "evening"
  }
  return greeting
}

export default () => (
  <div className="greeting">
    <h4>
      Good {getGreeting()}! <br />
    </h4>
  </div>
)

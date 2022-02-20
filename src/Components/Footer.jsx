import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  const currentYear = () => {
    const today = new Date()
    return today.getFullYear()
  }
  return (
    <div className="footer">
      <a href="https://www.diamondway.org/" target="_new">
        DWB
      </a>{' '}
      •{' '}
      <a href="https://www.diamondway.org/nrc/" target="_new">
        The Northeast Retreat Center
      </a>{' '}
      • {currentYear()}
    </div>
  )
}

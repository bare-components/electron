import React from 'react'
import reactCSS, { handleHover } from 'reactcss'
import { remote } from 'electron'

export const TrafficLights = ({ background, color, boxShadow, hover }) => {
  const styles = reactCSS({
    'default': {
      traffic: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 50,
      },
      light: {
        width: 12,
        height: 12,
        borderRadius: 6,
        background,
        boxShadow,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      icon: {
        fill: color,
        opacity: 0,
      },
    },
    'hover': {
      icon: {
        opacity: 1,
      },
    },
  }, { hover })

  const electron = remote.getCurrentWindow()
  const handleClose = () => electron.close()
  const handleMin = () => electron.minimize()
  const handleMax = () => electron.setFullScreen(!electron.isFullScreen())

  return (
    <div style={ styles.traffic }>
      <div style={ styles.light } onClick={ handleClose }>
        <svg width="6px" height="6px" viewBox="3 3 6 6" style={ styles.icon }>
          <polygon points="6 5.29289322 3.87867966 3.17157288 3.17157288 3.87867966 5.29289322 6 3.17157288 8.12132034 3.87867966 8.82842712 6 6.70710678 8.12132034 8.82842712 8.82842712 8.12132034 6.70710678 6 8.82842712 3.87867966 8.12132034 3.17157288 6 5.29289322" />
        </svg>
      </div>
      <div style={ styles.light } onClick={ handleMin }>
        <svg width="8px" height="2px" viewBox="2 5 8 2" style={ styles.icon }>
          <polygon points="2.5 5.5 9.5 5.5 9.5 6.5 2.5 6.5" />
        </svg>
      </div>
      <div style={ styles.light } onClick={ handleMax }>
        <svg width="8px" height="6px" viewBox="2 3 8 6" style={ styles.icon }>
          <path d="M3,4.5 L7.5,9 L3.99869585,9 C3.44713136,9 3,8.55207109 3,8.00130415 L3,4.5 Z M9,7.5 L4.5,3 L8.00130415,3 C8.55286864,3 9,3.44792891 9,3.99869585 L9,7.5 Z" />
        </svg>
      </div>
    </div>
  )
}

TrafficLights.defaultProps = {
  background: '#909095',
  color: '#27272C',
  boxShadow: 'inset 0 0 0 0.5px rgba(0,0,0,0.3)',
}

export default handleHover(TrafficLights)

import './ProgressBar.scss'

import React from 'react'

const ProgressBar = ({ progress }) => {

    const style = {
        width: `${progress*100}%`
    }

    return (
        <div style={style} className='ProgressBar'/>
    )
}

export default ProgressBar
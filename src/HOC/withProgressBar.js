import React from 'react'
import ProgressBar from '../components/ProgressBar'

const withProgressBar = (Component) => ({progress, ...props}) => {
    return (
        <React.Fragment>
            <ProgressBar progress={progress}/>
            <Component {...props}/>
        </React.Fragment>
    )
}

export default withProgressBar
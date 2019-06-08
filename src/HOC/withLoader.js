import React from 'react'
import Loader from '../components/Loader'

const withLoader = (Component) => {

    return ({ isLoading, ...props }) => {

        if(!isLoading){
            return <Component {...props}/>
        }
        return <Loader/>
    }

}

export default withLoader
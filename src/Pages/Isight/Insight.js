import React from 'react'
import Features from '../../Secs/Insights/Feature/Features'
import Card from '../../Secs/Insights/Cards/Card/Card'
import Head from '../../Sections/Header/Head'
import Stay from '../../Secs/Insights/Stay/Stay'
import Foot from '../../Sections/footer/Foot'
const Insight = () => {
    return (
        <div>
            {/* <Head /> */}
            <Features />
            <Card />
            <Stay/>
            <Foot/>
        </div>
    )
}

export default Insight

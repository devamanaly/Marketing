import React from 'react'
import { WorkHead, Works, WorksMain, CardSection } from './WorkStyle'
import Card from '../../components/Card/Card'

const Work = () => {
    return (
        <Works>
            <WorksMain>
                <WorkHead>
                    Work
                </WorkHead>

            <CardSection>

                <Card />
            </CardSection>
            </WorksMain>

        </Works>
    )
}

export default Work

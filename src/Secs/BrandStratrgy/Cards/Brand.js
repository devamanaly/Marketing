import React from 'react'
import { BrandCards, Brands, BrandsC, BrandsCMain } from './BrandStyle'
import { InnerHead } from '../../../Common'
import { Cads } from './Card/CardStyle'
import BrandCard from './Card/Card'

const Brand = () => {
    return (
        <BrandsC>
            <BrandsCMain>
                <InnerHead>
                    /BRAND STRATEGY
                </InnerHead>
                <BrandCards>
                    <BrandCard />

                </BrandCards>

            </BrandsCMain>


        </BrandsC>
    )
}

export default Brand

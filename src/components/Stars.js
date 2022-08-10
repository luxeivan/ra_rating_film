import React from 'react'
import Star from './Star'
import './Stars.css'


export default function Stars({ count }) {
    if (Number.isInteger(count) && count >= 1 && count <= 5) {
        return (
            <ul className="card-body-stars u-clearfix">
                {[...Array(count)].map((e,i) => <Star key={i} />)}
            </ul>
        )
    }
    return false
}

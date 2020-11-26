import React from 'react'
import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"

export default function Wrapper({data}) {
    return (
        <div className="row">
            {data.map((item)=>{
                return (
                    <Link to={{pathname:`/recipe/${item.recipe.label}`,state:item}} >
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.recipe.image} />
                    <Card.Body>
                        <Card.Title>{item.recipe.label}</Card.Title>
                    </Card.Body>
                    </Card>
                    </Link>
                )
            })}
        </div>
    )
}

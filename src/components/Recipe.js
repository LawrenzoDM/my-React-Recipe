import React from 'react'

export default function Recipe(props) {
    console.log(props);
   /*  let recipe = props.data.find(item => item.recipe.label===  props.match.params.name) */

    /* console.log(recipe); */
    let item = props.location.state.recipe
    return (
        <div>
            <h2>{item.label}</h2>
            <img src={item.image} />
        </div>
    )
}

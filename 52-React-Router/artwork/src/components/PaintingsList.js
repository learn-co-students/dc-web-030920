import React from 'react'
import Painting from './Painting'
import Searchbar from './Searchbar'

const PaintingsList = ({onSearchHandler, filterTerm, paintings, onSelectPainting}) => {

  let filteredPaintings = paintings.filter((painting) => painting.title.includes(filterTerm))

  return(
    <div>
    <Searchbar onChangeHandler={onSearchHandler} value={filterTerm}/>
    {filteredPaintings.map(painting => <Painting
      key={painting.id}
      painting={painting}
      onSelectPainting={onSelectPainting}
    />)}
    </div>
  )
}

export default PaintingsList

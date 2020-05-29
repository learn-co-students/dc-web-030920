
function search(searchText){
  return { type: "SEARCHING", payload: searchText }
}

function vote(paintingId){
  return { type: "VOTE_FOR_PAINTING", payload: paintingId }
}

function updatePaintingInfo(info){
  return { type:"UPDATE_PAINTING_INFO", payload: info }
}

export {search, vote, updatePaintingInfo}

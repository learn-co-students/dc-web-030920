// action creators
const URL = 'http://localhost:3000/paintings'

function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", payload: value };
}

function vote(paintingId) {
  return { type: "INCREASE_VOTES", payload: paintingId };
}


function updatingPainting(info){
  //info: {title: "", name: "", etc.}
  return (dispatch, getState) => {
    //need access to the current state
    //getState().searchText => would give your your searchText state
    fetch(`http://localhost:3000/paintings/${info.paintingId}`, {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        title: info.title,
        artist: {
          name: info.name,
          birthday: info.birthday,
          deathday: info.deathday
        }
      })
    }).then(res => res.json())
    .then(p => {
      dispatch(updatedPainting(info))
    })
  }
}

//This works and will update our front end
function updatedPainting({ title, name, birthday, deathday, paintingId }) {
  return {
    type: "UPDATE_PAINTING",
    payload: { title, name, birthday, deathday, paintingId}
  };
}

function fetchedPaintings(paintings){
  return {type: "FETCHED_PAINTINGS", payload: paintings}
}

function fetchingPaintings(){
  return (dispatch) => {
    fetch(URL)
    .then(res => res.json())
    .then(paintings => {
      dispatch(fetchedPaintings(paintings))
    })
  }
}

export { changeSearchText, vote, updatedPainting, updatingPainting, fetchingPaintings };

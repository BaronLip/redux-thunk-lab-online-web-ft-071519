/*

*/


export const fetchCats = () => {
    console.log("catActions.js")
    return (dispatch) => {
        dispatch({ type: "LOADING_CATS"});
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        .then(response => {return response.json()})
        .then(data => dispatch({ type: "ADD_CATS", cats: data.images}))
    }
}
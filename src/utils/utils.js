
export function data(button,setterButton, setterArray,input){
    if (button) {
        const petition = fetch(`https://api.giphy.com/v1/gifs/search?api_key=4lLsekJPTOO0S7IYawubPut9TBZW9Ka9&q=${input}&limit=25&offset=0&rating=g&lang=en`)
       
        petition.then((inJSON)=>{
        return inJSON.json()
        })
        .then((data)=>{
        setterArray(data.data)
        setterButton(false)
        })}
    
}
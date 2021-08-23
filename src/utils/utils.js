
export function data(button,setterButton, setterArray,input){
const key = '4lLsekJPTOO0S7IYawubPut9TBZW9Ka9'
    if (button) {
        const petition = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${input}&limit=15&offset=0&rating=g&lang=en`)
       
        petition.then((inJSON)=>{
        return inJSON.json()
        })
        .then((data)=>{
        setterArray(data.data)
        setterButton(false)
        })}
    
}


export function automaticData(text, setter) {
  const key = '4lLsekJPTOO0S7IYawubPut9TBZW9Ka9'
    const petition = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${key}&q=${text}&limit=5&offset=0&rating=g&lang=en`
    );
    petition
      .then((inJSON) => {
        return inJSON.json();
      })
      .then((data) => {
        setter(data.data);
      });
  }


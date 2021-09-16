export async function data(button, setterArray, input, option, setSearch) {
  const key = "4lLsekJPTOO0S7IYawubPut9TBZW9Ka9";
  try {
    if (button) {
      const petition = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${input}&limit=15&offset=0&rating=g&lang=en`
      );
      const inJSON = await petition.json();
      setSearch(!button);
      setterArray(inJSON.data);

      if (option.length > 0) {
        setterArray(option);
      }
    }
  } catch {
    console.log("hubo un error al obtener la información de la API");
  }
}

export async function trending(setter) {
  const key = "4lLsekJPTOO0S7IYawubPut9TBZW9Ka9";
  const petition2 = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=15&rating=g`
  );
  const inJson = await petition2.json();
  setter(inJson.data);
}

export async function automaticData(text, setter) {
  const key = "4lLsekJPTOO0S7IYawubPut9TBZW9Ka9";
  const petition3 = await fetch(
    `https://api.giphy.com/v1/gifs/search/tags?api_key=${key}&q=${text}&limit=5&offset=0&rating=g&lang=en`
  );
  const inJSON = await petition3.json();
  setter(inJSON.data);
}

// export function data(button, setterArray, input, option,setSearch) {
//   const key = "4lLsekJPTOO0S7IYawubPut9TBZW9Ka9";
//   if (button) {
//     const petition = fetch(
//       `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${input}&limit=15&offset=0&rating=g&lang=en`
//     );

//     petition
//       .then((inJSON) => {
//         return inJSON.json();
//       })
//       .then((data) => {

//         setSearch(!button)
//         setterArray(data.data);

//         if(option.length>0){
//           setterArray(option)
//         }
//       });
//   }
// }

// export function trending(setter) {
//   const key = "4lLsekJPTOO0S7IYawubPut9TBZW9Ka9";

//   const petition2 = fetch(
//     `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=15&rating=g`
//   );
//   petition2
//     .then((inJSON) => {
//       return inJSON.json();
//     })
//     .then((data) => {
//       setter(data.data);
//     });
// }

// export function automaticData(text, setter) {
//   const key = "4lLsekJPTOO0S7IYawubPut9TBZW9Ka9";
//   const petition = fetch(
//     `https://api.giphy.com/v1/gifs/search/tags?api_key=${key}&q=${text}&limit=5&offset=0&rating=g&lang=en`
//   );
//   petition
//     .then((inJSON) => {
//       return inJSON.json();
//     })
//     .then((data) => {
//       setter(data.data);
//     });
// }

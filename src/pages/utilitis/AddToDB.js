const getStoredBook = () =>{
    const storedBookSTR = localStorage.getItem("readList");
    if (storedBookSTR){
        const storeBookData = JSON.parse(storedBookSTR);
        return storeBookData;

    }
    else {
        return [];
    }
}

const addToStoreDB = (id) => {
  const storedBookData = getStoredBook();

  if(storedBookData.includes(id)){
    console.log("hello")
    alert("bhai er id already exist")
  }
  else{
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList",data)
  }
}
export {addToStoreDB};
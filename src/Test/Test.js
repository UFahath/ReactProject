fetch('https://freetestapi.com/api/v1/airlines')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data)
})
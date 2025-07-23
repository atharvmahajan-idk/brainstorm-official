const doc_container = document.querySelector(".doc_container div")
console.log(doc_container)
async function  renderdocs() {
    let  titleName = 'Brain-storm-official'
    let desprictionText = `
        this project is dervided from
        air-drive , but it just not
        help to share it help to think plan 
        and build    
    `
    const doc = document.createElement("div")
    doc.setAttribute("class" , "doc")

    const title =  document.createElement("div")
    title.setAttribute("class" ,  "title")

    const h3 = document.createElement("h3")
    h3.innerHTML  = titleName

    title.appendChild(h3)
    doc.appendChild(title)

    const despriction =  document.createElement("div")
    despriction.setAttribute("class" , "despriction")

    const desprictionDiv =   document.createElement("div")
    desprictionDiv.innerHTML = desprictionText

    despriction.appendChild(desprictionDiv)
    doc.appendChild(despriction)

    doc_container.appendChild(doc)

} 

for(let i = 0; i < 10; i++){
    renderdocs()
}

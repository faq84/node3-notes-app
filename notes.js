const fs = require('fs')
const chalk = require('chalk')
const n1="These are your notes..."
const filename = 'notes.json'

const getnotes = ()=>{
return n1;
}

const addList = (title, body)=>{
    const listadd = loadList()
    //console.log(list)
    //const duplicateList = listadd.filter((duplicate)=> duplicate.title === title)
    const duplicateLists = listadd.find((duplicate)=> duplicate.title === title)
        try{
           if (!duplicateLists){
                listadd.push({
                    title: title,
                    body: body
                })
                //console.log('the length of duplicate list is: '+duplicateList.length)
                //console.log('title coming is:'+listadd.title)
                //console.log(duplicateList)
                console.log('data being pushed to File: '+ filename)
                saveList(listadd)
            }
            else{
                console.log("Title already exist!")
                }
        }
        catch (e){
            console.log("There was an error while pushing data to array.")
        }
        
}

const remListTitle = (title,body)=>{
    const remlist = loadList()
    //console.log(remlist)
    const removabletitle = remlist.filter((remtitle)=>remtitle.title !== title
       //console.log(removabletitle)
    )
    if (remlist.length > removabletitle.length ){
        console.log(chalk.bgGreen('Note Removed!'))
        saveList(removabletitle)
    }
    else{
        console.log(chalk.bgRed('Note not Found!'))
    }
    
}
const listnote = () =>{
    const notelist = loadList()
    //console.log(notelist)
    console.log(chalk.blue.inverse('Your Notes'))

    notelist.forEach((note)=>{
      console.log(note.title)
    }) 
    
    
}

const readList = (title)=>{
    const rl= loadList()
    //const rlt=JSON.parse(rl)
    //console.log(rl.title)
    debugger
    const read = rl.find((rt)=> rt.title === title)
    if (read){
    console.log(read.title)
    console.log(read.body)
    }
    else{
        console.log('Note not found')
    }
    // if (read){

    // }
    // else{

    // }
}
const saveList = (list)=>{
    const listJSON = JSON.stringify(list)
    fs.writeFileSync(filename,listJSON)
    //console.log("New Title added")
    //console.log("New Title added with following details! \n Title:" + listJSON.toString(title) + "\n Body:"+listJSON.body)
}
const loadList = ()=>{
    try{
        const dataBuffer = fs.readFileSync(filename)
        //console.log(dataBuffer)
        const dataJSON = dataBuffer.toString()
        //console.log(dataJSON.title)
        const data = JSON.parse(dataJSON)
        //console.log(data)
        return data
        }
    catch (e) {
        console.log("No File exist with the name: "+ filename + '\nTrying to create file with filename: '+ filename)
        fs.writeFileSync(filename)
        console.log('File Created successfuly!')
        return []
    }
}
module.exports = {
    getNotes: getnotes,
    addList: addList,
    removeList: remListTitle,
    listNotes: listnote,
    readLists: readList
}

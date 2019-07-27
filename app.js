const validate = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const log = console.log
const getdetails = require('./notes.js')

yargs.version('1.0.5')


 //Create a Add command
  yargs.command({
      command: 'Add',
      describe: 'Command to add a title',
      builder: {
          title:{
              describe: 'Title',
            demandOption: true,
            type: 'string'
          },
          body: {
            describe: 'Add Body ',
            demandOption: true,
            type: 'string'

        }
      },
      handler(argv){
          //console.log('Adding a new Title!' + argv.title)
          getdetails.addList(argv.title, argv.body)
         // console.log('Adding following title to List: '+ argv.title)
      }
  })


   //Create a remove command
   yargs.command({
    command: 'Remove',
    describe: 'Command to remove a title',
    builder: {
        title: {
            describe: 'Removing title from List',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Removing Body ',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv){
        getdetails.removeList(argv.title,argv.body)
       // console.log('Removed the title!'+ argv.title)
        //console.log('removed the body '+argv.body)
    }
})

 //Create a List command
 yargs.command({
    command: 'List',
    describe: 'Command to List note',
    handler(){
        
        getdetails.listNotes()
    }
})


 //Create a read command
 yargs.command({
    command: 'Read',
    describe: 'Command to Read a note',
    builder: {
        title: {
            describe: 'Read list with title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        //console.log('Your note is Read!')
        //const msg = getdetails.getNotes()
        //console.log(msg)
        getdetails.readLists(argv.title)
    }
})

  yargs.parse()









// log(validate.isIP('A.1.1.1'))
//log(chalk.red('Helloworld') + chalk.inverse.white('the day is sunny with blue skies'))

// log(chalk.green.inverse.bold('SUCCESS'))

// log(process.argv[2])
// const getNotes = require('./notes.js')
// const msg = getNotes()
// console.log(msg)

// const fs = require('fs')
// const name =require('./utils.js')
// const sum = name(100,-200)
// console.log('Faizan2')
// console.log(sum)

// //fs.appendFileSync('notes.txt','My name is Faizan1\n')



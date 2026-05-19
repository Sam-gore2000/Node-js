import {createReadStream,createWriteStream, readFile} from 'fs'
import path from 'path'

const output=path.join(import.meta.dirname,"Output.txt")
const input=path.join(import.meta.dirname,"input.txt")

const Readstream=createReadStream(output)
const Writestream=createWriteStream(input)

Readstream.pipe(Writestream)
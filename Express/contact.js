import express from 'express'
import path from 'path'

const app = express()

const contact=path.join(import.meta.dirname, 'form.html')
const error=path.join(import.meta.dirname, 'error.html')


app.use(express.urlencoded())

// handle POST request
app.get('/contact', (req, res) => {

   res.sendFile(contact)

  console.log(req.body)
 
})
app.use((req,res)=>{
  res.status(404).sendFile(error)
})


app.listen(3005, () => {
  console.log('Server is running on port 3005')
})

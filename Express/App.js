import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

// access the folder 
const staticFolder = path.join(import.meta.dirname, 'public')
app.use(express.static(staticFolder))

// recreate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const homepage = path.join(__dirname, 'index.html') 
const aboutpage = path.join(__dirname, 'about.html')
const contactpage = path.join(import.meta.dirname, 'form.html')


app.get('/contact', (req, res) => {

  // res.sendFile(aboutpage)
  res.sendFile(contactpage)
  console.log(req.query)


})

app.get('/about', (req, res) => {
  res.sendFile(aboutpage)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
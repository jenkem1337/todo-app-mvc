import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));
let app = express()
app.use("/src", express.static(path.join(__dirname, "/src")))
app.get('*' , (req, res) => {
    res.sendFile(path.join(__dirname,"/src/view/index.html"));
})

app.listen(1234, ()=>console.log('server running on 1234th port'))

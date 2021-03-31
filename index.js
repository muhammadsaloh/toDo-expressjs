const express = require('express')
const ejs = require('ejs')

const app = express()
const PORT = 5500

app.listen(PORT, () => console.log(`Server is running... ${PORT}`))

app.set("view engine", 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

let data = [
    
]

app.get('/', function(req, res){
    res.render('index', {
        data
    });
 });

 app.post('/', function(req, res){
    let {  name, time } = req.body
    let sortedToDo = data.sort(function(a, b) {
        let foo = a.time.split(':')
        let fseconds = ( (+foo[0]) * 60 * 60 + (+foo[1]) * 60 )

        let bar = b.time.split(':')
        let bseconds = ( (+bar[0]) * 60 * 60 + (+bar[1]) * 60 )
        return fseconds - bseconds
    })
    data.push({ id: data.length + 1, name, time })
    res.redirect('/')
});

 app.get('/delete/:id', function(req, res){
    data = data.filter(user => user.id != Number(req.params.id))
    res.redirect('/')
 });













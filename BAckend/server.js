import app from './app.js';

const PORT =process.env.PORT ;
app.listen(PORT ,async ()=>{
    console.log(`app is running:${PORT}` );

})

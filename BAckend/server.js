import app from './app.js';

const PORT =process.env.PORT || 5000;
app.listen(PORT ,async ()=>{
    console.log(`app is running:${PORT}` );

})

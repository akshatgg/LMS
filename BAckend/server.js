const app=require('./app');

const PORT =process.env || 5000;
app.listen(PORT ,()=>{
    console.log(`app is running:${PORT}` );
    
})
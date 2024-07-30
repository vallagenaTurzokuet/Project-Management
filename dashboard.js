var progressbars = document.querySelectorAll('.completed');
function progress (j)
{
    for(let i = 0 ; i <=100 ; i++)
        {
            setTimeout(()=>{
                progressbars[j].style.width = i+"%" ;
            } , 15*i)
        }
}

for(let j = 0 ; j < progressbars.length;j++)
{
    console.log(j)
    progress(j);
}

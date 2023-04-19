import React from 'react'

function News(){
   //Connects to RSS feed to updates of COVID Data
   return(
   <>
   <div className='contain'>
   <div className='newsheader'>
         <h1><strong> News: </strong></h1>
      </div><iframe src="https://www.cdc.gov/coronavirus/2019-ncov/whats-new-all.html" title="Latest COVID News" height="500px" width="900px"></iframe>
   </div>
   </>
   );
}

export default News;
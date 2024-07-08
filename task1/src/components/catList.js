import React from 'react'
import Cat from './cat'

function catList({results}) {
    let data = [];
    if (results.data) {
        data = results.data.Search || [];
    }
    console.log(data);
    
  return (
    <div>
      
    </div>
  )
}

export default catList

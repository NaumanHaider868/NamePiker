import React, {Fragment} from 'react'

import NameList from './NameList';

function ShortList({names, shortList, setShortList}) {


  const shortListedNames = names.filter((entry)=>
    shortList.includes(entry.id)
  );

  function removeFromShortList(id){
      setShortList(shortList.filter((i)=> i !== id));
  }

  const hasName = shortListedNames.length > 0;
  
  return(
    <div className='short-list'>
      <h2>{hasName ? 'Your ShortList' : 'Click on a name to shortList it'}</h2>
      {hasName && (
        <Fragment>
          <NameList nameList={shortListedNames} onItemClick={removeFromShortList} />
          <hr/>
        </Fragment>
      )

      }
    </div>
  ) 
}

export default ShortList
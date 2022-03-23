import React, { Fragment, useState }  from "react";

import NamePicker from './componet/NamePicker';
import Search from './componet/Search';
import ShortList from './componet/ShortList'
import ResetSearch from "./componet/ResetSearch";
import Myfooter from "./componet/Myfooter";

function App({names}) {
  
  const [searchValue, setSearchValue] = useState('');
  const [shortList, setShortList] = useState([]);
  return (
    <Fragment>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <ShortList names={names} shortList={shortList} setShortList={setShortList}/>
      <NamePicker
        names={names}
        searchValue={searchValue}
        shortList={shortList}
        setShortList={setShortList}
      />
      <ResetSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <Myfooter/>
    </Fragment>

  );
}




export default App;

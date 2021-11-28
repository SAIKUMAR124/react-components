import React, {useState} from "react";
import { data } from "./searchData";
import './SearchComp.css';

const SearchComp = () => {
    const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='search-comp'>
      <input type="text" placeholder="Search..." onChange={(event) => {setSearchTerm(event.target.value)}} />
      {data.filter((val)=> {
          if(searchTerm == ''){
              return val
          } else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
          }
      }).map((item, index) => {
        return <div key={index}>
            <p>{item.first_name}</p>
        </div>;
      })}
    </div>
  );
};

export default SearchComp;

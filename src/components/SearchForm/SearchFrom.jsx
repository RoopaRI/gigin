import React from "react";
import {useState} from "react";
import "./SearchFrom.css"

export default function SearchForm(List){
    const [search, setSearch] = useState("");
    const [filtered, setFilterList] = useState([]);
    const pets=List.List;
    const handleSearch = () =>{
        const filteredList = pets.filter((pet)=>pet.breed.toLowerCase() === search.toLowerCase());
        setFilterList(filteredList);
    }

    return(
        <div className="search">
            <input 
                type="text" 
                placeholder="Search" 
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Submit</button>

            <div>
                {filtered.map((e)=>(
                    <div>
                        <img src={e.images[0]} alt={e.name}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
import React from "react";
import axios from "axios";
import "./PetList.css";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchForm from "../SearchForm/SearchFrom";

export default function PetList(){
    const [petList, setPetList] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async ()=> {
            try{
                const response = await axios.get("http://pets-v2.dev-apis.com/pets");
                setPetList(response.data.pets);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return(
        <>
            <div>
                <SearchForm List={petList}/>
            </div>
            <div className="petsList">
                {petList ? (petList.map((pet)=>(
                    <div className="petList">
                        <Link to="/petDetails" ><img className="petImg" src={pet.images[0]} alt={pet.name}/></Link>
                        <h2>Name: {pet.name}</h2>
                        <h2>Breed: {pet.breed}</h2>
                        
                    </div>
                    
                ))): (
                    <p>Loading...</p>
                )}
            
            
        </div>      
        </>
    );
}
import React,{useState} from "react";
import axios from "axios";
import Products from "./Products";
export const Home = ()=>{

    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);
    console.log(data)
    const submitHandler=(e)=>{
        e.preventDefault();
        
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=c3c5ac88&app_key=2d6d8d3ae2217000e160bbcad097fe24`)
        .then(data=>setData(data.data.hits))

    }
    return (
        <div className="container">
            <h3>Search Food Recipe</h3>
            <form onSubmit={submitHandler}>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} /> &nbsp;
                <input type="submit"  className="btn btn-outline-success" value="search" />
            </form>
            {data.length>=1 ? <Products data={data} /> :null}
        </div>
    )
}
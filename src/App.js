import React, { useState , useEffect } from "react";
import Pokemon from './components/pokemonlist/Pokemon';
import Pagination from './components/pagination/Pagination';
import Showsearchresult from './components/showsearchresult/Showsearchresult';
import axios from 'axios';
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentpage , setCurrentpage] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextpage , setNextpage] = useState();
  const [prevpage , setPrevpage] = useState();
  const [showdata , setShowdata] = useState(true);
  const [searchpokemon , setSearchpokemon] = useState("");
  const [searchresultdata , setSearchresultdata] = useState([]);
  const [issearchresult , setIssearchresult] = useState(false);

  // getting data a particular pokemon
  const getPokemon = async () => {
    const toarray =[];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${searchpokemon}/`;
      const res = await axios.get(url);
      console.log(res);
      toarray.push(res.data);
      setSearchresultdata(toarray);
      setIssearchresult(true);
    }catch(e){
      console.log(e);
    }
  }
  
  // updating the data of pages 
  useEffect(()=>{
    getPokemon();
    setShowdata(true);
    let cancel;
    axios.get(currentpage , {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setShowdata(false);
      setPokemon(res.data.results);
      setNextpage(res.data.next);
      setPrevpage(res.data.previous);
    })

    return () => cancel();
  }, [currentpage,searchpokemon]);
 
  // moving from current page url to next page url
  function shownextpage(){
    setCurrentpage(nextpage);
    console.log(pokemon);
  }

  // moving from current page url to previous page url
  function showprevpage(){
    setCurrentpage(prevpage);
  }

  // reading the input field data
  const onChangeHandler = e => {
    setSearchpokemon(e.target.value.toLowerCase());
  };

  // requesting for a search of particular pokemon
  const onSubmithandle = (e) => {
    e.preventDefault();
    getPokemon();
  }

  
  const viewPokemon = async (name) => {
    //console.log("hi" + name);
    setSearchpokemon(name);
    //getPokemon();
  } 

  const backto = () => {
    setIssearchresult(false);
    setSearchpokemon("");
  }
  return (
    <>
      <div className="heading"><h1>A Pokemon React App</h1></div>
      <form className="field" onSubmit={onSubmithandle}>
        <input
          type="text"
          value={searchpokemon}
          placeholder={"search pokemon here ....."}
          onChange={onChangeHandler}
        />
      </form>
      {
        issearchresult ? <Showsearchresult data={searchresultdata} backto={backto}/> : 
                        <div>
                          <Pokemon pokemon={pokemon} viewPokemon={viewPokemon} />
                          <Pagination 
                            shownextpage = {shownextpage}
                            showprevpage = {showprevpage}
                          />
                        </div>
      }
      
      
    </>
  );
}

export default App;

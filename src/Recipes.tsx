import Carte from "./carteRecipes.tsx";
import Reveal from './scrool';
import style from  "./index.module.css"
import papilon from "./papillon.png"
import inta from "./instagram.png"
import tik from "./tic-tac.png"
import MyInput from "./input.tsx";
import { useState } from "react";

function Recipes() {

  const [search, setSearche] = useState<string>("");

  const handleSearch = (e:string) => {
    setSearche(e.toLowerCase());
  };
const filtre = Carte.filter((e)=>e.title?.includes(search) )
  //filtrage 

  return (
  <>
  <div>
  <section>
  <div className="text-center mt-16 mb-10 text-emerald-900">
   <Reveal direction="top"><h1 className=" font-bold text-4xl mb-2">
   Explore our simple, healthy recipes
   </h1></Reveal>
   <p className="text-center">Discover eight quick, whole-food dishes that fit real-life schedules and taste</p>
   <p className="text-center">amaging. Use the search bar find a recipe by name or ingredient, or simply scrool</p>
   <p className="text-center">the list and let something delicious catch your eye.</p>
  </div>
  </section>

  <div>
 <MyInput onSearch={handleSearch}/>
  </div>

  <section>
    <div>
      <div>

      </div>
      <div>

      </div>
    </div>
    
  </section>

  <section className=" sm:grid-cols-2 sm:grid xl:grid-cols-3  ">
 
 {filtre.map((e)=>
    <Reveal key={e.id}>
   <div className=" flex justify-center    mb-3 ">
    <div className={`${style.cart}  w-9/12 max-h-2/6   p-1 rounded-2xl  text-emerald-900  hover:scale-105 transition-transform duration-300`}>
    <img src={e.image} alt={e.title} className="w-full h rounded-2xl " />  
    <h1 className="  my-1.5 font-bold ml-0.5">{e.title}</h1>
    <p className="mb-1.5">{e.description} </p>
    <div className="flex justify-baseline mb-1.5">
      <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>
</p>
      <p className=" ml-1.5">{e.servings} </p>
      <p className="ml-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
</svg>
</p>
      <p className="ml-1.5">{e.prep} </p>
    </div>
   <div className="flex">
    <p className="pl-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b501b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide_cake"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg></p>
    <p className="pl-1.5">{e.cook} </p>
   </div>
     <button className="flex justify-self-center mb-2 bg-emerald-900 px-12 lg:px-28 lg:py-2 border-2 border-emerald-900 rounded-2xl mt-4  text-white hover:text-emerald-950 hover:bg-white">view Recipe</button>
   </div>

   </div>



    </Reveal>

 )


 }


 
  </section>

   <section>
                <div className='flex justify-between items-center py-3 px-5 mt-9 rounded-tl-2xl rounded-tr-2xl'>
                  <div>
                    <p className='text-2xl'>Made with <span className="text-red-500">❤</span> and <span className="text-green-500">🥑</span></p>
                  </div>
                  <div className='flex gap-x-3'>
                    <Reveal direction="left"><p className='bg-emerald-800 p-2 rounded-2xl hover:bg-white'><img src={inta} alt="Instagram Icon" className="w-8 h-8"/></p></Reveal>
                    <Reveal direction="bottom"><p className='bg-emerald-800 p-2 rounded-2xl hover:bg-white'><img src={papilon} alt="Papillon Icon" className="w-8 h-8 "/></p></Reveal>
                    <Reveal direction="right"><p className='bg-emerald-800 p-2 rounded-2xl hover:bg-white'><img src={tik} alt="TikTok Icon" className="w-8 h-8"/></p></Reveal>
                  </div>
                </div>
              </section>

  </div>
  </>
   
  );
}

export default Recipes;
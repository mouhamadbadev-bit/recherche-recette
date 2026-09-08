import { useState } from 'react'
import './index.css'
import Reveal from './scrool'
import gd1 from "./photo/Grand1.png"
import pt1 from "./photo/Petite1.png"
import icone from "./Fire.svg"
import papilon from "./papillon.png"
import inta from "./instagram.png"
import tik from "./tic-tac.png"
import cookie from "./Cooking with auberigne.svg"
import fork from "./Fork and Knife.svg"
import Recipes from "./Recipes"

function App() {
  const [showRecipes, setShowRecipes] = useState(false);

  return (
    <>
      <div className="bg-amber-50">
        {/* EN-TÊTE / MENU (Toujours visible) */}
        <section className="mb-4">
          <div className="flex justify-between mr-8 ml-2 items-center">
            <Reveal direction="left">
              <h1 className='text-emerald-900 text-2xl font-bold m-3 antialiased flex cursor-pointer' onClick={() => setShowRecipes(false)}>
                <img src={icone} alt="Fire Icon" className="w-8 h-8 text-2xl"/> Healthy Recipe Finder
              </h1>
            </Reveal>

            <ul className='flex justify-center items-center gap-6 text-emerald-950 m-3 font-semibold'>
              <Reveal direction='left'>
                <li>
                  <button 
                    onClick={() => setShowRecipes(false)} 
                    className='hover:underline hover:decoration-amber-500 hover:underline-offset-2 hover:decoration-2 bg-transparent border-none cursor-pointer text-inherit font-inherit'
                  >
                    Homme
                  </button>
                </li>
              </Reveal>

              <Reveal direction='bottom'>
                <li className='hover:underline hover:decoration-amber-500 hover:underline-offset-2 hover:decoration-2 cursor-pointer'>
                  About
                </li>
              </Reveal>

              <Reveal direction='right'>
                <li>
                  <button 
                    onClick={() => setShowRecipes(true)} 
                    className='hover:underline hover:decoration-amber-500 hover:underline-offset-2 hover:decoration-2 bg-transparent border-none cursor-pointer text-inherit font-inherit'
                  >
                    Recipes
                  </button>
                </li>
              </Reveal>
            </ul>

            <Reveal direction='right'>
              <button onClick={() => setShowRecipes(true)} 
                className='font-semibold ml-5 px-4 py-2 text-white border-emerald-950 border-2 rounded-2xl bg-emerald-950 hover:bg-white hover:text-emerald-900 hover:rotate-2 transition-transform duration-300 cursor-pointer'>
                Browse recipes
              </button>
            </Reveal>
          </div>
        </section>
        <hr className="text-gray-300"/>

        {/* --- PAGE PRINCIPALE (HOME) --- */}
        {!showRecipes ? (
          <div>
            <section className='flex justify-center items-center mb-5 mt-2 text-emerald-900'>
              <div>
                <Reveal direction='top'>
                  <h1 className="font-bold text-center text-6xl mb-2 mt-7 antialiased">Healthy meals,zero fuss</h1>
                </Reveal>
                <Reveal direction='bottom'>
                  <p className="text-center antialiased">Discover eight quick, whole-food recipes that you can cook tonight</p>
                  <p className='text-center antialiased'>--no processed junk, no guesswork</p>
                  <button 
                    onClick={() => setShowRecipes(true)} 
                    className="m-3.5 justify-self-center flex border-2 rounded-2xl px-2.5 py-2 text-white bg-emerald-950 antialiased hover:bg-white hover:text-black font-semibold hover:rotate-2 transition-transform duration-300 cursor-pointer"
                  >
                    start exploring
                  </button>
                </Reveal>
              </div>
            </section>

            <div className='w-10/12 mx-auto'>
              <div>
                <Reveal direction='bottom'>
                  <img src={gd1} alt="" className='rounded-2xl shadow-amber-100 justify-self-center flex hover:scale-105 transition-transform duration-300 ant' />
                </Reveal>
              </div>

              <section>
                <Reveal direction='top'>
                  <h1 className="text-center m-7 text-3xl font-bold text-emerald-900 antialiased">What you'll get</h1>
                </Reveal>
                <div className='flex text-emerald-900 justify-between gap-x-2 mb-10 antialiased'>
                  <div>
                    <Reveal direction='left'>
                      <p className='hover:scale-105 transition-transform duration-300 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="orange" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-carrot"><path d="M15 16a1 1 0 0 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16l-3-3"/><path d="M15 9q4 4 7 0-3-4-7 0 4-4 0-7-4 3 0 7"/><path d="m8 15-2.58-2.58"/></svg>
                      </p>
                      <h1 className="font-bold mt-2.5">Wole-food recipes</h1>
                      <p>Each dish uses ereryday, unprocessed <br /> <span>ingredients.</span></p>
                    </Reveal>
                  </div>
                  <div>
                    <Reveal direction='bottom'>
                      <p className='hover:scale-105 transition-transform duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/></svg>
                      </p>
                      <h1 className='font-bold mt-2.5'>Minimum fuss</h1>
                      <p>All recipes are designed to make eating<br /> <span>healthy quick and easy.</span></p>
                    </Reveal>
                  </div>
                  <div>
                    <Reveal direction='right'>
                      <p className='hover:scale-105 transition-transform duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="blue" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                      </p>
                      <h1 className='font-bold mt-2.5'>Seach in seconds</h1>
                      <p className='text-emerald-900'>Find by name or ingredient and jump <br /> <span> straight to the recipe you need.</span></p>
                    </Reveal>
                  </div>
                </div>
                <hr className="text-gray-300"/>
              </section>

              <section className='mt-10'>
                <div className="flex gap-x-0 text-emerald-900 antialiased">
                  <div className="items-center flex">
                    <Reveal direction='left'>
                      <span><Reveal direction='top'><h1 className='mb-4 font-bold text-3xl leading-tight'>Bult for real life</h1></Reveal></span>
                      <p>Cooking shouldn't be complicated. These recipes come in <br /> <span>under 30 minutes of active time, fit busy shedules, and</span> <br /> taste good enough to repeat.</p>
                      <br /><br />
                      <p>whether you're new to the kitchen or just need fresh <br /> <span>ideas, we've got you covered.</span></p>
                    </Reveal>
                  </div> 
                  <div>
                    <Reveal direction='right'>
                      <img src={pt1} alt="" className="w-10/12 h-5/12 float-end rounded-2xl hover:scale-105 transition-transform duration-300 ant" />
                    </Reveal>
                  </div>
                </div>
              </section>

              <br /><br />

              <section className='h-52 mb-15 bg-green-100 text-emerald-900'>
                <div className="flex justify-between items-center pt-10">
                  <div>
                    <Reveal direction='left'><img src={fork} alt="" className='w-30 h-30 float-start mr-3'/></Reveal>
                  </div>
                  <div>
                    <Reveal direction='top'><h1 className='text-center antialiased font-bold text-3xl mb-3.5'>Ready to cook smarther?</h1></Reveal>
                    <Reveal direction='bottom'>  
                      <p className='text-center antialiased'>Hit the button, pick a recipe, and get dinner on the</p>
                      <button 
                        onClick={() => setShowRecipes(true)} 
                        className='flex justify-self-center antialiased bg-emerald-900 text-white mt-2.5 py-1.5 rounded-2xl px-2.5 hover:bg-green-100 border-emerald-900 border-2 font-semibold hover:text-black hover:rotate-2 transition-transform duration-300 cursor-pointer'
                      >  
                        Browse recipes
                      </button>
                    </Reveal>
                  </div>
                  <div>
                    <Reveal direction='right'><img src={cookie} alt="" className='w-30 h-30 float-end ml-3'/></Reveal>
                  </div>
                </div>
              </section>

              <section>
                <div className='flex justify-between items-center py-3 px-5 rounded-tl-2xl rounded-tr-2xl'>
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
          </div>
        ) : (
          /* --- PAGE DE RECETTES (AFFICHE SEULEMENT LES RECETTES QUAND ON CLIQUE SUR RECIPES) --- */
          <div className="flex justify-center">
            <Recipes />
          </div>
        )}
      </div>
    </>
  )
}

export default App
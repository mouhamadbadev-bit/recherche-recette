import './index.css'
import Reveal from './scrool';




  function App() {
 
  return (
    <>
   <div className=''>
  <section>
<div>
 <Reveal direction="left">
   <h1> Healthy Recipe Finder</h1>
 </Reveal>
</div>
<div>
  <ul>
   <Reveal direction='left'> <li>Homme</li></Reveal>
   <Reveal direction='bottom'><li>About</li></Reveal>
   <Reveal direction='right'><li>Recipes</li></Reveal>
  </ul>
</div>
<div>
 <Reveal direction='right'><button>Browse recipes</button></Reveal>
</div>
  </section>
  
  <section>
  <div>
      <Reveal direction='top'><h1>Healthy meals,zero fuss</h1></Reveal>
      <Reveal direction='bottom'><p>Discover eight quick, whole-food recipes that you can cook tonight</p>
      <p>--no processed junk, no guesswork</p>
      <button>start exploring</button>
      </Reveal>
      
  </div>
  </section>

<div>
<Reveal direction='bottom'>
  <img src="" alt="" />
</Reveal>
</div>

<section>
  <div>
   <Reveal direction='top'><h1>What you'll get</h1></Reveal>
  <div>
    <Reveal direction='left'>
      <p></p>
    <h1>Wole-food recipes</h1>
    <p>Each dish uses ereryday, unprocessed ingredients.</p>
    </Reveal>
  </div>
  <div>
    <Reveal direction='bottom'>
      <p></p>
    <h1>Minimum fuss</h1>
    <p>All recipes are designed to make eating healthy quick and easy</p>
    </Reveal>
  </div>
  <div>
    <Reveal direction='right'>
      <p></p>
    <h1>Seach in seconds</h1>
    <p>Find by name or ingredient and jump straight to the recipe you need</p>
    </Reveal>
  </div>

  </div>
</section>

<section>
<div>

<div>
<h1>Bult for real life</h1> 
<p>Cooking shouldn't be complicated. These recipes come in under 30 minutes of active time, fit busy shedules, and taste good enough to repeat.</p>
<p>whether you're new to the kitchen or just need fresh ideas, we've got you covered.</p>
</div> 
<div>
  <img src="" alt="" />
</div>
</div>
</section>

<section>
  <div>
    <h1>Ready to cook smarther?</h1>
    <p>Hit the button, pick a recipe, and get dinner on the</p>
    <button>  Browse recipes</button>
  </div>
</section>

   </div>


    </>
  )
}

export default App

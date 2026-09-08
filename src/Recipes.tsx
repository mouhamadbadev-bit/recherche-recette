import Carte from "./carteRecipes.tsx";
import Reveal from './scrool';




function Recipes() {
  return (
  <>
  <div>
  <section>
  <div>
   <h1>
   Explore our simple, healthy recipes
   </h1>
   <p>Discover eight quick, whole-food dishes that fit real-life schedules and taste</p>
   <p>amaging. Use the search bar find a recipe by name or ingredient, or simply scrool</p>
   <p>the list and let something delicious catch your eye.</p>
  </div>
  </section>

  <section>
    <div>
      <div>

      </div>
      <div>

      </div>
    </div>
    
  </section>

  <section>
 
 {Carte.map((e)=>
    <Reveal key={e.id} direction="dir">
   <div className="">
    <img src={e.image} alt={e.title} className="w-full h-auto object-cover rounded-lg" />  
    <h1>{e.title}</h1>
    <p>{e.description} </p>
    <p>{e.servings} </p>
    <p>{e.prep} </p>
    <p>{e.cook} </p>

   </div>



    </Reveal>

 )


 }

 
  </section>

  </div>
  </>
   
  );
}

export default Recipes;
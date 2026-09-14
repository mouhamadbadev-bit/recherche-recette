import img1 from "./photo/Gemini1.png"
import img2 from "./photo/Gemini2.png"
import img3 from "./photo/Gemini3.png"
import img4 from "./photo/Gemini4.png"
import img5 from "./photo/Gemini5.png"
import img6 from "./photo/Gemini6.png"
import img7 from "./photo/Gemini7.png"
import img8 from "./photo/Gemini8.png"
import img9 from "./photo/Gemini9.png"











interface Recipes {
  id: number;
  title?: string ;
  description: string;
  servings: string | number;
  prep: number | string;
  cook: number | string;
  image?: string ;
  dir: string ;
}

 const Carte : Recipes[] = [
{
 id: 1,
 title: 'Mediterrean Chickkpea Salad',
 description: 'A refreshing protein-packed salad tossed in a lemon-olive .',
 servings: `Servings: 2 ` ,
 prep: `Prep: 10 mins`,
 cook:`Cook: 0 mins` ,
 image: img1,
 dir:'left' 


  },

 {
 id: 2,
 title: 'Avocado & Tomato Wholegrain',
 description: 'Cremy avocado spread over toasted wholegrain bread, topped with juicy.',
 servings:`Servings: 1` ,
 prep:`Prep: 10 mins` ,
 cook: `Cook: 15 mins`,
 image:img2 ,
  dir:'top'   
 

 },

 {
 id: 3,
 title: 'One-Pan Lemon Garlic ...',
 description: 'A 9 mins weeknight dinner of flaky salmon and  asparagus.',
 servings: `Servings: 2`,
 prep: `Prep: 5 mins`,
 cook: `Cook: 12 mins`,
 image: img3 ,
  dir:'right' 
 

 },

 {
 id: 4,
 title: 'Quinoa Veggie Power Bowl ',
 description: 'A balanced bowl of fluffy quinoa, roasted veggies and healthy fats.',
 servings: `Servings: 2`,
 prep: `Prep: 10 mins`,
 cook: `Cook: 15 mins`,
 image: img4,
 dir:'left'   


 },

 {
 id: 5,
 title: 'Sweet Potato Black Bean Tacos',
 description: 'Smoky roasted  beans tucktud into warm tortillas. ',
 servings: `Servings: 3`,
 prep: `Prep: 10 mins`,
 cook: `Cook: 15 mins`,
 image: img5 ,
  dir:'bottom'
    


 },

 {
 id: 6,
 title: 'Greek Yogurt Berry Parfait',
 description: 'Layers of creamy yogurt, fresh berries and crunchy oats .',
 servings: `Servings: 3`,
 prep: `Prep: 10 mins`,
 cook: `Cook: 15 mins`,
 image: img6 ,
  dir:'right'
   


 },

 {
 id: 7,
 title: 'Lentil & Spinach Soup',
 description: 'A hearty 30-minute soup rich in plant protein and iron.',
 servings: `Servings: 4`,
 prep: `Prep: 10 mins`,
 cook: `Cook: 20 mins`,
 image: img7 ,
  dir:'left'
  


 },

 {
 id: 8,
 title: 'Banana Oat Pancakes',
 description: 'Flour-free pancakes sweetened naturally with ripe bananas.',
 servings: `Servings: 2`,
 prep: `Prep: 5 mins`,
 cook: `Cook: 10 mins`,
 image: img8 ,
  dir:'bottom'
  


 },

 {
 id: 9,
 title: 'Creamy Tomato Basil Soup',
 description: 'Rich and velvety tomato soup infused with fresh basil, perfect for a  meal.',
 servings: `Servings: 5`,
 prep: `Prep: 10 mins`,
 cook: `Cook: 20 mins`,
 image: img9 ,
  dir:'right'
   


 },


]


export default Carte;
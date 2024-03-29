import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAoSTuOib8RIOYfhZZbR1QRHNT4rE0A2xI",
  authDomain: "chef-mate-a829d.firebaseapp.com",
  projectId: "chef-mate-a829d",
  storageBucket: "chef-mate-a829d.appspot.com",
  messagingSenderId: "566558983201",
  appId: "1:566558983201:web:b8d17bf6b47bf14c754f60",
  measurementId: "G-MM4P1N0616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

async function storeRandonFoodIntoDB() {
    for (let idx = 1 ; idx <= 2000 ; idx++) {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        const data = await api.json();
        let meal = data.meals[0]
        const mealData = {
            id: meal.idMeal,
            name: meal.strMeal,
            category: meal.strCategory,
            area: meal.strArea,
            instructions: meal.strInstructions,
            image: meal.strMealThumb,
            tag: meal.strTags,
            youtube_link: meal.strYoutube,
        }

        let ingredient = [] 
        for (let i = 1; i<=20 ; i++) {
            let name = "strIngredient" + i.toString()
            ingredient.push(meal[name])
        }
        mealData.ingredients = ingredient

        let measurements = [] 
        for (let i = 1; i<=20 ; i++) {
            let name = "strMeasure" + i.toString()
            measurements.push(meal[name])
        }
        mealData.measurements = measurements
        const doc = await addDoc(collection(db, "meals"), mealData)
        console.log(data)
    }
}

storeRandonFoodIntoDB();
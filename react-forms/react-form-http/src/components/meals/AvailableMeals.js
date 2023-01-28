import { useEffect, useState } from "react";
import Card from "../common/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchAllMeals = async () => {
      try {
        const result = await fetch(
          "https://react-swiggy-app-default-rtdb.firebaseio.com/meals.json"
        );
        const data = await result.json();
        setAvailableMeals(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setHttpError(e);
        setIsLoading(false);
      }
    };
    fetchAllMeals();
  }, []);

  if(isLoading){
    return <section className={classes['meals-loading']}>
      <p>Loading Meals, please wait...</p>
    </section>
  }

  if(httpError){
    return <section className={classes['meals-error']}>
      <p>Error loading meals, please contact administrator.</p>
    </section>
  }

  const mealsList = availableMeals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    ></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

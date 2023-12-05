import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import SliderImage from "@/assets/mainslider.jpg";
import Trophy from '@/assets/trophy1.svg';
export const App = () => {
  const [value, setValue] = useState<number>(0);
  function summ(){
    summ2()
  }
  function summ2(){
   throw new Error()
  }
//   summ('2',5);
// if(__PLATFORM__ === 'desktop'){
//   return <div>DESKTOP</div>
// }
// if(__PLATFORM__ === 'mobile'){
//   return <div>MOBILE</div>
// }
  return (
    <div data-testid='hello'>
      <div>
        fdfdd
      </div>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img src={SliderImage} alt="" />
      </div>
      <div>
       <Trophy width={100} height={100} style={{color:'red'}}/>
      </div>
      <div>
        <Link to="/about">About</Link>
        <br />
        <Link to="/shop">Shop</Link>
      </div>
      Value is {value}
      <button
        className={classes.button}
        onClick={() => summ()}
      >
        Increment
      </button>
      <button onClick={() => setValue((prev) => prev - 1)}>Decrement</button>
      <Outlet />
    </div>
  );
};

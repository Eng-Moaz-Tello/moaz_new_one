import RecipeForm from "./components/RecipeForm";
import { useEffect } from "react";
import { useState } from "react";
export default function App() {
  const [var1, setVar1] = useState(0);
  useEffect(() => {
    alert("hello")
    console.log("valval")
  },[]);
  return (
    <div className="app" dir="rtl">
      <RecipeForm/>
      <button onClick={() => setVar1((old) => old+2)}>
        click {var1}
      </button>
    </div>
  );
}

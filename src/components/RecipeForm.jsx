import React, { useState } from "react";
import FormField from "./FormField";

const RecipeForm = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  return (
    <form>
      <h2>أضف وصفة جديدة ⭐️</h2>
      <FormField
        label="اسم الوصفة"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        required={true}
        placeholder="اسم الوصفة"
      />
      <FormField
        label="المكونات "
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        type="text"
        required={true}
        placeholder="رز ، بهارات، لحمة، ..."
      />
      <FormField
        label="المدة المتوقعة"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required={true}
        placeholder="المدة المتوقعة 60 دقيقة"
      />
      {/* <FormField
        label="الصنف"
        value={category}
        onChange={setCategory}
        type="text"
        required={true}
        placeholder="حلويات، مشروبات، مقبلات"
      /> */}
      <div>
        <label>الصنف</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {["مشروبات ","حلويات","مقبلات"].map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
      </div>
      <button type="submit">أضف الوصفة</button>
    </form>
  );
};

export default RecipeForm;

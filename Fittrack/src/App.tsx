import { useState } from "react";

const exercises = {
  Chest: [
    { name: "Push-Up", muscles: "Pectorals, Triceps, Shoulders", desc: "A classic bodyweight exercise performed in a prone position, pushing your body up and down using your arms.", tips: "Keep your body in a straight line from head to heels. Don't let your hips sag." },
    { name: "Bench Press", muscles: "Pectorals, Triceps, Front Deltoids", desc: "Lie on a flat bench and press a barbell or dumbbells upward from chest level to full arm extension.", tips: "Keep your feet flat on the floor and your back slightly arched. Control the descent." },
    { name: "Chest Fly", muscles: "Pectorals, Biceps", desc: "Using dumbbells or a cable machine, perform an arc motion to open and close the arms at chest height.", tips: "Keep a slight bend in your elbows throughout. Focus on the stretch at the bottom." },
  ],
  Back: [
    { name: "Pull-Up", muscles: "Latissimus Dorsi, Biceps, Rhomboids", desc: "Hang from a bar with palms facing away and pull your chest up to the bar level.", tips: "Engage your core and avoid swinging. Start with your shoulders depressed (down)." },
    { name: "Bent-Over Row", muscles: "Rhomboids, Lats, Lower Back, Biceps", desc: "Hinge forward at the hips holding a barbell or dumbbells and row the weight toward your lower chest.", tips: "Keep your back flat and parallel to the floor. Drive your elbows back, not up." },
    { name: "Lat Pulldown", muscles: "Latissimus Dorsi, Biceps", desc: "Seated at a cable machine, grip a wide bar and pull it down to your upper chest.", tips: "Lean back slightly and drive your elbows down and back. Avoid using momentum." },
  ],
  Legs: [
    { name: "Squat", muscles: "Quadriceps, Glutes, Hamstrings, Core", desc: "Stand with feet shoulder-width apart and lower your body as if sitting into a chair, then drive back up.", tips: "Keep your chest up and knees tracking over your toes. Descend until thighs are parallel." },
    { name: "Lunges", muscles: "Quadriceps, Glutes, Hamstrings", desc: "Step forward with one leg and lower your back knee toward the floor, then push back to start.", tips: "Keep your front knee over your ankle. Keep your torso upright throughout the movement." },
    { name: "Deadlift", muscles: "Hamstrings, Glutes, Lower Back, Traps", desc: "Grip a barbell on the floor and drive through your legs and hips to stand upright with the bar.", tips: "Keep the bar close to your body throughout. Never round your lower back." },
  ],
  Shoulders: [
    { name: "Overhead Press", muscles: "Deltoids, Triceps, Upper Traps", desc: "Press a barbell or dumbbells from shoulder height directly overhead until your arms are fully extended.", tips: "Brace your core and glutes to protect your lower back. Don't flare your elbows too wide." },
    { name: "Lateral Raise", muscles: "Lateral Deltoids", desc: "Raise dumbbells out to your sides until your arms are parallel to the floor, then lower slowly.", tips: "Lead with your elbows, not your wrists. Keep a slight bend in your elbows. Control the negative." },
  ],
  Arms: [
    { name: "Bicep Curl", muscles: "Biceps, Brachialis", desc: "Curl dumbbells or a barbell from a fully extended arm position up toward your shoulders.", tips: "Keep your elbows pinned to your sides. Avoid swinging your body to generate momentum." },
    { name: "Tricep Dip", muscles: "Triceps, Chest, Shoulders", desc: "Support yourself on parallel bars and lower your body by bending your elbows, then push back up.", tips: "Keep your torso upright to target triceps. Lean forward slightly to hit the chest more." },
  ],
  Core: [
    { name: "Plank", muscles: "Core, Transverse Abdominis, Shoulders", desc: "Hold a rigid push-up position on your forearms, maintaining a straight line from head to heels.", tips: "Squeeze your glutes and core throughout. Don't let your hips rise or sag." },
    { name: "Crunches", muscles: "Rectus Abdominis", desc: "Lie on your back with knees bent and curl your shoulders toward your knees using your abdominals.", tips: "Don't pull on your neck. Focus on contracting the abs, not on how high you rise." },
    { name: "Russian Twist", muscles: "Obliques, Core", desc: "Sit at a 45° angle with feet off the floor and rotate a weight from side to side.", tips: "Keep your spine tall and chest open. Rotate from your torso, not just your arms." },
  ],
};

const foods = {
  Breakfast: [
    { name: "Oatmeal (1 cup)", cal: 154, protein: 5, carbs: 27, fat: 3 },
    { name: "Scrambled Eggs (2)", cal: 182, protein: 12, carbs: 2, fat: 14 },
    { name: "Greek Yogurt (200g)", cal: 130, protein: 17, carbs: 9, fat: 2 },
    { name: "Banana (1 medium)", cal: 89, protein: 1, carbs: 23, fat: 0 },
    { name: "Whole Wheat Toast (2)", cal: 138, protein: 6, carbs: 26, fat: 2 },
  ],
  Lunch: [
    { name: "Chicken Breast (150g)", cal: 248, protein: 46, carbs: 0, fat: 5 },
    { name: "Brown Rice (1 cup)", cal: 216, protein: 5, carbs: 45, fat: 2 },
    { name: "Mixed Salad", cal: 72, protein: 3, carbs: 10, fat: 2 },
    { name: "Tuna (1 can)", cal: 109, protein: 25, carbs: 0, fat: 1 },
    { name: "Avocado (½)", cal: 120, protein: 1, carbs: 6, fat: 11 },
  ],
  Dinner: [
    { name: "Salmon Fillet (150g)", cal: 280, protein: 39, carbs: 0, fat: 13 },
    { name: "Sweet Potato (1 medium)", cal: 103, protein: 2, carbs: 24, fat: 0 },
    { name: "Broccoli (1 cup)", cal: 55, protein: 4, carbs: 11, fat: 1 },
    { name: "Pasta (1 cup)", cal: 220, protein: 8, carbs: 43, fat: 1 },
    { name: "Lean Beef (150g)", cal: 296, protein: 40, carbs: 0, fat: 14 },
  ],
  Snacks: [
    { name: "Almonds (30g)", cal: 173, protein: 6, carbs: 6, fat: 15 },
    { name: "Protein Bar", cal: 200, protein: 20, carbs: 22, fat: 6 },
    { name: "Apple (1 medium)", cal: 95, protein: 0, carbs: 25, fat: 0 },
    { name: "Cottage Cheese (100g)", cal: 98, protein: 11, carbs: 3, fat: 4 },
    { name: "Rice Cakes (3)", cal: 105, protein: 2, carbs: 23, fat: 1 },
  ],
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dayColors = ["#ffecd2","#d0f4de","#d6eaff","#ffe8f0","#e8d6ff","#fff3cc","#d6f5f5"];
const dayAccents = ["#f4845f","#27ae60","#2980b9","#e84393","#8e44ad","#f39c12","#16a085"];
const groupColors = { Chest:"#fde8e8", Back:"#e8f5e9", Legs:"#fff8e1", Shoulders:"#ede7f6", Arms:"#fce4ec", Core:"#e0f7fa" };
const groupAccents = { Chest:"#e53935", Back:"#43a047", Legs:"#f9a825", Shoulders:"#7b1fa2", Arms:"#e91e63", Core:"#00897b" };

export default function FitTrack() {
  const [tab, setTab] = useState("dashboard");
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [dietPlan, setDietPlan] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [expandedGroup, setExpandedGroup] = useState("Chest");
  const [expandedMeal, setExpandedMeal] = useState("Breakfast");
  const [calorieGoal, setCalorieGoal] = useState(2000);
  const [weekPlan, setWeekPlan] = useState({ Mon:[], Tue:[], Wed:[], Thu:[], Fri:[], Sat:[], Sun:[] });
  const [customMeals, setCustomMeals] = useState([]);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customForm, setCustomForm] = useState({ name:"", cal:"", protein:"", carbs:"", fat:"" });
  const [customError, setCustomError] = useState("");
  const [selectedDay, setSelectedDay] = useState("Mon");
  const [addingTo, setAddingTo] = useState(null);

  const totalCals = dietPlan.reduce((s, f) => s + f.cal, 0);
  const totalProtein = dietPlan.reduce((s, f) => s + f.protein, 0);
  const totalCarbs = dietPlan.reduce((s, f) => s + f.carbs, 0);
  const totalFat = dietPlan.reduce((s, f) => s + f.fat, 0);
  const calPct = Math.min(100, Math.round((totalCals / calorieGoal) * 100));

  function addExercise(ex) {
    if (!workoutPlan.find(e => e.name === ex.name))
      setWorkoutPlan(p => [...p, { ...ex, sets: 3, reps: 10 }]);
  }
  function removeExercise(name) { setWorkoutPlan(p => p.filter(e => e.name !== name)); }
  function addFood(food) { setDietPlan(p => [...p, { ...food, id: Date.now() + Math.random() }]); }
  function removeFood(id) { setDietPlan(p => p.filter(f => f.id !== id)); }
  function submitCustomMeal() {
    if (!customForm.name.trim()) { setCustomError("Please enter a meal name."); return; }
    if (!customForm.cal || isNaN(customForm.cal)) { setCustomError("Please enter valid calories."); return; }
    const meal = { name: customForm.name.trim(), cal: +customForm.cal, protein: +customForm.protein||0, carbs: +customForm.carbs||0, fat: +customForm.fat||0, custom: true };
    setCustomMeals(p => [...p, { ...meal, id: Date.now() }]);
    setCustomForm({ name:"", cal:"", protein:"", carbs:"", fat:"" });
    setCustomError("");
    setShowCustomForm(false);
  }
  function removeCustomMeal(id) { setCustomMeals(p => p.filter(m => m.id !== id)); }
  function updateSets(name, val) { setWorkoutPlan(p => p.map(e => e.name === name ? { ...e, sets: val } : e)); }
  function updateReps(name, val) { setWorkoutPlan(p => p.map(e => e.name === name ? { ...e, reps: val } : e)); }

  function addToWeek(day, ex) {
    setWeekPlan(p => {
      if (p[day].find(e => e.name === ex.name)) return p;
      return { ...p, [day]: [...p[day], ex] };
    });
    setAddingTo(null);
  }
  function removeFromWeek(day, name) {
    setWeekPlan(p => ({ ...p, [day]: p[day].filter(e => e.name !== name) }));
  }

  const allExercises = Object.values(exercises).flat();

  return (
    <div style={{ fontFamily: "system-ui,sans-serif", background: "linear-gradient(135deg,#ffecd2 0%,#d0f4de 30%,#d6eaff 60%,#ffe8f0 100%)", minHeight: "100vh", paddingBottom: 90, paddingTop: "env(safe-area-inset-top)" }}>
      {/* Header */}
      <div style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(10px)", padding: "18px 20px 0", borderBottom: "1px solid rgba(255,255,255,0.6)", position: "sticky", top: 0, zIndex: 10, WebkitBackdropFilter: "blur(10px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 2 }}>
          <span style={{ fontSize: 26 }}>🏃</span>
          <div>
            <p style={{ fontSize: 20, fontWeight: 500, color: "#1a1a1a", margin: 0 }}>FitTrack</p>
            <p style={{ fontSize: 12, color: "#888", margin: 0 }}>Your daily workout & diet planner</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 0, marginTop: 12 }}>
          {[["dashboard","📊","Stats"],["workout","🏋️","Train"],["diet","🥗","Diet"],["week","📅","Plan"]].map(([t,ic,label]) => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex: 1, padding: "9px 0", border: "none", background: "none", cursor: "pointer",
              fontSize: 12, fontWeight: tab===t ? 500 : 400,
              color: tab===t ? "#6c47ff" : "#777",
              borderBottom: tab===t ? "2.5px solid #6c47ff" : "2.5px solid transparent",
            }}>{ic} {label}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: "20px 12px 0", maxWidth: 680, margin: "0 auto", width: "100%" }}>

        {/* DASHBOARD */}
        {tab === "dashboard" && (
          <>
            <div style={{ background: "linear-gradient(135deg,#6c47ff,#a78bfa)", borderRadius: 18, padding: "20px 22px", marginBottom: 16, color: "#fff" }}>
              <div style={{ fontSize: 13, opacity: 0.85, marginBottom: 4 }}>Today's calorie progress</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
                <span style={{ fontSize: 32, fontWeight: 500 }}>{totalCals}</span>
                <span style={{ fontSize: 14, opacity: 0.75 }}>/ {calorieGoal} kcal</span>
              </div>
              <div style={{ height: 10, borderRadius: 5, background: "rgba(255,255,255,0.3)" }}>
                <div style={{ height: "100%", width: calPct + "%", borderRadius: 5, background: "#fff", transition: "width 0.4s" }} />
              </div>
              <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>{calPct}% of daily goal</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
              {[["💪","Exercises", workoutPlan.length,"#fde8e8","#e53935"],["🍽️","Meals", dietPlan.length,"#e8f5e9","#43a047"],["🥩","Protein", totalProtein+"g","#ede7f6","#7b1fa2"]].map(([ic,label,val,bg,col]) => (
                <div key={label} style={{ background: bg, borderRadius: 14, padding: "14px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{ic}</div>
                  <div style={{ fontSize: 20, fontWeight: 500, color: col }}>{val}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(255,255,255,0.8)", borderRadius: 16, padding: "16px 18px", marginBottom: 14 }}>
              <p style={{ fontWeight: 500, fontSize: 15, margin: "0 0 12px", color: "#1a1a1a" }}>Macro breakdown</p>
              {[["Protein", totalProtein, "#e53935","#fde8e8"],["Carbs", totalCarbs,"#2196f3","#d6eaff"],["Fat", totalFat,"#f9a825","#fff8e1"]].map(([label,val,col,bg]) => (
                <div key={label} style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 5 }}>
                    <span style={{ color: "#555" }}>{label}</span><span style={{ fontWeight: 500, color: col }}>{val}g</span>
                  </div>
                  <div style={{ height: 8, borderRadius: 4, background: bg }}>
                    <div style={{ height: "100%", width: Math.min(100,(val/200)*100)+"%", borderRadius: 4, background: col, transition:"width 0.4s" }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(255,255,255,0.8)", borderRadius: 16, padding: "16px 18px", marginBottom: 14 }}>
              <p style={{ fontWeight: 500, fontSize: 15, margin: "0 0 10px", color: "#1a1a1a" }}>Daily calorie goal</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <input type="range" min={1200} max={4000} step={50} value={calorieGoal}
                  onChange={e => setCalorieGoal(+e.target.value)} style={{ flex: 1 }} />
                <span style={{ fontWeight: 500, fontSize: 15, minWidth: 70, color: "#6c47ff" }}>{calorieGoal} kcal</span>
              </div>
            </div>

            {workoutPlan.length > 0 && (
              <div style={{ background: "rgba(255,255,255,0.8)", borderRadius: 16, padding: "16px 18px" }}>
                <p style={{ fontWeight: 500, fontSize: 15, margin: "0 0 10px", color: "#1a1a1a" }}>Today's workout</p>
                {workoutPlan.map(ex => (
                  <div key={ex.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "0.5px solid #f0f0f0" }}>
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 14 }}>{ex.name}</div>
                      <div style={{ fontSize: 12, color: "#888" }}>{ex.sets} sets × {ex.reps} reps</div>
                    </div>
                    <span style={{ fontSize: 11, background: groupColors[Object.keys(exercises).find(g=>exercises[g].find(e=>e.name===ex.name))], color: groupAccents[Object.keys(exercises).find(g=>exercises[g].find(e=>e.name===ex.name))], borderRadius: 20, padding: "3px 10px" }}>{ex.muscles.split(",")[0]}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* WORKOUT */}
        {tab === "workout" && (
          <>
            <p style={{ fontWeight: 500, fontSize: 16, color: "#1a1a1a", margin: "0 0 12px" }}>Exercise library</p>
            {Object.entries(exercises).map(([group, exs]) => (
              <div key={group} style={{ marginBottom: 8 }}>
                <button onClick={() => setExpandedGroup(expandedGroup===group ? null : group)} style={{
                  width: "100%", textAlign: "left", padding: "12px 16px", border: "none",
                  borderRadius: 14, background: expandedGroup===group ? groupColors[group] : "rgba(255,255,255,0.75)",
                  cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                  fontSize: 14, fontWeight: 500, color: expandedGroup===group ? groupAccents[group] : "#333"
                }}>
                  <span>{group}</span>
                  <span style={{ fontSize: 12, color: "#aaa" }}>{expandedGroup===group?"▲":"▼"}</span>
                </button>
                {expandedGroup===group && (
                  <div style={{ background: "rgba(255,255,255,0.85)", borderRadius: "0 0 14px 14px", padding: "8px 16px 4px" }}>
                    {exs.map(ex => {
                      const added = workoutPlan.find(e => e.name===ex.name);
                      const open = selectedExercise?.name===ex.name;
                      return (
                        <div key={ex.name} style={{ padding: "10px 0", borderBottom: "0.5px solid #f0f0f0" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <div style={{ flex: 1, paddingRight: 10 }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                                <span style={{ fontWeight: 500, fontSize: 14 }}>{ex.name}</span>
                                <button onClick={() => setSelectedExercise(open?null:ex)} style={{ background:"none", border:"none", fontSize:12, color:"#6c47ff", cursor:"pointer", padding:0 }}>{open?"▲ less":"▼ info"}</button>
                              </div>
                              <div style={{ fontSize: 12, color: "#888" }}>{ex.muscles}</div>
                              {open && (
                                <div style={{ marginTop: 8, padding: "10px 12px", background: groupColors[group], borderRadius: 10, fontSize: 13 }}>
                                  <p style={{ margin:"0 0 6px", color:"#444" }}>{ex.desc}</p>
                                  <p style={{ margin:0, color: groupAccents[group], fontWeight:500 }}>Tip: {ex.tips}</p>
                                </div>
                              )}
                            </div>
                            <button onClick={() => !added && addExercise(ex)} style={{
                              padding: "6px 14px", borderRadius: 8, border: "none", fontSize: 13, cursor: added?"default":"pointer",
                              background: added ? groupColors[group] : groupAccents[group], color: added ? groupAccents[group] : "#fff", fontWeight: 500
                            }}>{added ? "✓ Added" : "+ Add"}</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {workoutPlan.length > 0 && (
              <>
                <p style={{ fontWeight: 500, fontSize: 16, margin: "20px 0 10px", color: "#1a1a1a" }}>Your workout plan</p>
                <div style={{ background: "rgba(255,255,255,0.85)", borderRadius: 16, padding: "8px 16px" }}>
                  {workoutPlan.map(ex => (
                    <div key={ex.name} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 0", borderBottom:"0.5px solid #f0f0f0" }}>
                      <div style={{ flex:1 }}>
                        <div style={{ fontWeight:500, fontSize:14 }}>{ex.name}</div>
                        <div style={{ fontSize:12, color:"#888" }}>{ex.muscles.split(",")[0]}</div>
                      </div>
                      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                        <div style={{ textAlign:"center" }}>
                          <div style={{ fontSize:10, color:"#aaa", marginBottom:2 }}>sets</div>
                          <input style={{ width:40, padding:"3px 4px", border:"0.5px solid #ddd", borderRadius:6, fontSize:13, textAlign:"center" }} type="number" min={1} max={10} value={ex.sets} onChange={e=>updateSets(ex.name,+e.target.value)} />
                        </div>
                        <span style={{ color:"#ccc" }}>×</span>
                        <div style={{ textAlign:"center" }}>
                          <div style={{ fontSize:10, color:"#aaa", marginBottom:2 }}>reps</div>
                          <input style={{ width:40, padding:"3px 4px", border:"0.5px solid #ddd", borderRadius:6, fontSize:13, textAlign:"center" }} type="number" min={1} max={50} value={ex.reps} onChange={e=>updateReps(ex.name,+e.target.value)} />
                        </div>
                        <button onClick={() => removeExercise(ex.name)} style={{ background:"none", border:"none", color:"#e53935", fontSize:18, cursor:"pointer" }}>×</button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* DIET */}
        {tab === "diet" && (
          <>
            <p style={{ fontWeight:500, fontSize:16, color:"#1a1a1a", margin:"0 0 12px" }}>Food library</p>
            {Object.entries(foods).map(([meal, items]) => {
              const mealColors2 = { Breakfast:"#fff8e1", Lunch:"#e8f5e9", Dinner:"#e3f2fd", Snacks:"#fce4ec" };
              const mealAccents = { Breakfast:"#f9a825", Lunch:"#43a047", Dinner:"#2196f3", Snacks:"#e91e63" };
              return (
                <div key={meal} style={{ marginBottom: 8 }}>
                  <button onClick={() => setExpandedMeal(expandedMeal===meal?null:meal)} style={{
                    width:"100%", textAlign:"left", padding:"12px 16px", border:"none",
                    borderRadius:14, background: expandedMeal===meal ? mealColors2[meal] : "rgba(255,255,255,0.75)",
                    cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center",
                    fontSize:14, fontWeight:500, color: expandedMeal===meal ? mealAccents[meal] : "#333"
                  }}>
                    <span>{meal}</span>
                    <span style={{ fontSize:12, color:"#aaa" }}>{expandedMeal===meal?"▲":"▼"}</span>
                  </button>
                  {expandedMeal===meal && (
                    <div style={{ background:"rgba(255,255,255,0.85)", borderRadius:"0 0 14px 14px", padding:"8px 16px 4px" }}>
                      {items.map(food => (
                        <div key={food.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderBottom:"0.5px solid #f0f0f0" }}>
                          <div style={{ flex:1 }}>
                            <div style={{ fontWeight:500, fontSize:14, marginBottom:4 }}>{food.name}</div>
                            <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>
                              <span style={{ fontSize:11, padding:"2px 8px", borderRadius:20, background:"#fff3e0", color:"#f9a825" }}>{food.cal} kcal</span>
                              <span style={{ fontSize:11, padding:"2px 8px", borderRadius:20, background:"#e8f5e9", color:"#43a047" }}>P {food.protein}g</span>
                              <span style={{ fontSize:11, padding:"2px 8px", borderRadius:20, background:"#e3f2fd", color:"#2196f3" }}>C {food.carbs}g</span>
                              <span style={{ fontSize:11, padding:"2px 8px", borderRadius:20, background:"#fce4ec", color:"#e91e63" }}>F {food.fat}g</span>
                            </div>
                          </div>
                          <button onClick={() => addFood(food)} style={{ padding:"6px 14px", borderRadius:8, border:"none", fontSize:13, cursor:"pointer", background: mealAccents[meal], color:"#fff", fontWeight:500 }}>+ Add</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Custom meal section */}
            <div style={{ margin:"18px 0 8px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <p style={{ fontWeight:500, fontSize:16, color:"#1a1a1a", margin:0 }}>My custom meals</p>
              <button onClick={() => { setShowCustomForm(p=>!p); setCustomError(""); }} style={{ padding:"6px 14px", borderRadius:10, border:"none", fontSize:13, background:"#6c47ff", color:"#fff", cursor:"pointer", fontWeight:500 }}>
                {showCustomForm ? "✕ Cancel" : "+ New meal"}
              </button>
            </div>

            {showCustomForm && (
              <div style={{ background:"rgba(255,255,255,0.9)", borderRadius:16, padding:"16px 18px", marginBottom:12 }}>
                <p style={{ fontWeight:500, fontSize:14, margin:"0 0 12px", color:"#6c47ff" }}>Add a custom meal</p>
                <div style={{ marginBottom:10 }}>
                  <div style={{ fontSize:12, color:"#888", marginBottom:4 }}>Meal name *</div>
                  <input placeholder="e.g. Homemade chicken soup" value={customForm.name} onChange={e=>setCustomForm(p=>({...p,name:e.target.value}))}
                    style={{ width:"100%", padding:"8px 12px", borderRadius:10, border:"0.5px solid #ddd", fontSize:14, boxSizing:"border-box" }} />
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:10 }}>
                  {[["cal","Calories (kcal) *","#f9a825"],["protein","Protein (g)","#43a047"],["carbs","Carbs (g)","#2196f3"],["fat","Fat (g)","#e91e63"]].map(([key,label,col]) => (
                    <div key={key}>
                      <div style={{ fontSize:12, color:"#888", marginBottom:4 }}>{label}</div>
                      <input type="number" min={0} placeholder="0" value={customForm[key]} onChange={e=>setCustomForm(p=>({...p,[key]:e.target.value}))}
                        style={{ width:"100%", padding:"8px 12px", borderRadius:10, border:`0.5px solid ${col}40`, fontSize:14, boxSizing:"border-box" }} />
                    </div>
                  ))}
                </div>
                {customError && <div style={{ fontSize:12, color:"#e53935", marginBottom:8 }}>{customError}</div>}
                <button onClick={submitCustomMeal} style={{ width:"100%", padding:"10px 0", borderRadius:12, border:"none", fontSize:14, fontWeight:500, background:"#6c47ff", color:"#fff", cursor:"pointer" }}>Save meal</button>
              </div>
            )}

            {customMeals.length > 0 && (
              <div style={{ background:"rgba(255,255,255,0.85)", borderRadius:16, padding:"8px 16px", marginBottom:8 }}>
                {customMeals.map(food => (
                  <div key={food.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderBottom:"0.5px solid #f0f0f0" }}>
                    <div style={{ flex:1 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}>
                        <span style={{ fontWeight:500, fontSize:14 }}>{food.name}</span>
                        <span style={{ fontSize:10, padding:"1px 7px", borderRadius:20, background:"#ede7f6", color:"#7b1fa2" }}>custom</span>
                      </div>
                      <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>
                        <span style={{ fontSize:11, padding:"2px 8px", borderRadius:20, background:"#fff3e0", color:"#f9a825" }}>{food.cal} kcal</span>
                        <span style={{ fontSize:11, padding:"2px 8px", borderRadius:20, background:"#e8f5e9", color:"#43a047" }}>P {food.protein}g</span>
                        <span style={{ fontSize:11, padding:"2px 8px", borderRadius:20, background:"#e3f2fd", color:"#2196f3" }}>C {food.carbs}g</span>
                        <span style={{ fontSize:11, padding:"2px 8px", borderRadius:20, background:"#fce4ec", color:"#e91e63" }}>F {food.fat}g</span>
                      </div>
                    </div>
                    <div style={{ display:"flex", gap:6, alignItems:"center" }}>
                      <button onClick={() => addFood(food)} style={{ padding:"5px 12px", borderRadius:8, border:"none", fontSize:13, cursor:"pointer", background:"#6c47ff", color:"#fff", fontWeight:500 }}>+ Add</button>
                      <button onClick={() => removeCustomMeal(food.id)} style={{ background:"none", border:"none", color:"#e53935", fontSize:18, cursor:"pointer" }}>×</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {dietPlan.length > 0 && (
              <>
                <p style={{ fontWeight:500, fontSize:16, margin:"20px 0 10px", color:"#1a1a1a" }}>Today's meals</p>
                <div style={{ background:"rgba(255,255,255,0.85)", borderRadius:16, padding:"8px 16px" }}>
                  {dietPlan.map(food => (
                    <div key={food.id} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 0", borderBottom:"0.5px solid #f0f0f0" }}>
                      <div style={{ flex:1 }}>
                        <div style={{ fontWeight:500, fontSize:14 }}>{food.name}</div>
                        <div style={{ fontSize:12, color:"#888" }}>{food.cal} kcal · P {food.protein}g · C {food.carbs}g · F {food.fat}g</div>
                      </div>
                      <button onClick={() => removeFood(food.id)} style={{ background:"none", border:"none", color:"#e53935", fontSize:18, cursor:"pointer" }}>×</button>
                    </div>
                  ))}
                  <div style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", fontWeight:500, fontSize:14 }}>
                    <span style={{ color:"#555" }}>Total</span>
                    <span style={{ color:"#6c47ff" }}>{totalCals} kcal</span>
                  </div>
                </div>
              </>
            )}
          </>
        )}

        {/* WEEKLY PLANNER */}
        {tab === "week" && (
          <>
            <p style={{ fontWeight:500, fontSize:16, color:"#1a1a1a", margin:"0 0 14px" }}>Weekly workout planner</p>

            {/* Day selector */}
            <div style={{ display:"flex", gap:6, marginBottom:18, overflowX:"auto", paddingBottom:4 }}>
              {DAYS.map((day, i) => (
                <button key={day} onClick={() => setSelectedDay(day)} style={{
                  flexShrink:0, width:52, padding:"10px 0", borderRadius:14, border:"none", cursor:"pointer",
                  background: selectedDay===day ? dayAccents[i] : dayColors[i],
                  color: selectedDay===day ? "#fff" : dayAccents[i],
                  fontWeight:500, fontSize:13, position:"relative"
                }}>
                  {day}
                  {weekPlan[day].length > 0 && (
                    <span style={{ position:"absolute", top:5, right:5, width:8, height:8, borderRadius:"50%", background: selectedDay===day?"rgba(255,255,255,0.7)":dayAccents[i] }} />
                  )}
                </button>
              ))}
            </div>

            {/* Selected day content */}
            {(() => {
              const di = DAYS.indexOf(selectedDay);
              return (
                <div style={{ background: dayColors[di], borderRadius:18, padding:"18px 18px" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                    <p style={{ fontWeight:500, fontSize:15, margin:0, color: dayAccents[di] }}>{selectedDay} — {weekPlan[selectedDay].length} exercise{weekPlan[selectedDay].length!==1?"s":""}</p>
                    <button onClick={() => setAddingTo(selectedDay)} style={{
                      padding:"6px 14px", borderRadius:10, border:"none", fontSize:13,
                      background: dayAccents[di], color:"#fff", cursor:"pointer", fontWeight:500
                    }}>+ Add exercise</button>
                  </div>

                  {weekPlan[selectedDay].length === 0 ? (
                    <div style={{ textAlign:"center", padding:"28px 0", color: dayAccents[di], opacity:0.6, fontSize:14 }}>
                      No exercises planned. Add some!
                    </div>
                  ) : weekPlan[selectedDay].map((ex, idx) => (
                    <div key={ex.name+idx} style={{ background:"rgba(255,255,255,0.75)", borderRadius:12, padding:"12px 14px", marginBottom:8, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <div>
                        <div style={{ fontWeight:500, fontSize:14 }}>{ex.name}</div>
                        <div style={{ fontSize:12, color:"#777", marginTop:2 }}>{ex.muscles.split(",")[0]}</div>
                      </div>
                      <button onClick={() => removeFromWeek(selectedDay, ex.name)} style={{ background:"none", border:"none", color:"#e53935", fontSize:18, cursor:"pointer" }}>×</button>
                    </div>
                  ))}
                </div>
              );
            })()}

            {/* Weekly overview grid */}
            <p style={{ fontWeight:500, fontSize:16, color:"#1a1a1a", margin:"20px 0 12px" }}>Week overview</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
              {DAYS.map((day, i) => (
                <div key={day} onClick={() => setSelectedDay(day)} style={{ background: dayColors[i], borderRadius:14, padding:"12px 14px", cursor:"pointer", border: selectedDay===day ? `2px solid ${dayAccents[i]}` : "2px solid transparent" }}>
                  <div style={{ fontWeight:500, fontSize:13, color: dayAccents[i], marginBottom:6 }}>{day}</div>
                  {weekPlan[day].length === 0 ? (
                    <div style={{ fontSize:12, color:"#aaa" }}>Rest day</div>
                  ) : weekPlan[day].map(ex => (
                    <div key={ex.name} style={{ fontSize:12, color:"#555", marginBottom:2 }}>· {ex.name}</div>
                  ))}
                </div>
              ))}
              <div style={{ background:"rgba(255,255,255,0.5)", borderRadius:14, padding:"12px 14px", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <div style={{ textAlign:"center" }}>
                  <div style={{ fontSize:20, fontWeight:500, color:"#6c47ff" }}>{Object.values(weekPlan).reduce((s,d)=>s+d.length,0)}</div>
                  <div style={{ fontSize:12, color:"#888" }}>total exercises</div>
                </div>
              </div>
            </div>

            {/* Exercise picker modal */}
            {addingTo && (
              <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.35)", display:"flex", alignItems:"flex-end", justifyContent:"center", zIndex:50 }}>
                <div style={{ background:"#fff", borderRadius:"20px 20px 0 0", padding:"20px 18px 32px", width:"100%", maxWidth:500, maxHeight:"70vh", overflowY:"auto" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:14 }}>
                    <p style={{ fontWeight:500, fontSize:16, margin:0 }}>Add to {addingTo}</p>
                    <button onClick={() => setAddingTo(null)} style={{ background:"none", border:"none", fontSize:22, cursor:"pointer", color:"#aaa" }}>×</button>
                  </div>
                  {allExercises.map(ex => {
                    const already = weekPlan[addingTo].find(e=>e.name===ex.name);
                    const group = Object.keys(exercises).find(g=>exercises[g].find(e=>e.name===ex.name));
                    return (
                      <div key={ex.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderBottom:"0.5px solid #f0f0f0" }}>
                        <div>
                          <div style={{ fontWeight:500, fontSize:14 }}>{ex.name}</div>
                          <span style={{ fontSize:11, padding:"2px 8px", borderRadius:20, background: groupColors[group], color: groupAccents[group] }}>{group}</span>
                        </div>
                        <button onClick={() => !already && addToWeek(addingTo, ex)} style={{
                          padding:"6px 14px", borderRadius:8, border:"none", fontSize:13, cursor: already?"default":"pointer",
                          background: already?"#e8f5e9":"#6c47ff", color: already?"#43a047":"#fff", fontWeight:500
                        }}>{already?"✓":"+ Add"}</button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

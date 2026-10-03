import mongoose from "mongoose";
import connectDB from "./lib/db.js";
import Blog from "./models/Blog.js";

const sampleBlogs = [
  // NUTRITION (7 Articles)
  {
    title: "10 Essential Superfoods for Peak Immunity",
    slug: "10-essential-superfoods-for-peak-immunity",
    category: "nutrition",
    summary: "Strengthen your immune defense naturally with these nutrient-dense everyday superfoods.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800",
    content: `Building a resilient immune system doesn't require expensive supplements—nature provides everything we need through nutrient-dense foods. 

Key Superfoods to Add to Your Diet:
• Citrus Fruits: Packed with Vitamin C to boost white blood cell production.
• Garlic & Ginger: Loaded with antioxidants and anti-inflammatory compounds.
• Leafy Greens: Spinach and kale provide essential vitamins A, C, and E.
• Fermented Foods: Yogurt and kefir support gut health, where 70% of immunity resides.

Incorporating a colorful variety of these whole foods daily ensures sustained energy and long-term vitality.`
  },
  {
    title: "The Ultimate Clean Eating Starter Guide",
    slug: "ultimate-clean-eating-starter-guide",
    category: "nutrition",
    summary: "A practical step-by-step framework to transition from processed items to nourishing whole foods.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
    content: `Clean eating is not a restrictive diet; it is a sustainable lifestyle focused on consuming real, minimally processed ingredients.

Core Clean Eating Principles:
1. Choose Whole Foods: Prioritize fresh vegetables, fruits, whole grains, lean proteins, and healthy fats.
2. Read Ingredient Labels: Avoid products containing artificial preservatives, refined sugars, and hydrogenated oils.
3. Stay Hydrated: Drink plenty of water throughout the day to support digestion and detoxification.

Start small by replacing one processed meal each day with a nutrient-rich, home-cooked alternative.`
  },
  {
    title: "Understanding Macronutrients: Carbs, Protein, and Fats",
    slug: "understanding-macronutrients-carbs-protein-fats",
    category: "nutrition",
    summary: "Master the fundamentals of nutrition to balance your meals for weight control and sustained energy.",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    content: `To achieve fitness and wellness goals, understanding macronutrients is crucial. Each macro serves a unique purpose in the body.

The Big Three:
• Protein: Essential for muscle repair, immune function, and tissue growth. Sources include chicken, eggs, lentils, and tofu.
• Carbohydrates: The body's primary fuel source. Focus on complex carbs like oats, quinoa, and sweet potatoes.
• Healthy Fats: Vital for hormone regulation and brain function. Include avocados, nuts, seeds, and extra virgin olive oil.

Balancing these three components in every meal prevents energy crashes and keeps hunger satisfied.`
  },
  {
    title: "Plant-Based Protein Guide for Beginners",
    slug: "plant-based-protein-guide-for-beginners",
    category: "nutrition",
    summary: "Discover how to meet your daily protein goals effortlessly using vegetarian and vegan whole foods.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    content: `Switching to plant-based protein sources offers massive digestive and cardiovascular health benefits. Contrary to popular belief, plant sources can easily fulfill your daily protein needs.

Top Plant Protein Sources:
• Lentils & Chickpeas: Offer 15-18g of protein per cooked cup along with high fiber.
• Quinoa & Amaranth: Complete proteins containing all nine essential amino acids.
• Chia & Hemp Seeds: Packed with protein and heart-healthy Omega-3 fatty acids.

Combining diverse plant sources throughout the day ensures complete amino acid profiles.`
  },
  {
  title: "Hydration Science: How Water Drives Metabolism",
  slug: "hydration-science-how-water-drives-metabolism",
  category: "nutrition",
  summary: "Learn how optimal water intake optimizes fat burning, digestion, and physical performance.",
  readTime: "4 min read",
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
  content: `...`
},
  {
    title: "Gut Health 101: Prebiotics vs Probiotics",
    slug: "gut-health-101-prebiotics-vs-probiotics",
    category: "nutrition",
    summary: "Nurture your microbiome with the ideal blend of prebiotic fibers and beneficial probiotic foods.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800",
    content: `A healthy gut microbiome is the cornerstone of overall physical health, mood regulation, and weight management.

Understanding the Difference:
• Probiotics: Live beneficial bacteria found in fermented foods like kimchi, sauerkraut, and Greek yogurt.
• Prebiotics: Non-digestible plant fibers that feed good gut bacteria. Found in onions, garlic, bananas, and oats.

Including both in your daily routine builds a resilient digestive ecosystem.`
  },
  {
    title: "Intermittent Fasting: Benefits and Best Methods",
    slug: "intermittent-fasting-benefits-and-best-methods",
    category: "nutrition",
    summary: "A practical guide to time-restricted feeding for metabolic flexibility and cellular renewal.",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=800",
    content: `Intermittent fasting isn't a traditional diet—it's an eating pattern that cycles between periods of eating and fasting.

Popular Methods:
1. 16/8 Method: Fast for 16 hours, eat within an 8-hour window (e.g., 12 PM to 8 PM).
2. 5:2 Method: Eat normally for 5 days, limit calories to 500-600 on 2 non-consecutive days.

Key Health Benefits:
Promotes autophagy (cellular cleanup), improves insulin sensitivity, and aids sustainable weight loss.`
  },

  // FITNESS (7 Articles)
  {
    title: "Full Body Home Workout Without Equipment",
    slug: "full-body-home-workout-without-equipment",
    category: "fitness",
    summary: "Build strength, burn fat, and tone muscles anywhere with this effective bodyweight routine.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    content: `You don't need expensive gym equipment to stay fit. Bodyweight exercises are highly effective for building functional strength and muscle endurance.

The Routine (3-4 Rounds):
• Push-Ups: 12-15 reps (Chest and Triceps)
• Bodyweight Squats: 20 reps (Legs and Glutes)
• Plank Hold: 45-60 seconds (Core stability)
• Mountain Climbers: 30 seconds (Cardio and Core)

Perform this circuit 3 to 4 times a week for maximum cardiovascular and muscular benefits.`
  },
  {
    title: "Post-Workout Recovery: Stretching and Sleep",
    slug: "post-workout-recovery-stretching-and-sleep",
    category: "fitness",
    summary: "Accelerate muscle repair, eliminate soreness, and avoid injury with proven recovery techniques.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    content: `Progress doesn't happen during the workout—it happens during recovery. Skimping on post-workout care delays results and increases injury risk.

Essential Recovery Habits:
1. Static Stretching: Hold stretches for 20-30 seconds after training to improve flexibility.
2. Sleep Optimization: Aim for 7-9 hours of deep sleep when human growth hormone peaks.
3. Post-Workout Nutrition: Consume protein and carbohydrates within 45 minutes to rebuild glycogen and repair muscle fibers.`
  },
  {
    title: "HIIT vs LISS Cardio: Which Is Best for You?",
    slug: "hiit-vs-liss-cardio-which-is-best-for-you",
    category: "fitness",
    summary: "Compare high-intensity intervals with steady-state cardio to choose the right workout for your goals.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=800",
    content: `Choosing between High-Intensity Interval Training (HIIT) and Low-Intensity Steady-State (LISS) depends on your endurance, time, and goals.

HIIT Overview:
• Fast, explosive short bursts followed by brief rest intervals.
• Maximizes post-exercise calorie burn in less time (20 minutes).

LISS Overview:
• Constant, moderate effort like walking or light jogging for 45+ minutes.
• Gentler on joints and ideal for recovery days.

Combining both styles creates a well-rounded cardiovascular training program.`
  },
  {
    title: "5 Exercises to Fix Posture and Back Pain",
    slug: "5-exercises-to-fix-posture-and-back-pain",
    category: "fitness",
    summary: "Reverse desk-slouching and relieve lower back tightness with targeted mobility movements.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    content: `Sitting at desks for prolonged hours leads to rounded shoulders and tight hip flexors.

Daily Posture Fix Routine:
• Cat-Cow Stretch: Mobilizes spine and relieves lower back tension.
• Doorway Chest Stretch: Opens up tight pectoral muscles.
• Glute Bridges: Strengthens weak hamstrings and lower core muscles.
• Bird-Dog Exercise: Enhances spinal stability and core strength.

Perform these movements daily for 10 minutes to maintain optimal alignment.`
  },
  {
    title: "Beginner Guide to Progressive Overload",
    slug: "beginner-guide-to-progressive-overload",
    category: "fitness",
    summary: "Learn the core strength training principle needed to build lean muscle consistently.",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800",
    content: `Progressive overload is the continuous increase of stress placed upon muscles during exercise over time.

Ways to Apply Progressive Overload:
1. Increase Weight: Add small resistance to your lifts.
2. Increase Repetitions: Perform more reps with the same weight.
3. Improve Form: Master movement efficiency and control.
4. Reduce Rest Intervals: Shorten rest periods between sets.

Tracking your workouts in a logbook ensures continuous physical improvement.`
  },
  {
    title: "The Power of Morning Movement and Mobility",
    slug: "the-power-of-morning-movement-and-mobility",
    category: "fitness",
    summary: "Kickstart circulation, mental clarity, and joint flexibility with a simple 10-minute morning stretch.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    content: `Waking up your body with gentle morning movement lubricates joints, increases blood flow, and elevates mental energy.

Key Morning Stretches:
• Downward-Facing Dog: Lengthens hamstrings and calves while opening shoulders.
• World's Greatest Stretch: Targets hips, thoracic spine, and hamstrings simultaneously.
• Arm & Wrist Circles: Prepares joints for the day ahead.

Integrating this short routine boosts energy better than a morning cup of coffee.`
  },
  {
    title: "Building Core Stability Beyond Ab Crunches",
    slug: "building-core-stability-beyond-ab-crunches",
    category: "fitness",
    summary: "Discover functional core training techniques that protect your spine and improve posture.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    content: `A strong core is much more than six-pack abs—it stabilizes your spine, hips, and pelvis during daily movements.

Top Core Stability Exercises:
• Planks & Side Planks: Build isometric endurance across the entire torso.
• Deadbugs: Enhance coordination while protecting the lumbar spine.
• Farmer Carry: Strengthens grip, shoulders, and obliques dynamically.

Focusing on stability over endless crunches protects your back and improves athletic performance.`
  },

  // REMEDIES (6 Articles)
  {
    title: "Natural Home Remedies for Fast Hair Growth",
    slug: "hair-growth-home-remedies",
    category: "remedies",
    summary: "Revitalize your hair scalp naturally with proven herbal oils and homemade nutrient masks.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    content: `Healthy hair starts with a nourished scalp. Instead of harsh chemical products, natural remedies provide gentle, effective care.

Proven Hair Remedies:
• Rosemary Oil Scalp Massage: Stimulates blood circulation to hair follicles.
• Aloe Vera Gel Mask: Soothes scalp inflammation and repairs dead skin cells.
• Onion Juice Rinse: Rich in sulfur to minimize hair thinning and breakage.
• Coconut Oil Conditioning: Deeply moisturizes hair shafts to prevent split ends.

Apply these treatments weekly to promote thicker, shinier hair growth naturally.`
  },
  {
    title: "Herbal Teas for Stress Relief and Better Sleep",
    slug: "herbal-teas-for-stress-relief-and-better-sleep",
    category: "remedies",
    summary: "Unwind after a hectic day with calming herbal infusions that encourage deep, restful sleep.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
    content: `Chronic stress disrupts sleep patterns and weakens overall health. Herbal teas offer a natural remedy to calm the nervous system.

Top Calming Teas:
• Chamomile Tea: Contains apigenin, an antioxidant that binds to brain receptors to promote sleepiness.
• Peppermint Tea: Relaxes muscles and aids evening digestion.
• Ashwagandha Infusion: An adaptogen that lowers cortisol and eases anxiety.

Drinking a warm cup 30 minutes before bedtime establishes a relaxing nighttime sleep ritual.`
  },
 {
  title: "Effective Remedies for Glowing Skin at Home",
  slug: "effective-remedies-for-glowing-skin-at-home",
  category: "remedies",
  summary: "Achieve radiant skin using simple kitchen ingredients rich in antioxidants and vitamins.",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
  content: `...`
},
  {
    title: "Natural Ways to Soothe Acid Reflux and Indigestion",
    slug: "natural-ways-to-soothe-acid-reflux-and-indigestion",
    category: "remedies",
    summary: "Relieve bloating, heartburn, and digestive discomfort using gentle natural solutions.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
    content: `Occasional indigestion and heartburn can often be managed with simple natural modifications.

Effective Home Solutions:
• Ginger Tea: Sip warm ginger tea after meals to speed up gastric emptying.
• Apple Cider Vinegar: Mix 1 tbsp in warm water before meals to balance stomach acid.
• Fennel Seeds: Chew a teaspoon after eating to reduce bloating and gas.
• Elevate Your Head: Keep your upper body elevated while sleeping to prevent nighttime reflux.`
  },
  {
    title: "Soothe Cold and Cough with Homemade Remedies",
    slug: "soothe-cold-and-cough-with-homemade-remedies",
    category: "remedies",
    summary: "Relieve sore throat, congestion, and cough naturally with proven home treatments.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    content: `When seasonal colds strike, natural remedies help ease discomfort and speed up recovery.

Time-Tested Solutions:
• Warm Honey & Lemon Water: Coats the throat and acts as a natural cough suppressant.
• Salt Water Gargle: Reduces throat swelling and clears mucus.
• Steam Inhalation with Eucalyptus Oil: Opens up blocked nasal passages and sinus pressure.
• Golden Milk (Turmeric Milk): Provides powerful anti-inflammatory benefits before bed.`
  },
  {
    title: "Natural Remedies for Tension Headaches",
    slug: "natural-remedies-for-tension-headaches",
    category: "remedies",
    summary: "Ease head pressure and stress headaches fast without over-reliance on painkillers.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    content: `Tension headaches are commonly triggered by stress, dehydration, poor posture, or screen fatigue.

Quick Relief Techniques:
• Peppermint Oil Massage: Apply diluted peppermint oil to temples and neck for a cooling effect.
• Hydration Focus: Drink two large glasses of water immediately.
• Cold/Warm Compress: Place a cold compress on your forehead or warm wrap on your neck.
• Acupressure: Press the LI4 point (between thumb and index finger) firmly for 1-2 minutes.`
  }
];

async function seedDatabase() {
  try {
    console.log("Connecting to MongoDB...");
    await connectDB();
    console.log("Connected successfully!");

    await Blog.deleteMany({});
    console.log("Cleared existing blogs.");

    await Blog.insertMany(sampleBlogs);
    console.log("Successfully seeded 20 detailed articles into MongoDB!");

    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
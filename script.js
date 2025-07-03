// Enhanced meal database with comprehensive preference filtering
const meals = [
    // Italian Cuisine - 70+ Recipes
    
    // PASTA DISHES (25+ varieties)
    {
        name: "Spaghetti Carbonara",
        emoji: "🍝",
        description: "Creamy pasta with eggs, cheese, pancetta, and black pepper",
        tags: ["Italian", "Pasta", "Comfort Food"],
        searchQuery: "spaghetti carbonara recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=spaghetti+carbonara",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Fettuccine Alfredo",
        emoji: "🍝",
        description: "Creamy pasta with butter, cream, and parmesan cheese",
        tags: ["Italian", "Pasta", "Creamy"],
        searchQuery: "fettuccine alfredo recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=fettuccine+alfredo",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Lasagna",
        emoji: "🍝",
        description: "Layered pasta with meat sauce, cheese, and béchamel",
        tags: ["Italian", "Pasta", "Comfort Food"],
        searchQuery: "lasagna recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=lasagna",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Penne Arrabbiata",
        emoji: "🍝",
        description: "Spicy pasta with tomatoes, garlic, and red pepper flakes",
        tags: ["Italian", "Pasta", "Spicy"],
        searchQuery: "penne arrabbiata recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=penne+arrabbiata",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "quick",
        spiceLevel: "spicy",
        difficulty: "easy"
    },
    {
        name: "Spaghetti Bolognese",
        emoji: "🍝",
        description: "Classic meat sauce with ground beef and tomatoes",
        tags: ["Italian", "Pasta", "Meat Sauce"],
        searchQuery: "spaghetti bolognese recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=spaghetti+bolognese",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Cacio e Pepe",
        emoji: "🍝",
        description: "Simple pasta with cheese and black pepper",
        tags: ["Italian", "Pasta", "Simple"],
        searchQuery: "cacio e pepe recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=cacio+e+pepe",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Pesto Pasta",
        emoji: "🍝",
        description: "Fresh basil pesto with pine nuts and parmesan",
        tags: ["Italian", "Pasta", "Herbs"],
        searchQuery: "pesto pasta recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pesto+pasta",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Gnocchi Pomodoro",
        emoji: "🍝",
        description: "Soft potato dumplings in fresh tomato sauce",
        tags: ["Italian", "Pasta", "Comfort Food"],
        searchQuery: "gnocchi pomodoro recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=gnocchi+pomodoro",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Linguine alle Vongole",
        emoji: "🍝",
        description: "Linguine with fresh clams in white wine sauce",
        tags: ["Italian", "Pasta", "Seafood"],
        searchQuery: "linguine alle vongole recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=linguine+alle+vongole",
        mealType: ["dinner"],
        dietary: ["pescatarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Rigatoni all'Amatriciana",
        emoji: "🍝",
        description: "Pasta with guanciale, tomatoes, and pecorino",
        tags: ["Italian", "Pasta", "Traditional"],
        searchQuery: "rigatoni amatriciana recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=rigatoni+amatriciana",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Pasta Puttanesca",
        emoji: "🍝",
        description: "Bold pasta with olives, capers, and anchovies",
        tags: ["Italian", "Pasta", "Bold"],
        searchQuery: "pasta puttanesca recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pasta+puttanesca",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Aglio e Olio",
        emoji: "🍝",
        description: "Simple spaghetti with garlic, olive oil, and red pepper",
        tags: ["Italian", "Pasta", "Simple"],
        searchQuery: "aglio e olio recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=aglio+e+olio",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Ravioli di Ricotta",
        emoji: "🥟",
        description: "Fresh pasta pillows filled with ricotta cheese",
        tags: ["Italian", "Pasta", "Cheese"],
        searchQuery: "ravioli di ricotta recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=ravioli+di+ricotta",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Tortellini in Brodo",
        emoji: "🍲",
        description: "Cheese-filled tortellini in clear chicken broth",
        tags: ["Italian", "Pasta", "Soup"],
        searchQuery: "tortellini in brodo recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=tortellini+in+brodo",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Pasta e Fagioli",
        emoji: "🍲",
        description: "Hearty pasta and bean soup",
        tags: ["Italian", "Pasta", "Beans"],
        searchQuery: "pasta e fagioli recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pasta+e+fagioli",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "easy"
    },

    // PIZZA VARIETIES (15+ types)
    {
        name: "Margherita Pizza",
        emoji: "🍕",
        description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
        tags: ["Italian", "Pizza", "Vegetarian"],
        searchQuery: "margherita pizza recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=margherita+pizza",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pizza",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Pepperoni Pizza",
        emoji: "🍕",
        description: "Classic American-Italian pizza with pepperoni",
        tags: ["Italian", "Pizza", "Meat"],
        searchQuery: "pepperoni pizza recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pepperoni+pizza",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Pizza Napoletana",
        emoji: "🍕",
        description: "Authentic Neapolitan pizza with San Marzano tomatoes",
        tags: ["Italian", "Pizza", "Authentic"],
        searchQuery: "pizza napoletana recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pizza+napoletana",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Pizza Quattro Stagioni",
        emoji: "🍕",
        description: "Four seasons pizza with varied toppings in quarters",
        tags: ["Italian", "Pizza", "Variety"],
        searchQuery: "pizza quattro stagioni recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pizza+quattro+stagioni",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Pizza Bianca",
        emoji: "🍕",
        description: "White pizza with ricotta, mozzarella, and garlic",
        tags: ["Italian", "Pizza", "White Sauce"],
        searchQuery: "pizza bianca recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pizza+bianca",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Pizza Diavola",
        emoji: "🍕",
        description: "Spicy pizza with spicy salami and hot peppers",
        tags: ["Italian", "Pizza", "Spicy"],
        searchQuery: "pizza diavola recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pizza+diavola",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "spicy",
        difficulty: "medium"
    },
    {
        name: "Pizza Marinara",
        emoji: "🍕",
        description: "Simple pizza with tomato, garlic, and oregano",
        tags: ["Italian", "Pizza", "Simple"],
        searchQuery: "pizza marinara recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pizza+marinara",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Pizza Capricciosa",
        emoji: "🍕",
        description: "Pizza with ham, mushrooms, artichokes, and olives",
        tags: ["Italian", "Pizza", "Vegetables"],
        searchQuery: "pizza capricciosa recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pizza+capricciosa",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Pizza Prosciutto e Funghi",
        emoji: "🍕",
        description: "Pizza with prosciutto and mushrooms",
        tags: ["Italian", "Pizza", "Ham"],
        searchQuery: "pizza prosciutto funghi recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pizza+prosciutto+funghi",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Calzone",
        emoji: "🥟",
        description: "Folded pizza filled with ricotta and mozzarella",
        tags: ["Italian", "Pizza", "Folded"],
        searchQuery: "calzone recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=calzone",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },

    // MAIN DISHES (15+ varieties)
    {
        name: "Chicken Parmigiana",
        emoji: "🍗",
        description: "Breaded chicken breast with marinara sauce and melted cheese",
        tags: ["Italian", "Chicken", "Comfort Food"],
        searchQuery: "chicken parmigiana recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+parmigiana",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Chicken Piccata",
        emoji: "🍗",
        description: "Pan-seared chicken with lemon, capers, and white wine",
        tags: ["Italian", "Chicken", "Elegant"],
        searchQuery: "chicken piccata recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+piccata",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Veal Marsala",
        emoji: "🥩",
        description: "Tender veal in rich marsala wine sauce",
        tags: ["Italian", "Veal", "Wine"],
        searchQuery: "veal marsala recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=veal+marsala",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Osso Buco",
        emoji: "🍖",
        description: "Braised veal shanks with vegetables and wine",
        tags: ["Italian", "Veal", "Luxury"],
        searchQuery: "osso buco recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=osso+buco",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Saltimbocca alla Romana",
        emoji: "🥩",
        description: "Veal with prosciutto and sage",
        tags: ["Italian", "Veal", "Herbs"],
        searchQuery: "saltimbocca alla romana recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=saltimbocca+alla+romana",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Eggplant Parmigiana",
        emoji: "🍆",
        description: "Layered eggplant with tomato sauce and cheese",
        tags: ["Italian", "Eggplant", "Vegetarian"],
        searchQuery: "eggplant parmigiana recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=eggplant+parmigiana",
        mealType: ["dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Vitello Tonnato",
        emoji: "🥩",
        description: "Cold veal with tuna sauce",
        tags: ["Italian", "Veal", "Cold"],
        searchQuery: "vitello tonnato recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=vitello+tonnato",
        mealType: ["lunch"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "hard"
    },

    // RISOTTO & RICE (8+ varieties)
    {
        name: "Risotto Milanese",
        emoji: "🍚",
        description: "Creamy saffron risotto with parmesan cheese",
        tags: ["Italian", "Rice", "Luxury"],
        searchQuery: "risotto milanese recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=risotto+milanese",
        mealType: ["dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Mushroom Risotto",
        emoji: "🍄",
        description: "Creamy risotto with mixed wild mushrooms",
        tags: ["Italian", "Rice", "Mushrooms"],
        searchQuery: "mushroom risotto recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mushroom+risotto",
        mealType: ["dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Seafood Risotto",
        emoji: "🦐",
        description: "Creamy risotto with mixed seafood",
        tags: ["Italian", "Rice", "Seafood"],
        searchQuery: "seafood risotto recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=seafood+risotto",
        mealType: ["dinner"],
        dietary: ["pescatarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Asparagus Risotto",
        emoji: "🍚",
        description: "Spring risotto with fresh asparagus",
        tags: ["Italian", "Rice", "Vegetables"],
        searchQuery: "asparagus risotto recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=asparagus+risotto",
        mealType: ["dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },

    // SOUPS & APPETIZERS (8+ varieties)
    {
        name: "Minestrone Soup",
        emoji: "🍲",
        description: "Hearty vegetable soup with beans and pasta",
        tags: ["Italian", "Soup", "Healthy"],
        searchQuery: "minestrone soup recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=minestrone+soup",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Caprese Salad",
        emoji: "🥗",
        description: "Fresh mozzarella, tomatoes, and basil with balsamic",
        tags: ["Italian", "Salad", "Fresh"],
        searchQuery: "caprese salad recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=caprese+salad",
        mealType: ["lunch", "snack"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Antipasto Platter",
        emoji: "🧀",
        description: "Italian appetizer platter with meats, cheeses, and vegetables",
        tags: ["Italian", "Appetizer", "Sharing"],
        searchQuery: "antipasto platter recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=antipasto+platter",
        mealType: ["snack"],
        dietary: ["meat-lovers"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Bruschetta",
        emoji: "🍞",
        description: "Grilled bread with tomatoes, garlic, and basil",
        tags: ["Italian", "Appetizer", "Bread"],
        searchQuery: "bruschetta recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=bruschetta",
        mealType: ["snack"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Arancini",
        emoji: "🍙",
        description: "Fried risotto balls with mozzarella center",
        tags: ["Italian", "Rice", "Fried"],
        searchQuery: "arancini recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=arancini",
        mealType: ["snack"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Stracciatella Soup",
        emoji: "🍲",
        description: "Italian egg drop soup with parmesan",
        tags: ["Italian", "Soup", "Eggs"],
        searchQuery: "stracciatella soup recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=stracciatella+soup",
        mealType: ["lunch"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    
    // Chinese Cuisine - 20+ Recipes
    {
        name: "General Tso's Chicken",
        emoji: "🥡",
        description: "Crispy chicken in sweet and tangy sauce",
        tags: ["Chinese", "Chicken", "Sweet", "Spicy"],
        searchQuery: "general tso chicken recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=general+tso+chicken",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "chinese",
        dishType: "meat",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Kung Pao Chicken",
        emoji: "🌶️",
        description: "Spicy chicken stir-fry with peanuts and vegetables",
        tags: ["Chinese", "Chicken", "Spicy", "Peanuts"],
        searchQuery: "kung pao chicken recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=kung+pao+chicken",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "chinese",
        dishType: "meat",
        cookingTime: "quick",
        spiceLevel: "spicy",
        difficulty: "easy"
    },
    {
        name: "Sweet and Sour Pork",
        emoji: "🍖",
        description: "Battered pork with pineapple and bell peppers",
        tags: ["Chinese", "Pork", "Sweet", "Fruity"],
        searchQuery: "sweet and sour pork recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=sweet+and+sour+pork",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "chinese",
        dishType: "meat",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Beef and Broccoli",
        emoji: "🥦",
        description: "Tender beef with fresh broccoli in savory sauce",
        tags: ["Chinese", "Beef", "Vegetables", "Healthy"],
        searchQuery: "beef and broccoli recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=beef+and+broccoli",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "chinese",
        dishType: "meat",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Chicken Fried Rice",
        emoji: "🍛",
        description: "Wok-fried rice with chicken and vegetables",
        tags: ["Chinese", "Rice", "Chicken", "Quick"],
        searchQuery: "chicken fried rice recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+fried+rice",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "chinese",
        dishType: "rice",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Beef Fried Rice",
        emoji: "🍚",
        description: "Savory fried rice with tender beef pieces",
        tags: ["Chinese", "Rice", "Beef", "Quick"],
        searchQuery: "beef fried rice recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=beef+fried+rice",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "chinese",
        dishType: "rice",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Vegetable Fried Rice",
        emoji: "🥬",
        description: "Colorful fried rice with mixed vegetables",
        tags: ["Chinese", "Rice", "Vegetarian", "Healthy"],
        searchQuery: "vegetable fried rice recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=vegetable+fried+rice",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "chinese",
        dishType: "rice",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Pork Dumplings",
        emoji: "🥟",
        description: "Steamed dumplings filled with seasoned pork",
        tags: ["Chinese", "Pork", "Dumplings", "Steamed"],
        searchQuery: "pork dumplings recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pork+dumplings",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Chicken Dumplings",
        emoji: "🥟",
        description: "Delicate dumplings with chicken filling",
        tags: ["Chinese", "Chicken", "Dumplings", "Steamed"],
        searchQuery: "chicken dumplings recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+dumplings",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Vegetable Dumplings",
        emoji: "🥬",
        description: "Steamed dumplings with vegetable filling",
        tags: ["Chinese", "Vegetarian", "Dumplings", "Healthy"],
        searchQuery: "vegetable dumplings recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=vegetable+dumplings",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Orange Chicken",
        emoji: "🍊",
        description: "Crispy chicken with zesty orange glaze",
        tags: ["Chinese", "Chicken", "Sweet", "Citrus"],
        searchQuery: "orange chicken recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=orange+chicken",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Cashew Chicken",
        emoji: "🥜",
        description: "Stir-fried chicken with crunchy cashews",
        tags: ["Chinese", "Chicken", "Nuts", "Stir-fry"],
        searchQuery: "cashew chicken recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=cashew+chicken",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Mongolian Beef",
        emoji: "🥩",
        description: "Tender beef with onions and scallions",
        tags: ["Chinese", "Beef", "Mongolian", "Savory"],
        searchQuery: "mongolian beef recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mongolian+beef",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Dan Dan Noodles",
        emoji: "🍜",
        description: "Spicy Sichuan noodles with ground pork",
        tags: ["Chinese", "Noodles", "Spicy", "Pork"],
        searchQuery: "dan dan noodles recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=dan+dan+noodles",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "spicy",
        difficulty: "medium"
    },
    {
        name: "Mapo Tofu",
        emoji: "🌶️",
        description: "Spicy Sichuan tofu in chili bean sauce",
        tags: ["Chinese", "Tofu", "Spicy", "Sichuan"],
        searchQuery: "mapo tofu recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mapo+tofu",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "spicy",
        difficulty: "medium"
    },
    {
        name: "Hot Pot",
        emoji: "🍲",
        description: "Communal cooking in flavorful broth",
        tags: ["Chinese", "Hot Pot", "Social", "Customizable"],
        searchQuery: "chinese hot pot recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chinese+hot+pot",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "spicy",
        difficulty: "easy"
    },
    {
        name: "Beef Lo Mein",
        emoji: "🍜",
        description: "Soft noodles with beef and vegetables",
        tags: ["Chinese", "Noodles", "Beef", "Stir-fry"],
        searchQuery: "beef lo mein recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=beef+lo+mein",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Chicken Lo Mein",
        emoji: "🍝",
        description: "Classic lo mein with tender chicken",
        tags: ["Chinese", "Noodles", "Chicken", "Quick"],
        searchQuery: "chicken lo mein recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+lo+mein",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Peking Duck",
        emoji: "🦆",
        description: "Crispy duck with pancakes and hoisin sauce",
        tags: ["Chinese", "Duck", "Traditional", "Special"],
        searchQuery: "peking duck recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=peking+duck",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Sweet and Sour Fish",
        emoji: "🐟",
        description: "Crispy fish with sweet and sour sauce",
        tags: ["Chinese", "Fish", "Sweet", "Tangy"],
        searchQuery: "sweet and sour fish recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=sweet+and+sour+fish",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },

    // Japanese Cuisine - 15+ Recipes
    {
        name: "Chicken Teriyaki",
        emoji: "🍗",
        description: "Grilled chicken glazed with sweet and savory teriyaki sauce",
        tags: ["Japanese", "Chicken", "Gluten-Free"],
        searchQuery: "chicken teriyaki recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+teriyaki",
        mealType: ["lunch", "dinner"],
        dietary: ["gluten-free", "meat-lovers"],
        cuisine: "japanese",
        dishType: "meat",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Beef Teriyaki",
        emoji: "🥩",
        description: "Tender beef with sweet teriyaki glaze",
        tags: ["Japanese", "Beef", "Sweet", "Savory"],
        searchQuery: "beef teriyaki recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=beef+teriyaki",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "japanese",
        dishType: "meat",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "California Roll",
        emoji: "🍣",
        description: "Sushi roll with crab, avocado, and cucumber",
        tags: ["Japanese", "Sushi", "Crab", "Fresh"],
        searchQuery: "california roll recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=california+roll",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "japanese",
        dishType: "sushi",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Spicy Tuna Roll",
        emoji: "🍣",
        description: "Fresh tuna with spicy mayo in sushi roll",
        tags: ["Japanese", "Sushi", "Tuna", "Spicy"],
        searchQuery: "spicy tuna roll recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=spicy+tuna+roll",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "japanese",
        dishType: "sushi",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Salmon Roll",
        emoji: "🍱",
        description: "Fresh salmon sushi with cucumber and rice",
        tags: ["Japanese", "Sushi", "Salmon", "Fresh"],
        searchQuery: "salmon roll recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=salmon+roll",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "japanese",
        dishType: "sushi",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Chicken Ramen",
        emoji: "🍜",
        description: "Rich chicken broth with fresh noodles",
        tags: ["Japanese", "Ramen", "Chicken", "Comfort"],
        searchQuery: "chicken ramen recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+ramen",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "japanese",
        dishType: "noodles",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Pork Ramen",
        emoji: "🍜",
        description: "Traditional tonkotsu ramen with pork broth",
        tags: ["Japanese", "Ramen", "Pork", "Rich"],
        searchQuery: "pork ramen recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pork+ramen",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "japanese",
        dishType: "noodles",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Miso Ramen",
        emoji: "🍲",
        description: "Umami-rich miso broth with noodles",
        tags: ["Japanese", "Ramen", "Miso", "Vegetarian"],
        searchQuery: "miso ramen recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=miso+ramen",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "japanese",
        dishType: "noodles",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Chicken Katsu",
        emoji: "🍱",
        description: "Crispy breaded chicken cutlet",
        tags: ["Japanese", "Chicken", "Fried", "Crispy"],
        searchQuery: "chicken katsu recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+katsu",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "japanese",
        dishType: "meat",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Tempura",
        emoji: "🍤",
        description: "Light, crispy battered vegetables and seafood",
        tags: ["Japanese", "Tempura", "Fried", "Light"],
        searchQuery: "tempura recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=tempura",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "japanese",
        dishType: "seafood",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Bento Box",
        emoji: "🍱",
        description: "Complete meal box with rice, protein, and sides",
        tags: ["Japanese", "Bento", "Variety", "Balanced"],
        searchQuery: "japanese bento box recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=japanese+bento+box",
        mealType: ["lunch"],
        dietary: ["meat-lovers"],
        cuisine: "japanese",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Miso Soup",
        emoji: "🍲",
        description: "Traditional soup with miso paste and tofu",
        tags: ["Japanese", "Soup", "Miso", "Light"],
        searchQuery: "miso soup recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=miso+soup",
        mealType: ["breakfast", "lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "japanese",
        dishType: "soup",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Takoyaki",
        emoji: "🐙",
        description: "Octopus balls with savory sauce",
        tags: ["Japanese", "Octopus", "Street Food", "Unique"],
        searchQuery: "takoyaki recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=takoyaki",
        mealType: ["snack", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "japanese",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Japanese Curry",
        emoji: "🍛",
        description: "Mild curry with vegetables and meat",
        tags: ["Japanese", "Curry", "Mild", "Comfort"],
        searchQuery: "japanese curry recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=japanese+curry",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "japanese",
        dishType: "curry",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Okonomiyaki",
        emoji: "🥞",
        description: "Savory pancake with cabbage and toppings",
        tags: ["Japanese", "Pancake", "Cabbage", "Savory"],
        searchQuery: "okonomiyaki recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=okonomiyaki",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },

    // THAI DISHES
    {
        name: "Pad Thai",
        emoji: "🍜",
        description: "Stir-fried rice noodles with shrimp, tofu, and tangy sauce",
        tags: ["Thai", "Noodles", "Seafood"],
        searchQuery: "pad thai recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pad+thai",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Thai Green Curry",
        emoji: "🍛",
        description: "Spicy green curry with coconut milk and chicken",
        tags: ["Thai", "Curry", "Spicy", "Coconut"],
        searchQuery: "thai green curry recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=thai+green+curry",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "spicy",
        difficulty: "medium"
    },
    {
        name: "Thai Red Curry",
        emoji: "🌶️",
        description: "Rich red curry with beef and vegetables",
        tags: ["Thai", "Curry", "Spicy", "Rich"],
        searchQuery: "thai red curry recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=thai+red+curry",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "spicy",
        difficulty: "medium"
    },
    {
        name: "Tom Yum Soup",
        emoji: "🍲",
        description: "Spicy and sour Thai soup with shrimp",
        tags: ["Thai", "Soup", "Spicy", "Sour"],
        searchQuery: "tom yum soup recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=tom+yum+soup",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "spicy",
        difficulty: "easy"
    },
    {
        name: "Tom Kha Soup",
        emoji: "🥥",
        description: "Creamy coconut soup with chicken and herbs",
        tags: ["Thai", "Soup", "Coconut", "Creamy"],
        searchQuery: "tom kha soup recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=tom+kha+soup",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Thai Papaya Salad",
        emoji: "🥗",
        description: "Spicy and refreshing green papaya salad",
        tags: ["Thai", "Salad", "Spicy", "Fresh"],
        searchQuery: "thai papaya salad recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=thai+papaya+salad",
        mealType: ["lunch"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "spicy",
        difficulty: "easy"
    },
    {
        name: "Massaman Curry",
        emoji: "🥜",
        description: "Rich curry with peanuts and tender beef",
        tags: ["Thai", "Curry", "Peanuts", "Mild"],
        searchQuery: "massaman curry recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=massaman+curry",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Pad See Ew",
        emoji: "🍝",
        description: "Wide noodles with beef and Chinese broccoli",
        tags: ["Thai", "Noodles", "Beef", "Sweet"],
        searchQuery: "pad see ew recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pad+see+ew",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Drunken Noodles",
        emoji: "🌶️",
        description: "Spicy stir-fried noodles with Thai basil",
        tags: ["Thai", "Noodles", "Spicy", "Basil"],
        searchQuery: "drunken noodles recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=drunken+noodles",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "spicy",
        difficulty: "medium"
    },
    {
        name: "Thai Basil Chicken",
        emoji: "🌿",
        description: "Spicy chicken stir-fry with holy basil",
        tags: ["Thai", "Chicken", "Spicy", "Basil"],
        searchQuery: "thai basil chicken recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=thai+basil+chicken",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "spicy",
        difficulty: "easy"
    },
    {
        name: "Thai Chicken Satay",
        emoji: "🍗",
        description: "Grilled chicken skewers with peanut sauce",
        tags: ["Thai", "Chicken", "Grilled", "Peanut"],
        searchQuery: "thai chicken satay recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=thai+chicken+satay",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Pineapple Fried Rice",
        emoji: "🍍",
        description: "Sweet and savory fried rice in pineapple",
        tags: ["Thai", "Rice", "Pineapple", "Sweet"],
        searchQuery: "pineapple fried rice recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pineapple+fried+rice",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },

    // KOREAN DISHES
    {
        name: "Korean BBQ Bulgogi",
        emoji: "🥩",
        description: "Marinated grilled beef with sweet soy flavor",
        tags: ["Korean", "BBQ", "Beef", "Marinated"],
        searchQuery: "korean bulgogi recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=korean+bulgogi",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Kimchi Fried Rice",
        emoji: "🌶️",
        description: "Spicy fried rice with fermented kimchi",
        tags: ["Korean", "Rice", "Spicy", "Fermented"],
        searchQuery: "kimchi fried rice recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=kimchi+fried+rice",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "spicy",
        difficulty: "easy"
    },
    {
        name: "Bibimbap",
        emoji: "🍲",
        description: "Mixed rice bowl with vegetables and egg",
        tags: ["Korean", "Rice", "Vegetables", "Healthy"],
        searchQuery: "bibimbap recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=bibimbap",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Korean Fried Chicken",
        emoji: "🍗",
        description: "Extra crispy chicken with spicy glaze",
        tags: ["Korean", "Chicken", "Fried", "Spicy"],
        searchQuery: "korean fried chicken recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=korean+fried+chicken",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "spicy",
        difficulty: "medium"
    },
    {
        name: "Galbi Short Ribs",
        emoji: "🍖",
        description: "Marinated grilled short ribs",
        tags: ["Korean", "Ribs", "Grilled", "Marinated"],
        searchQuery: "korean galbi recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=korean+galbi",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Japchae",
        emoji: "🍜",
        description: "Sweet potato noodles with vegetables",
        tags: ["Korean", "Noodles", "Vegetables", "Sweet"],
        searchQuery: "japchae recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=japchae",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },

    // VIETNAMESE DISHES
    {
        name: "Vietnamese Pho",
        emoji: "🍜",
        description: "Aromatic beef noodle soup with herbs",
        tags: ["Vietnamese", "Soup", "Beef", "Herbs"],
        searchQuery: "vietnamese pho recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=vietnamese+pho",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Banh Mi",
        emoji: "🥪",
        description: "Vietnamese sandwich with pickled vegetables",
        tags: ["Vietnamese", "Sandwich", "Pork", "Pickled"],
        searchQuery: "banh mi recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=banh+mi",
        mealType: ["lunch"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Vietnamese Spring Rolls",
        emoji: "🥗",
        description: "Fresh rolls with shrimp and herbs",
        tags: ["Vietnamese", "Fresh", "Shrimp", "Light"],
        searchQuery: "vietnamese spring rolls recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=vietnamese+spring+rolls",
        mealType: ["lunch", "snack"],
        dietary: ["pescatarian"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "medium"
    },

    // INDIAN DISHES
    {
        name: "Chicken Curry",
        emoji: "🍛",
        description: "Aromatic chicken curry with coconut milk and spices",
        tags: ["Indian", "Chicken", "Spicy"],
        searchQuery: "chicken curry recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+curry",
        mealType: ["dinner"],
        dietary: ["meat-lovers", "gluten-free"],
        cuisine: "indian",
        cookingTime: "medium",
        spiceLevel: "spicy",
        difficulty: "medium"
    },
    {
        name: "Chicken Tikka Masala",
        emoji: "🍛",
        description: "Creamy tomato curry with tender chicken",
        tags: ["Indian", "Chicken", "Creamy", "Tomato"],
        searchQuery: "chicken tikka masala recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+tikka+masala",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "indian",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Chicken Biryani",
        emoji: "🍚",
        description: "Fragrant rice with spiced chicken layers",
        tags: ["Indian", "Rice", "Chicken", "Aromatic"],
        searchQuery: "chicken biryani recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+biryani",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "indian",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Dal Tadka",
        emoji: "🍲",
        description: "Spiced lentil curry with aromatic tempering",
        tags: ["Indian", "Lentils", "Vegetarian", "Spicy"],
        searchQuery: "dal tadka recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=dal+tadka",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "indian",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Tandoori Chicken",
        emoji: "🍗",
        description: "Yogurt-marinated chicken cooked in tandoor",
        tags: ["Indian", "Chicken", "Grilled", "Yogurt"],
        searchQuery: "tandoori chicken recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=tandoori+chicken",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "indian",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Palak Paneer",
        emoji: "🥬",
        description: "Creamy spinach curry with cottage cheese",
        tags: ["Indian", "Spinach", "Paneer", "Vegetarian"],
        searchQuery: "palak paneer recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=palak+paneer",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "indian",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    
    // Mexican Cuisine - 70+ Recipes
    
    // TACOS (20+ varieties)
    {
        name: "Chicken Tacos",
        emoji: "🌮",
        description: "Seasoned chicken with fresh toppings in soft tortillas",
        tags: ["Mexican", "Chicken", "Quick"],
        searchQuery: "chicken tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Beef Tacos",
        emoji: "🌮",
        description: "Seasoned ground beef with classic taco toppings",
        tags: ["Mexican", "Beef", "Classic"],
        searchQuery: "beef tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=beef+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Pork Carnitas Tacos",
        emoji: "🌮",
        description: "Slow-cooked pork with crispy edges and lime",
        tags: ["Mexican", "Pork", "Slow-cooked"],
        searchQuery: "pork carnitas tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pork+carnitas+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Fish Tacos",
        emoji: "🌮",
        description: "Grilled or fried fish with cabbage slaw and lime",
        tags: ["Mexican", "Fish", "Fresh"],
        searchQuery: "fish tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=fish+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Shrimp Tacos",
        emoji: "🌮",
        description: "Grilled shrimp with spicy mayo and vegetables",
        tags: ["Mexican", "Shrimp", "Spicy"],
        searchQuery: "shrimp tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=shrimp+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Carne Asada Tacos",
        emoji: "🌮",
        description: "Grilled marinated steak with onions and cilantro",
        tags: ["Mexican", "Steak", "Grilled"],
        searchQuery: "carne asada tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=carne+asada+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Al Pastor Tacos",
        emoji: "🌮",
        description: "Marinated pork with pineapple and spices",
        tags: ["Mexican", "Pork", "Pineapple"],
        searchQuery: "al pastor tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=al+pastor+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Vegetarian Tacos",
        emoji: "🌮",
        description: "Black beans, peppers, and fresh vegetables",
        tags: ["Mexican", "Vegetarian", "Healthy"],
        searchQuery: "vegetarian tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=vegetarian+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Barbacoa Tacos",
        emoji: "🌮",
        description: "Slow-cooked beef with traditional Mexican spices",
        tags: ["Mexican", "Beef", "Slow-cooked"],
        searchQuery: "barbacoa tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=barbacoa+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Chorizo Tacos",
        emoji: "🌮",
        description: "Spicy Mexican sausage with onions and cilantro",
        tags: ["Mexican", "Chorizo", "Spicy"],
        searchQuery: "chorizo tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chorizo+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "spicy",
        difficulty: "easy"
    },
    {
        name: "Carnitas Street Tacos",
        emoji: "🌮",
        description: "Authentic street-style tacos with carnitas",
        tags: ["Mexican", "Street Food", "Authentic"],
        searchQuery: "carnitas street tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=carnitas+street+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Breakfast Tacos",
        emoji: "🌮",
        description: "Scrambled eggs with cheese and salsa",
        tags: ["Mexican", "Breakfast", "Eggs"],
        searchQuery: "breakfast tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=breakfast+tacos",
        mealType: ["breakfast"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Lengua Tacos",
        emoji: "🌮",
        description: "Tender beef tongue with traditional toppings",
        tags: ["Mexican", "Beef", "Traditional"],
        searchQuery: "lengua tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=lengua+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Chicken Tinga Tacos",
        emoji: "🌮",
        description: "Shredded chicken in smoky tomato sauce",
        tags: ["Mexican", "Chicken", "Smoky"],
        searchQuery: "chicken tinga tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+tinga+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Pescado Tacos",
        emoji: "🌮",
        description: "Beer-battered fish with spicy crema",
        tags: ["Mexican", "Fish", "Crispy"],
        searchQuery: "pescado tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pescado+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Ceviche Tacos",
        emoji: "🌮",
        description: "Fresh lime-cured fish with vegetables",
        tags: ["Mexican", "Fish", "Fresh"],
        searchQuery: "ceviche tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=ceviche+tacos",
        mealType: ["lunch"],
        dietary: ["pescatarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Cauliflower Tacos",
        emoji: "🌮",
        description: "Roasted cauliflower with spices and lime",
        tags: ["Mexican", "Vegetarian", "Healthy"],
        searchQuery: "cauliflower tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=cauliflower+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Mushroom Tacos",
        emoji: "🌮",
        description: "Sautéed mushrooms with Mexican seasonings",
        tags: ["Mexican", "Vegetarian", "Mushrooms"],
        searchQuery: "mushroom tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mushroom+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Hard Shell Tacos",
        emoji: "🌮",
        description: "Crispy taco shells with ground beef",
        tags: ["Mexican", "Beef", "Crispy"],
        searchQuery: "hard shell tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=hard+shell+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Soft Shell Tacos",
        emoji: "🌮",
        description: "Soft flour tortillas with your favorite filling",
        tags: ["Mexican", "Soft", "Customizable"],
        searchQuery: "soft shell tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=soft+shell+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },

    // BURRITOS (10+ varieties)
    {
        name: "Beef Burrito",
        emoji: "🌯",
        description: "Seasoned beef with rice, beans, and cheese wrapped in a tortilla",
        tags: ["Mexican", "Beef", "Filling"],
        searchQuery: "beef burrito recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=beef+burrito",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Chicken Burrito",
        emoji: "🌯",
        description: "Grilled chicken with rice, beans, and salsa",
        tags: ["Mexican", "Chicken", "Healthy"],
        searchQuery: "chicken burrito recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+burrito",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Breakfast Burrito",
        emoji: "🌯",
        description: "Scrambled eggs with potatoes and cheese",
        tags: ["Mexican", "Breakfast", "Eggs"],
        searchQuery: "breakfast burrito recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=breakfast+burrito",
        mealType: ["breakfast"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Bean and Rice Burrito",
        emoji: "🌯",
        description: "Black beans and Spanish rice with vegetables",
        tags: ["Mexican", "Vegetarian", "Protein"],
        searchQuery: "bean and rice burrito recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=bean+and+rice+burrito",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Carnitas Burrito",
        emoji: "🌯",
        description: "Slow-cooked pork with cilantro lime rice",
        tags: ["Mexican", "Pork", "Slow-cooked"],
        searchQuery: "carnitas burrito recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=carnitas+burrito",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Wet Burrito",
        emoji: "🌯",
        description: "Burrito smothered in red or green sauce",
        tags: ["Mexican", "Sauce", "Cheesy"],
        searchQuery: "wet burrito recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=wet+burrito",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "California Burrito",
        emoji: "🌯",
        description: "Carne asada with french fries and guacamole",
        tags: ["Mexican", "Beef", "Fries"],
        searchQuery: "california burrito recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=california+burrito",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Chimichanga",
        emoji: "🌯",
        description: "Deep-fried burrito with crispy exterior",
        tags: ["Mexican", "Fried", "Crispy"],
        searchQuery: "chimichanga recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chimichanga",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Burrito Bowl",
        emoji: "🥙",
        description: "Deconstructed burrito in a bowl",
        tags: ["Mexican", "Healthy", "Customizable"],
        searchQuery: "burrito bowl recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=burrito+bowl",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Smothered Burrito",
        emoji: "🌯",
        description: "Burrito covered in cheese and green chile",
        tags: ["Mexican", "Cheese", "Spicy"],
        searchQuery: "smothered burrito recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=smothered+burrito",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },

    // QUESADILLAS (8+ varieties)
    {
        name: "Chicken Quesadilla",
        emoji: "🫓",
        description: "Grilled chicken with melted cheese in tortilla",
        tags: ["Mexican", "Chicken", "Cheesy"],
        searchQuery: "chicken quesadilla recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+quesadilla",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Cheese Quesadilla",
        emoji: "🫓",
        description: "Simple and classic melted cheese quesadilla",
        tags: ["Mexican", "Cheese", "Simple"],
        searchQuery: "cheese quesadilla recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=cheese+quesadilla",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Vegetarian Quesadilla",
        emoji: "🫓",
        description: "Grilled tortilla filled with cheese and vegetables",
        tags: ["Mexican", "Vegetarian", "Quick"],
        searchQuery: "vegetarian quesadilla recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=vegetarian+quesadilla",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Beef Quesadilla",
        emoji: "🫓",
        description: "Seasoned ground beef with melted cheese",
        tags: ["Mexican", "Beef", "Savory"],
        searchQuery: "beef quesadilla recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=beef+quesadilla",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Shrimp Quesadilla",
        emoji: "🫓",
        description: "Grilled shrimp with peppers and cheese",
        tags: ["Mexican", "Shrimp", "Seafood"],
        searchQuery: "shrimp quesadilla recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=shrimp+quesadilla",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["pescatarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Mushroom Quesadilla",
        emoji: "🫓",
        description: "Sautéed mushrooms with cheese and herbs",
        tags: ["Mexican", "Mushrooms", "Vegetarian"],
        searchQuery: "mushroom quesadilla recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mushroom+quesadilla",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Spinach Quesadilla",
        emoji: "🫓",
        description: "Fresh spinach with cheese and onions",
        tags: ["Mexican", "Spinach", "Healthy"],
        searchQuery: "spinach quesadilla recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=spinach+quesadilla",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Black Bean Quesadilla",
        emoji: "🫓",
        description: "Black beans with cheese and spices",
        tags: ["Mexican", "Beans", "Protein"],
        searchQuery: "black bean quesadilla recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=black+bean+quesadilla",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },

    // ENCHILADAS (8+ varieties)
    {
        name: "Chicken Enchiladas",
        emoji: "🫔",
        description: "Rolled tortillas with chicken and enchilada sauce",
        tags: ["Mexican", "Chicken", "Baked"],
        searchQuery: "chicken enchiladas recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+enchiladas",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Beef Enchiladas",
        emoji: "🫔",
        description: "Ground beef rolled in tortillas with red sauce",
        tags: ["Mexican", "Beef", "Spicy"],
        searchQuery: "beef enchiladas recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=beef+enchiladas",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Cheese Enchiladas",
        emoji: "🫔",
        description: "Cheese-filled tortillas with mild red sauce",
        tags: ["Mexican", "Cheese", "Vegetarian"],
        searchQuery: "cheese enchiladas recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=cheese+enchiladas",
        mealType: ["dinner"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Chicken Enchiladas Verdes",
        emoji: "🫔",
        description: "Chicken enchiladas with green tomatillo sauce",
        tags: ["Mexican", "Chicken", "Green Sauce"],
        searchQuery: "chicken enchiladas verdes recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+enchiladas+verdes",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Enchiladas Rojas",
        emoji: "🫔",
        description: "Traditional red enchiladas with cheese",
        tags: ["Mexican", "Red Sauce", "Traditional"],
        searchQuery: "enchiladas rojas recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=enchiladas+rojas",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Sour Cream Enchiladas",
        emoji: "🫔",
        description: "Enchiladas with creamy white sauce",
        tags: ["Mexican", "Creamy", "Mild"],
        searchQuery: "sour cream enchiladas recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=sour+cream+enchiladas",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Spinach Enchiladas",
        emoji: "🫔",
        description: "Spinach and cheese rolled in tortillas",
        tags: ["Mexican", "Spinach", "Vegetarian"],
        searchQuery: "spinach enchiladas recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=spinach+enchiladas",
        mealType: ["dinner"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Enchiladas Suizas",
        emoji: "🫔",
        description: "Chicken enchiladas with green sauce and cream",
        tags: ["Mexican", "Chicken", "Creamy"],
        searchQuery: "enchiladas suizas recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=enchiladas+suizas",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },

    // SPECIALTY DISHES (15+ varieties)
    {
        name: "Chiles Rellenos",
        emoji: "🌶️",
        description: "Stuffed poblano peppers with cheese",
        tags: ["Mexican", "Peppers", "Cheese"],
        searchQuery: "chiles rellenos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chiles+rellenos",
        mealType: ["dinner"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Mole Poblano",
        emoji: "🍛",
        description: "Rich chocolate and chile sauce with chicken",
        tags: ["Mexican", "Chocolate", "Complex"],
        searchQuery: "mole poblano recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mole+poblano",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Tamales",
        emoji: "🫔",
        description: "Corn masa filled with meat and steamed",
        tags: ["Mexican", "Corn", "Steamed"],
        searchQuery: "tamales recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=tamales",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Pozole",
        emoji: "🍲",
        description: "Traditional soup with hominy and pork",
        tags: ["Mexican", "Soup", "Hominy"],
        searchQuery: "pozole recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pozole",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Tostadas",
        emoji: "🌮",
        description: "Crispy tortilla topped with beans and toppings",
        tags: ["Mexican", "Crispy", "Toppings"],
        searchQuery: "tostadas recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=tostadas",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Flautas",
        emoji: "🌯",
        description: "Crispy rolled tortillas with filling",
        tags: ["Mexican", "Crispy", "Rolled"],
        searchQuery: "flautas recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=flautas",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Sopes",
        emoji: "🥙",
        description: "Thick corn tortillas with beans and toppings",
        tags: ["Mexican", "Corn", "Traditional"],
        searchQuery: "sopes recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=sopes",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Huevos Rancheros",
        emoji: "🍳",
        description: "Fried eggs on tortillas with salsa",
        tags: ["Mexican", "Eggs", "Breakfast"],
        searchQuery: "huevos rancheros recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=huevos+rancheros",
        mealType: ["breakfast"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Chilaquiles",
        emoji: "🍳",
        description: "Fried tortilla chips with salsa and cheese",
        tags: ["Mexican", "Chips", "Breakfast"],
        searchQuery: "chilaquiles recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chilaquiles",
        mealType: ["breakfast"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Elote",
        emoji: "🌽",
        description: "Grilled corn with mayo, cheese, and chili",
        tags: ["Mexican", "Corn", "Street Food"],
        searchQuery: "elote recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=elote",
        mealType: ["snack"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Guacamole",
        emoji: "🥑",
        description: "Fresh avocado dip with lime and cilantro",
        tags: ["Mexican", "Avocado", "Dip"],
        searchQuery: "guacamole recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=guacamole",
        mealType: ["snack"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Salsa Verde",
        emoji: "🥗",
        description: "Green tomatillo salsa with cilantro",
        tags: ["Mexican", "Salsa", "Green"],
        searchQuery: "salsa verde recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=salsa+verde",
        mealType: ["snack"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Pico de Gallo",
        emoji: "🍅",
        description: "Fresh tomato salsa with onions and cilantro",
        tags: ["Mexican", "Salsa", "Fresh"],
        searchQuery: "pico de gallo recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pico+de+gallo",
        mealType: ["snack"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Nachos",
        emoji: "🧀",
        description: "Tortilla chips with melted cheese and toppings",
        tags: ["Mexican", "Chips", "Cheese"],
        searchQuery: "nachos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=nachos",
        mealType: ["snack"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Mexican Rice",
        emoji: "🍚",
        description: "Seasoned rice with tomatoes and spices",
        tags: ["Mexican", "Rice", "Side"],
        searchQuery: "mexican rice recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mexican+rice",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    
    // American Cuisine - 70+ Recipes
    
    // BURGERS & SANDWICHES (15+ varieties)
    {
        name: "Classic Cheeseburger",
        emoji: "🍔",
        description: "Juicy beef patty with cheese, lettuce, and tomato",
        tags: ["American", "Beef", "Comfort Food"],
        searchQuery: "classic cheeseburger recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=classic+cheeseburger",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Bacon Cheeseburger",
        emoji: "🍔",
        description: "Classic cheeseburger with crispy bacon",
        tags: ["American", "Beef", "Bacon"],
        searchQuery: "bacon cheeseburger recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=bacon+cheeseburger",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "BBQ Burger",
        emoji: "🍔",
        description: "Beef patty with BBQ sauce and onion rings",
        tags: ["American", "Beef", "BBQ"],
        searchQuery: "bbq burger recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=bbq+burger",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Mushroom Swiss Burger",
        emoji: "🍔",
        description: "Beef patty with sautéed mushrooms and Swiss cheese",
        tags: ["American", "Beef", "Mushrooms"],
        searchQuery: "mushroom swiss burger recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mushroom+swiss+burger",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Turkey Burger",
        emoji: "🍔",
        description: "Lean turkey patty with fresh vegetables",
        tags: ["American", "Turkey", "Healthy"],
        searchQuery: "turkey burger recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=turkey+burger",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Veggie Burger",
        emoji: "🍔",
        description: "Plant-based patty with vegetables and spices",
        tags: ["American", "Vegetarian", "Healthy"],
        searchQuery: "veggie burger recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=veggie+burger",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Philly Cheesesteak",
        emoji: "🥪",
        description: "Sliced steak with cheese on a hoagie roll",
        tags: ["American", "Beef", "Cheese"],
        searchQuery: "philly cheesesteak recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=philly+cheesesteak",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Reuben Sandwich",
        emoji: "🥪",
        description: "Corned beef with sauerkraut and Russian dressing",
        tags: ["American", "Beef", "Deli"],
        searchQuery: "reuben sandwich recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=reuben+sandwich",
        mealType: ["lunch"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Club Sandwich",
        emoji: "🥪",
        description: "Triple-decker with turkey, bacon, and vegetables",
        tags: ["American", "Turkey", "Bacon"],
        searchQuery: "club sandwich recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=club+sandwich",
        mealType: ["lunch"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Grilled Cheese",
        emoji: "🥪",
        description: "Melted cheese between buttered bread",
        tags: ["American", "Cheese", "Comfort Food"],
        searchQuery: "grilled cheese recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=grilled+cheese",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "BLT Sandwich",
        emoji: "🥪",
        description: "Bacon, lettuce, and tomato on toasted bread",
        tags: ["American", "Bacon", "Fresh"],
        searchQuery: "blt sandwich recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=blt+sandwich",
        mealType: ["lunch"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Pulled Pork Sandwich",
        emoji: "🥪",
        description: "Slow-cooked pork with BBQ sauce on a bun",
        tags: ["American", "Pork", "BBQ"],
        searchQuery: "pulled pork sandwich recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pulled+pork+sandwich",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Chicken Sandwich",
        emoji: "🥪",
        description: "Grilled or fried chicken breast on a bun",
        tags: ["American", "Chicken", "Protein"],
        searchQuery: "chicken sandwich recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+sandwich",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Sloppy Joes",
        emoji: "🥪",
        description: "Ground beef in tangy tomato sauce on a bun",
        tags: ["American", "Beef", "Comfort Food"],
        searchQuery: "sloppy joes recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=sloppy+joes",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Monte Cristo",
        emoji: "🥪",
        description: "Ham and cheese sandwich dipped in egg and fried",
        tags: ["American", "Ham", "Fried"],
        searchQuery: "monte cristo sandwich recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=monte+cristo+sandwich",
        mealType: ["lunch"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "medium"
    },

    // BBQ & GRILLED (15+ varieties)
    {
        name: "BBQ Ribs",
        emoji: "🍖",
        description: "Tender pork ribs with smoky barbecue sauce",
        tags: ["American", "Pork", "BBQ"],
        searchQuery: "bbq ribs recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=bbq+ribs",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Pulled Pork",
        emoji: "🍖",
        description: "Slow-cooked pork shoulder with BBQ sauce",
        tags: ["American", "Pork", "BBQ"],
        searchQuery: "pulled pork recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pulled+pork",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Brisket",
        emoji: "🍖",
        description: "Smoked beef brisket with dry rub",
        tags: ["American", "Beef", "BBQ"],
        searchQuery: "bbq brisket recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=bbq+brisket",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Grilled Steak",
        emoji: "🥩",
        description: "Perfectly grilled ribeye or T-bone steak",
        tags: ["American", "Beef", "Grilled"],
        searchQuery: "grilled steak recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=grilled+steak",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Grilled Salmon",
        emoji: "🐟",
        description: "Fresh salmon fillet grilled to perfection",
        tags: ["American", "Seafood", "Healthy"],
        searchQuery: "grilled salmon recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=grilled+salmon",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian", "keto", "gluten-free"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "BBQ Chicken",
        emoji: "🍗",
        description: "Grilled chicken with tangy BBQ sauce",
        tags: ["American", "Chicken", "BBQ"],
        searchQuery: "bbq chicken recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=bbq+chicken",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    {
        name: "Grilled Chicken",
        emoji: "🍗",
        description: "Marinated chicken breast grilled to perfection",
        tags: ["American", "Chicken", "Healthy"],
        searchQuery: "grilled chicken recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=grilled+chicken",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Grilled Corn",
        emoji: "🌽",
        description: "Fresh corn on the cob with butter and herbs",
        tags: ["American", "Vegetarian", "Summer"],
        searchQuery: "grilled corn recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=grilled+corn",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Grilled Vegetables",
        emoji: "🥒",
        description: "Mixed vegetables grilled with olive oil and herbs",
        tags: ["American", "Vegetarian", "Healthy"],
        searchQuery: "grilled vegetables recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=grilled+vegetables",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Smoked Wings",
        emoji: "🍗",
        description: "Chicken wings smoked with dry rub and sauce",
        tags: ["American", "Chicken", "BBQ"],
        searchQuery: "smoked chicken wings recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=smoked+chicken+wings",
        mealType: ["dinner", "snack"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Grilled Portobello",
        emoji: "🍄",
        description: "Large mushroom caps grilled with herbs",
        tags: ["American", "Vegetarian", "Mushrooms"],
        searchQuery: "grilled portobello recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=grilled+portobello",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Grilled Shrimp",
        emoji: "🍤",
        description: "Marinated shrimp grilled on skewers",
        tags: ["American", "Seafood", "Quick"],
        searchQuery: "grilled shrimp recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=grilled+shrimp",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Smoked Turkey",
        emoji: "🦃",
        description: "Slow-smoked turkey with herb seasoning",
        tags: ["American", "Turkey", "Holiday"],
        searchQuery: "smoked turkey recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=smoked+turkey",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Grilled Lamb Chops",
        emoji: "🥩",
        description: "Tender lamb chops with garlic and herbs",
        tags: ["American", "Lamb", "Elegant"],
        searchQuery: "grilled lamb chops recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=grilled+lamb+chops",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Grilled Pork Chops",
        emoji: "🥩",
        description: "Juicy pork chops grilled with seasonings",
        tags: ["American", "Pork", "Simple"],
        searchQuery: "grilled pork chops recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=grilled+pork+chops",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },

    // COMFORT FOOD (15+ varieties)
    {
        name: "Mac and Cheese",
        emoji: "🧀",
        description: "Creamy pasta with melted cheese",
        tags: ["American", "Pasta", "Comfort Food"],
        searchQuery: "mac and cheese recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mac+and+cheese",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Chicken and Waffles",
        emoji: "🧇",
        description: "Fried chicken served with Belgian waffles",
        tags: ["American", "Chicken", "Brunch"],
        searchQuery: "chicken and waffles recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+and+waffles",
        mealType: ["breakfast", "brunch"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Meatloaf",
        emoji: "🍖",
        description: "Ground beef shaped into a loaf and baked",
        tags: ["American", "Beef", "Comfort Food"],
        searchQuery: "meatloaf recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=meatloaf",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Fried Chicken",
        emoji: "🍗",
        description: "Crispy Southern-style fried chicken",
        tags: ["American", "Chicken", "Fried"],
        searchQuery: "fried chicken recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=fried+chicken",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Chicken Pot Pie",
        emoji: "🥧",
        description: "Chicken and vegetables in flaky pastry crust",
        tags: ["American", "Chicken", "Pie"],
        searchQuery: "chicken pot pie recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+pot+pie",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Beef Stew",
        emoji: "🍲",
        description: "Hearty stew with beef, potatoes, and vegetables",
        tags: ["American", "Beef", "Comfort Food"],
        searchQuery: "beef stew recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=beef+stew",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Chicken Noodle Soup",
        emoji: "🍲",
        description: "Classic soup with chicken, noodles, and vegetables",
        tags: ["American", "Chicken", "Soup"],
        searchQuery: "chicken noodle soup recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+noodle+soup",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Shepherd's Pie",
        emoji: "🥧",
        description: "Ground meat with vegetables topped with mashed potatoes",
        tags: ["American", "Beef", "Casserole"],
        searchQuery: "shepherd's pie recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=shepherd's+pie",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Mashed Potatoes",
        emoji: "🥔",
        description: "Creamy mashed potatoes with butter and milk",
        tags: ["American", "Potatoes", "Side"],
        searchQuery: "mashed potatoes recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mashed+potatoes",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Green Bean Casserole",
        emoji: "🥬",
        description: "Green beans with cream sauce and fried onions",
        tags: ["American", "Vegetables", "Casserole"],
        searchQuery: "green bean casserole recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=green+bean+casserole",
        mealType: ["dinner"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Biscuits and Gravy",
        emoji: "🥖",
        description: "Fluffy biscuits with sausage gravy",
        tags: ["American", "Breakfast", "Southern"],
        searchQuery: "biscuits and gravy recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=biscuits+and+gravy",
        mealType: ["breakfast"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Tuna Casserole",
        emoji: "🐟",
        description: "Tuna with noodles and vegetables in cream sauce",
        tags: ["American", "Tuna", "Casserole"],
        searchQuery: "tuna casserole recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=tuna+casserole",
        mealType: ["dinner"],
        dietary: ["pescatarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Chicken and Dumplings",
        emoji: "🍲",
        description: "Chicken stew with fluffy dumplings",
        tags: ["American", "Chicken", "Comfort Food"],
        searchQuery: "chicken and dumplings recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+and+dumplings",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Cornbread",
        emoji: "🌽",
        description: "Sweet or savory cornbread with butter",
        tags: ["American", "Bread", "Southern"],
        searchQuery: "cornbread recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=cornbread",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Chili",
        emoji: "🌶️",
        description: "Hearty chili with beans and ground beef",
        tags: ["American", "Beef", "Spicy"],
        searchQuery: "chili recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chili",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "easy"
    },

    // SEAFOOD (8+ varieties)
    {
        name: "Fish and Chips",
        emoji: "🍟",
        description: "Battered fish with french fries",
        tags: ["American", "Fish", "Fried"],
        searchQuery: "fish and chips recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=fish+and+chips",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Crab Cakes",
        emoji: "🦀",
        description: "Pan-fried crab cakes with remoulade sauce",
        tags: ["American", "Crab", "Seafood"],
        searchQuery: "crab cakes recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=crab+cakes",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Clam Chowder",
        emoji: "🍲",
        description: "Creamy New England clam chowder",
        tags: ["American", "Clams", "Soup"],
        searchQuery: "clam chowder recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=clam+chowder",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Shrimp and Grits",
        emoji: "🍤",
        description: "Southern dish with shrimp over creamy grits",
        tags: ["American", "Shrimp", "Southern"],
        searchQuery: "shrimp and grits recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=shrimp+and+grits",
        mealType: ["dinner"],
        dietary: ["pescatarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Lobster Roll",
        emoji: "🦞",
        description: "Fresh lobster salad on a toasted roll",
        tags: ["American", "Lobster", "Seafood"],
        searchQuery: "lobster roll recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=lobster+roll",
        mealType: ["lunch"],
        dietary: ["pescatarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Fried Catfish",
        emoji: "🐟",
        description: "Southern-style fried catfish with cornmeal",
        tags: ["American", "Catfish", "Fried"],
        searchQuery: "fried catfish recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=fried+catfish",
        mealType: ["dinner"],
        dietary: ["pescatarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Jambalaya",
        emoji: "🍚",
        description: "Cajun rice dish with shrimp, sausage, and chicken",
        tags: ["American", "Cajun", "Rice"],
        searchQuery: "jambalaya recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=jambalaya",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Salmon Patties",
        emoji: "🐟",
        description: "Pan-fried salmon cakes with herbs",
        tags: ["American", "Salmon", "Patties"],
        searchQuery: "salmon patties recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=salmon+patties",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },

    // SALADS & LIGHTER FARE (8+ varieties)
    {
        name: "Caesar Salad",
        emoji: "🥗",
        description: "Crisp romaine lettuce with Caesar dressing and croutons",
        tags: ["American", "Salad", "Light"],
        searchQuery: "caesar salad recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=caesar+salad",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Cobb Salad",
        emoji: "🥗",
        description: "Mixed greens with bacon, eggs, and blue cheese",
        tags: ["American", "Salad", "Protein"],
        searchQuery: "cobb salad recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=cobb+salad",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Waldorf Salad",
        emoji: "🥗",
        description: "Apples, celery, and walnuts in mayo dressing",
        tags: ["American", "Salad", "Fruit"],
        searchQuery: "waldorf salad recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=waldorf+salad",
        mealType: ["lunch"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Potato Salad",
        emoji: "🥔",
        description: "Classic potato salad with mayo and herbs",
        tags: ["American", "Potatoes", "Side"],
        searchQuery: "potato salad recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=potato+salad",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Coleslaw",
        emoji: "🥬",
        description: "Shredded cabbage with creamy dressing",
        tags: ["American", "Cabbage", "Side"],
        searchQuery: "coleslaw recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=coleslaw",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Chicken Salad",
        emoji: "🥗",
        description: "Shredded chicken with mayo and celery",
        tags: ["American", "Chicken", "Salad"],
        searchQuery: "chicken salad recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+salad",
        mealType: ["lunch"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Chef Salad",
        emoji: "🥗",
        description: "Mixed greens with ham, turkey, and cheese",
        tags: ["American", "Salad", "Meat"],
        searchQuery: "chef salad recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chef+salad",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Spinach Salad",
        emoji: "🥬",
        description: "Fresh spinach with warm bacon dressing",
        tags: ["American", "Spinach", "Bacon"],
        searchQuery: "spinach salad recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=spinach+salad",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    
    // Mediterranean
    {
        name: "Greek Gyros",
        emoji: "🥙",
        description: "Seasoned meat with tzatziki sauce in pita bread",
        tags: ["Greek", "Lamb", "Mediterranean"],
        searchQuery: "greek gyros recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=greek+gyros",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mediterranean",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Mediterranean Bowl",
        emoji: "🍲",
        description: "Quinoa bowl with olives, feta, and fresh vegetables",
        tags: ["Mediterranean", "Vegetarian", "Healthy"],
        searchQuery: "mediterranean bowl recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mediterranean+bowl",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "gluten-free"],
        cuisine: "mediterranean",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Chicken Shawarma",
        emoji: "🥙",
        description: "Spiced chicken with garlic sauce and fresh vegetables",
        tags: ["Middle Eastern", "Chicken", "Spicy"],
        searchQuery: "chicken shawarma recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+shawarma",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mediterranean",
        cookingTime: "medium",
        spiceLevel: "spicy",
        difficulty: "medium"
    },
    
    // Comfort Food
    {
        name: "Mac and Cheese",
        emoji: "🧀",
        description: "Creamy pasta with melted cheese and breadcrumb topping",
        tags: ["American", "Pasta", "Comfort Food"],
        searchQuery: "mac and cheese recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mac+and+cheese",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Chicken Soup",
        emoji: "🍲",
        description: "Hearty soup with chicken, vegetables, and noodles",
        tags: ["Comfort Food", "Chicken", "Healthy"],
        searchQuery: "chicken noodle soup recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+noodle+soup",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Beef Stew",
        emoji: "🍲",
        description: "Slow-cooked beef with potatoes and vegetables",
        tags: ["Comfort Food", "Beef", "Hearty"],
        searchQuery: "beef stew recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=beef+stew",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    
    // Healthy Options
    {
        name: "Quinoa Salad",
        emoji: "🥗",
        description: "Nutritious quinoa with mixed vegetables and herbs",
        tags: ["Healthy", "Vegetarian", "Gluten-Free"],
        searchQuery: "quinoa salad recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=quinoa+salad",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan", "gluten-free"],
        cuisine: "mediterranean",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Grilled Chicken Breast",
        emoji: "🍗",
        description: "Lean chicken breast with herbs and vegetables",
        tags: ["Healthy", "Chicken", "Low-Carb"],
        searchQuery: "grilled chicken breast recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=grilled+chicken+breast",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers", "keto", "gluten-free"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Vegetable Stir Fry",
        emoji: "🥬",
        description: "Fresh mixed vegetables in a light sauce",
        tags: ["Healthy", "Vegetarian", "Quick"],
        searchQuery: "vegetable stir fry recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=vegetable+stir+fry",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    
    // Breakfast/Brunch
    {
        name: "Pancakes",
        emoji: "🥞",
        description: "Fluffy pancakes with maple syrup and butter",
        tags: ["Breakfast", "Sweet", "Comfort Food"],
        searchQuery: "fluffy pancakes recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=fluffy+pancakes",
        mealType: ["breakfast"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Avocado Toast",
        emoji: "🥑",
        description: "Toasted bread topped with mashed avocado and seasonings",
        tags: ["Breakfast", "Healthy", "Vegetarian"],
        searchQuery: "avocado toast recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=avocado+toast",
        mealType: ["breakfast", "lunch", "snack"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Eggs Benedict",
        emoji: "🍳",
        description: "Poached eggs with hollandaise sauce on English muffins",
        tags: ["Breakfast", "Brunch", "Indulgent"],
        searchQuery: "eggs benedict recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=eggs+benedict",
        mealType: ["breakfast"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    
    // Seafood
    {
        name: "Fish and Chips",
        emoji: "🍟",
        description: "Battered fish with crispy fries and tartar sauce",
        tags: ["British", "Seafood", "Comfort Food"],
        searchQuery: "fish and chips recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=fish+and+chips",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Shrimp Scampi",
        emoji: "🍤",
        description: "Shrimp sautéed in garlic butter wine sauce",
        tags: ["Italian", "Seafood", "Elegant"],
        searchQuery: "shrimp scampi recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=shrimp+scampi",
        mealType: ["dinner"],
        dietary: ["pescatarian", "keto"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Crab Cakes",
        emoji: "🦀",
        description: "Pan-fried crab cakes with remoulade sauce",
        tags: ["American", "Seafood", "Appetizer"],
        searchQuery: "crab cakes recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=crab+cakes",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["pescatarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    

    
    // EXPANDED ASIAN CUISINE
    {
        name: "Ramen Bowl",
        emoji: "🍜",
        description: "Rich broth with noodles, egg, and pork belly",
        tags: ["Japanese", "Noodles", "Comfort Food"],
        searchQuery: "ramen bowl recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=ramen+bowl",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Bibimbap",
        emoji: "🍚",
        description: "Korean rice bowl with vegetables and gochujang",
        tags: ["Korean", "Rice", "Healthy"],
        searchQuery: "bibimbap recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=bibimbap",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "spicy",
        difficulty: "medium"
    },
    {
        name: "Dim Sum",
        emoji: "🥟",
        description: "Steamed dumplings with pork and shrimp filling",
        tags: ["Chinese", "Dumplings", "Brunch"],
        searchQuery: "dim sum recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=dim+sum",
        mealType: ["lunch", "snack"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Pho",
        emoji: "🍜",
        description: "Vietnamese noodle soup with beef and herbs",
        tags: ["Vietnamese", "Soup", "Healthy"],
        searchQuery: "pho recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pho",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Miso Soup",
        emoji: "🍲",
        description: "Traditional Japanese soup with miso paste and tofu",
        tags: ["Japanese", "Soup", "Healthy"],
        searchQuery: "miso soup recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=miso+soup",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Thai Green Curry",
        emoji: "🍛",
        description: "Spicy coconut curry with chicken and vegetables",
        tags: ["Thai", "Curry", "Spicy"],
        searchQuery: "thai green curry recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=thai+green+curry",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "spicy",
        difficulty: "medium"
    },
    {
        name: "Kung Pao Chicken",
        emoji: "🍗",
        description: "Spicy Sichuan chicken with peanuts and vegetables",
        tags: ["Chinese", "Chicken", "Spicy"],
        searchQuery: "kung pao chicken recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=kung+pao+chicken",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "spicy",
        difficulty: "medium"
    },
    {
        name: "Yakitori",
        emoji: "🍢",
        description: "Grilled chicken skewers with tare sauce",
        tags: ["Japanese", "Chicken", "Grilled"],
        searchQuery: "yakitori recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=yakitori",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Mapo Tofu",
        emoji: "🌶️",
        description: "Spicy Sichuan tofu with minced pork and chili oil",
        tags: ["Chinese", "Tofu", "Spicy"],
        searchQuery: "mapo tofu recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mapo+tofu",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "spicy",
        difficulty: "medium"
    },
    {
        name: "Bao Buns",
        emoji: "🥟",
        description: "Steamed buns with pork belly and pickled vegetables",
        tags: ["Chinese", "Buns", "Street Food"],
        searchQuery: "bao buns recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=bao+buns",
        mealType: ["lunch", "snack"],
        dietary: ["meat-lovers"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    
    // EXPANDED MEXICAN CUISINE
    {
        name: "Enchiladas",
        emoji: "🌮",
        description: "Rolled tortillas with meat and cheese, topped with sauce",
        tags: ["Mexican", "Chicken", "Comfort Food"],
        searchQuery: "enchiladas recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=enchiladas",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Guacamole",
        emoji: "🥑",
        description: "Fresh avocado dip with lime, cilantro, and jalapeños",
        tags: ["Mexican", "Appetizer", "Fresh"],
        searchQuery: "guacamole recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=guacamole",
        mealType: ["snack"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Carnitas",
        emoji: "🐷",
        description: "Slow-cooked pork shoulder with Mexican spices",
        tags: ["Mexican", "Pork", "Slow-Cooked"],
        searchQuery: "carnitas recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=carnitas",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Chiles Rellenos",
        emoji: "🌶️",
        description: "Stuffed poblano peppers with cheese and batter",
        tags: ["Mexican", "Peppers", "Vegetarian"],
        searchQuery: "chiles rellenos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chiles+rellenos",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Mole Poblano",
        emoji: "🍗",
        description: "Rich chocolate-chili sauce with chicken",
        tags: ["Mexican", "Chicken", "Complex"],
        searchQuery: "mole poblano recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mole+poblano",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Pozole",
        emoji: "🍲",
        description: "Traditional hominy soup with pork and chiles",
        tags: ["Mexican", "Soup", "Traditional"],
        searchQuery: "pozole recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pozole",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Fish Tacos",
        emoji: "🐟",
        description: "Grilled fish with cabbage slaw and lime crema",
        tags: ["Mexican", "Seafood", "Fresh"],
        searchQuery: "fish tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=fish+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Tamales",
        emoji: "🌽",
        description: "Corn masa filled with meat and steamed in husks",
        tags: ["Mexican", "Traditional", "Comfort Food"],
        searchQuery: "tamales recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=tamales",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Elote",
        emoji: "🌽",
        description: "Mexican street corn with mayo, cheese, and chili",
        tags: ["Mexican", "Street Food", "Vegetarian"],
        searchQuery: "elote recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=elote",
        mealType: ["snack"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    
    // EXPANDED AMERICAN CUISINE
    {
        name: "Pulled Pork",
        emoji: "🥪",
        description: "Slow-cooked pork shoulder with BBQ sauce",
        tags: ["American", "Pork", "BBQ"],
        searchQuery: "pulled pork recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=pulled+pork",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Buffalo Wings",
        emoji: "🍗",
        description: "Spicy chicken wings with blue cheese dressing",
        tags: ["American", "Chicken", "Spicy"],
        searchQuery: "buffalo wings recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=buffalo+wings",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "spicy",
        difficulty: "easy"
    },
    {
        name: "Clam Chowder",
        emoji: "🍲",
        description: "Creamy New England soup with clams and potatoes",
        tags: ["American", "Seafood", "Comfort Food"],
        searchQuery: "clam chowder recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=clam+chowder",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Chicken Fried Steak",
        emoji: "🍖",
        description: "Breaded cube steak with country gravy",
        tags: ["American", "Beef", "Comfort Food"],
        searchQuery: "chicken fried steak recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=chicken+fried+steak",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Jambalaya",
        emoji: "🍚",
        description: "Spicy rice dish with shrimp, sausage, and vegetables",
        tags: ["American", "Rice", "Creole"],
        searchQuery: "jambalaya recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=jambalaya",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "spicy",
        difficulty: "medium"
    },
    {
        name: "Coleslaw",
        emoji: "🥬",
        description: "Crunchy cabbage salad with creamy dressing",
        tags: ["American", "Salad", "Side Dish"],
        searchQuery: "coleslaw recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=coleslaw",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Meatloaf",
        emoji: "🍖",
        description: "Classic ground beef loaf with glazed topping",
        tags: ["American", "Beef", "Comfort Food"],
        searchQuery: "meatloaf recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=meatloaf",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Cornbread",
        emoji: "🌽",
        description: "Sweet and savory cornmeal bread",
        tags: ["American", "Bread", "Side Dish"],
        searchQuery: "cornbread recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=cornbread",
        mealType: ["lunch", "dinner", "snack"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    
    // EXPANDED MEDITERRANEAN CUISINE
    {
        name: "Moussaka",
        emoji: "🍆",
        description: "Greek casserole with eggplant, meat, and béchamel",
        tags: ["Greek", "Lamb", "Casserole"],
        searchQuery: "moussaka recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=moussaka",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mediterranean",
        cookingTime: "long",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Hummus",
        emoji: "🫘",
        description: "Creamy chickpea dip with tahini and lemon",
        tags: ["Mediterranean", "Healthy", "Vegetarian"],
        searchQuery: "hummus recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=hummus",
        mealType: ["snack"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "mediterranean",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Falafel",
        emoji: "🧆",
        description: "Crispy chickpea fritters with tahini sauce",
        tags: ["Mediterranean", "Vegetarian", "Healthy"],
        searchQuery: "falafel recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=falafel",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "mediterranean",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Paella",
        emoji: "🥘",
        description: "Spanish rice dish with seafood and saffron",
        tags: ["Spanish", "Rice", "Seafood"],
        searchQuery: "paella recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=paella",
        mealType: ["lunch", "dinner"],
        dietary: ["pescatarian"],
        cuisine: "mediterranean",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Tabbouleh",
        emoji: "🥗",
        description: "Fresh parsley salad with tomatoes and bulgur",
        tags: ["Lebanese", "Salad", "Fresh"],
        searchQuery: "tabbouleh recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=tabbouleh",
        mealType: ["lunch", "snack"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "mediterranean",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Lamb Souvlaki",
        emoji: "🥙",
        description: "Greek grilled lamb skewers with pita and tzatziki",
        tags: ["Greek", "Lamb", "Grilled"],
        searchQuery: "lamb souvlaki recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=lamb+souvlaki",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "mediterranean",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Ratatouille",
        emoji: "🍆",
        description: "French vegetable stew with eggplant and zucchini",
        tags: ["French", "Vegetarian", "Healthy"],
        searchQuery: "ratatouille recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=ratatouille",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "mediterranean",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    
    // EXPANDED INDIAN CUISINE
    {
        name: "Tikka Masala",
        emoji: "🍛",
        description: "Creamy tomato curry with marinated chicken",
        tags: ["Indian", "Chicken", "Creamy"],
        searchQuery: "tikka masala recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=tikka+masala",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "indian",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Biryani",
        emoji: "🍚",
        description: "Fragrant rice dish with meat and aromatic spices",
        tags: ["Indian", "Rice", "Aromatic"],
        searchQuery: "biryani recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=biryani",
        mealType: ["lunch", "dinner"],
        dietary: ["meat-lovers"],
        cuisine: "indian",
        cookingTime: "long",
        spiceLevel: "medium",
        difficulty: "hard"
    },
    {
        name: "Dal",
        emoji: "🫘",
        description: "Spiced lentil curry with turmeric and ginger",
        tags: ["Indian", "Lentils", "Healthy"],
        searchQuery: "dal recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=dal",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "indian",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Butter Naan",
        emoji: "🫓",
        description: "Soft Indian bread with butter and garlic",
        tags: ["Indian", "Bread", "Side Dish"],
        searchQuery: "butter naan recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=butter+naan",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "indian",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Samosas",
        emoji: "🥟",
        description: "Crispy pastries filled with spiced potatoes",
        tags: ["Indian", "Appetizer", "Vegetarian"],
        searchQuery: "samosas recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=samosas",
        mealType: ["snack"],
        dietary: ["vegetarian"],
        cuisine: "indian",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    {
        name: "Vindaloo",
        emoji: "🌶️",
        description: "Spicy Goan curry with pork and vinegar",
        tags: ["Indian", "Pork", "Very Spicy"],
        searchQuery: "vindaloo recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=vindaloo",
        mealType: ["dinner"],
        dietary: ["meat-lovers"],
        cuisine: "indian",
        cookingTime: "long",
        spiceLevel: "spicy",
        difficulty: "hard"
    },
    
    // MORE BREAKFAST OPTIONS
    {
        name: "French Toast",
        emoji: "🍞",
        description: "Thick slices of bread soaked in egg and cinnamon",
        tags: ["Breakfast", "Sweet", "Comfort Food"],
        searchQuery: "french toast recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=french+toast",
        mealType: ["breakfast"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Eggs Benedict",
        emoji: "🍳",
        description: "Poached eggs on English muffins with hollandaise",
        tags: ["Breakfast", "Elegant", "Brunch"],
        searchQuery: "eggs benedict recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=eggs+benedict",
        mealType: ["breakfast"],
        dietary: ["vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "hard"
    },
    {
        name: "Breakfast Burrito",
        emoji: "🌯",
        description: "Scrambled eggs with cheese and salsa in a tortilla",
        tags: ["Breakfast", "Mexican", "Portable"],
        searchQuery: "breakfast burrito recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=breakfast+burrito",
        mealType: ["breakfast"],
        dietary: ["vegetarian"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Acai Bowl",
        emoji: "🍓",
        description: "Frozen acai topped with granola and fresh fruit",
        tags: ["Breakfast", "Healthy", "Fresh"],
        searchQuery: "acai bowl recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=acai+bowl",
        mealType: ["breakfast"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Overnight Oats",
        emoji: "🥣",
        description: "Chilled oats with milk, fruit, and nuts",
        tags: ["Breakfast", "Healthy", "Make-Ahead"],
        searchQuery: "overnight oats recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=overnight+oats",
        mealType: ["breakfast"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Shakshuka",
        emoji: "🍳",
        description: "Eggs poached in spiced tomato sauce",
        tags: ["Breakfast", "Mediterranean", "Spicy"],
        searchQuery: "shakshuka recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=shakshuka",
        mealType: ["breakfast"],
        dietary: ["vegetarian"],
        cuisine: "mediterranean",
        cookingTime: "quick",
        spiceLevel: "medium",
        difficulty: "easy"
    },
    
    // MORE VEGAN OPTIONS
    {
        name: "Buddha Bowl",
        emoji: "🥗",
        description: "Colorful bowl with quinoa, vegetables, and tahini dressing",
        tags: ["Healthy", "Vegan", "Fresh"],
        searchQuery: "buddha bowl recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=buddha+bowl",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Vegan Tacos",
        emoji: "🌮",
        description: "Plant-based tacos with black beans and avocado",
        tags: ["Mexican", "Vegan", "Healthy"],
        searchQuery: "vegan tacos recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=vegan+tacos",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "mexican",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Coconut Curry",
        emoji: "🥥",
        description: "Creamy coconut curry with vegetables and tofu",
        tags: ["Asian", "Vegan", "Creamy"],
        searchQuery: "coconut curry recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=coconut+curry",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian", "vegan"],
        cuisine: "thai",
        dishType: "other",
        cookingTime: "medium",
        spiceLevel: "medium",
        difficulty: "medium"
    },
    {
        name: "Mushroom Risotto",
        emoji: "🍄",
        description: "Creamy rice with mixed mushrooms and herbs",
        tags: ["Italian", "Vegetarian", "Creamy"],
        searchQuery: "mushroom risotto recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=mushroom+risotto",
        mealType: ["lunch", "dinner"],
        dietary: ["vegetarian"],
        cuisine: "italian",
        dishType: "pasta",
        cookingTime: "medium",
        spiceLevel: "mild",
        difficulty: "medium"
    },
    
    // MORE KETO OPTIONS  
    {
        name: "Keto Salad",
        emoji: "🥗",
        description: "Mixed greens with avocado, nuts, and olive oil",
        tags: ["Healthy", "Keto", "Fresh"],
        searchQuery: "keto salad recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=keto+salad",
        mealType: ["lunch", "dinner"],
        dietary: ["keto", "vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Cauliflower Rice",
        emoji: "🥦",
        description: "Low-carb rice substitute with herbs and spices",
        tags: ["Healthy", "Keto", "Low-Carb"],
        searchQuery: "cauliflower rice recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=cauliflower+rice",
        mealType: ["lunch", "dinner"],
        dietary: ["keto", "vegetarian", "vegan"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Zucchini Noodles",
        emoji: "🥒",
        description: "Spiralized zucchini with pesto or marinara sauce",
        tags: ["Healthy", "Keto", "Low-Carb"],
        searchQuery: "zucchini noodles recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=zucchini+noodles",
        mealType: ["lunch", "dinner"],
        dietary: ["keto", "vegetarian"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    },
    {
        name: "Keto Meatballs",
        emoji: "🍖",
        description: "Low-carb meatballs with almond flour and cheese",
        tags: ["Keto", "Meat", "Low-Carb"],
        searchQuery: "keto meatballs recipe",
        fallbackUrl: "https://www.allrecipes.com/search?q=keto+meatballs",
        mealType: ["lunch", "dinner"],
        dietary: ["keto", "meat-lovers"],
        cuisine: "american",
        dishType: "other",
        cookingTime: "quick",
        spiceLevel: "mild",
        difficulty: "easy"
    }
];

// DOM elements
const mealEmoji = document.getElementById('mealEmoji');
const mealName = document.getElementById('mealName');
const mealDescription = document.getElementById('mealDescription');
const mealTags = document.getElementById('mealTags');
const generateBtn = document.getElementById('generateBtn');
const mealCountElement = document.getElementById('mealCount');
const recipeLinkContainer = document.getElementById('recipeLinkContainer');
const recipeLink = document.getElementById('recipeLink');
const recipeSource = document.getElementById('recipeSource');
const additionalSearchOptions = document.getElementById('additionalSearchOptions');
const tiktokSearch = document.getElementById('tiktokSearch');
const youtubeSearch = document.getElementById('youtubeSearch');
const foodNetworkSearch = document.getElementById('foodNetworkSearch');

// Preferences Modal Elements
const preferencesBtn = document.getElementById('preferencesBtn');
const preferencesModal = document.getElementById('preferencesModal');
const preferencesOverlay = document.getElementById('preferencesOverlay');
const preferencesClose = document.getElementById('preferencesClose');
const preferencesReset = document.getElementById('preferencesReset');
const preferencesApply = document.getElementById('preferencesApply');

// State
let mealCount = parseInt(localStorage.getItem('mealCount') || '0');
let lastMealIndex = -1;
let recentMeals = []; // Track recent meals to improve variety
const MAX_RECENT_MEALS = 8; // Number of recent meals to track (prevents repetition)
let currentGenerationId = 0; // Track each generation to prevent race conditions

// Cuisine-specific dish types mapping
const cuisineDishTypes = {
    italian: [
        { value: 'any', text: 'Any Italian' },
        { value: 'pasta', text: 'Pasta' },
        { value: 'pizza', text: 'Pizza' },
        { value: 'meat', text: 'Meat Dishes' },
        { value: 'soup', text: 'Soup & Salad' },
        { value: 'other', text: 'Other' }
    ],
    japanese: [
        { value: 'any', text: 'Any Japanese' },
        { value: 'sushi', text: 'Sushi' },
        { value: 'noodles', text: 'Ramen & Noodles' },
        { value: 'meat', text: 'Teriyaki & Katsu' },
        { value: 'soup', text: 'Soup' },
        { value: 'other', text: 'Other' }
    ],
    chinese: [
        { value: 'any', text: 'Any Chinese' },
        { value: 'rice', text: 'Fried Rice' },
        { value: 'noodles', text: 'Noodles' },
        { value: 'meat', text: 'Meat Dishes' },
        { value: 'other', text: 'Other' }
    ],
    thai: [
        { value: 'any', text: 'Any Thai' },
        { value: 'curry', text: 'Curry' },
        { value: 'noodles', text: 'Noodles' },
        { value: 'soup', text: 'Soup' },
        { value: 'other', text: 'Other' }
    ],
    mexican: [
        { value: 'any', text: 'Any Mexican' },
        { value: 'tacos', text: 'Tacos' },
        { value: 'other', text: 'Burritos & More' }
    ],
    american: [
        { value: 'any', text: 'Any American' },
        { value: 'meat', text: 'BBQ & Burgers' },
        { value: 'soup', text: 'Soup & Salad' },
        { value: 'other', text: 'Other' }
    ],
    mediterranean: [
        { value: 'any', text: 'Any Mediterranean' },
        { value: 'meat', text: 'Grilled Dishes' },
        { value: 'soup', text: 'Soup & Salad' },
        { value: 'other', text: 'Other' }
    ],
    indian: [
        { value: 'any', text: 'Any Indian' },
        { value: 'curry', text: 'Curry' },
        { value: 'rice', text: 'Rice Dishes' },
        { value: 'other', text: 'Other' }
    ],
    vietnamese: [
        { value: 'any', text: 'Any Vietnamese' },
        { value: 'noodles', text: 'Pho & Noodles' },
        { value: 'other', text: 'Other' }
    ],
    korean: [
        { value: 'any', text: 'Any Korean' },
        { value: 'rice', text: 'Rice Dishes' },
        { value: 'meat', text: 'BBQ & Meat' },
        { value: 'other', text: 'Other' }
    ]
};

// TikTok Deep Linking Function with Smart Fallback
function setupTikTokDeepLink(encodedQuery) {
    const tiktokButton = document.getElementById('tiktokSearch');
    if (!tiktokButton) return;
    
    // Remove href to prevent default behavior
    tiktokButton.removeAttribute('href');
    
    // Add custom click handler for deep linking
    tiktokButton.onclick = function(e) {
        e.preventDefault();
        
        const rawQuery = decodeURIComponent(encodedQuery);
        const webUrl = `https://www.tiktok.com/search?q=${encodedQuery}`;
        
        // For mobile devices, use smart approach
        if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Try to copy search term to clipboard for easy pasting in TikTok
            copyToClipboard(rawQuery).then(() => {
                // Open TikTok app (to main page since search deep link is unreliable)
                window.location.href = 'tiktok://';
                
                // Show helpful notification
                setTimeout(() => {
                    showNotification(`🎵 Opening TikTok! Search term "${rawQuery}" copied to clipboard - just paste it in TikTok's search! 📋`, 'success');
                }, 500);
                
                // Fallback to web if app doesn't open
                setTimeout(() => {
                    // If still in browser, app didn't open - use web version
                    if (document.hasFocus()) {
                        window.open(webUrl, '_blank');
                        showNotification('🌐 Opened TikTok in browser instead!', 'info');
                    }
                }, 2000);
            }).catch(() => {
                // If clipboard fails, just open web version
                window.open(webUrl, '_blank');
                showNotification(`🔍 Search for "${rawQuery}" on TikTok!`, 'info');
            });
        } else {
            // For desktop, just open web version
            window.open(webUrl, '_blank');
        }
    };
    
    // Set a fallback href for right-click "open in new tab"
    tiktokButton.href = webUrl;
}

// Helper function to copy text to clipboard
async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        // Use modern Clipboard API if available
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        return new Promise((resolve, reject) => {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);
                if (successful) {
                    resolve();
                } else {
                    reject();
                }
            } catch (err) {
                document.body.removeChild(textArea);
                reject(err);
            }
        });
    }
}

// Dynamic Dish Type Functions
function showDishTypeSection(cuisineType) {
    const dishTypeSection = document.getElementById('dishTypeSection');
    const dishTypeOptions = document.getElementById('dishTypeOptions');
    
    if (cuisineType === 'any') {
        // Hide dish type section if "any" cuisine is selected
        dishTypeSection.classList.remove('show');
        setTimeout(() => {
            dishTypeSection.style.display = 'none';
        }, 400);
        userPreferences.dishType = 'any';
        return;
    }
    
    // Show the section
    dishTypeSection.style.display = 'block';
    
    // Clear existing options
    dishTypeOptions.innerHTML = '';
    
    // Get dish types for this cuisine
    const dishTypes = cuisineDishTypes[cuisineType] || [];
    
    // Create radio buttons for each dish type
    dishTypes.forEach(dishType => {
        const label = document.createElement('label');
        label.className = 'preference-option';
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'dishType';
        input.value = dishType.value;
        input.checked = dishType.value === 'any';
        
        const span = document.createElement('span');
        span.className = 'option-text';
        span.textContent = dishType.text;
        
        label.appendChild(input);
        label.appendChild(span);
        dishTypeOptions.appendChild(label);
        
        // Add event listener for dish type selection
        input.addEventListener('change', function() {
            if (this.checked) {
                userPreferences.dishType = this.value;
            }
        });
    });
    
    // Set default dish type
    userPreferences.dishType = 'any';
    
    // Trigger the animation
    setTimeout(() => {
        dishTypeSection.classList.add('show');
    }, 50);
}

function hideDishTypeSection() {
    const dishTypeSection = document.getElementById('dishTypeSection');
    dishTypeSection.classList.remove('show');
    setTimeout(() => {
        dishTypeSection.style.display = 'none';
    }, 400);
    userPreferences.dishType = 'any';
}

// User Preferences
let userPreferences = {
    mealType: 'any',
    dietary: 'any',
    cuisine: 'any',
    dishType: 'any',
    cookingTime: 'any',
    spiceLevel: 'any',
    difficulty: 'any'
};

// Load saved preferences
function loadPreferences() {
    const saved = localStorage.getItem('dishwishPreferences');
    if (saved) {
        userPreferences = { ...userPreferences, ...JSON.parse(saved) };
        updatePreferencesForm();
    }
}

// Save preferences to localStorage
function savePreferences() {
    localStorage.setItem('dishwishPreferences', JSON.stringify(userPreferences));
}

// Initialize the app
function init() {
    updateMealCount();
    loadPreferences();
    setupEventListeners();
}

// Setup all event listeners
function setupEventListeners() {
    generateBtn.addEventListener('click', generateRandomMeal);
    
    // Preferences modal event listeners
    preferencesBtn.addEventListener('click', openPreferencesModal);
    preferencesClose.addEventListener('click', closePreferencesModal);
    preferencesOverlay.addEventListener('click', closePreferencesModal);
    preferencesReset.addEventListener('click', resetPreferences);
    preferencesApply.addEventListener('click', applyPreferences);
    
    // Dynamic dish type listeners - add after DOM is ready
    setTimeout(() => {
        setupCuisineChangeListeners();
    }, 100);
    
    // Close modal on escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && preferencesModal.style.display === 'block') {
            closePreferencesModal();
        }
    });
    
    // Update preferences button appearance
    updatePreferencesButtonState();
}

// Setup cuisine change listeners for dynamic dish types
function setupCuisineChangeListeners() {
    const cuisineRadios = document.querySelectorAll('input[name="cuisine"]');
    cuisineRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                showDishTypeSection(this.value);
            }
        });
    });
}

// Update preferences button to show if preferences are active
function updatePreferencesButtonState() {
    const hasActivePreferences = Object.values(userPreferences).some(pref => pref !== 'any');
    
    if (hasActivePreferences) {
        preferencesBtn.classList.add('preferences-active');
        preferencesBtn.title = 'Preferences are active - click to modify';
    } else {
        preferencesBtn.classList.remove('preferences-active');
        preferencesBtn.title = 'Set your meal preferences';
    }
}

// Preferences Modal Functions
function openPreferencesModal() {
    preferencesModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closePreferencesModal() {
    preferencesModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updatePreferencesForm() {
    // Update form inputs based on current preferences
    Object.keys(userPreferences).forEach(key => {
        const radio = document.querySelector(`input[name="${key}"][value="${userPreferences[key]}"]`);
        if (radio) {
            radio.checked = true;
        }
    });
    
    // Handle dynamic dish type section
    if (userPreferences.cuisine !== 'any') {
        showDishTypeSection(userPreferences.cuisine);
        // Set the dish type after the section is created
        setTimeout(() => {
            const dishTypeRadio = document.querySelector(`input[name="dishType"][value="${userPreferences.dishType}"]`);
            if (dishTypeRadio) {
                dishTypeRadio.checked = true;
            }
        }, 100);
    } else {
        hideDishTypeSection();
    }
}

function resetPreferences() {
    // Reset all preferences to 'any'
    userPreferences = {
        mealType: 'any',
        dietary: 'any',
        cuisine: 'any',
        dishType: 'any',
        cookingTime: 'any',
        spiceLevel: 'any',
        difficulty: 'any'
    };
    
    // Hide dish type section since cuisine is reset to 'any'
    hideDishTypeSection();
    
    // Update form
    updatePreferencesForm();
    
    // Save and close
    savePreferences();
    updatePreferencesButtonState();
    closePreferencesModal();
    
    // Show confirmation
    showNotification('Preferences reset! 🔄', 'success');
}

function applyPreferences() {
    // Get form values
    const formData = new FormData();
    
    userPreferences.mealType = document.querySelector('input[name="mealType"]:checked').value;
    userPreferences.dietary = document.querySelector('input[name="dietary"]:checked').value;
    userPreferences.cuisine = document.querySelector('input[name="cuisine"]:checked').value;
    
    // Handle dish type - check if any radio is selected (dynamic section might be hidden)
    const dishTypeRadio = document.querySelector('input[name="dishType"]:checked');
    userPreferences.dishType = dishTypeRadio ? dishTypeRadio.value : 'any';
    
    userPreferences.cookingTime = document.querySelector('input[name="cookingTime"]:checked').value;
    userPreferences.spiceLevel = document.querySelector('input[name="spiceLevel"]:checked').value;
    userPreferences.difficulty = document.querySelector('input[name="difficulty"]:checked').value;
    
    // Save preferences
    savePreferences();
    updatePreferencesButtonState();
    closePreferencesModal();
    
    // Show confirmation
    showNotification('Preferences saved! ✓', 'success');
}

// Filter meals based on user preferences
function getFilteredMeals() {
    return meals.filter(meal => {
        // Check meal type
        if (userPreferences.mealType !== 'any' && !meal.mealType.includes(userPreferences.mealType)) {
            return false;
        }
        
        // Check dietary preferences
        if (userPreferences.dietary !== 'any' && !meal.dietary.includes(userPreferences.dietary)) {
            return false;
        }
        
        // Check cuisine
        if (userPreferences.cuisine !== 'any' && meal.cuisine !== userPreferences.cuisine) {
            return false;
        }
        
        // Check dish type
        if (userPreferences.dishType !== 'any' && meal.dishType !== userPreferences.dishType) {
            return false;
        }
        
        // Check cooking time
        if (userPreferences.cookingTime !== 'any' && meal.cookingTime !== userPreferences.cookingTime) {
            return false;
        }
        
        // Check spice level
        if (userPreferences.spiceLevel !== 'any' && meal.spiceLevel !== userPreferences.spiceLevel) {
            return false;
        }
        
        // Check difficulty
        if (userPreferences.difficulty !== 'any' && meal.difficulty !== userPreferences.difficulty) {
            return false;
        }
        
        return true;
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#667eea'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Generate random meal
function generateRandomMeal() {
    // Prevent multiple simultaneous calls (race condition protection)
    if (generateBtn.disabled) {
        return; // Already generating, ignore this call
    }
    
    // Disable button immediately to prevent race conditions
    generateBtn.disabled = true;
    
    // Add loading state
    mealEmoji.textContent = '🎲';
    mealName.textContent = 'Generating your meal...';
    mealDescription.textContent = 'Please wait while we pick something delicious!';
    mealTags.innerHTML = '';
    recipeLinkContainer.style.display = 'none';
    
    // Create unique generation ID to prevent race conditions
    const generationId = ++currentGenerationId;
    
    // Simulate loading time for better UX
    setTimeout(() => {
        // Check if this is still the most recent generation request
        if (generationId !== currentGenerationId) {
            console.log('🚫 Cancelled outdated meal generation request');
            return; // Another generation started, ignore this one
        }
        
        // Get filtered meals based on user preferences
        const filteredMeals = getFilteredMeals();
        
        // Check if we have any meals that match preferences
        if (filteredMeals.length === 0) {
            // Double-check we're still the current generation
            if (generationId !== currentGenerationId) return;
            
            mealEmoji.textContent = '😅';
            mealName.textContent = 'No meals match your preferences!';
            mealDescription.textContent = 'Try adjusting your preferences or reset them to see more options.';
            mealTags.innerHTML = '';
            recipeLinkContainer.style.display = 'none';
            generateBtn.disabled = false;
            
            showNotification('No meals found! Try different preferences 🔍', 'info');
            return;
        }
        
        let randomIndex;
        let selectedMeal;
        let attempts = 0;
        const maxAttempts = 50; // Prevent infinite loops
        
        // Enhanced randomization - avoid recent meals for better variety
        do {
            randomIndex = Math.floor(Math.random() * filteredMeals.length);
            selectedMeal = filteredMeals[randomIndex];
            attempts++;
            
            // If we've tried many times and still hitting recent meals, 
            // clear the recent meals array to allow more variety
            if (attempts > maxAttempts) {
                recentMeals = [];
                console.log('🔄 Cleared recent meals to ensure variety');
                break;
            }
        } while (recentMeals.includes(selectedMeal.name) && filteredMeals.length > MAX_RECENT_MEALS);
        
        // Add the selected meal to recent meals
        recentMeals.push(selectedMeal.name);
        
        // Keep recent meals array to manageable size
        if (recentMeals.length > MAX_RECENT_MEALS) {
            recentMeals.shift(); // Remove oldest meal
        }
        
        lastMealIndex = selectedMeal;
        
        // Final check before displaying - ensure we're still the current generation
        if (generationId !== currentGenerationId) {
            console.log('🚫 Cancelled outdated meal display');
            return;
        }
        
        // Update meal display with animation
        displayMeal(selectedMeal);
        
        // Update counter
        mealCount++;
        updateMealCount();
        
        // Re-enable button
        generateBtn.disabled = false;
        
        // Save to localStorage
        localStorage.setItem('mealCount', mealCount.toString());
        
    }, 1000);
}

// Display meal with animation
function displayMeal(meal) {
    // Safety check: ensure meal object is valid
    if (!meal || !meal.name || !meal.description) {
        console.error('🚨 Invalid meal object passed to displayMeal:', meal);
        return;
    }
    
    // Add fade-in animation
    const mealCard = document.querySelector('.meal-card');
    mealCard.classList.remove('fade-in');
    
    // Update content atomically (all at once to prevent mismatches)
    mealEmoji.textContent = meal.emoji || '🍽️';
    mealName.textContent = meal.name;
    mealDescription.textContent = meal.description;
    
    // Clear and populate tags
    mealTags.innerHTML = '';
    meal.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.textContent = tag;
        mealTags.appendChild(tagElement);
    });
    
    // Update recipe link with smart search functionality
    if (meal.fallbackUrl && meal.searchQuery) {
        // Create smart search URLs that work reliably
        const searchTerm = meal.searchQuery.replace(/\s+/g, '+');
        const encodedQuery = encodeURIComponent(meal.searchQuery);
        
        // Main AllRecipes search
        recipeLink.href = `https://www.allrecipes.com/search?q=${searchTerm}`;
        recipeSource.textContent = `Search AllRecipes`;
        
        // Set up additional search options (searchQuery already contains "recipe")
        
        // TikTok with deep linking - open app if available, otherwise web
        setupTikTokDeepLink(encodedQuery);
        
        youtubeSearch.href = `https://www.youtube.com/results?search_query=${encodedQuery}`;
        
        // Use Google site search for Food Network - much more reliable
        foodNetworkSearch.href = `https://www.google.com/search?q=site:foodnetwork.com+${encodedQuery}`;
        
        // Show the recipe container
        recipeLinkContainer.style.display = 'block';
        
        // Add some helpful console logging
        console.log(`Recipe searches ready for: ${meal.searchQuery}`);
    } else {
        recipeLinkContainer.style.display = 'none';
    }
    
    // Trigger animation
    setTimeout(() => {
        mealCard.classList.add('fade-in');
    }, 50);
}

// Update meal count display
function updateMealCount() {
    mealCountElement.textContent = mealCount;
}

// Add keyboard support
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
        if (!generateBtn.disabled) {
            generateRandomMeal();
        }
    }
});

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add some fun easter eggs (safer implementation)
let clickCount = 0;
generateBtn.addEventListener('click', () => {
    clickCount++;
    
    // Easter egg: After 10 clicks, show a special message
    if (clickCount === 10) {
        // Use notification instead of modifying meal text to prevent conflicts
        showNotification("🎉 Wow! You really love trying new meals! Keep exploring! 🎉", 'success');
    }
    
    // Easter egg: After 25 clicks, show another message
    if (clickCount === 25) {
        // Use notification instead of modifying meal text to prevent conflicts
        showNotification("🏆 You're a true food adventurer! 25 meals generated! 🏆", 'success');
    }
});

// Add smooth scrolling for mobile
if (window.innerWidth <= 768) {
    generateBtn.addEventListener('click', () => {
        setTimeout(() => {
            document.querySelector('.meal-card').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 100);
    });
} 
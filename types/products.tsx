


export interface Food {
    _id: string;           // Unique identifier for the food item
    name: string;          // Name of the food item
    _type : "food";
    category?: string;     // Category of the food item (optional)
    price: number;         // Current price of the food item
    originalPrice?: number; // Original price before discount (optional)
    tags?: string[];       // Tags for categorization (optional)
    image: { asset: { _ref: string; _type: "image"} };   // Image associated with the food item (optional)
    description?: string;  // Description of the food item (optional)
    available: boolean;
    slug :{
        _type : "slug";
        current :string
    };
    inventory : number;
    categories: Category[]; 
    
}
export interface Category {
    _id: string;
    name: string;
    foods: Food[];
  }



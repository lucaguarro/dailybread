export class Product {
    public Food_ID:number;
    public Name:string;
    public Picture:string;
    public Seller_ID:number;
    public Description:string;
    public Price:number;
    public Quantity:number;
    public FoodTypeID:number;




    constructor(Food_ID:number,
        Name:string,Picture:string,
        Seller_ID:number,
        Description:string,
        Price:number,
        Quantity:number,
        FoodTypeID:number){

        this.Food_ID=Food_ID;
        this.Name=Name;
        this.Picture=Picture;
        this.Seller_ID=Seller_ID;
        this.Description=Description;
        this.Price=Price;
        this.Quantity=Quantity;
        this.FoodTypeID=FoodTypeID;


    }    
}

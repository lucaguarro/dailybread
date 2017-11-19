export class Seller {
    public name: string;
    public profilePic: string;
<<<<<<< HEAD
    public sellerID: string;

    constructor(name: string, profilePic: string, sellerID: string){
=======
    public sellerID: number;
    public lat: number;
    public long: number;
    public address: string;
    public delivers: string;
    public deliveryRadius:number;



    constructor(name: string, profilePic: string, sellerID: number,
    	lat:number, long:number, address:string, delivers:string, deliveryRadius:number){
>>>>>>> 32522f77b29dbc290a38adaa3babf1cc9393374c
        this.name = name;
        this.profilePic = profilePic;
        this.sellerID = sellerID;
        this.lat=lat;
        this.long=long;
        this.address=address;
        this.delivers=delivers;
        this.deliveryRadius=deliveryRadius;

    }    
}

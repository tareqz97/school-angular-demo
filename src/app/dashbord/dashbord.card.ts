export class Card{
    public title :string;
    public description : string;
    public imagePath : string;

constructor(title:string,desc:string,imagePath:string){
    this.title = title;
    this.description = desc;
    this.imagePath = imagePath;
}
}
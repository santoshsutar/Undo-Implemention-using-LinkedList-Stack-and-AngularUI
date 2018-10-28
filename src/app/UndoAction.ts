export class UndoAction {
    public _brush="";
    public _div:DIVs;
    constructor(color:string,Div:DIVs ) {
     this._brush =color; 
     this._div=Div;
    }

}
export enum DIVs
{
    color1="color1",
    color2="color2",
    color3="color3"
}

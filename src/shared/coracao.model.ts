export class Coracao {
  constructor( public exist:boolean,
    public coracao:string="bi bi-heart-fill",
    public coracaoQuebrado:string="bi bi-heartbreak"
    ) {}

  public existeCoracao():string {
    if (this.exist!) {
      return this.coracao
    }else{
      return this.coracaoQuebrado
    }
  }
}

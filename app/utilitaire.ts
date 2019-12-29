export class Utilitaire {
  
  public StringToTable(str:String): JSON{
    let sortie: Array<string>;
    var JSONQury = {};
    sortie = str.replace("[[", "").replace("]]", "").split("], [");
    sortie.forEach(function (value) {
      //console.log(value.split(", "));
      JSONQury[value.split(", ")[0]] = value.split(", ");
    })
    //console.log(this.json_produits);
    return JSONQury as JSON;
  }

  public getData(json: JSON, key:String, turn:Number, columns:string): string{
    let sortie: Array<string> = Object.keys(json) as Array<string>;
    let index: Number = json['JSON'].indexOf(columns);
    if(key+' '+turn in json){
          return json[key+' '+turn][index];
      }
    return null;
  }

}
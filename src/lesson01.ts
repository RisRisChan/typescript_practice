const main1 = () => {
  // 変数の宣言と代入
  const message = "Hello World!" //型推論
  const message2: string = "Hello World!" //型アノテーション
  console.log(message)
  let breakfast = "toast"
  console.log(breakfast)
  breakfast = "fried egg"
  console.log(breakfast)

  // プリミティブ型（string、number、boolean）
  const lastName: string = "Inagaki"
  //const firstName: number = "Inagaki"
  const age: number = 30
  const isSingle: boolean = true
  const isAroundThirty = age > 25 && age < 35 //型推論：型を指定しているわけではないが推測してくれる
  console.log('isAroundThirty  ' + isAroundThirty)
  console.log(typeof isAroundThirty) // boolean
  
  // 存在しないことを表す型
  //null：値が欠如している
  //undefined：値が割り当てられていない状態
  const notExisted: null = null
  console.log("notExisted is " + notExisted)
  
  let beforeInitialize;
  console.log("beforeInitialize is " + beforeInitialize)
  
  // 何にでもなりうる型
  //any型：非推奨
  let slime: any
  slime = "0132"
  console.log("slime is " + typeof slime)
  slime = 132
  console.log("slime is " + typeof slime)
  
  //unknown：安全なany型
  let water: unknown
  water = 1000
  console.log("water is " + typeof water)
   //const ice: string = water      string型にunknown型を代入できないためエラー
   //const steam: number = water
  const hotWater: unknown = water
  console.log("hotWater is " + typeof hotWater)
  
  /**** Union Type ****/
  // リテラル型
  let forbiddenFruit: "Apple" = "Apple"
   //forbiddenFruit = "Orange"
   
   // Union Type
   let trafficLight: "red" | "yellow" | "green"
   trafficLight = "red"
   trafficLight = "yellow"
   trafficLight = "green"
   // trafficLight = "blue"

    let zeroOrOne: 0 | 1
    zeroOrOne = 0
    //zeroOrOne = 10


  // TypeScript における条件分岐
  if (age === 30) {
    console.log("My age is thirty!")
  }

  const getSuccessMessage = (successCode: 200 | 201 | 202 | 203 | 204 | 205 | 206): string => {
    switch (successCode) {
      case 200:
        return "OK"
      case 201:
        return "Created"
      case 202:
        return "Accepted"
      case 203:
        return "Non-Authoritative Information"
      case 204:
        return "No Content"
      case 205:
        return "Reset Content"
      case 206:
        return "206 Partial Content"
      // case 207:
      //   return "Non-existed success code"
      default:
        return ""
    }
  }

  console.log(getSuccessMessage(206))
  
}



main1()



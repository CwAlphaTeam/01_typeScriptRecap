// console.log("hello world")
// //abc

// let num:number = 5
// let ad: string= "ch15"

// // num="ali"
// //  ad= false

//  let ogrenciNo:number[]=[];
//  ogrenciNo.push(1946)
//  console.log(ogrenciNo)
// //  ogrenciNo.push("2024")

// let ogrenciAd:string[]=[]
// ogrenciAd.push("ali")
// ogrenciAd.push(false)

// let tuple:[number,string,boolean]=[1,"ali",true,]
// tuple.push(3)
// console.log(tuple)
// tuple.push(false)
// console.log(tuple)
// tuple.push([])

// let ogrenciListesi:[number,string,boolean][]=[[1,"ali",false]]
// ogrenciListesi.push([2,"ahmet",true])
// console.log(ogrenciListesi)
// ogrenciListesi.push([3,"ayse",true])
// let ogrenciList: (number | string | boolean)[] = [];

//* enums

//  enum Roles{
//     user,
//     admin,
//     guest,
//     other
// }

// let currentUser:Roles=Roles.admin
// console.log(currentUser)

// enum Puanlar{
//     kaldi =10,
//     zorlaGecti=15,
//     orta=25,
//     iyi=50,
//     pekiyi=80
// }
// let herhangibiri:Puanlar=Puanlar.iyi
// console.log(herhangibiri)

//  interface Device {
//   id: number
//   name: string
//   info?: string
//   area: AreaTypes
//   areaInfo:AreaInfo
// }

//  enum AreaTypes {
//   BUILDING = 'BUILDING',
//   FLOOR = 'FLOOR',
//   ROOM = 'ROOM',
// }

// const bulb: Device = {
// id: 1,
// name: 'Bulb 1',
// area: AreaTypes.ROOM,
// areaInfo:{
//     areaID:"a",
//     areaName:"asd",
//     postalCode:45
// }
// }

// if(bulb.area === AreaTypes.ROOM) {
// console.log('Device is in room')
// } else if (AreaTypes.FLOOR) {
// console.log('Device is in floor')
// } else {
// console.log('Device is in building')
// }
// interface AreaInfo{

//         areaID:string,
//         areaName:string,
//         postalCode?:number

// }

// console.log(bulb.area)

//*any type
// let numb:any=5
// numb="ali"
// numb=true

// let x:any
// x= 55
// x=[1,8,7]

// let y:string=numb
// console.log(y)
// console.log(typeof(y))

// //*unknown type
//  let xyz: unknown= 2023
// xyz="2004"

// console.log(typeof xyz)
//  let asd: string=xyz
//  let bool:boolean=xyz
//  let tip:any=xyz

//* Void

// function greetings():void{
//   console.log("hi")
// }
// greetings()

// //*Never
// function error(message: string): never {
//     throw new Error(message);
//   }
//   console.log(error('Hata Oluştu'))

//*Union Type

// let sayi:number | string |boolean =5
// sayi+=10
// sayi=56
// sayi="ali"
// sayi= false

//* type narrowing
// function checkNumber (n: string | number ):void{

    
//     if(typeof n == 'string'){
       
//     }else{
//       n.
//     }
// } 
//* Type Aliases
{

    ////

    //------> conditional type 

    type a1=number;
    type b1=string;

    type x=a1 extends null ?true : false /// conditional type 

    type y=a1 extends null ?true :b1 extends undefined ?undefined : any

    type Sheikh={
        bike:string,
        car:string,
        ship:string
    }


    /// we are check that ---> car asay kina  /bike asay kina / ship asay ki na / tractor asay ki na


    /// key of Sheikh 'bike' | 'car'  | 'ship'
    // type CheckVehicle<T>=T extends 'bike' | 'car'  | 'ship '? true : false  // this is not dynamic type 

///----> dynamic type 

    type CheckVehicle<T>=T extends keyof Sheikh? true : false

    type HasPlane=CheckVehicle<'plane'>



















    ///
}
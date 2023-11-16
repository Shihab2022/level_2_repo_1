{
    // nullable types
    const searchName=(value:string|null)=>{
        if(value){
            console.log('Searching')
        }
        else{
            console.log('there is nothing to search ')
        }
    }
    // searchName(null) //now there have no error but if i not use type null in our function parameter then it gives error 

    const getSpeedMeterPerSecond=(value:unknown)=>{
        if(typeof value==='number'){
            const convertedSpeed=(value*1000)/3600
            console.log(`the speed is converted from number ${convertedSpeed} ms^-1`)
        }
        else if(typeof value==='string'){
            const valueNumber=value.split(' ')
            console.log(valueNumber) //it return an array then we can destractrung this array

            const [result,unit]=value.split(' ')

  const convertedSpeed=(parseFloat(result)*1000)/3600
            console.log(`the speed is converted from string ${convertedSpeed} ms^-1`)

        }

        else{
            console.log('something is wrong')
        }
    }
    getSpeedMeterPerSecond(10000)
    getSpeedMeterPerSecond('10000')
    getSpeedMeterPerSecond(null)


    ///never type
    const throwError=(msg:string):never=>{
        throw new Error (msg)
    }
   throwError('this message make by mistake ') 
}
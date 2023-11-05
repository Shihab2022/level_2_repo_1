{
    ///

    // interface ----> generic

    interface Developer<T, X = null> { // here X=null because this type is optional that's way we send the optional value 
        name: string;
        computer: {
            brand: string,
            model: string,
            releaseYear: number
        }
        smartWatch: T;
        bike?: X;
    }

    type Poor = { brand: string, model: string, display: string }
    const poorDeveloper: Developer<{ brand: string, model: string, display: string }> = { /// we can use this like Developer<Poor>
        name: 'poor',
        computer: {
            brand: 'asus',
            model: 's533wa',
            releaseYear: 2020
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw33333',
            display: 'led'
        }
    }


    interface Rich { brand: string, model: string, heartTrack: boolean, sleepTrack: boolean }
    interface Bike { brand: string, model: string }
    const richDeveloper: Developer<{ brand: string, model: string, heartTrack: boolean, sleepTrack: boolean }, { brand: string, model: string }> = { /// we can use this like Developer<Rich,Bike>
        name: 'poor',
        computer: {
            brand: 'asus',
            model: 's533wa',
            releaseYear: 2020
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw33333',
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            brand: 'yamaha',
            model: 'fz'
        }

    }












    ///
}
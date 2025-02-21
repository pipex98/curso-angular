
interface Passenger {
    name:string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Felipe'
}

const passenger2: Passenger = {
    name: 'Fernando',
    children: ['Natalia', 'Elizabeth'],
}

const returnChildrenNumber = ( passenger: Passenger ) : number => {

    if ( !passenger.children ) return 0;

    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;

    console.log( passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildrenNumber( passenger1 );
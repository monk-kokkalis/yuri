import {sample} from 'lodash';
import {colleges} from 'data/colleges';
import {address, internet, name, phone} from 'faker';

function generateRandomDegree(): {college: string; degree: string;} {
    const {name, degrees} = sample(colleges)!;
    return {
        college: name,
        degree: sample(degrees)!
    }
}

export interface UnitItem {
    image: string;
    firstName: string;
    lastName: string;
    college: string;
    degree: string;
    state: string;
    email: string;
    mobileNumber: string;
    status: string;
}
export const units: Array<UnitItem> = (function() {
    const items: Array<UnitItem> = [];
    let counter = 10;
    while (counter > 0) {
        const {college, degree} = generateRandomDegree();
        const item = {
            image: 'https://source.unsplash.com/random/120x120',
            firstName: name.firstName(),
            lastName: name.lastName(),
            college: college,
            degree: degree,
            state: address.state(),
            email: internet.email(),
            mobileNumber: phone.phoneNumberFormat(),
            status: 'Graduated'
        }
        items.push(item);
        counter -= 1;
    }
    return items;
})();
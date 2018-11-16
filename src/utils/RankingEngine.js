import {POLAND} from "../constants/Countries";

export const computeRanking = (client) => {
    if (client.age < 77 && client.age > 7 && client.blacklisted === false) {
        const ageGenderCriterion = computeAgeGenderCriterion(client);
        const locationCriterion = computeLocationCriterion(client);
        const salaryCriterion = computeSalaryCriterion(client);
        return (ageGenderCriterion * 0.1) + (locationCriterion * 0.4) + (salaryCriterion * 0.5);
    } else {
        return 0;
    }
}

const computeAgeGenderCriterion = (client) => {
    const age = client.age;
    const sex = client.sex;
    let optimalAge = 35;
    const minimalAge = 7;
    const maximalAge = 77;
    let rating = 0;

    if (sex === 'female') {
        optimalAge = 40;
    }

    if (age < maximalAge && age > minimalAge) {
        if (age < optimalAge) {
            rating = ((age - minimalAge) / (optimalAge - minimalAge)) * 100;
        }
        else {
            rating = 100 - (((age - optimalAge) / (maximalAge - optimalAge)) * 100);
        }
    } else {
        return 0;
    }

    return rating;
}

const computeLocationCriterion = (client) => {
    if (client.country === POLAND) {
        return 100;
    } else {
        return 0;
    }

}

const computeSalaryCriterion = (client) => {
    let salary = client.monthlySalary;
    if (client.sex === 'female') {
        salary *= 1.2;
    }

    if (salary > 10000) {
        return 100;
    } else if (salary <= 10000 && salary >= 5000) {
        return 50;
    } else if (salary < 5000) {
        return 0;
    }

}
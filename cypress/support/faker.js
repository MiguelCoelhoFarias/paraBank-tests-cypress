import { faker } from "@faker-js/faker";


export const newUser = () =>  {
    return {
        firstName: faker.lorem.word() + faker.person.firstName(),
        lastName: faker.lorem.word()+ faker.person.lastName(),
        address: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phoneNumber: faker.helpers.fake('{{number.int(100000000, 999999999)}}'),
        ssn: faker.helpers.fake('{{number.int(100000000, 999999999)}}'),
        userName: faker.internet.username(),
        password: faker.internet.password(),


    }     
}
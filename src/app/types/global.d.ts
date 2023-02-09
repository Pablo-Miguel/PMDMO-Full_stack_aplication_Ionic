export {};

declare global {

    type User = {
        id: String,
        firstName: String,
        lastName: String,
        email: String
    }

    type Course = {
        id: String,
        name: String,
        description: String,
        cre8_date: Date,
        price: Number,
        author: String,
        id_user: String
    }

}
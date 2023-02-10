export {};

declare global {

    type User = {
        id: String,
        firstName: String,
        lastName: String,
        email: String
    }

    type Cart = {
        id: String,
        paid: Number,
        date: Date,
        user: User,
        course: Course
    }

    type Course = {
        id: String,
        name: String,
        description: String,
        cre8_date: Date,
        price: Number,
        author: String
    }

}
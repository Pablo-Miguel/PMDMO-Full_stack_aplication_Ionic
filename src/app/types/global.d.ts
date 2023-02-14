export {};

declare global {

    type User = {
        id: string,
        firstName: string,
        lastName: string,
        email: string
    }

    type Cart = {
        id: string,
        paid: number,
        date: Date,
        user: User,
        course: Course
    }

    type Course = {
        id: string,
        name: string,
        description: string,
        cre8_date: Date,
        price: number,
        author: string
    }

    type UserToken = {
        user: User,
        token: string
    }

    type ApiError = {
        error: string
    }

}
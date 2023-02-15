export {};

declare global {

    type User = {
        _id: string,
        firstName: string,
        lastName: string,
        email: string
    }

    type Cart = {
        _id: string,
        paid: number,
        date: Date,
        user: User,
        course: Course
    }

    type Course = {
        _id: string,
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

    type Status = {
        status: string
    }

}
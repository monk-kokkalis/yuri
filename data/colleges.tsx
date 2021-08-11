export const colleges = [
    {
        name: 'Engineering',
        degrees: [
            'Chemical',
            'Civil',
            'Electrical',
            'Electronics',
            'Mechanical',
            'Packaging',
            'Software'
        ]
    }
]

export type CollegeType = {
    name: string;
    degrees: Array<any>;
}

export type CollegesArrayType = Array<CollegeType>
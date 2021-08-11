export const colleges = [
    {
        name: 'Business & Accountancy',
        degrees: [
            'Accountancy',
            'Advertising',
            'Business Administration'
        ]
    },
    {
        name: 'Computer Studies',
        degrees: [
            'Computer Science',
            'Digital Media and Interactive Arts',
            'Information Technology',
            'Bachelor in Library and Information Science'
        ]
    },
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
    },
    {
        name: 'Nursing',
        degrees: [
            'Nursing'
        ]
    }
]

export type CollegeType = {
    name: string;
    degrees: Array<any>;
}

export type CollegesArrayType = Array<CollegeType>
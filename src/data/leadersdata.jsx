import road from '../assets/images/road.jpg'
import railway from '../assets/images/railway.jpeg'
import building from '../assets/images/building.jpg'
import estate from '../assets/images/estate.jpeg'
import refinery1 from '../assets/images/refinery1.jpeg'
import refinery2 from '../assets/images/refinery2.jpeg'

import male1 from '../assets/images/male1.png'
import male2 from '../assets/images/male2.png'
import female from '../assets/images/female.png'



const leaderdata = [
    {
        id: 1,
        bio: {
            name: 'John doe',
            position: 'senator',
            tenure: '1st term',
            state: 'Lagos state',
            party: 'APC',
            image: male1
        },
        projects: [
            {
                id: 1,
                name: 'road construction',
                image: road,
                completed: true,
                inprogress: false,
                contractor: 'Arab contractors'
            },
            {
                id: 3,
                name: 'building construction',
                image: building,
                completed: false,
                inprogress: true,
                contractor: 'NDDC contractors'
            },
        ]
    },

    {
        id: 2,
        bio: {
            name: 'Adeleke',
            position: 'President',
            tenure: '1st term',
            state: 'Cross river state',
            party: 'APC',
            image: male2
        },
        projects: [
            {
                id: 4,
                name: 'refinery construction',
                image: refinery1,
                completed: false,
                inprogress: true,
                contractor: 'Gold contractors'
            },
            {
                id: 2,
                name: 'railway construction',
                image: railway,
                completed: false,
                inprogress: true,
                contractor: 'Julius contractors'
            },
        ]
    },

    {
        id: 3,
        bio: {
            name: 'Regina',
            position: 'Governor',
            tenure: '1st term',
            state: 'Imo state',
            party: 'APC',
            image: female
        },
        projects: [
            {
                id: 5,
                name: 'estate construction',
                image: estate,
                completed: false,
                inprogress: true,
                contractor: 'Silver contractors'
            },
            {
                id: 6,
                name: 'Abuja refinery construction',
                image: refinery2,
                completed: false,
                inprogress: true,
                contractor: 'Arab contractors'
            }
        ]
    },

    {
        id: 4,
        bio: {
            name: 'John doe',
            position: 'senator',
            tenure: '1st term',
            state: 'Lagos state',
            party: 'APC',
            image: male1
        },
        projects: [
            {
                id: 11,
                name: 'road construction',
                image: road,
                completed: false,
                inprogress: true,
                contractor: 'Arab contractors'
            },
            {
                id: 12,
                name: 'building construction',
                image: building,
                completed: false,
                inprogress: true,
                contractor: 'NDDC contractors'
            },
        ]
    },

    {
        id: 5,
        bio: {
            name: 'Peter Jame',
            position: 'Governor',
            tenure: '1st term',
            state: 'Cross river state',
            party: 'APC',
            image: male2
        },
        projects: [
            {
                id: 7,
                name: 'refinery construction',
                image: refinery1,
                completed: false,
                inprogress: true,
                contractor: 'Gold contractors'
            },
            {
                id: 8,
                name: 'railway construction',
                image: railway,
                completed: false,
                inprogress: true,
                contractor: 'Julius contractors'
            },
        ]
    },

    {
        id: 6,
        bio: {
            name: 'Angela John',
            position: 'senator',
            tenure: '1st term',
            state: 'Ondo state',
            party: 'APC',
            image: female
        },
        projects: [
            {
                id: 9,
                name: 'estate construction',
                image: estate,
                completed: false,
                inprogress: true,
                contractor: 'Silver contractors'
            },
            {
                id: 10,
                name: 'Abuja refinery construction',
                image: refinery2,
                completed: false,
                inprogress: true,
                contractor: 'Arab contractors'
            }
        ]
    },

    {
        id: 7,
        bio: {
            name: 'Jonathan',
            position: 'senate',
            tenure: '1st term',
            state: 'Lagos state',
            party: 'APC',
            image: male1
        },
        projects: [
            {
                id: 13,
                name: 'road construction',
                image: road,
                completed: false,
                inprogress: true,
                contractor: 'Arab contractors'
            },
            {
                id: 14,
                name: 'building construction',
                image: building,
                completed: false,
                inprogress: true,
                contractor: 'NDDC contractors'
            },
        ]
    },

    {
        id: 8,
        bio: {
            name: 'Adam peter',
            position: 'Governor',
            tenure: '1st term',
            state: 'Anambra',
            party: 'APC',
            image: male2
        },
        projects: [
            {
                id: 15,
                name: 'refinery construction',
                image: refinery1,
                completed: false,
                inprogress: true,
                contractor: 'Gold contractors'
            },
            {
                id: 16,
                name: 'railway construction',
                image: railway,
                completed: false,
                inprogress: true,
                contractor: 'Julius contractors'
            },
        ]
    },

    {
        id: 9,
        bio: {
            name: 'Happiness',
            position: 'vice president',
            tenure: '1st term',
            state: 'cross river',
            party: 'APC',
            image: female
        },
        projects: [
            {
                id: 17,
                name: 'estate construction',
                image: estate,
                completed: false,
                inprogress: true,
                contractor: 'Silver contractors'
            },
            {
                id: 18,
                name: 'Abuja refinery construction',
                image: refinery2,
                completed: false,
                inprogress: true,
                contractor: 'Arab contractors'
            }
        ]
    }
]

export default leaderdata
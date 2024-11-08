import road from '../assets/images/road.jpg'
import railway from '../assets/images/railway.jpeg'
import building from '../assets/images/building.jpg'
import estate from '../assets/images/estate.jpeg'
import refinery1 from '../assets/images/refinery1.jpeg'
import refinery2 from '../assets/images/refinery2.jpeg'

const project = [
    {
        id: 1,
        name: 'road construction',
        image: road,
        completed: false,
        inprogress: true,
        contractor: 'Arab contractors',
        promiseBy: 'senator John doe',
    },

    {
        id: 2,
        name: 'railway construction',
        image: railway,
        completed: false,
        inprogress: true,
        contractor: 'Julius contractors',
        promiseBy: 'Peter Jame',
    },

    {
        id: 3,
        name: 'building construction',
        image: building,
        completed: false,
        inprogress: true,
        contractor: 'NDDC contractors',
        promiseBy: 'senator John doe'
    },

    {
        id: 4,
        name: 'refinery construction',
        image: refinery1,
        completed: false,
        inprogress: true,
        contractor: 'Gold contractors',
        promiseBy: 'Peter Jame'
    },

    {
        id: 5,
        name: 'estate construction',
        image: estate,
        completed: false,
        inprogress: true,
        contractor: 'Silver contractors',
        promiseBy: 'Angela John',
    },
    {
        id: 6,
        name: 'Abuja refinery construction',
        image: refinery2,
        completed: false,
        inprogress: true,
        contractor: 'Arab contractors',
        promiseBy: 'Angela John',
    },
]
export default project
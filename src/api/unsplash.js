import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bcc53f57c4c7a0b6debfaff29fcb45b74773d9dd3bedf9342c389adc0f7646bd'
    }
});
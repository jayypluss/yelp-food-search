import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer otE9ANTu04ZXQpA5-JLG2O09kymLeGu-dByPlPILeTjszBnG5sX1NuoavAN2MFWZ9G-7q5lX2OjS21_8DMsAi645maGPfgPcjaYT6nKNS1SE87ByHCqmT5WBxn69X3Yx'
    }
});
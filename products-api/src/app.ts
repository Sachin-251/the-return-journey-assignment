import express, { Express } from 'express';
import http from 'http';
import morgan from 'morgan';
import routes from './routes/products';
import logger from './middleware/logger';

export const router: Express = express();

// LOGGING
router.use(morgan('dev'));

// PARSING REQUEST
router.use(express.urlencoded({extended: false}));

// FOR JSON DATA 
router.use(express.json());

// API RULES 
router.use((req, res, next) => {
    // CORS POLICY 
    res.header('Access-Control-Allow-Origin', '*');
    // CORS HEADERS 
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTIONS'){
        //CORS METHOD Headers
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    
    next();
});

//MIDDLEWARE FOR LOG TIMESTAMP, HTTP METHOD, URL
router.use(logger);

//ROUTES
router.use('/api/', routes);

//HANDLING ERROR
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({message: error.message});
});

//SERVER
const httpServer = http.createServer(router);
const PORT = 6000 || 6001;
httpServer.listen(PORT, () => {
    console.log(`The Server is running on port: ${PORT} `);
});


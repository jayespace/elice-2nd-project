#!/usr/bin/env node
import 'dotenv/config';
import app from '../src/app.js';

const port = process.env.PORT || '5000';
const MONGODB_URL = process.env.MONGODB_URL || '';

app.listen(port, () => {
    console.log(`정상적으로 서버를 시작하였습니다. http://localhost:${port}`);
});
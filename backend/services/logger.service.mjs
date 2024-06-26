// import fs from 'fs'
import { asyncLocalStorage } from './als.service.mjs'


// const logsDir = './logs'
// if (!fs.existsSync(logsDir)) {
//     fs.mkdirSync(logsDir)
// }

//define the time format
function getTime() {
    let now = new Date()
    return now.toLocaleString('he')
}

function isError(e) {
    return e && e.stack && e.message
}

function doLog(level, ...args) {

    const strs = args.map(arg =>
        (typeof arg === 'string' || isError(arg)) ? arg : JSON.stringify(arg)
    )

    var line = strs.join(' | ')
    const store = asyncLocalStorage.getStore()
    const userId = store?.loggedinUser?.id
    const str = userId ? `[userId: ${userId}]` : ''
    line = `${getTime()} - ${level} - ${line} ${str}\n`
    console.log(line)
    // fs.appendFile('./logs/backend.log', line, (err) =>{
    // if (err) console.log('FATAL: cannot write to log file')
    // if (err) console.log('FATAL: cannot write to log file ->', err)
    // })
}

export const logger = {
    debug(...args) {
        if (process.env.NODE_ENV !== 'production') doLog('DEBUG', ...args)
    },
    info(...args) {
        doLog('INFO', ...args)
    },
    warn(...args) {
        doLog('WARN', ...args)
    },
    error(...args) {
        doLog('ERROR', ...args)
    }
}
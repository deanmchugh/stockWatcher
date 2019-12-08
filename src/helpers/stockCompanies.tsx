import { ASXCodes } from '../data'

export default function stockComp(dataType: string) {
    return new Promise((res, rej) => {
        const name: string[] = []
        const code: string[] = []
        const desc: string[] = []
        const compData = ASXCodes.split('"\n')
        compData.forEach(function(comp, idx, arr) {
            const splitCompData = comp.split('\",\"')
            name.push(splitCompData[0].slice(1))
            code.push(splitCompData[1])
            desc.push(splitCompData[2])
            if (idx === arr.length - 1) {
                if (dataType === 'name') res(name)
                if (dataType === 'code') res(code)
                if (dataType === 'desc') res(desc)
            }
        })
    })
}

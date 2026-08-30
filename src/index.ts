const firstCharToUpperCase = ([firstChar = '', ...rest]: string) => `${firstChar.toUpperCase()}${rest.join("")}`

type Modifier = string | Record<string, number | string | boolean>

const toModifiers = (modifier: Modifier): string[] => {
    if (typeof modifier === 'string') {
        return [modifier]
    }
    else {
        return Object.entries(modifier).reduce<string[]>((modifiers, [key, value]) => {
            if (typeof value === 'boolean') {
                modifiers.push(key)
            }
            else {
                modifiers.push([key, value].join("-"))
            }
            return modifiers
        }, [])
    }
}

export const createBem = (block: string, prefix = '') => {
    const base = [prefix, block].filter((item) => !!item)
    const name = base.map((item) => item.split(/[^0-9A-Za-z]/).map(firstCharToUpperCase).join("")).join("")
    function bem(): string[];
    function bem(element: string): string[];
    function bem(modifiers: Modifier | Array<Modifier>): string[];
    function bem(element: string, modifier: string | Modifier | Array<Modifier>): string[];
    function bem(value1?: string | Modifier | Array<Modifier>, value2?: string | Modifier | Array<Modifier>) {
        const classList = [base.join("-")]
        const modifiers: string[] = []
        if (value1) {
            if (Array.isArray(value1)) {
                value1.forEach((modifier) => {
                    modifiers.push(...toModifiers(modifier))
                })
            }
            else if (typeof value1 === 'string') {
                classList.push(value1)
                if (value2) {
                    if (Array.isArray(value2)) {
                        value2.forEach((modifier) => {
                            modifiers.push(...toModifiers(modifier))
                        })
                    }
                    else {
                        modifiers.push(...toModifiers(value2))
                    }
                }
            }
            else {
                modifiers.push(...toModifiers(value1))
            }
        }
        const baseClass = classList.join("__")
        return [
            baseClass,
            ...modifiers.filter((modifier) => !!modifier).map((modifier) => `${baseClass}--${modifier}`),
        ]
    }
    return Object.freeze({
        name,
        bem,
    })
}

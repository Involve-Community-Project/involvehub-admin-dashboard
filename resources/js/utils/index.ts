export const finiteInterval = (
    callback: Function,
    timer: number = 100,
    increment: number = 0,
    maxIterations: number = 1000
) => {
    let iterations: number = 0,
        interval: number | undefined = undefined;

    const runInterval = () => {
        clearInterval(interval);
        if (iterations >= maxIterations) return;
        iterations++;
        callback({ timer, iterations });
        timer += increment;
        interval = setInterval(runInterval, timer) as unknown as number;
    };

    runInterval();
};

export const asyncComponentLoader = (
    importPromise: Promise<any>,
    beforePromise: Promise<any> = new Promise(() => {})
) => {
    const promiseFunction = () => {
        return new Promise((resolve, reject) => {
            beforePromise
                .then(() => {
                    resolve(importPromise);
                })
                .catch((error) => {
                    reject(error);
                });
        }) as Promise<{ default: never }>;
    };

    return promiseFunction;
};

export const asyncComponentTester = (
    importPromise: Promise<any>,
    options: {
        latency?: number;
        mayFail?: boolean;
        alwaysFail?: boolean;
    } = {}
) => {
    const promiseFunction = () => {
        const defaultOptions = {
            latency: 3000,
            mayFail: false,
            alwaysFail: false,
        };

        options = { ...defaultOptions, ...options };

        const { latency = 1000, mayFail = false, alwaysFail = false } = options;

        return new Promise((resolve, reject) => {
            const itFails = alwaysFail || (mayFail && Math.random() > 0.5);

            setTimeout(() => {
                if (itFails) {
                    const error = new Error(
                        'Intentional error from asyncComponentTester.'
                    );
                    error.name = 'AsyncComponentTesterError';

                    reject(error);
                } else {
                    resolve(importPromise);
                }
            }, latency);
        }) as Promise<{ default: never }>;
    };

    return promiseFunction;
};

export const generateSecurePassword = (len: number = 8): string => {
    if (len < 8) {
        len = 8;
    }

    const sets: string[] = [];
    sets.push('ABCDEFGHIJKLMNPQRSTUVWXYZ');
    sets.push('abcdefghijklmnpqrstuvwxyz');
    sets.push('0123456789');
    sets.push('!@#$%^&*');

    let password: string = '';

    // Append a character from each set
    for (const set of sets) {
        password += set[Math.floor(Math.random() * set.length)];
    }

    // Fill up to len using all characters
    while (password.length < len) {
        const randomSet = sets[Math.floor(Math.random() * sets.length)];
        password += randomSet[Math.floor(Math.random() * randomSet.length)];
    }

    return password
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};

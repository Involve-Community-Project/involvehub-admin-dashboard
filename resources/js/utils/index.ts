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

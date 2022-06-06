function solution(n, m) {

    const GCD = (a,b) => {
        if (b === 0 ) return a;
        return GCD(b, a%b);
    }

    const LCD = (a,b) => a*b /GCD(a,b);
    return [GCD(n,m),LCD(n,m)];
}
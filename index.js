function stringBase64Encoding(str) {
    const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    let res = ""
    for (const char of str) {
        // 使用 ES6 将字符串转化为8位二进制格式
        let tmp = char.codePointAt(0).toString(2)
        // 加上去掉的首端零
        while (tmp.length < 8) {
            tmp = "0" + tmp;
        }
        res += tmp;
    }

    let pad = "";
    let i = res.length % 6;

    // 不足三字节
    // 两个字节处理
    if (i === 4) {
        res += "00"
        pad = "="
    } else if (i === 2) {
        // 一个字节处理
        res += "0000"
        pad = "=="
    }

    let x = []

    for (let i = 0; i < res.length / 6; i++) {
        // 补零
        x.push("00" + res.substr(i * 6, 6))
    }

    for (let i = 0; i < x.length; i++) {
        x[i] = base[Number.parseInt(x[i], 2)]
    }
    return x.join('') + pad
}

console.log(base64('jiandan'))
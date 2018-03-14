function stringBase64Encoding(str) {
    const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    let aux = ""
    for (const char of str) {
        // 使用 ES6 将字符串转化为8位二进制格式
        let tmp = char.codePointAt(0).toString(2)
        // 加上去掉的首端零
        while (tmp.length < 8) {
            tmp = "0" + tmp;
        }
        aux += tmp;
    }

    let i = aux.length % 6;
    // 不足三字节，如果等于4则是剩余2个字节
    let pad = i === 4 ? "=" : "==";
    aux += i === 4 ? "00" : "0000";

    let res = ""
    for (let i = 0; i < aux.length / 6; i++) {
        // 补零
        let tmp = "00" + aux.substr(i * 6, 6);
        // 转化为十进制
        let index = Number.parseInt(tmp, 2);
        res += base[index];
    }
    return res + pad;
}

console.log(stringBase64Encoding('jiandan') === Buffer.from('jiandan').toString('base64'))
>所谓Base64，就是说选出64个字符——小写字母a-z、大写字母A-Z、数字0-9、符号"+"、"/"（再加上作为垫字的"="，实际上是65个字符）——作为一个基本字符集。然后，其他所有符号都转换成这个字符集中的字符。ref: ruanyifeng.com

具体实现方式就是将二进制内容每6位进行分组，如果后面组不足6位，那么那么就在其后面先补零使其满足6位，最后在每组之前添加2个零。

每组就可以转化为十进制，这个十进制就是 64 个字符串的位置，然后转化这 64 个字符。

如果看不明白为什么这么做，就继续往下看。

64 个字符，最高位十进制 63 的二进制是 `00111111`，我们要转化为任意的二进制转化字符，那么就需要让每个字节小于等于 `00111111`。

怎么做？那就需要把将每 6 个为一组然后在前面添加 0 即可。

当然也会不足 6 个的，3 字节（24位）当好是 4 组，2 字节（16）位那就需要需要补 2 个零凑成 18 位，那么 1 字节相应的补 4 个零即可。当然补零就需要在最终的结果后加 “=” 来说明，两个字节的补充“=”，1 字节的则补充 “==”。

那么 Base32 也是相同的道理。

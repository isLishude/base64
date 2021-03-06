>所谓Base64，就是说选出64个字符——大写字母 A-Z、小写字母 a-z、数字 0-9、符号"+"、"/"（再加上作为垫字的"="，实际上是65个字符）——作为一个基本字符集。然后，其他所有符号都转换成这个字符集中的字符。ref: ruanyifeng.com

64 个字符，最高位的索引是 63，转化为二进制就是 `00111111`，我们要转化为任意的二进制进行 Base64，那么就需要让每个字节小于等于 `00111111`。

怎么做？那就需要把将每 6 位为一组然后在**组首部**添两个零使其满足小于等于 `00111111`。3 字节（24位）当好是 4 组，当然也会不足 6 个的，2 字节（16）位那就在**组末尾**需要补 2 个零凑成 18 位，那么 1 字节相应的补 4 个零即可。当然补零就需要在最终的结果后加 “=” 来说明，组末尾补两个零的补充“=”，而四个零的则补充 “==”。

每组就可以转化为十进制，这个十进制就是 64 个字符串中的位置，然后将这个位置的字符一个个输出拼接即可。

那么 Base32 也是相同的道理。

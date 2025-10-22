//全局作用域>>块级作用域
{
    let a = 1;
}
{
    let a = 1;
}
{
    var b = 1;
}
{
    var b = 2;
}
console.log( b);
let hd = `
<span>
    houdunren @@@
    hdcms
</span>
`;
//[] :原子表
// let xj = "ab";
// console.log(xj.match(/[#%$^&*@bcjdd]/)); //被包含在中间括号里面的就能匹配

//[\s\S]  [\d\D]
console.log(hd.match(/<span>[\d\D]+<\/span>/)); //匹配所有

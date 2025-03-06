const productContainer = document.querySelector('#productContainer')

const productTemplate = document.querySelector('#productTemplate')
export const showProductContainer = (products) =>{
if(!products){
    return false;
}
products.forEach((curProd) =>{
    const { brand , category , description , id , image , name , price, stock } = curProd;
   

    // importNode(): This  is method of the  document object. it is used to import a node  from another document or  from a <template>  elemtent.
    const productClone =  document.importNode(productTemplate.content,true);

    productClone.querySelector('.productName').textContent = name;
    productContainer.append(productClone);
});
};
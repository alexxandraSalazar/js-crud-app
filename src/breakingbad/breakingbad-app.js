
/**
 * @returns {Promise<Object>} quote information
 */
const fechtQuote = async()  => {
    
        const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
        console.log(res)
        const data = await res.json();
        console.log(data)
        return data;
}



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBad = async(element) =>{
    console.log('hola')
    element.innerHTML = 'Loading...';
    const {quote} = await fechtQuote();
    element.innerHTML = quote ;
}
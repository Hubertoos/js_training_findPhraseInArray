

    const wordsArr = ["pierwszy","drugi","trzeci", "domek", "autostrada", 
    "prestidigitator","coraz","wiecej","nowych",'wyrazów','czacha','dymi','mózg','paruje','szuflandia'];

    const findPhraseInArray = (array, phrase) => {
        return array.reduce((acc, elem, index) => {
            if (elem.includes(phrase)) acc.push([elem, index])
            return acc;
        },[]);
    };
    console.log(findPhraseInArray(wordsArr,'i'))

function solution(array, n) {
    let differ = array[0]
    let differa = Math.abs(n-array[0])

    for (i=0; i< array.length; i++){
        let ndiffer= Math.abs(array[i]-n);
        
        if (ndiffer < differa || (ndiffer == differa && array[i] < differ)){
            differ = array[i];
            differa = ndiffer
        }
    }
    return differ;
}


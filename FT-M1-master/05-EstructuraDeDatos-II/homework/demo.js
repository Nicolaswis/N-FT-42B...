function burbuja(){
    let array =[1, 3, 4, 5, 6, 78 ,2 ,5 ,78 ,9 ,6 ,4 ];
    let aux = null;


    for (let i=0; i < array.length; i++){

        for (let j=0; j<array.length; j++){

            if (array[j] > array[j + 1]){

                aux =array[j]; // aux = 1
                array[j] = array[j + 1];
                array[j + 1] =  aux;
            }
        }
    }

    return (array);
}

console.log(burbuja());
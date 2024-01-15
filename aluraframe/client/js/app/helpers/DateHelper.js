class DateHelper{

    datetoText(data){
        return data.getDate()
        + '/' + (data.getMonth() + 1)
        + '/' + data.getFullYear();
    }

    texttoDate(texto){
        return new Date(...
            texto
            .split('-')
            .map((item, indice) =>{
                if(indice == 1){
                    return item -1;
                }
                return item;
            })
            );
    }
}
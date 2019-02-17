export const CafeTextFilter={
    methods:{
        processCafeTextFilter(cafe,text){
            if(text.length>0){
                if (cafe.name.toLowerCase().match('[^,]*'+text.toLowerCase()+'[,$]*')
                || cafe.location_name.toLowerCase().match('[^,]*' + text.toLowerCase() + '[,$]*')
                || cafe.address.toLowerCase().match('[^,]*' + text.toLowerCase() + '[,$]*')
                || cafe.city.toLowerCase().match('[^,]*' + text.toLowerCase() + '[,$]*')
                ){
                    return true;
                }else{
                    return false;
                }
            }else{
                return true;
            }
        }
    }
}
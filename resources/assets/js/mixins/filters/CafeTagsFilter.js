export const CafeTagsFilter={
    methods:{
        processCafeTagsFilter(cafe,tags){
            if(tags.length>0){
                var cafeTags=[];

                for(var i=0; i<cafe.tags.length; i++){
                    cafeTags.push(cafe.tags[i].tag);
                }

                for (var i=0; i < tags.length; i++){
                    if(cafeTags.indexOf(tags[i])>-1){
                        return true;
                    }
                }
                return false;
            }else{
                return true;
            }
        }
    }
}